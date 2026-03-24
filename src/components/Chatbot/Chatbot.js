import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

const SUGGESTED_QUESTIONS = [
  "What's your tech stack?",
  "Tell me about your background",
  "What projects have you worked on?",
  "How did you get into coding?",
  "Are you open to opportunities?"
];

const TOKEN_QUIPS = [
  "hope that was worth it!",
  "cha-ching! 💰",
  "thanks for keeping the lights on",
  "you owe me caffeine",
  "my wallet felt that one",
  "worth every token",
  "im ruined financially but at least you're having fun",
  "the AI overlords thank you",
  "you're keeping Claude employed",
  "money well spent... right?",
  "treat yourself, I guess",
  "beep boop that cost money"
];

const CANNED_RESPONSES = {
  "What's your tech stack?": "My primary stack is TypeScript, React, Node.js, PostgreSQL, and AWS — that's what I've been doing professionally. I also have solid experience with .NET/C#, React Native, and Unity for game development. I've done real AWS architecture work, not just deployment — spun up full applications from scratch in the cloud. Always picking up new things too, lately I've been getting into AI/ML integration.",

  "Tell me about your background": "I'm a Full Stack Developer based in Northern Kentucky, just outside Cincinnati. My path into tech was a little unconventional — after high school I spent about 5 years as a woodworker restoring antique furniture. I was always drawn to CS but didn't pull the trigger until 2020 when I enrolled in Ohio State's Full Stack Engineering bootcamp. It clicked immediately. Since then I've built production applications for companies like GE Aerospace and Fischer Homes, and I've got a bunch of personal projects I'm always tinkering with.",

  "What projects have you worked on?": "Professionally, I built an internal AWS application from scratch at GE Aerospace — owned the full architecture on that one. Before that I built a CRM system and a React Native mobile app at Fischer Homes. On the personal side I'm working on two Unity games: Turk, a solo indie game where a turtle gets dropped into different video game genres, and Wrinkle Warfare, a multiplayer game I'm co-developing with a friend in Denmark. I stream the game dev on Twitch too. Check out my Projects page for the full breakdown!",

  "How did you get into coding?": "I always knew I wanted to do something in tech but didn't have the confidence right out of high school. So I took a detour — spent 5 years doing woodworking, restoring antique furniture. Honestly not a bad detour, it taught me a lot about craftsmanship and attention to detail that I still carry into how I write code. In 2020 I finally enrolled in Ohio State's Full Stack bootcamp and it was immediately obvious it was the right call. Best decision I've made.",

  "Are you open to opportunities?": "Yeah, actively looking right now! I'm a Full Stack Developer with strong TypeScript, React, Node.js, and AWS chops — I do best in roles where I can own things end to end rather than just push tickets. If you've got something interesting I'd love to hear about it. Best way to reach me is LinkedIn (linkedin.com/in/austyn-whaley-a820421b5) or you can check out my work on GitHub (github.com/austynwhaley)."
};
const SESSION_TOKEN_LIMIT = 3000; // Token budget per session

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! I'm AI Austyn and theoretically better than the real Austyn. Ask me anything about my background, skills, or projects! (Don't burn all my tokens though!)"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [tokensUsed, setTokensUsed] = useState(0);
  const [lastRequestTokens, setLastRequestTokens] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    setShowSuggestions(false);
    const userMessage = { role: 'user', content: messageText.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Check for canned response first
    const cannedAnswer = CANNED_RESPONSES[messageText.trim()];
    if (cannedAnswer) {
      // Small delay to feel natural
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: cannedAnswer }]);
        setLastRequestTokens(null); // Canned responses don't use tokens
      }, 300);
      return;
    }

    // Check if user has exceeded token limit
    if (tokensUsed >= SESSION_TOKEN_LIMIT) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Wow you're a chatty one! You've hit the ${SESSION_TOKEN_LIMIT.toLocaleString()} token limit for this session! Reach out to the real Austyn he will talk to you for free directly:\n\n📧 mail@austynwhaley.com\n📱 859-905-7745` 
      }]);
      return;
    }

    // If no canned response, call the API
    setIsLoading(true);
    setLastRequestTokens(null);
    const newMessages = [...messages, userMessage];

    try {
      // Filter out the initial greeting for API calls
      const apiMessages = newMessages
        .filter((_, index) => index !== 0 || newMessages[0].role === 'user')
        .map(msg => ({ role: msg.role, content: msg.content }));

      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        if (data.usage) {
          setTokensUsed(prev => prev + data.usage.total_tokens);
          setLastRequestTokens(data.usage);
        }
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Sorry, I'm having trouble connecting right now. Try again in a moment!" 
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Oops! Something went wrong. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleSuggestionClick = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <div className="chatbox-header-left">
          <span className="chatbox-title">Chat with AI Austyn</span>
          <span className="chatbox-status">Online</span>
        </div>
        <div className="chatbox-token-display">
          <span className="token-count">{tokensUsed.toLocaleString()} / {SESSION_TOKEN_LIMIT.toLocaleString()}</span>
          <span className="token-label">tokens</span>
        </div>
      </div>

      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`chatbox-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
          >
            {msg.role === 'assistant' && (
              <div className="message-avatar">AW</div>
            )}
            <div className="message-content">
              {msg.content}
              {msg.role === 'assistant' && index === messages.length - 1 && lastRequestTokens && (
                <div className="message-token-cost">
                  Cost: {lastRequestTokens.total_tokens} tokens ({lastRequestTokens.input_tokens} in / {lastRequestTokens.output_tokens} out) — {TOKEN_QUIPS[Math.floor(Math.random() * TOKEN_QUIPS.length)]}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chatbox-message assistant">
            <div className="message-avatar">AW</div>
            <div className="message-content typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {showSuggestions && !isLoading && (
        <div className="chatbox-suggestions">
          {SUGGESTED_QUESTIONS.map((question, index) => (
            <button
              key={index}
              className="suggestion-chip"
              onClick={() => handleSuggestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      )}

      <form className="chatbox-input-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={!inputValue.trim() || isLoading}
          aria-label="Send message"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
