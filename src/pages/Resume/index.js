import React from 'react';
import { PORTFOLIO } from '../../data/portfolio';

const Resume = () => {
  return (
    <div className="page page-fade resume-page" data-screen-label="resume">
      <div className="resume-head">
        <h1>Austyn R.<br />Whaley.</h1>
        <div className="meta">
          {PORTFOLIO.location}<br />
          {PORTFOLIO.phone}<br />
          {PORTFOLIO.email}<br />
          <a href="/Resume.pdf" download style={{ color: 'var(--accent)' }}>Download PDF ↓</a>
        </div>
      </div>

      <section className="resume-section">
        <div className="resume-section-head">
          <div className="num">§ 01</div>
          <h2>Summary.</h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '65ch', marginLeft: 'auto', marginRight: 0, paddingLeft: 144 }} className="summary-text">
          {PORTFOLIO.summary}
        </p>
      </section>

      <section className="resume-section">
        <div className="resume-section-head">
          <div className="num">§ 02</div>
          <h2>Experience.</h2>
        </div>
        {PORTFOLIO.jobs.map((job) => (
          <div key={job.company} className="job">
            <div className="dates">
              {job.flag && <span className="flag">● {job.flag}</span>}
              <div>{job.dates}</div>
            </div>
            <div>
              <h3>{job.company}</h3>
              <div className="role-line">{job.role}</div>
              <p className="lead">{job.summary}</p>
              <ul>
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="stack">
                {job.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <div className="resume-section-head">
          <div className="num">§ 03</div>
          <h2>Skills.</h2>
        </div>
        <div className="skills-grid">
          <div className="label">Daily driver</div>
          <div className="skills-tags">
            {PORTFOLIO.skills.primary.map((s) => <span key={s} className="skill-tag primary">{s}</span>)}
          </div>
        </div>
        <div className="skills-grid" style={{ marginTop: 24 }}>
          <div className="label">Experienced with</div>
          <div className="skills-tags">
            {PORTFOLIO.skills.secondary.map((s) => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section-head">
          <div className="num">§ 04</div>
          <h2>Education.</h2>
        </div>
        {PORTFOLIO.education.map((e) => (
          <div key={e.school} className="education-row">
            <div className="dates">{e.date}</div>
            <div>
              <h4>{e.school}</h4>
              <div className="degree">{e.degree}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>
              {e.school.includes('Ohio') ? 'Certificate' : 'Diploma'}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
