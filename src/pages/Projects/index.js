import React, { useState, useMemo } from 'react';
import { PORTFOLIO } from '../../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const cats = useMemo(() => {
    const s = new Set(['All']);
    PORTFOLIO.projects.forEach((p) => s.add(p.category));
    return Array.from(s);
  }, []);

  const list = PORTFOLIO.projects.filter((p) => filter === 'All' || p.category === filter);

  return (
    <div className="page page-fade projects-page" data-screen-label="work">
      <div className="resume-head">
        <h1>Work.</h1>
        <div className="meta">
          {PORTFOLIO.projects.length.toString().padStart(2, '0')} projects<br />
          2021 — Present
        </div>
      </div>

      <div className="projects-filter">
        {cats.map((c) => (
          <button
            key={c}
            className={'filter-chip ' + (filter === c ? 'is-active' : '')}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {list.map((p) => (
          <div key={p.id} className="projects-row">
            <div className="year">{p.year}</div>
            <div>
              <h3 className="ptitle">{p.title}</h3>
              <div className="pcat">{p.category} · {p.role} · {p.where}</div>
            </div>
            <div>
              <p className="pblurb">{p.blurb}</p>
              <div className="pstack">
                {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
            <div className="plinks">
              {p.links.length ? p.links.map((l) => (
                <a key={l.href} className="plink" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <span>↗</span>
                </a>
              )) : <span className="plink" style={{ opacity: 0.5 }}>— private —</span>}
            </div>
            {p.image && (
              <div className="preview">
                <img src={p.image} alt="" className={p.imageFit === 'contain' ? 'contain' : ''} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
