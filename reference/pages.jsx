/* global React, PORTFOLIO, ProjectCard */
const { useState: useStateW, useMemo: useMemoW } = React;

// ---------- Work / Projects page ----------
function WorkPage() {
  const [filter, setFilter] = useStateW("All");
  const cats = useMemoW(() => {
    const s = new Set(["All"]);
    PORTFOLIO.projects.forEach((p) => s.add(p.category));
    return Array.from(s);
  }, []);
  const list = PORTFOLIO.projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="page page-fade projects-page" data-screen-label="work">
      <div className="resume-head">
        <h1>Work.</h1>
        <div className="meta">
          {PORTFOLIO.projects.length.toString().padStart(2, "0")} projects<br/>
          2021 — Present
        </div>
      </div>

      <div className="projects-filter">
        {cats.map((c) => (
          <button
            key={c}
            className={"filter-chip " + (filter === c ? "is-active" : "")}
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
              )) : <span className="plink" style={{ opacity: .5 }}>— private —</span>}
            </div>
            {p.image && (
              <div className="preview">
                <img src={p.image} alt="" className={p.imageFit === "contain" ? "contain" : ""} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- About page ----------
function AboutPage() {
  return (
    <div className="page page-fade about-page" data-screen-label="about">
      <div className="about-copy">
        <div className="eyebrow"><span className="num">01</span>About</div>
        <h2 className="section-title">From sawdust to source.</h2>
        <p>I'm <strong>Austyn Whaley</strong>, a full-stack engineer in <span className="hl">Bellevue, KY</span>, just across the river from Cincinnati. I'm {PORTFOLIO.age}.</p>
        <p>I went straight into work after graduating Bellevue High in 2012 — at 18 I wasn't sure what I wanted to build a career on, and didn't want debt chasing a guess. A family-run shop hired me and I spent five years as a <span className="hl">woodworker</span>, restoring antique furniture.</p>
        <p>I'd always been pulled toward computer science but never had the confidence or guidance to commit. In 2020 I finally enrolled in <strong>Ohio State's Full-Stack Engineering bootcamp</strong>. Career started there.</p>
        <p>Interests run wide: MERN / MEVN / MEAN web stacks, AI and Web3, ML, and game development in Unreal and Unity. Hard-working, dedicated, always looking for the next thing to build.</p>
        <p style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>Thanks for reading.</p>

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
          <img src="assets/headshot.png" alt="Austyn Whaley" />
          <div className="caption">Iceland · '24</div>
        </div>
        <div className="fact-grid">
          <div><div className="k">Based</div><div className="v">Bellevue, KY</div></div>
          <div><div className="k">Currently</div><div className="v">GE Aerospace</div></div>
          <div><div className="k">Stack</div><div className="v">TS · React · AWS</div></div>
          <div><div className="k">Nights</div><div className="v">Unity / Unreal</div></div>
          <div><div className="k">Age</div><div className="v">{PORTFOLIO.age}</div></div>
          <div><div className="k">Status</div><div className="v" style={{ color: "var(--good)" }}>● Open</div></div>
        </div>
      </aside>
    </div>
  );
}

// ---------- Resume page ----------
function ResumePage() {
  return (
    <div className="page page-fade resume-page" data-screen-label="resume">
      <div className="resume-head">
        <h1>Austyn R.<br/>Whaley.</h1>
        <div className="meta">
          {PORTFOLIO.location}<br/>
          {PORTFOLIO.phone}<br/>
          {PORTFOLIO.email}<br/>
          <a href="Resume.pdf" download style={{ color: "var(--accent)" }}>Download PDF ↓</a>
        </div>
      </div>

      <section className="resume-section">
        <div className="resume-section-head">
          <div className="num">§ 01</div>
          <h2>Summary.</h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: "65ch", marginLeft: "auto", marginRight: 0, paddingLeft: 144 }} className="summary-text">
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
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: ".14em", textTransform: "uppercase" }}>
              {e.school.includes("Ohio") ? "Certificate" : "Diploma"}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="page footer-inner">
        <h2 className="big">
          Let's build something.<br/>
          <a href={"mailto:" + PORTFOLIO.email}>{PORTFOLIO.email} ↗</a>
        </h2>
        <div className="meta">
          © {new Date().getFullYear()} Austyn Whaley<br/>
          Bellevue, KY<br/>
          v3 · Updated Mar 2026<br/>
          <a href={PORTFOLIO.links.github} style={{ color: "var(--ink-soft)" }}>GitHub</a> ·
          <a href={PORTFOLIO.links.linkedin} style={{ color: "var(--ink-soft)" }}> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { WorkPage, AboutPage, ResumePage, Footer });
