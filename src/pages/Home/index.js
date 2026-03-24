import 'bootstrap/dist/css/bootstrap.min.css';
import TypeAnimation from 'react-type-animation';
import "./style.css";
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaUser, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import Chatbot from '../../components/Chatbot/Chatbot';

const Home = () => {
  const [colorized, setColorized] = useState(false);

  return (
    <div className='homepage'>
      <div className='header'>
        <div className='headerContainer'>
          <h2 className='typeTitle'>
            {colorized ? (
                <>
                  Hello world, I&apos;m Austyn Whaley and I am{' '}
                  <span key="final-line" className="highlight">Always Moving Forward</span>
                </>
            ) : (
              <TypeAnimation
                className="cursor"
                wrapper="span"
                cursor={false}
                repeat={1}
                sequence={[
                  "Hello world, I'm Austyn Whaley and I am a Full Stack Develop", 500,
                  "Hello world, I'm Austyn Whaley and I am a Software En", 500,
                  "Hello world, I'm Austyn Whaley and I am a Senior Front-End Back-End Information Technology Applicationist Developist System blahblahblahajksga131*^&#@", 100,
                  "Hello world, I'm Austyn Whaley and I am a Innovator", 1500,
                  "Hello world, I'm Austyn Whaley and I am a Problem Solver", 1500,
                  "Hello world, I'm Austyn Whaley and I am a Master Googler", 1500,
                  "Hello world, I'm Austyn Whaley and I am Always Moving Forward", 300,
                  () => setColorized(true)
                ]}
              />
            )}
          </h2>
        </div>

        {/* Links row with icons */}
        <div className="home-links">
          <Link className="home-link" to="/about">
            <FaUser className="icon" /> About
          </Link>
          <Link className="home-link" to="/projects">
            <FaProjectDiagram className="icon" /> Projects
          </Link>
          <Link className="home-link" to="/resume">
            <FaFileAlt className="icon" /> Resume
          </Link>
        </div>
      </div>

      {/* AI Chatbot Section */}
      <div className="chatbot-section">
        <Chatbot />
      </div>
    </div>
  );
}

export default Home;
