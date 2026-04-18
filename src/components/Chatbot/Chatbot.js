import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO } from '../../data/portfolio';

const SUGGESTED_QUESTIONS = [
  "What's your tech stack?",
  "Tell me about your background",
  "What projects have you worked on?",
  "How did you get into coding?",
  "Are you open to opportunities?",
];

const TOKEN_QUIPS = [
  "hope that was worth it!",
  "cha-ching!",
  "thanks for keeping the lights on",
  "you owe me caffeine",
  "my wallet felt that one",
  "worth every token",
  "im ruined financially but at least you're having fun",
  "the AI overlords thank you",
  "you're keeping Claude employed",
  "money well spent... right?",
  "treat yourself, I guess",
  "beep boop that cost money",
];

const CANNED = {
  "What's your tech stack?": "Daily driver: TypeScript, React, Node, PostgreSQL, AWS. Solid experience in .NET/C#, React Native, and Unity. Real AWS architecture work, not just deployment. Lately getting into AI/ML integration.",
  "Tell me about your background": "Full-stack dev in Northern Kentucky. Five years as a woodworker restoring antique furniture before I committed to CS — enrolled in Ohio State's Full-Stack bootcamp in 2020 and it clicked immediately. GE Aerospace, Fischer Homes, plus a rotating cast of personal projects.",
  "What projects have you worked on?": "At GE Aerospace I built an internal AWS application from scratch — owned the architecture. Before that, a CRM and a React Native app at Fischer Homes. On the side: two Unity games — Turk (solo indie, a turtle dropped into different genres) and Wrinkle Warfare (multiplayer, co-developing with a friend in Denmark). I stream the game dev on Twitch.",
  "How did you get into coding?": "Wasn't confident out of high school, so I spent five years doing woodworking. Not a wasted detour — it taught me craftsmanship that I still bring to code. In 2020 I enrolled in OSU's bootcamp. Best decision I've made.",
  "Are you open to opportunities?": "Actively looking. Strong TypeScript, React, Node, AWS — I do best in roles where I can own things end-to-end rather than just push tickets. LinkedIn or GitHub is the best way to reach me.",
};

const SESSION_TOKEN_LIMIT = 3000;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm AI Austyn — theoretically better than the real Austyn. Ask about my background, skills, or projects. (Don't burn all my tokens!)" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSug, setShowSug] = useState(true);
  const [tokens, setTokens] = useState(0);
  const [lastTokens, setLastTokens] = useState(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, typing]);

  const send = async (text) => {
    if (!text.trim() || typing) return;
    setShowSug(false);
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');

    if (CANNED[text]) {
      setTyping(true);
      setTimeout(() => {
        setMessages((m) => [...m, { role: 'assistant', content: CANNED[text] }]);
        setTyping(false);
        setLastTokens(null);
      }, 400);
      return;
    }

    if (tokens >= SESSION_TOKEN_LIMIT) {
      setMessages((m) => [...m, {
        role: 'assistant',
        content: `Wow you're a chatty one! You've hit the ${SESSION_TOKEN_LIMIT.toLocaleString()} token limit for this session! Reach out to the real Austyn directly:\n\nmail@austynwhaley.com\n859-905-7745`,
      }]);
      return;
    }

    setTyping(true);
    setLastTokens(null);

    try {
      const apiMessages = [...messages, { role: 'user', content: text }]
        .filter((_, i, arr) => i !== 0 || arr[0].role === 'user')
        .map((msg) => ({ role: msg.role, content: msg.content }));

      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((m) => [...m, { role: 'assistant', content: data.response }]);
        if (data.usage) {
          setTokens((t) => t + data.usage.total_tokens);
          setLastTokens(data.usage);
        }
      } else {
        setMessages((m) => [...m, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Try again in a moment!" }]);
      }
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: "Hmm, AI-me is offline. Hit up the real Austyn at mail@austynwhaley.com." }]);
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
          <strong>{tokens.toLocaleString()}</strong> / 3,000<br />tokens
        </div>
      </div>
      <div className="chat-log" ref={logRef}>
        {messages.map((m, i) => (
          <div key={i} className={'chat-msg ' + m.role}>
            {m.role === 'assistant' && (
              <div className="mini-avatar" style={{ '--avatar': 'url(/assets/headshot.png)' }} />
            )}
            <div className="bubble">
              {m.content}
              {m.role === 'assistant' && i === messages.length - 1 && lastTokens && (
                <div className="cost">
                  Cost: {lastTokens.total_tokens} tokens ({lastTokens.input_tokens} in / {lastTokens.output_tokens} out) — {TOKEN_QUIPS[Math.floor(Math.random() * TOKEN_QUIPS.length)]}
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="chat-msg assistant">
            <div className="mini-avatar" style={{ '--avatar': 'url(/assets/headshot.png)' }} />
            <div className="bubble typing"><span /><span /><span /></div>
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
};

export default Chatbot;
