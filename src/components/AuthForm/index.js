import React from 'react';
import {FaCheck, FaExclamationTriangle} from 'react-icons/fa';
import {normalizeLanguage, useCurrentLanguage} from '@site/src/context/LanguageContext';
import {useUiText} from '@site/src/i18n/useUiText';
import {validatePassword} from '@site/src/services/authSecurity';
import styles from './styles.module.css';

export function AuthCard({icon: Icon, title, subtitle, children}) {
  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <header className={styles.cardHeader}>
          <Icon className={styles.cardIcon} aria-hidden="true" />
          <h1 className={styles.cardTitle}>{title}</h1>
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        </header>
        <div className={styles.cardBody}>{children}</div>
      </section>
    </main>
  );
}

export function AuthMessage({text, isError = false, announce = true}) {
  if (!text) return null;
  const Icon = isError ? FaExclamationTriangle : FaCheck;
  return (
    <div
      className={`${styles.message} ${isError ? styles.messageError : styles.messageSuccess}`}
      role={announce ? (isError ? 'alert' : 'status') : undefined}
    >
      <Icon className={styles.messageIcon} aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

export function AuthField({id, label, icon: Icon, children, ...inputProps}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.inputLabel}>
        {Icon && <Icon className={styles.inputIcon} aria-hidden="true" />}
        {label}
      </label>
      <input id={id} name={id} className={styles.input} {...inputProps} />
      {children}
    </div>
  );
}

// Use the same validator as submission, so requirements cannot drift between pages.
export function AuthPasswordRequirements({id, password}) {
  const language = useCurrentLanguage();
  const labels = useUiText('passwordErrors');
  const {errors} = validatePassword(password, normalizeLanguage(language));
  return (
    <ul id={id} className={styles.passwordRules}>
      {['minLength', 'lowercase', 'uppercase', 'digit'].map((key) => {
        const passed = !errors.includes(labels[key]);
        return (
          <li key={key} className={passed ? styles.passwordRulePassed : undefined}>
            {passed ? <FaCheck aria-hidden="true" /> : <span className={styles.rulePending} aria-hidden="true" />}
            <span>{labels[key]}</span>
          </li>
        );
      })}
    </ul>
  );
}
