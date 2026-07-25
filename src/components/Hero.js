import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const words = ["Web Developer", "Full-Stack Developer", "technology enthusiast"];

function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(60); // Faster delete speed
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(120); // Normal typing speed
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      // Pause at typed word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1550);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);


  return (
    <section className="hero">
      {/* Decorative Grid Dots Background */}
      <div className="hero-dots-container">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          <circle cx="20" cy="20" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="60" cy="20" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="100" cy="20" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="20" cy="60" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="60" cy="60" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="100" cy="60" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="20" cy="100" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="60" cy="100" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="100" cy="100" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="20" cy="140" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="60" cy="140" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="100" cy="140" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="20" cy="180" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="60" cy="180" r="4" fill="rgba(0, 132, 209, 0.4)" />
          <circle cx="100" cy="180" r="4" fill="rgba(0, 132, 209, 0.4)" />
        </svg>
      </div>

      {/* LEFT CONTENT AREA */}
      <div className="hero-left">
        {/* Social media icons at the top of content */}
        <div className="hero-socials">
          <a href="https://github.com/Pjdell" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/peter-joshua-deloria-a3556a36b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="mailto:peterjoshuadeloria@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <p className="hero-subtitle">Hello, I'm Peter Joshua E. Deloria</p>

        <h1 className="hero-typing-title">
          I'm a <span className="typewriter-text">{currentText}</span>
          <span className="typewriter-cursor">|</span>
        </h1>

        <p className="hero-description">
          A passionate web developer with experience in building clean, responsive, and community-focused web applications using React, PHP, and modern frontend tools.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn-primary">
            My Work
          </a>

        </div>
      </div>

      {/* RIGHT SIDE (FULL-BLEED PORTRAIT BLENDED) */}
      <div className="hero-right">
        <img
          src={`${process.env.PUBLIC_URL}/formalPic.jpg`}
          alt="Peter Joshua E. Deloria Profile"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;