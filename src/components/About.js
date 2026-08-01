import '../styles/About.css';
import { useEffect, useRef, useState } from 'react';

const ABOUT_PAGES = [
  {
    id: 'education',
    title: 'Education',
    subtitle: 'My Academic Journey',
    details: [
      {
        title: 'Trinity University of Asia',
        subtitle: 'Bachelor of Science in Information Technology',
        meta: 'Major in Software Engineering | 2022 - 2026',
        description: 'Completed a Software Engineering-focused program with hands-on experience in web application development, databases, cloud technologies, and software development practices. Built web applications using React, PHP, PostgreSQL, Firebase, and other modern technologies through academic and capstone projects.'
      },
      {
        title: 'Academic Focus & Achievements',
        description: 'Excelled in full-stack project development. Developed a robust Software Engineering capstone, and established a strong foundation in modern frontend/backend practices.'
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
    subtitle: 'Professional Path',
    details: [
      {
        title: 'International Academy Manila',
        subtitle: 'Full Stack Developer Intern',
        meta: '2026',
        description: 'Collaborated with team developers to build, test, and deploy responsive user interfaces. Gained professional exposure to software lifecycles and modern workflow pipelines.'
      },
      {
        title: 'Full-Stack Developer',
        subtitle: 'Academic & Personal Projects',
        meta: '2024 - Present',
        description: 'Successfully engineered fully-featured web  applications using React, relational databases, and RESTful APIs.'
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
    subtitle: 'Learning & Community',
    details: [
      {
        title: 'EgovPH Hackathon 2026',
        subtitle: 'Workshop Participant & Competitor',
        meta: '2026',
        description: 'Participated in workshops and a collaborative hackathon focused on developing innovative technology solutions for government and public service.'
      },
      {
        title: 'Certifications & Technical Achievements',
        subtitle: 'Certified Front-End Developer & SQL Practitioner',
        meta: 'Front-End Development & SQL',
        description: 'Completed the Introduction to Front End Development certification from Simplilearn and successfully passed the SQL public test, demonstrating foundational skills in front-end web development and database querying.'
      }
    ],
    images: [
      'event1.jpg',
      'event2.jpg',
      'event3.jpg',
      'cert1.jpg',
      'cert2.jpg'
    ]
  }
];

function About() {
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
                          <div key={dIdx} className="detail-card">
                            <h4 className="detail-card-title">{detail.title}</h4>
                            {detail.subtitle && <h5 className="detail-card-subtitle">{detail.subtitle}</h5>}
                            {detail.meta && <span className="detail-card-meta">{detail.meta}</span>}
                            <p className="detail-card-desc">{detail.description}</p>
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