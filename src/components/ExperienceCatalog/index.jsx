import React, {useMemo} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {FiArrowRight, FiExternalLink, FiBookOpen} from 'react-icons/fi';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import {useUiText} from '@site/src/i18n/useUiText';
import {PAGE_SIZE, readFilters, filterSearch, filterEntries} from './model.cjs';
import styles from './styles.module.css';

export default function ExperienceCatalog({catalog}) {
  const t = useUiText('blogPage');
  const experienceText = useUiText('experienceSubmission');
  const location = useLocation();
  const history = useHistory();
  const isBrowser = useIsBrowser();
  const search = isBrowser ? location.search : '';
  const filters = readFilters(search, catalog);
  const results = useMemo(() => filterEntries(catalog, filters), [catalog, search]);
  const schools = new Map(catalog.schools.map((school) => [school.id, school]));
  const programs = new Map(catalog.programs.map((program) => [program.id, program]));
  const scopeName = (scope) => scope.level === 'school' ? t.unspecifiedDepartment : scope.level === 'department' ? t.unspecifiedProgram : scope.name;
  const selectedSchool = schools.get(filters.school);
  const selectedProgram = programs.get(filters.program);
  const schoolPrograms = catalog.programs.filter((program) => program.school === filters.school);
  const departments = [...new Set(schoolPrograms.map((program) => program.department))];
  const count = (query) => filterEntries(catalog, {q: '', ...query}).length;
  const years = [...new Set(catalog.entries.flatMap((entry) => entry.placements
    .filter((placement) => (!filters.school || programs.get(placement.scope).school === filters.school)
      && (!filters.program || placement.scope === filters.program))
    .map((placement) => placement.year).filter(Boolean)))].sort((a, b) => b - a);
  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(filters.page, pages);
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const update = (patch, replace = false) => {
    const search = filterSearch({...filters, page: 1, ...patch});
    history[replace ? 'replace' : 'push']({...location, search, hash: ''});
  };
  const reset = () => history.push({...location, search: '', hash: ''});
  const schoolLink = (school) => filterSearch({...filters, school, program: '', year: '', page: 1});
  const programLink = (program) => filterSearch({...filters, program, year: '', page: 1});

  return (
    <Layout title={t.title} description={t.subtitle}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className={`col col--10 col--offset-1 ${styles.page}`}>
            <header className={styles.hero}>
              <span>Community Stories</span>
              <h1>{t.title}</h1>
              <p>{t.subtitle}</p>
            </header>

            <div className={styles.overview}>
              <div className={styles.stats} aria-label={t.overview}>
                <div><strong>{catalog.schools.length}</strong><span>{t.schools}</span></div>
                <div><strong>{catalog.programs.filter((scope) => scope.level === 'program').length}</strong><span>{t.programs}</span></div>
                <div><strong>{catalog.entries.length}</strong><span>{t.stories}</span></div>
              </div>
              <Link className={styles.submitLink} to={`/submit-experience${filters.program || filters.school ? `?scope=${encodeURIComponent(filters.program || filters.school)}` : ''}`}>
                {experienceText.title}<FiArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.workspace}>
              <aside className={styles.sidebar}>
                <nav className={styles.schools} aria-label={t.chooseSchool}>
                  <h2 className={styles.navigationTitle}>{t.chooseSchool}</h2>
                  <Link to={location.pathname + schoolLink('')} className={`${styles.school} ${!filters.school ? styles.active : ''}`} aria-current={!filters.school ? 'true' : undefined}>
                    <span>{t.allSchools}</span><span className={styles.schoolCount}>{catalog.entries.length}</span>
                  </Link>
                  {catalog.schools.map((school) => (
                    <Link key={school.id} to={location.pathname + schoolLink(school.id)} className={`${styles.school} ${filters.school === school.id ? styles.active : ''}`} aria-current={filters.school === school.id ? 'true' : undefined}>
                      <span>{school.name}</span><span className={styles.schoolCount}>{count({school: school.id})}</span>
                    </Link>
                  ))}
                </nav>
                <label className={`${styles.selectField} ${styles.mobileSchool}`}>
                  <span>{t.chooseSchool}</span>
                  <select value={filters.school} onChange={(event) => history.push({...location, search: schoolLink(event.target.value), hash: ''})}>
                    <option value="">{t.allSchools}</option>
                    {catalog.schools.map((school) => <option key={school.id} value={school.id}>{school.name}</option>)}
                  </select>
                </label>
              </aside>

              <section className={styles.results} aria-labelledby="experience-results-heading">
                <div className={styles.resultsHeading}>
                  <div>
                    {selectedProgram && <p>{selectedProgram.department}</p>}
                    <h2 id="experience-results-heading">{selectedProgram ? scopeName(selectedProgram) : selectedSchool?.name || t.allStories}</h2>
                  </div>
                  <span role="status" aria-live="polite" aria-atomic="true">{t.postsUnit(results.length)}</span>
                </div>
                {selectedSchool && (
                  <label className={`${styles.selectField} ${styles.programField}`}>
                    <span>{t.chooseProgram}</span>
                    <select value={filters.program} onChange={(event) => history.push({...location, search: programLink(event.target.value), hash: ''})}>
                      <option value="">{t.allPrograms}</option>
                      {departments.map((department) => (
                        <optgroup key={department} label={department || t.unspecifiedDepartment}>
                          {schoolPrograms.filter((program) => program.department === department).map((program) => (
                            <option key={program.id} value={program.id}>{scopeName(program)} · {t.postsUnit(count({program: program.id}))}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </label>
                )}
                <div className={styles.filters}>
                  <div className={styles.searchField}>
                    <label htmlFor="experience-query">{t.filterLabel}</label>
                    <BrowseSearchField id="experience-query" value={filters.q} onChange={(q) => update({q}, true)} label={t.filterLabel} placeholder={t.filterPlaceholder} resultsId="experience-results" />
                  </div>
                  <label className={styles.selectField}><span>{t.yearLabel}</span><select value={filters.year} onChange={(event) => update({year: event.target.value})}>
                    <option value="">{t.allYears}</option>
                    {filters.year && !years.includes(Number(filters.year)) && <option value={filters.year}>{filters.year}</option>}
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select></label>
                  <label className={styles.selectField}><span>{t.source}</span><select value={filters.kind} onChange={(event) => update({kind: event.target.value})}>
                    <option value="">{t.allSources}</option>
                    <option value="internal">{t.internal}</option>
                    <option value="external">{t.external}</option>
                  </select></label>
                </div>
                <p className={styles.sortNote}>{t.sortNote}</p>
                <ul className={styles.list} id="experience-results" role="list">
                  {visible.map(({entry, placements}) => (
                    <li key={entry.url} className={styles.card}>
                      <div className={styles.cardMeta}>
                        <span className={entry.kind === 'internal' ? styles.internal : ''}>
                          {entry.kind === 'internal' ? <FiBookOpen aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}
                          {entry.kind === 'internal' ? t.internal : entry.source}
                        </span>
                        {entry.authors?.length > 0 && <span>{entry.authors.join(' · ')}</span>}
                      </div>
                      <h3>
                        {entry.kind === 'external'
                          ? <a href={entry.url}>{entry.title}</a>
                          : <Link to={entry.url}>{entry.title}<FiArrowRight aria-hidden="true" /></Link>}
                      </h3>
                      <div className={styles.placements}>
                        {placements.map((placement) => {
                          const program = programs.get(placement.scope);
                          return (
                            <div key={`${placement.scope}/${placement.year}/${placement.examYear}/${placement.season}`}>
                              <Link to={location.pathname + filterSearch({school: program.school, program: program.id})}>
                                {!selectedSchool && `${schools.get(program.school).name} · `}{program.level === 'department' ? `${program.department} · ${t.unspecifiedProgram}` : scopeName(program)}
                              </Link>
                              <span>
                                {placement.yearSource === 'publication' ? t.publishedYear(placement.year) : placement.year ? t.admissionYear(placement.year) : t.yearUnknown}
                                {placement.examYear ? ` · ${placement.season ? `${placement.examYear} ${t[placement.season]}` : t.examYear(placement.examYear)}` : placement.season ? ` · ${t[placement.season]}` : ''}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </li>
                  ))}
                </ul>
                {!results.length && <BrowseEmptyState message={t.noResults} onReset={reset} resetLabel={t.reset} focusTargetId="experience-query" />}
                {pages > 1 && (
                  <nav className={styles.pagination} aria-label={t.pagination}>
                    <button type="button" disabled={page === 1} onClick={() => update({page: page - 1})}>{t.previous}</button>
                    <span>{t.pageLabel(page, pages)}</span>
                    <button type="button" disabled={page === pages} onClick={() => {
                      update({page: page + 1});
                      document.getElementById('experience-results-heading')?.scrollIntoView({block: 'start'});
                    }}>{t.next}</button>
                  </nav>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
