import React from 'react';
import { PORTFOLIO } from '../../data/portfolio';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="page footer-inner">
        <h2 className="big">
          Let's build something.<br />
          <a href={'mailto:' + PORTFOLIO.email}>{PORTFOLIO.email} ↗</a>
        </h2>
        <div className="meta">
          © {new Date().getFullYear()} Austyn Whaley<br />
          Bellevue, KY<br />
          v3 · Updated Mar 2026<br />
          <a href={PORTFOLIO.links.github} style={{ color: 'var(--ink-soft)' }}>GitHub</a> ·
          <a href={PORTFOLIO.links.linkedin} style={{ color: 'var(--ink-soft)' }}> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
