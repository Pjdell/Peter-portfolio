import React from 'react';
import '../styles/SkillsAndSocials.css';

function SkillsAndSocials() {
  const toolboxCategories = [
    {
      num: "1",
      name: "FRONTEND",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
    },
    {
      num: "2",
      name: "BACKEND",
      skills: ["PHP", "Laravel", "REST APIs"]
    },
    {
      num: "3",
      name: "DATA",
      skills: ["PostgreSQL", "MySQL", "Firebase"]
    },
    {
      num: "4",
      name: "TOOLS",
      skills: ["Git", "GitHub", "Figma", "WordPress"]
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Pjdell",
      label: "Code & Open Source",
      url: "https://github.com/Pjdell",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      handle: "in/peter-joshua-deloria",
      label: "Professional Profile",
      url: "https://www.linkedin.com/in/peter-joshua-deloria-a3556a36b",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Email",
      handle: "peterjoshuadeloria@gmail.com",
      label: "Direct Contact",
      url: "mailto:peterjoshuadeloria@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills-socials-section">
      <div className="section-container">

        {/* TOOLBOX DIVISION */}
        <div className="toolbox-division">
          <div className="toolbox-header">
            <div className="toolbox-header-left">

              <h2 className="toolbox-title">TOOLBOX</h2>
            </div>

            {/* MONOSPACE STATUS LABEL */}
            <div className="toolbox-status-strip">

              <div className="status-content">
                <span className="status-label">CURRENTLY USING</span>
                <span className="status-stack">React · PHP · PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL TYPOGRAPHIC GRID */}
          <div className="toolbox-grid">
            {toolboxCategories.map((cat) => (
              <div key={cat.num} className="toolbox-col">
                <div className="toolbox-col-header">
                  <span className="toolbox-num">{cat.num}</span>
                  <h3 className="toolbox-category">{cat.name}</h3>
                </div>
                <ul className="toolbox-list">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="toolbox-item">
                      <span className="toolbox-bullet">—</span>
                      <span className="toolbox-name">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECT & RESUME DIVISION */}
        <div className="connect-division">
          <div className="connect-header">

            <h2 className="connect-title">LET'S CONNECT</h2>
          </div>

          <div className="connect-editorial-grid">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-row"
              >
                <div className="connect-row-left">
                  <div className="connect-icon">{link.icon}</div>
                  <div className="connect-meta">
                    <span className="connect-name">{link.name}</span>
                    <span className="connect-handle">{link.handle}</span>
                  </div>
                </div>
                <div className="connect-row-right">
                  <span className="connect-label">{link.label}</span>
                  <span className="connect-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
}

export default SkillsAndSocials;
