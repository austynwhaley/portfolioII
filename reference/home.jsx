/* global React, PORTFOLIO */
const { useState, useEffect, useRef, useMemo } = React;

// ---------- Nav ----------
function Nav({ page, setPage }) {
  const pages = ["home", "work", "about", "resume"];
  return (
    <nav className="nav" data-screen-label="nav">
      <div className="nav-inner">
        <span className="brand" onClick={() => setPage("home")}>
          <span className="dot" />
          A|W
        </span>
        <div className="nav-links">
          {pages.map((p) => (
            <button
              key={p}
              className={"nav-link " + (page === p ? "is-active" : "")}
              onClick={() => setPage(p)}
            >
              {p === "work" ? "Work" : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <div className="nav-meta">
          <span className="dot-live" />
          Open to work · {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </div>
      </div>
    </nav>
  );
}

// ---------- Home / Hero ----------
function TypingRole() {
  const roles = PORTFOLIO.rotators;
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing, pausing, deleting
  const finalIdx = roles.length - 1;
  const locked = idx === finalIdx && phase === "done";

  useEffect(() => {
    if (locked) return;
    const current = roles[idx];
    let t;
    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 48);
      } else {
        if (idx === finalIdx) {
          t = setTimeout(() => setPhase("done"), 200);
        } else {
          t = setTimeout(() => setPhase("deleting"), 1100);
        }
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 26);
      } else {
        setIdx((i) => i + 1);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, locked, roles, finalIdx]);

  return (
    <span className={"role " + (!locked ? "rotating" : "")}>
      {locked ? roles[finalIdx] : text || "\u00a0"}
    </span>
  );
}

function Hero({ setPage }) {
  return (
    <section className="hero" data-screen-label="01 hero">
      <div className="hero-meta">
        <span>Austyn Whaley</span>
        <span>Full-Stack Engineer</span>
        <span>Bellevue, KY</span>
        <span>Est. 2020</span>
      </div>
      <h1 className="hero-line">
        Hello world, I'm Austyn<span className="quiet">—and I am</span><br/>
        <TypingRole/>.
      </h1>
      <p className="hero-sub">
        {PORTFOLIO.tagline} Currently building AWS-native software at GE Aerospace,
        moonlighting on two Unity games, and always looking for the next interesting problem.
      </p>
      <div className="hero-ctas">
        <button className="btn btn-primary" onClick={() => setPage("work")}>
          See the work <span className="arrow">→</span>
        </button>
        <button className="btn btn-ghost" onClick={() => setPage("resume")}>
          Résumé
        </button>
        <a className="btn btn-ghost" href={`mailto:${PORTFOLIO.email}`}>
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
        <h2 className="section-title">Shipping at GE.<br/>Building games at night.</h2>
      </div>
      <ul className="now-list">
        {PORTFOLIO.focus.map((f, i) => <li key={i}>{f}</li>)}
        <li>Two Unity games in active development — Turk &amp; Wrinkle Warfare.</li>
        <li>Open to senior full-stack opportunities where I can own things end-to-end.</li>
      </ul>
    </section>
  );
}

// ---------- Project card ----------
function ProjectMedia({ p }) {
  if (p.kind === "sketchfab") {
    return (
      <div className="media">
        <iframe title={p.title} src={p.sketchfab} allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>
    );
  }
  return (
    <div className="media" style={p.imageBg ? { background: p.imageBg } : null}>
      <img src={p.image} alt={p.title} className={p.imageFit === "contain" ? "contain" : "cover"} />
    </div>
  );
}

function ProjectCard({ p, className }) {
  return (
    <a className={"proj-card " + (className || "")} href={p.links[0]?.href || "#"} target={p.links[0] ? "_blank" : undefined} rel="noreferrer">
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

function Featured({ setPage }) {
  const featured = PORTFOLIO.projects.filter((p) => p.featured).slice(0, 4);
  // ensure 4 items for the 4-3-3-2 layout
  const extra = PORTFOLIO.projects.find((p) => !p.featured && p.image);
  while (featured.length < 4 && extra) featured.push(extra);

  return (
    <section className="featured" data-screen-label="03 featured">
      <div className="featured-head">
        <div>
          <div className="eyebrow"><span className="num">03</span>Featured</div>
          <h2 className="section-title">Selected work,<br/>across the stack.</h2>
        </div>
        <button className="btn btn-ghost" onClick={() => setPage("work")}>
          All projects <span className="arrow">→</span>
        </button>
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

// ---------- Chat (AI Austyn) ----------
const SUGGESTED_QUESTIONS = [
  "What's your tech stack?",
  "Tell me about your background",
  "What projects have you worked on?",
  "How did you get into coding?",
  "Are you open to opportunities?",
];

const CANNED = {
  "What's your tech stack?": "Daily driver: TypeScript, React, Node, PostgreSQL, AWS. Solid experience in .NET/C#, React Native, and Unity. Real AWS architecture work, not just deployment. Lately getting into AI/ML integration.",
  "Tell me about your background": "Full-stack dev in Northern Kentucky. Five years as a woodworker restoring antique furniture before I committed to CS — enrolled in Ohio State's Full-Stack bootcamp in 2020 and it clicked immediately. GE Aerospace, Fischer Homes, plus a rotating cast of personal projects.",
  "What projects have you worked on?": "At GE Aerospace I built an internal AWS application from scratch — owned the architecture. Before that, a CRM and a React Native app at Fischer Homes. On the side: two Unity games — Turk (solo indie, a turtle dropped into different genres) and Wrinkle Warfare (multiplayer, co-developing with a friend in Denmark). I stream the game dev on Twitch.",
  "How did you get into coding?": "Wasn't confident out of high school, so I spent five years doing woodworking. Not a wasted detour — it taught me craftsmanship that I still bring to code. In 2020 I enrolled in OSU's bootcamp. Best decision I've made.",
  "Are you open to opportunities?": "Actively looking. Strong TypeScript, React, Node, AWS — I do best in roles where I can own things end-to-end rather than just push tickets. LinkedIn or GitHub is the best way to reach me.",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm AI Austyn — theoretically better than the real Austyn. Ask about my background, skills, or projects. (Don't burn all my tokens!)" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSug, setShowSug] = useState(true);
  const [tokens, setTokens] = useState(0);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, typing]);

  const send = async (text) => {
    if (!text.trim() || typing) return;
    setShowSug(false);
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    if (CANNED[text]) {
      setTyping(true);
      setTimeout(() => {
        setMessages((m) => [...m, { role: "assistant", content: CANNED[text] }]);
        setTyping(false);
      }, 400);
      return;
    }
    // Use Claude in HTML to answer with Austyn's voice/context.
    setTyping(true);
    try {
      const sys = `You are AI Austyn, answering as Austyn Whaley in first person. Be conversational, warm, concise (2-4 sentences). Here's his bio and work:
${PORTFOLIO.bio.join(" ")}
Current job: GE Aerospace Software Engineer (Apr 2025 – Present). Prior: Treplacon (Unity), Fischer Homes (TypeScript/React/Vue), LiveShopper Sassie (PHP/SQL). Stack: TS, React, Node, PostgreSQL, AWS. Side projects: Dark Division (Unity), Turk (ZBrush+Unreal), AMRBETZ (Python+Tweepy). Open to new opportunities.`;
      const reply = await window.claude.complete({
        messages: [
          { role: "user", content: `${sys}\n\nUser asked: ${text}` },
        ],
      });
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setTokens((t) => t + Math.ceil((text.length + reply.length) / 4));
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Hmm, AI-me is offline. Hit up the real Austyn at mail@austynwhaley.com." }]);
    }
    setTyping(false);
  };

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="who">
          <div className="avatar">AW</div>
          <div>
            <div className="name">Chat with AI Austyn</div>
            <div className="status">● ONLINE</div>
          </div>
        </div>
        <div className="tokens">
          <strong>{tokens.toLocaleString()}</strong> / 3,000<br/>tokens
        </div>
      </div>
      <div className="chat-log" ref={logRef}>
        {messages.map((m, i) => (
          <div key={i} className={"chat-msg " + m.role}>
            {m.role === "assistant" && <div className="mini-avatar" style={{ "--avatar": "url(assets/headshot.png)" }} />}
            <div className="bubble">{m.content}</div>
          </div>
        ))}
        {typing && (
          <div className="chat-msg assistant">
            <div className="mini-avatar" style={{ "--avatar": "url(assets/headshot.png)" }} />
            <div className="bubble typing"><span/><span/><span/></div>
          </div>
        )}
      </div>
      {showSug && (
        <div className="chat-suggestions">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button key={q} className="chat-suggestion" onClick={() => send(q)}>{q}</button>
          ))}
        </div>
      )}
      <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything…"
          disabled={typing}
        />
        <button type="submit" disabled={!input.trim() || typing}>Send</button>
      </form>
    </div>
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

Object.assign(window, { Nav, Hero, HomeSummary, Featured, ProjectCard, Chatbot, ChatSection });
