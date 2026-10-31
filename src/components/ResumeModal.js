import React, { useEffect } from 'react';
import '../styles/ResumeModal.css';

function ResumeModal({ isOpen, onClose }) {
  // Prevent background scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="QA Resume Modal">
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* TOP BAR / ACTION BAR */}
        <div className="resume-modal-topbar">
          <div className="resume-modal-badge">
            <span>QA ENGINEER RESUME</span>
          </div>

          <div className="resume-modal-actions">
            <a
              href={`${process.env.PUBLIC_URL}/DeloriaResume.pdf`}
              download="Peter_Joshua_Deloria_QA_Resume.pdf"
              className="resume-action-btn primary"
              title="Download PDF version"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="resume-action-btn secondary"
              title="Print Resume"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="resume-close-btn"
              aria-label="Close resume modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* PRINTABLE / SCROLLABLE RESUME SHEET */}
        <div className="resume-sheet">
          
          {/* HEADER */}
          <header className="resume-sheet-header">
            <div className="resume-identity">
              <h1 className="resume-name">Peter Joshua E. Deloria</h1>
              <h2 className="resume-target-title">Entry-Level QA Engineer & BS IT Graduate</h2>
              <p className="resume-tagline">Manual Functional & Negative Testing · SDLC / STLC · API Testing · Full-Stack Foundation</p>
            </div>

            <div className="resume-contact-grid">
              <a href="mailto:peterjoshuadeloria@gmail.com" className="resume-contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>peterjoshuadeloria@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/peter-joshua-deloria-a3556a36b" target="_blank" rel="noopener noreferrer" className="resume-contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>linkedin.com/in/peter-joshua-deloria</span>
              </a>

              <a href="https://github.com/Pjdell" target="_blank" rel="noopener noreferrer" className="resume-contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>github.com/Pjdell</span>
              </a>

              <div className="resume-contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Pasig City, Metro Manila</span>
              </div>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Professional Summary</h3>
              <div className="resume-section-line" />
            </div>
            <p className="resume-summary-text">
              <strong>Entry-level QA Engineer</strong> and BS IT graduate with hands-on experience in manual functional, negative,
              regression, system, exploratory, and UAT testing across three web application projects. Experienced in test case design,
              defect reporting, and retesting within Agile teams, with working knowledge of SDLC/STLC, and Postman.
              Full-stack background (React, PHP, PostgreSQL) supports clear technical communication with developers and deep system understanding.
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Work Experience</h3>
              <div className="resume-section-line" />
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h4 className="resume-entry-title">QA Intern</h4>
                  <span className="resume-entry-company">International Academy Manila</span>
                </div>
                <div className="resume-entry-meta">
                  <span className="resume-date-badge">February 2026 – April 2026</span>
                </div>
              </div>
              <ul className="resume-bullets">
                <li>
                  Tested a centralized school portal (React.js, PHP/PostgreSQL) serving students, faculty, and administrators,
                  covering features across multiple school processes in one integrated system.
                </li>
                <li>
                  Performed manual functional and negative testing on application features, validating expected results,
                  testing invalid inputs and form validation, identifying bugs, and retesting functionality after fixes.
                </li>
                <li>
                  Executed unit and system integration testing (SIT) to verify that individual components and connected modules
                  (frontend, PHP backend, PostgreSQL database) functioned seamlessly together.
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Key Projects & QA Cycles</h3>
              <div className="resume-section-line" />
            </div>

            {/* TUA Marketplace */}
            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h4 className="resume-entry-title">Trinity University of Asia Marketplace</h4>
                  <span className="resume-entry-company">Capstone Project · System Under Test for Full QA Cycle</span>
                </div>
                <div className="resume-entry-meta">
                  <span className="resume-date-badge">2025 – 2026</span>
                </div>
              </div>
              <ul className="resume-bullets">
                <li>
                  Built a React.js marketplace with Firebase authentication and real-time communication for students and vendors,
                  which served as the System Under Test for a comprehensive QA cycle.
                </li>
                <li>
                  <strong>Created and documented 72 manual test cases</strong> covering system, functional, negative, regression,
                  and UAT testing; logged defects and retested after developer fixes in an Agile methodology.
                </li>
              </ul>
            </div>

            {/* School Portal */}
            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h4 className="resume-entry-title">School Management Portal</h4>
                  <span className="resume-entry-company">International Academy Manila</span>
                </div>
                <div className="resume-entry-meta">
                  <span className="resume-date-badge">2026</span>
                </div>
              </div>
              <ul className="resume-bullets">
                <li>
                  Executed manual functional and negative testing across a multi-role portal (students, faculty, admin),
                  validating expected results, boundary values, invalid inputs, and form validation.
                </li>
                <li>
                  Performed unit and system integration testing (SIT) to verify that individual components and connected modules
                  (frontend, PHP backend, PostgreSQL database) worked together correctly; identified and reported bugs, then retested after fixes.
                </li>
              </ul>
            </div>

            {/* Workforce Allocation Optimizer */}
            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h4 className="resume-entry-title">Workforce Allocation Optimizer</h4>
                  <span className="resume-entry-company">Personal Project</span>
                </div>
                <div className="resume-entry-meta">
                  <span className="resume-date-badge">2026</span>
                </div>
              </div>
              <ul className="resume-bullets">
                <li>
                  Built a full-stack allocation system (React.js, Tailwind CSS, Laravel/PHP, PostgreSQL) to practice end-to-end QA
                  on a multi-module application.
                </li>
                <li>
                  Conducted exploratory testing on each module, using varied inputs to verify allocation logic and retesting after changes to confirm fixes.
                </li>
              </ul>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Technical Skills</h3>
              <div className="resume-section-line" />
            </div>

            <div className="resume-skills-grid">
              <div className="resume-skill-group highlight">
                <span className="resume-skill-label">Testing & QA:</span>
                <span className="resume-skill-values">
                  Manual Testing, Functional Testing, Negative Testing, Regression Testing, System Testing, Exploratory Testing, UAT, SIT, Test Case Design, Defect Reporting & Retesting, Agile/Scrum, Postman (API Testing), SDLC/STLC Fundamentals
                </span>
              </div>

              <div className="resume-skill-group">
                <span className="resume-skill-label">Databases:</span>
                <span className="resume-skill-values">PostgreSQL, MySQL, Firebase Realtime Database</span>
              </div>

              <div className="resume-skill-group">
                <span className="resume-skill-label">Languages:</span>
                <span className="resume-skill-values">JavaScript (ES6+), PHP, HTML5, CSS3</span>
              </div>

              <div className="resume-skill-group">
                <span className="resume-skill-label">Frameworks & Libraries:</span>
                <span className="resume-skill-values">React.js, Laravel, Tailwind CSS</span>
              </div>

              <div className="resume-skill-group">
                <span className="resume-skill-label">APIs & Integration:</span>
                <span className="resume-skill-values">REST APIs, Firebase Authentication</span>
              </div>

              <div className="resume-skill-group">
                <span className="resume-skill-label">Version Control & Tools:</span>
                <span className="resume-skill-values">Git, GitHub, VS Code, MS Word, MS Excel, Figma</span>
              </div>
            </div>
          </section>

          {/* EDUCATION & HONORS */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Education & Honors</h3>
              <div className="resume-section-line" />
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h4 className="resume-entry-title">Bachelor of Science in Information Technology</h4>
                  <span className="resume-entry-company">Trinity University of Asia · Major in Software Engineering</span>
                </div>
                <div className="resume-entry-meta">
                  <span className="resume-date-badge">2022 – 2026</span>
                </div>
              </div>
              <p className="resume-honors-text">
                <strong>Honors:</strong> Magna Cum Laude · Dean's Lister · Pasig City Scholar
              </p>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="resume-section">
            <div className="resume-section-header">
              <h3 className="resume-section-title">Certifications</h3>
              <div className="resume-section-line" />
            </div>

            <div className="resume-cert-list">
              <div className="resume-cert-item">
                <span className="resume-cert-bullet">—</span>
                <div>
                  <h4 className="resume-cert-title">Introduction to Software Testing</h4>
                  <p className="resume-cert-desc">Online Certification · Software testing principles, testing levels (Unit, SIT, System, UAT), testing tools, and testing techniques.</p>
                </div>
              </div>

              <div className="resume-cert-item">
                <span className="resume-cert-bullet">—</span>
                <div>
                  <h4 className="resume-cert-title">Introduction to Front End Development</h4>
                  <p className="resume-cert-desc">Simplilearn Certification · Core modern web technologies and responsive interface engineering.</p>
                </div>
              </div>

              <div className="resume-cert-item">
                <span className="resume-cert-bullet">—</span>
                <div>
                  <h4 className="resume-cert-title">SQL Public Assessment</h4>
                  <p className="resume-cert-desc">Verified SQL Querying and relational database management test.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
