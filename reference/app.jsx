/* global React, ReactDOM, Nav, Hero, HomeSummary, Featured, ChatSection, WorkPage, AboutPage, ResumePage, Footer */
const { useState: useS, useEffect: useE } = React;

const THEME_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff7a1a",
  "heroStyle": "editorial",
  "headlineFont": "serif",
  "theme": "dark",
  "density": "comfortable"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = {
  "#ff7a1a": "Orange (default)",
  "#e8b04a": "Amber",
  "#d94a2a": "Vermillion",
  "#7ab0ff": "Sky",
  "#9d8cf0": "Iris",
  "#f1ece3": "Bone",
};

function App() {
  const [page, setPage] = useS(() => localStorage.getItem("aw-page") || "home");
  const [tweaks, setTweaks] = useS(THEME_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useS(false);

  useE(() => { localStorage.setItem("aw-page", page); window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  // Apply tweaks as CSS variables
  useE(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", tweaks.accent);
    r.style.setProperty("--accent-ink", tweaks.accent === "#f1ece3" ? "#14110e" : "#1a0f05");
    if (tweaks.headlineFont === "sans") {
      r.style.setProperty("--font-display", '"Inter", -apple-system, sans-serif');
    } else if (tweaks.headlineFont === "mono") {
      r.style.setProperty("--font-display", '"JetBrains Mono", monospace');
    } else {
      r.style.setProperty("--font-display", '"Instrument Serif", Georgia, serif');
    }
    document.body.classList.toggle("theme-paper", tweaks.theme === "light");
  }, [tweaks]);

  // Edit-mode listener
  useE(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksOpen(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {page === "home" && (
        <>
          <div className="page page-fade"><Hero setPage={setPage} /></div>
          <div className="page"><HomeSummary /></div>
          <div className="page"><ChatSection /></div>
          <div className="page"><Featured setPage={setPage} /></div>
        </>
      )}
      {page === "work" && <WorkPage />}
      {page === "about" && <AboutPage />}
      {page === "resume" && <ResumePage />}
      <Footer />

      {/* Tweaks */}
      <div className={"tweaks-panel " + (tweaksOpen ? "is-open" : "")}>
        <div className="tweaks-head">
          <h4>Tweaks</h4>
          <button className="tweak-opt" onClick={() => setTweaksOpen(false)}>×</button>
        </div>

        <div className="tweaks-row">
          <div className="lbl">Accent</div>
          <div className="swatches">
            {Object.entries(ACCENT_OPTIONS).map(([hex, label]) => (
              <div
                key={hex}
                title={label}
                className={"swatch " + (tweaks.accent === hex ? "is-active" : "")}
                style={{ background: hex }}
                onClick={() => setTweak("accent", hex)}
              />
            ))}
          </div>
        </div>

        <div className="tweaks-row">
          <div className="lbl">Headline font</div>
          <div className="opts">
            {["serif", "sans", "mono"].map((f) => (
              <button key={f} className={"tweak-opt " + (tweaks.headlineFont === f ? "is-active" : "")} onClick={() => setTweak("headlineFont", f)}>{f}</button>
            ))}
          </div>
        </div>

        <div className="tweaks-row">
          <div className="lbl">Theme</div>
          <div className="opts">
            {["dark", "light"].map((t) => (
              <button key={t} className={"tweak-opt " + (tweaks.theme === t ? "is-active" : "")} onClick={() => setTweak("theme", t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className="tweaks-row" style={{ marginBottom: 0 }}>
          <div className="lbl" style={{ color: "var(--ink-muted)" }}>
            Toggle this panel with the Tweaks button in the toolbar above.
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
