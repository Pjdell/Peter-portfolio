import '../styles/About.css';
import { useEffect, useRef, useState } from 'react';

const ABOUT_PAGES = [
  {
    id: 'education',
    title: 'Education',
    subtitle: 'ACADEMIC BACKGROUND',
    details: [
      {
        title: 'Trinity University of Asia',
        subtitle: 'Bachelor of Science in Information Technology',
        meta: 'Major in Software Engineering | 2022 - 2026',
        description: 'Completed a Software Engineering-focused program with rigorous practical grounding in software quality assurance (STLC, test case design, defect tracking, Postman API testing) and full-stack development. Built and validated web applications with React, PHP, PostgreSQL, and Firebase across academic and capstone systems.'
      },
      {
        title: 'Academic Focus & Achievements',
        meta: 'Magna Cum Laude | Dean\'s Lister · Pasig City Scholar',
        description: 'Graduated with Magna Cum Laude honors. Applied Software Testing Life Cycle (STLC) practices, functional validation, negative test scenarios, and UAT across projects to deliver high-quality, dependable software.'
      }
    ],
    images: [
      'educ1.jpg',
      'educ2.jpg',
      'educ3.jpg',
      'educ4.jpg',
      'educ5.jpg'
    ]
  },
  {
    id: 'experience',
    title: 'Work Experience',
    subtitle: 'PROFESSIONAL EXPERIENCE',
    details: [
      {
        title: 'International Academy Manila',
        subtitle: 'QA Intern',
        meta: 'February 2026 – April 2026',
        description: 'Tested a centralized school portal (React.js, PHP/PostgreSQL) serving students, faculty, and administrators. Performed manual functional and negative testing, validating expected results, form validations, boundary inputs, and role permissions. Executed unit and system integration testing (SIT), logged defects, and verified fixes through retesting in an Agile team.'
      },
      {
        title: 'Full-Stack Developer & QA Tester',
        subtitle: 'Academic & Personal Projects',
        meta: '2024 - Present',
        description: 'Engineered and quality-tested responsive, data-driven web applications using React, Laravel/PHP, and PostgreSQL. Created 72 manual test cases for the TUA Marketplace capstone project and conducted exploratory testing on the Workforce Allocation Optimizer.'
      }
    ],
    images: [
      'work1.jpg',
      'work2.jpg',
      'work3.jpg'
    ]
  },
  {
    id: 'events',
    title: 'Events & Certifications',
    subtitle: 'CREDENTIALS & WORKSHOPS',
    details: [
      {
        title: 'Introduction to Software Testing',
        subtitle: 'Online Certification',
        meta: 'Software Testing Principles, Levels & Techniques',
        description: 'Completed certification covering fundamental software testing principles, test levels (Unit, SIT, System, UAT), testing tools, and testing techniques (functional, negative, regression, boundary value analysis). Deep working knowledge of SDLC, STLC, and defect life cycle.'
      },
      {
        title: 'EgovPH Hackathon & Technical Certifications',
        subtitle: 'Hackathon Competitor & SQL / Frontend Certified',
        meta: 'EgovPH 2026 · Simplilearn · SQL Assessment',
        description: 'Participated in workshops and collaborative hackathons for public sector solutions. Certified in Front-End Web Development (Simplilearn) and passed public SQL database assessment.'
      }
    ],
    images: [
      'event1.jpg',
      'event2.jpg',
      'event3.jpg',
      'cert.jpg',
      'cert2.jpg'
    ]
  }
];

