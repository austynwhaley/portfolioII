import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../../data/portfolio';
import Chatbot from '../../components/Chatbot/Chatbot';

function TypingRole() {
  const roles = PORTFOLIO.rotators;
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');
  const finalIdx = roles.length - 1;
  const locked = idx === finalIdx && phase === 'done';

  useEffect(() => {
    if (locked) return;
    const current = roles[idx];
    let t;
    if (phase === 'typing') {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 48);
      } else {
        if (idx === finalIdx) {
          t = setTimeout(() => setPhase('done'), 200);
        } else {
          t = setTimeout(() => setPhase('deleting'), 1100);
        }
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 26);
      } else {
        setIdx((i) => i + 1);
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, locked, roles, finalIdx]);

  return (
    <span className={'role ' + (!locked ? 'rotating' : '')}>
      {locked ? roles[finalIdx] : text || '\u00a0'}
    </span>
  );
}

function Hero() {
  return (
    <section className="hero" data-screen-label="01 hero">
      <div className="hero-meta">
        <span>Austyn Whaley</span>
        <span>Full-Stack Engineer</span>
        <span>Bellevue, KY</span>
        <span>Est. 2020</span>
      </div>
      <h1 className="hero-line">
        Hello world, I'm Austyn<span className="quiet">—and I am</span><br />
        <TypingRole />.
      </h1>
      <p className="hero-sub">
        {PORTFOLIO.tagline} Currently building AWS-native software at GE Aerospace,
        moonlighting on two Unity games, and always looking for the next interesting problem.
      </p>
      <div className="hero-ctas">
        <Link className="btn btn-primary" to="/projects/">
          See the work <span className="arrow">→</span>
        </Link>
        <Link className="btn btn-ghost" to="/resume/">
          Résumé
        </Link>
        <a className="btn btn-ghost" href={'mailto:' + PORTFOLIO.email}>
          Get in touch
        </a>
      </div>
    </section>
  );
}

function HomeSummary() {
  return (
    <section className="home-summary" data-screen-label="02 now">
      <div>
        <div className="eyebrow"><span className="num">01</span>What I'm up to</div>
        <h2 className="section-title">Shipping at GE.<br />Building games at night.</h2>
      </div>
      <ul className="now-list">
        {PORTFOLIO.focus.map((f, i) => <li key={i}>{f}</li>)}
        <li>Two Unity games in active development — Turk &amp; Wrinkle Warfare.</li>
        <li>Open to senior full-stack opportunities where I can own things end-to-end.</li>
      </ul>
    </section>
  );
}

function ProjectMedia({ p }) {
  if (p.kind === 'sketchfab') {
    return (
      <div className="media">
        <iframe title={p.title} src={p.sketchfab} allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>
    );
  }
  return (
    <div className="media" style={p.imageBg ? { background: p.imageBg } : null}>
      {p.image && (
        <img src={p.image} alt={p.title} className={p.imageFit === 'contain' ? 'contain' : 'cover'} />
      )}
    </div>
  );
}

function ProjectCard({ p, className }) {
  return (
    <a
      className={'proj-card ' + (className || '')}
      href={p.links[0]?.href || '#'}
      target={p.links[0] ? '_blank' : undefined}
      rel="noreferrer"
    >
      <ProjectMedia p={p} />
      <div className="body">
        <div className="cat">{p.category} · {p.year}</div>
        <h3 className="title">{p.title}</h3>
        <p className="blurb">{p.blurb}</p>
        <div className="stack">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </a>
  );
}

function Featured() {
  const featured = PORTFOLIO.projects.filter((p) => p.featured).slice(0, 4);
  const extra = PORTFOLIO.projects.find((p) => !p.featured && p.image);
  while (featured.length < 4 && extra) featured.push(extra);

  return (
    <section className="featured" data-screen-label="03 featured">
      <div className="featured-head">
        <div>
          <div className="eyebrow"><span className="num">03</span>Featured</div>
          <h2 className="section-title">Selected work,<br />across the stack.</h2>
        </div>
        <Link className="btn btn-ghost" to="/projects/">
          All projects <span className="arrow">→</span>
        </Link>
      </div>
      <div className="featured-grid">
        <ProjectCard p={featured[0]} className="card-1" />
        <ProjectCard p={featured[1]} className="card-2" />
        <ProjectCard p={featured[2]} className="card-3" />
        <ProjectCard p={featured[3]} className="card-4" />
      </div>
    </section>
  );
}

function ChatSection() {
  return (
    <section className="featured" data-screen-label="04 chat" style={{ paddingTop: 24 }}>
      <div className="featured-head">
        <div>
          <div className="eyebrow"><span className="num">02</span>Ask me anything</div>
          <h2 className="section-title">Talk to AI Austyn.</h2>
        </div>
      </div>
      <div style={{ maxWidth: 720 }}>
        <Chatbot />
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <HomeSummary />
      <ChatSection />
      <Featured />
    </div>
  );
};

export default Home;
