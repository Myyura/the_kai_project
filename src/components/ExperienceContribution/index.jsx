import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useAuth} from '@site/src/hooks/useAuth';
import {usePublicProfile} from '@site/src/hooks/usePublicProfile';
import {useUiText} from '@site/src/i18n/useUiText';
import {universities} from '@site/src/data/universities';
import {catalogScopes} from '@site/src/data/universityCatalog.cjs';
import {getSupabaseClient} from '@site/src/services/supabaseClient';
import {getVerifiedAccessToken} from '@site/src/services/authService';
import {saveAuthReturnIntent, consumeAuthReturnIntent} from '@site/src/services/authReturn';
import {getEdgeFunctionErrorMessage} from '@site/src/services/edgeFunctionErrors';
import {markdownToHtml, renderMathInContainer} from '@site/src/components/NoteEditor/markdownRenderer';
import {normalizeExperienceRequest} from '@site/supabase/functions/content-submissions/experience.ts';
import styles from './styles.module.css';

const scopes = catalogScopes(universities);
const emptyAttempt = () => ({school: '', department: '', program: '', admissionYear: '', examYear: '', season: ''});

export default function ExperienceContribution() {
  const t = useUiText('experienceSubmission');
  const location = useLocation();
  const {isConfigured, isLoggedIn, authReady} = useAuth();
  const {profile} = usePublicProfile();
  const [kind, setKind] = useState('external');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [notes, setNotes] = useState('');
  const [attempts, setAttempts] = useState([emptyAttempt()]);
  const [consent, setConsent] = useState(false);
  const [preview, setPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [issueUrl, setIssueUrl] = useState('');
  const previewRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scope = scopes.get(params.get('scope'));
    if (!scope) return;
    const school = universities.find(u => u.id === scope.school);
    const department = school.departments.find(d => `${school.id}/${d.id}` === scope.departmentId || `${school.id}/${d.id}` === scope.id);
    const program = department?.programs.find(p => `${school.id}/${department.id}/${p.id}` === scope.id);
    setAttempts([{...emptyAttempt(), school: school.id, department: department?.id || '', program: program?.id || ''}]);
  }, [location.search]);

  useEffect(() => {
    if (!preview || !previewRef.current || kind !== 'internal') return;
    previewRef.current.innerHTML = markdownToHtml(markdown);
    void renderMathInContainer(previewRef.current);
  }, [preview, markdown, kind]);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem('kai_experience_login_draft') || 'null');
      sessionStorage.removeItem('kai_experience_login_draft');
      if (!saved || !Number.isFinite(saved.savedAt) || Date.now() - saved.savedAt > 15 * 60 * 1000
          || !['external', 'internal'].includes(saved.kind)
          || !['title', 'url', 'publishedYear', 'markdown', 'notes'].every(key => typeof saved[key] === 'string')
          || !Array.isArray(saved.attempts) || !saved.attempts.length || saved.attempts.length > 20
          || !saved.attempts.every(a => a && Object.keys(emptyAttempt()).every(key => typeof a[key] === 'string'))) return;
      setKind(saved.kind); setTitle(saved.title); setUrl(saved.url); setPublishedYear(saved.publishedYear);
      setMarkdown(saved.markdown); setNotes(saved.notes); setAttempts(saved.attempts);
    } catch { /* Login return still works when browser storage is unavailable. */ }
  }, []);

  useEffect(() => {
    if (isLoggedIn) consumeAuthReturnIntent({intent: 'submit-experience'});
  }, [isLoggedIn]);

  const prepareLogin = () => {
    saveAuthReturnIntent({returnTo: location.pathname + location.search, intent: 'submit-experience'});
    try {
      sessionStorage.setItem('kai_experience_login_draft', JSON.stringify({
        savedAt: Date.now(), kind, title, url, publishedYear, markdown, notes, attempts,
      }));
    } catch { /* Do not prevent sign-in when storage is unavailable. */ }
  };

  const updateAttempt = (index, field, value) => setAttempts(current => current.map((a, i) => i !== index ? a : {
    ...a, [field]: value,
    ...(field === 'school' ? {department: '', program: ''} : field === 'department' ? {program: ''} : {}),
  }));

  const submit = async event => {
    event.preventDefault();
    setError('');
    if (!isConfigured || !isLoggedIn) return setError(t.unavailable);
    if (!profile?.nicknameConfirmed) return setError(t.nickname);
    if (!consent) return setError(t.consentRequired);
    const placements = attempts.map(a => ({
      scope: [a.school, a.department, a.program].filter(Boolean).join('/'),
      ...(a.admissionYear ? {admissionYear: Number(a.admissionYear)} : {}),
      ...(a.examYear ? {examYear: Number(a.examYear)} : {}),
      ...(a.season ? {season: a.season} : {}),
    }));
    const result = normalizeExperienceRequest({kind, title, placements, notes,
      ...(kind === 'external' ? {url, publishedYear: Number(publishedYear)} : {markdown}),
    });
    if ('error' in result) return setError(result.error.code === 'experience_season_required' ? t.seasonRequiredMessage : result.error.message);
    setSubmitting(true);
    try {
      const token = await getVerifiedAccessToken();
      if (!token) throw new Error(t.unavailable);
      const {data, error: requestError} = await getSupabaseClient().functions.invoke('content-submissions', {
        method: 'POST', headers: {Authorization: `Bearer ${token}`},
        body: {submissionType: 'experience', claAccepted: consent, experience: result.data},
      });
      if (requestError) throw new Error(await getEdgeFunctionErrorMessage(requestError, t.failed));
      if (data?.error) throw new Error(data.error.message || t.failed);
      if (!data?.submission?.issueUrl) throw new Error(t.failed);
      setIssueUrl(data.submission.issueUrl);
    } catch (failure) {
      setError(failure.message || t.failed);
    } finally {
      setSubmitting(false);
    }
  };

  return <main className={styles.page}>
    <header className={styles.header}>
      <h1>{t.title}</h1><p>{t.intro}</p>
    </header>
    {issueUrl ? <section className={styles.panel} role="status">
      <h2>{t.success}</h2>
      <a href={issueUrl} target="_blank" rel="noreferrer">{t.viewIssue} ↗</a>
      <p><Link to="/me?tab=contribute">{t.records}</Link></p>
    </section> : <form className={styles.panel} onSubmit={submit}>
      <fieldset disabled={submitting} className={styles.fields}>
        <div className={styles.modes} role="group" aria-label={t.title}>
          {['external', 'internal'].map(value => <button type="button" key={value} className={kind === value ? styles.activeMode : ''} aria-pressed={kind === value}
            onClick={() => {setKind(value); setConsent(false); setError('');}}>{t[value]}</button>)}
        </div>
        <label>{t.titleLabel}<input required maxLength={240} value={title} onChange={e => setTitle(e.target.value)} /></label>
        {kind === 'external' ? <div className={styles.sourceGrid}>
          <label>{t.url}<input required type="url" placeholder="https://…" maxLength={2000} value={url} onChange={e => setUrl(e.target.value)} /></label>
          <label>{t.publishedYear}<input required type="number" min={1900} max={new Date().getFullYear()} value={publishedYear} onChange={e => setPublishedYear(e.target.value)} /><small>{t.publishedHint}</small></label>
        </div> : <section>
          <div className={styles.modes} role="group" aria-label={t.markdown}>
            <button type="button" className={!preview ? styles.activeMode : ''} aria-pressed={!preview} onClick={() => setPreview(false)}>{t.edit}</button>
            <button type="button" className={preview ? styles.activeMode : ''} aria-pressed={preview} onClick={() => setPreview(true)}>{t.preview}</button>
          </div>
          {preview ? <div ref={previewRef} className={`${styles.preview} markdown`} role="region" aria-label={t.preview} />
            : <label>{t.markdown}<textarea required rows={15} maxLength={50000} value={markdown} onChange={e => setMarkdown(e.target.value)} /></label>}
        </section>}
        <section className={styles.classifications} aria-labelledby="experience-placement-heading">
          <div className={styles.sectionHeading}>
            <h2 id="experience-placement-heading">{t.placements}</h2>
            <button type="button" className={styles.addAttempt} disabled={attempts.length >= 20} onClick={() => setAttempts(current => [...current, emptyAttempt()])}>＋ {t.add}</button>
          </div>
          <p className={styles.hint}>{t.scopeHint}</p>
          {attempts.map((a, index) => {
            const school = universities.find(u => u.id === a.school);
            const department = school?.departments.find(d => d.id === a.department);
            return <fieldset className={styles.attempt} key={index}>
              <legend>{t.placement} {index + 1}</legend>
              <div className={styles.grid}>
                <label>{t.university}<select required value={a.school} onChange={e => updateAttempt(index, 'school', e.target.value)}>
                  <option value="">{t.choose}</option>{universities.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select></label>
                <label>{t.department}<select disabled={!school} value={a.department} onChange={e => updateAttempt(index, 'department', e.target.value)}>
                  <option value="">{t.unknown}</option>{school?.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select></label>
                <label>{t.program}<select disabled={!department} value={a.program} onChange={e => updateAttempt(index, 'program', e.target.value)}>
                  <option value="">{t.unknown}</option>{department?.programs.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select></label>
                <label>{t.admissionYear}<input type="number" min={1900} max={2100} value={a.admissionYear} onChange={e => updateAttempt(index, 'admissionYear', e.target.value)} /></label>
                <label>{t.examYear}<input type="number" min={1900} max={2100} value={a.examYear} onChange={e => updateAttempt(index, 'examYear', e.target.value)} /></label>
                <label>{a.examYear ? t.seasonRequired : t.season}<select required={Boolean(a.examYear)} value={a.season} onChange={e => updateAttempt(index, 'season', e.target.value)}>
                  <option value="">{a.examYear ? t.chooseSeason : t.unknown}</option><option value="summer">{t.summer}</option><option value="winter">{t.winter}</option>
                </select>{a.examYear && !a.season && <small>{t.seasonRequiredMessage}</small>}</label>
              </div>
              {attempts.length > 1 && <button type="button" className={styles.remove} onClick={() => setAttempts(current => current.filter((_, i) => i !== index))}>{t.remove} {index + 1}</button>}
            </fieldset>;
          })}
          <p className={styles.hint}>{t.yearHint}</p>
          
        </section>
        <label>{t.notes}<textarea rows={3} maxLength={2000} value={notes} onChange={e => setNotes(e.target.value)} /><small>{t.notesHint}</small></label>
        <label className={styles.consent}><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
          <span>{t.consent} <a href="https://github.com/Myyura/the_kai_project/blob/main/CLA.md" target="_blank" rel="noreferrer">{t.cla}</a>。<small>{kind === 'external' ? t.externalConsent : t.internalConsent}</small></span>
        </label>
        <p className={styles.hint}>{t.publicNotice}</p>
        {profile?.displayName && <p>{t.author}：{profile.displayName}</p>}
        {error && <p role="alert" className={styles.error}>{error}</p>}
        {isLoggedIn && !profile?.nicknameConfirmed && <p><Link to="/me">{t.nickname}</Link></p>}
        <div className={styles.actions}>
          {isLoggedIn ? <button className={styles.primaryButton} type="submit" disabled={submitting || !authReady || !isConfigured}>{submitting ? t.submitting : t.submit}</button>
            : <Link className={styles.primaryButton} to="/login" onClick={prepareLogin}>{t.login}</Link>}
          <div className={styles.footerLinks}><Link to="/me?tab=contribute">{t.records}</Link><Link to="/blog">{t.back}</Link></div>
        </div>
      </fieldset>
    </form>}
  </main>;
}
