import React from 'react';
import '../styles/SkillsAndSocials.css';

function SkillsAndSocials() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "ReactJS", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" />
              <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" />
              <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" />
            </svg>
          )
        },
        {
          name: "JavaScript", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm12.525 10.932c-.446-.245-.968-.415-1.572-.51-.433-.067-.78-.179-1.036-.339-.24-.15-.36-.37-.36-.665 0-.256.126-.45.378-.584.262-.133.62-.2 1.074-.2.434 0 .79.088 1.066.262.277.175.467.433.57.777h1.666c-.104-.848-.517-1.493-1.24-1.932-.71-.43-1.63-.646-2.762-.646-1.127 0-2.02.247-2.678.74-.658.495-.988 1.157-.988 1.987 0 .762.247 1.348.742 1.76.495.41 1.22.68 2.176.81.79.106 1.353.227 1.69.362.336.136.505.372.505.71 0 .28-.155.51-.463.69-.308.18-.755.27-1.342.27-.63 0-1.13-.135-1.5-.407-.373-.272-.613-.674-.72-1.206H8.56c.105.992.56 1.765 1.365 2.316.804.55 1.86.827 3.167.827 1.3 0 2.324-.26 3.07-.78.746-.52 1.12-1.24 1.12-2.158 0-.825-.33-1.464-.995-1.916z" />
            </svg>
          )
        },
        {
          name: "HTML5", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 2l1.62 18L12 22l7.38-2L21 2H3zm13.62 6H8.92l.18 2h7.34l-.54 6.01L12 17.1l-3.83-1.09-.26-2.85h1.96l.13 1.4 1.99.54 2.01-.54.21-2.42H8.25l-.54-6h9.11l-.2 2.02z" />
            </svg>
          )
        },
        {
          name: "CSS3", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 2l1.62 18L12 22l7.38-2L21 2H3zm12.56 6.02H9.08l.18 2.04h6.08l-.27 3.01-3.07.82-3.07-.82-.2-2.04H6.87l.37 4.09L12 16.21l4.76-1.29.56-6.03.11-1.87z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "PHP", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14h-1.63l-.36-1.92H9.98L9.62 16H8l1.7-8.15H11.3L12.3 12h.02l1.02-4.15h1.59L13.65 16zm4.12 0h-1.6l-.37-1.92h-1.68L13.76 16h-1.62L13.85 8h1.62l-.37 3.08h1.68L17.15 8h1.61L17.77 16z" />
            </svg>
          )
        },
        {
          name: "MySQL", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
            </svg>
          )
        },
        {
          name: "PostgreSQL", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 00-10 10 9.87 9.87 0 002.58 6.78c.3.32.72.48 1.15.42 1.34-.18 2.22-.96 2.62-2 .09-.23.18-.46.28-.68a4 4 0 011.69-1.8c.45-.26.96-.42 1.48-.48.91-.1 1.76.15 2.47.67a5 5 0 011.66 2.54c.16.53.48 1 .94 1.33A9.87 9.87 0 0022 12 10 10 0 0012 2zm3.3 10.7a2.6 2.6 0 01-3.66 0c-.3-.29-.44-.66-.44-1.07 0-.42.15-.79.44-1.08a2.6 2.6 0 013.67 0c.29.3.43.66.43 1.08a1.5 1.5 0 01-.44 1.07z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Integrations & Tools",
      skills: [
        {
          name: "Leaflet Maps", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" y1="3" x2="9" y2="18" />
              <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
          )
        },
        {
          name: "REST APIs", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="4" />
              <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="4" />
            </svg>
          )
        },
        {
          name: "Git Versioning", icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 15V9a4 4 0 0 0-4-4H9" />
              <line x1="6" y1="9" x2="6" y2="15" />
            </svg>
          )
        }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Pjdell",
      description: "Explore my open-source repositories and code projects.",
      color: "#24292e",
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/peter-deloria",
      description: "Connect with me professionally and check my career updates.",
      color: "#0077b5",
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:peterjoshuadeloria@gmail.com",
      description: "Send me a direct email for project inquiries or opportunities.",
      color: "#ea4335",
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills-socials-section">
      <div className="section-container">

        {/* SKILLS DIVISION */}
        <div className="skills-division">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <p className="section-subtitle">A list of technologies, frameworks, and databases I work with to build high-performance web applications.</p>

          <div className="categories-grid">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="category-card">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className="icon-wrapper">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECT & RESUME DIVISION */}
        <div className="connect-division">
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="section-subtitle">Feel free to reach out through my social networks, review my code repositories, or check out my resume.</p>

          <div className="social-cards">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link"
                style={{ '--hover-color': link.color }}
              >
                <div className="social-card-inner">
                  <div className="social-icon-box">
                    {link.icon}
                  </div>
                  <h3>{link.name}</h3>
                  <p>{link.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="resume-container">
            {/* Note: You can replace this href value with the path of your resume, e.g. "/resume.pdf" inside the public folder */}
            <a href="/DeloriaResume.pdf" className="resume-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View & Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SkillsAndSocials;
