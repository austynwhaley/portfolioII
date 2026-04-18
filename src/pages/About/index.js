import React from 'react';
import { PORTFOLIO } from '../../data/portfolio';

const About = () => {
  return (
    <div className="page page-fade about-page" data-screen-label="about">
      <div className="about-copy">
        <div className="eyebrow"><span className="num">01</span>About</div>
        <h2 className="section-title">From sawdust to source.</h2>
        <p>I'm <strong>Austyn Whaley</strong>, a full-stack engineer in <span className="hl">Bellevue, KY</span>, just across the river from Cincinnati. I'm {PORTFOLIO.age}.</p>
        <p>I went straight into work after graduating Bellevue High in 2012 — at 18 I wasn't sure what I wanted to build a career on, and didn't want debt chasing a guess. A family-run shop hired me and I spent five years as a <span className="hl">woodworker</span>, restoring antique furniture.</p>
        <p>I'd always been pulled toward computer science but never had the confidence or guidance to commit. In 2020 I finally enrolled in <strong>Ohio State's Full-Stack Engineering bootcamp</strong>. Career started there.</p>
        <p>Interests run wide: MERN / MEVN / MEAN web stacks, AI and Web3, ML, and game development in Unreal and Unity. Hard-working, dedicated, always looking for the next thing to build.</p>
        <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic' }}>Thanks for reading.</p>

        <div style={{ marginTop: 40 }}>
          <div className="eyebrow"><span className="num">02</span>Elsewhere</div>
          <div className="socials" style={{ marginTop: 14 }}>
            <a className="social" href={PORTFOLIO.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="social" href={PORTFOLIO.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="social" href={PORTFOLIO.links.twitter} target="_blank" rel="noreferrer">Twitter ↗</a>
            <a className="social" href={PORTFOLIO.links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </div>

      <aside className="about-side">
        <div className="about-headshot">
          <img src="/assets/headshot.png" alt="Austyn Whaley" />
          <div className="caption">Iceland · '24</div>
        </div>
        <div className="fact-grid">
          <div><div className="k">Based</div><div className="v">Bellevue, KY</div></div>
          <div><div className="k">Currently</div><div className="v">GE Aerospace</div></div>
          <div><div className="k">Stack</div><div className="v">TS · React · AWS</div></div>
          <div><div className="k">Nights</div><div className="v">Unity / Unreal</div></div>
          <div><div className="k">Age</div><div className="v">{PORTFOLIO.age}</div></div>
          <div><div className="k">Status</div><div className="v" style={{ color: 'var(--good)' }}>● Open</div></div>
        </div>
      </aside>
    </div>
  );
};

export default About;