function About({ onOpenResume }) {
  const aboutRef = useRef(null);
  const dropdownRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imgIndices, setImgIndices] = useState([0, 0, 0]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setAnimate(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Autoplay image slideshow of the active section
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndices((prev) => {
        const nextIndices = [...prev];
        const numImages = ABOUT_PAGES[activeTabIdx].images.length;
        nextIndices[activeTabIdx] = (nextIndices[activeTabIdx] + 1) % numImages;
        return nextIndices;
      });
    }, 4500); // Shift every 4.5 seconds

    return () => clearInterval(timer);
  }, [activeTabIdx]);

  const handleNextPage = () => {
    setActiveTabIdx((prev) => (prev + 1) % ABOUT_PAGES.length);
  };

  const handlePrevPage = () => {
    setActiveTabIdx((prev) => (prev - 1 + ABOUT_PAGES.length) % ABOUT_PAGES.length);
  };

  const selectTab = (idx) => {
    setActiveTabIdx(idx);
    setDropdownOpen(false);
  };

  const handleDotClick = (pageIdx, imgIdx) => {
    setImgIndices((prev) => {
      const nextIndices = [...prev];
      nextIndices[pageIdx] = imgIdx;
      return nextIndices;
    });
  };

  return (
    <section id="about" className="about-me-intro" ref={aboutRef}>
      <div className="about-content-container">

        {/* HEADER AREA */}
        <div className={`about-top-bar ${animate ? 'animate-top-bar' : ''}`}>
          <h2 className="about-title-slider">About Me</h2>

          {/* CUSTOM DROPDOWN */}
          <div className="about-dropdown-container" ref={dropdownRef}>
            <button
              className={`about-dropdown-btn ${dropdownOpen ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span>{ABOUT_PAGES[activeTabIdx].title}</span>
              <svg className={`chevron-icon ${dropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`about-dropdown-menu ${dropdownOpen ? 'open' : ''}`} role="listbox">
              {ABOUT_PAGES.map((page, idx) => (
                <button
                  key={page.id}
                  className={`about-dropdown-item ${idx === activeTabIdx ? 'active' : ''}`}
                  role="option"
                  aria-selected={idx === activeTabIdx}
                  onClick={() => selectTab(idx)}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SLIDER CAROUSEL SECTION */}
        <div className="about-slider-wrapper">
          {/* SIDE NAVIGATION ARROWS */}
          <button
            className="about-nav-arrow prev"
            onClick={handlePrevPage}
            aria-label="Previous Page"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="about-nav-arrow next"
            onClick={handleNextPage}
            aria-label="Next Page"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* VIEWPORT CONTROLLER */}
          <div className="about-slider-viewport">
            <div
              className="about-slides-track"
              style={{ transform: `translateX(-${activeTabIdx * (100 / ABOUT_PAGES.length)}%)` }}
            >
              {ABOUT_PAGES.map((page, pageIdx) => {
                const isActive = pageIdx === activeTabIdx;
                const activeImgIdx = imgIndices[pageIdx];

                return (
                  <div
                    key={page.id}
                    className={`about-page-slide ${isActive ? 'active' : 'inactive'}`}
                  >
                    {/* DETAILS - LEFT COLUMN */}
                    <div className="about-details-col">
                      <span className="about-slide-subtitle">{page.subtitle}</span>
                      <h3 className="about-slide-title">{page.title}</h3>

                      <div className="about-details-list">
                        {page.details.map((detail, dIdx) => (
                          <div key={dIdx} className="detail-bullet-item">
                            <span className="detail-bullet">—</span>
                            <div className="detail-content">
                              <h4 className="detail-card-title">{detail.title}</h4>
                              {detail.subtitle && <h5 className="detail-card-subtitle">{detail.subtitle}</h5>}
                              {detail.meta && <span className="detail-card-meta">{detail.meta}</span>}
                              <p className="detail-card-desc">{detail.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* IMAGES SLIDESHOW - RIGHT COLUMN */}
                    <div className="about-slideshow-col">
                      <div className="about-slideshow-frame">
                        {page.images.map((imgName, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={`${process.env.PUBLIC_URL}/${imgName}`}
                            alt={`${page.title} ${imgIdx + 1}`}
                            className={`slideshow-img ${imgIdx === activeImgIdx ? 'active' : ''}`}
                            onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/${imgName}`)}
                          />
                        ))}

                        {/* MANUAL NAVIGATION DOTS */}
                        <div className="slideshow-dots">
                          {page.images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              className={`slideshow-dot ${imgIdx === activeImgIdx ? 'active' : ''}`}
                              onClick={() => handleDotClick(pageIdx, imgIdx)}
                              aria-label={`Go to slide ${imgIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* IMAGE MODAL OVERLAY */}
      {selectedImage && (
        <div
          className="about-modal-overlay"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="about-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="about-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default About;
