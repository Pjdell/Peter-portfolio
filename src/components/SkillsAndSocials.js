import React from 'react';
import '../styles/SkillsAndSocials.css';

function SkillsAndSocials({ onOpenResume }) {
  const toolboxCategories = [
    {
      num: "1",
      name: "TESTING & QA",
      skills: [
        "Manual Functional Testing",
        "Negative & Boundary Testing",
        "Regression & Smoke Testing",
        "System & Integration (SIT)",
        "UAT & Exploratory Testing",
        "Test Case Design & Execution",
        "Defect Reporting & Retesting",
        "Postman (API Testing)",
        "SDLC / STLC & Agile"
      ]
    },
    {
      num: "2",
      name: "DEVELOPMENT",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "PHP & Laravel",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "RESTful APIs"
      ]
    },
    {
      num: "3",
      name: "DATABASES",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Firebase Realtime DB",
        "Database Workflows",
        "Relational Schema Design"
      ]
    },
    {
      num: "4",
      name: "TOOLS & DOCS",
      skills: [
        "Postman",
        "Git & GitHub",
        "VS Code",
        "MS Excel & Word (Test Docs)",
        "Figma"
      ]
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Pjdell",
      label: "Code & QA Repositories",
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
              <span className="toolbox-eyebrow">COMPETENCIES & STACK</span>
              <h2 className="toolbox-title">TOOLBOX</h2>
            </div>

            {/* MONOSPACE STATUS STRIP */}
            <div className="toolbox-status-strip">
              <div className="status-content">
                <span className="status-label">TESTING & USING:</span>
                <span className="status-stack">Manual QA · Postman · React · PHP · PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL TYPOGRAPHIC GRID */}
          <div className="toolbox-grid">
            {toolboxCategories.map((cat, idx) => (
              <div key={cat.num} className={`toolbox-col ${idx === 0 ? 'featured-col' : ''}`}>
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

        {/* QA RESUME HIGHLIGHT BANNER */}
        <div id="resume" className="resume-highlight-card">
          <div className="resume-highlight-left">
            <div className="resume-highlight-eyebrow">

              <span>FEATURED QA RESUME HIGHLIGHT</span>
            </div>
            <h3 className="resume-highlight-title">Entry-Level QA Engineer & BS IT Graduate</h3>
            <p className="resume-highlight-desc">
              Hands-on experience in manual functional, negative, regression, system, exploratory, and UAT testing across three web applications. Experienced in test case design (72+ test cases documented), defect reporting, retesting in Agile teams, and Postman API testing — backed by full-stack React, PHP, and PostgreSQL skills.
            </p>
            <div className="resume-highlight-tags">
              <span className="resume-highlight-tag">72 Manual Test Cases</span>
              <span className="resume-highlight-tag">QA Intern (IAM Portal)</span>
              <span className="resume-highlight-tag">Postman API Testing</span>
              <span className="resume-highlight-tag">STLC & Agile</span>
              <span className="resume-highlight-tag">Magna Cum Laude</span>
            </div>
          </div>

          <div className="resume-highlight-right">
            <button
              type="button"
              onClick={onOpenResume}
              className="resume-card-btn-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>View Full QA Resume</span>
            </button>

            <a
              href={`${process.env.PUBLIC_URL}/DeloriaQA_Resume.pdf`}
              download="Peter_Joshua_Deloria_QA_Resume.pdf"
              className="resume-card-btn-secondary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* CONNECT DIVISION */}
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
