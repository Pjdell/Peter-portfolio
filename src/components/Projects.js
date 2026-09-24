import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Projects.css';

/* ─── Reusable Image Slideshow ─── */
function ImageSlideshow({ images, alt, variant = 'card', onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const count = images.length;

  const goPrev = useCallback((e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goNext = useCallback((e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  // Keyboard navigation when popup variant
  useEffect(() => {
    if (variant !== 'popup') return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [variant, goPrev, goNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const isCard = variant === 'card';

  return (
    <div
      className={`slideshow slideshow--${variant}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slideshow__viewport">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} – ${i + 1}`}
            className={`slideshow__img ${i === currentIndex ? 'slideshow__img--active' : ''} ${isCard ? 'project-image-clickable' : 'image-popup-img'}`}
            onClick={isCard && onImageClick ? (e) => { e.stopPropagation(); onImageClick(); } : undefined}
            draggable={false}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="slideshow__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`slideshow__dot ${i === currentIndex ? 'slideshow__dot--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Projects Section ─── */
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const projects = [
    {

      client: "INTERNATIONAL ACADEMY MANILA",
      title: "School Management Portal",
      subtitle: "A school portal connecting students, faculty, and administrators.",
      description: "Built during my internship to support multiple school workflows including enrollment, grades, announcements, document requests, and administrative operations. I worked with team developers to build, test, and deploy responsive interfaces across the system.",
      role: "Full-Stack Developer Intern",
      stack: ["React", "PHP", "PostgreSQL", "Git"],
      focus: ["RBAC", "Responsive UI", "Database workflows"],
      problem: "A school environment requires different users — students, faculty, finance, and admins — to access different academic and administrative workflows through a single portal.",
      approach: "We built role-based access across student, faculty, finance, academic, and administrative workflows, with each role seeing only what they need.",
      learned: "Designing permissions early made the application easier to extend as more roles and features were added.",
      images: [
        asset('/iamport1.jpg'),
        asset('/iamport2.jpg'),
        asset('/iamport3.jpg'),
      ],
    },
    {

      client: "PERSONAL PROJECT",
      title: "Workforce Allocation Optimizer",
      subtitle: "A tool for matching employees with projects based on skills, availability, workload, and project requirements.",
      description: "The idea came from a simple problem: assigning people to projects becomes difficult when skills, availability, workload, and project requirements all need to be considered at once. I built a system that helps automate this process and provides allocation recommendations.",
      role: "Full-Stack Developer",
      stack: ["React", "PHP/Laravel", "PostgreSQL"],
      focus: ["Allocation optimization", "Employee-Project matching", "Workload balancing"],
      problem: "Manually assigning employees to projects can be time-consuming and inconsistent when multiple factors such as skills, availability, workload, and project requirements need to be balanced simultaneously.",
      approach: "I built a PHP-based allocation engine that evaluates employee skills, availability, current workload, and project requirements to score and recommend suitable assignments while identifying potential workload conflicts and unfilled requirements.",
      learned: "Breaking the allocation problem into smaller scoring rules and constraints made the system easier to understand, test, and debug while keeping the recommendations transparent.",
      images: [
        asset('/workopt.jpg'),
      ],
    },
    {

      client: "CAPSTONE PROJECT",
      title: "TUA Marketplace",
      subtitle: "A campus marketplace designed around a search problem and security",
      description: "I noticed that general marketplace searches don't always return the item a user actually has in mind. So our team explored a more focused campus marketplace experience with AI-based recommendations and real-time buyer-seller messaging.",
      role: "Frontend Developer",
      stack: ["React", "PHP", "MySQL"],
      focus: ["Browse UX", "AI recommendations", "Real-time messaging"],
      problem: "Students buying and selling within campus had no dedicated platform — general marketplaces are too broad and don't serve a campus community well. Also, social media marketplace is not 100% secure for users. ",
      approach: "We built a focused marketplace with AI-based product recommendations and  real-time buyer-seller messaging to keep transactions within the campus.",
      learned: "Working in a team taught me how to divide frontend responsibilities clearly and merge work without breaking each other's code.",
      images: [
        asset('/tua.jpg'),
        asset('/tuamar2.jpg'),
        asset('/tuamar3.jpg'),
      ],
    },
    {

      client: "PERSONAL PROJECT",
      title: "Pasig Garbage Tracking System",
      subtitle: "A real-time tracking system for waste collection in Pasig City.",
      description: "Residents in Pasig often didn't know when garbage trucks would pass their area. I built a tracking system that shows real-time truck locations on a map, so communities can plan around actual collection times.",
      role: "Full-Stack Developer",
      stack: ["React", "Leaflet", "PHP", "MySQL"],
      focus: ["Real-time tracking", "Map integration", "Community UX"],
      problem: "Residents had no way to know when garbage trucks would reach their area, leading to missed collections and street clutter.",
      approach: "I integrated Leaflet maps with real-time GPS data to show truck positions, letting residents track collection progress in their barangay.",
      learned: "Working with real-time map data taught me how to handle frequent state updates without killing browser performance.",
      images: [
        asset('/garbage1.jpg'),
        asset('/garbage2.jpg'),
        asset('/garbage3.jpg'),
      ],
    },
  ];

  const processSteps = [
    { num: "1", title: "UNDERSTAND", desc: "What problem are we actually solving?" },
    { num: "2", title: "DESIGN", desc: "Turn requirements into a usable interface." },
    { num: "3", title: "BUILD", desc: "React frontend + backend + database." },
    { num: "4", title: "TEST", desc: "Use the application and find what breaks." },
    { num: "5", title: "REFINE", desc: "Debug, improve, and review the implementation." },
  ];

  const currentlyItems = [
    { label: "Looking for", value: "Junior Full-Stack / Web Developer opportunities" },
    { label: "Learning", value: "Laravel · deeper PHP backend development" },
    { label: "Building", value: "Workforce Allocation Optimizer" },
    { label: "Interested in", value: "Backend systems · databases · practical web applications" },
  ];

  return (
    <section id="projects" className="projects-section">

      {/* ─── SECTION HEADER ─── */}
      <div className="projects-header">

        <h2 className="projects-title">SELECTED WORK</h2>
      </div>

      {/* ─── PROJECT CASE STUDIES ─── */}
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.num} className="project-case">

            {/* LEFT: TEXT */}
            <div className="case-text">
              <div className="case-header">
                <span className="case-num">{project.num}</span>
                <span className="case-client">{project.client}</span>
              </div>

              <h3 className="case-title">{project.title}</h3>
              <p className="case-subtitle">{project.subtitle}</p>
              <p className="case-description">{project.description}</p>

              {/* META GRID */}
              <div className="case-meta-grid">
                <div className="case-meta-item">
                  <span className="case-meta-label">ROLE</span>
                  <span className="case-meta-value">{project.role}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">STACK</span>
                  <span className="case-meta-value">{project.stack.join(' · ')}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">FOCUS</span>
                  <span className="case-meta-value">{project.focus.join(' · ')}</span>
                </div>
              </div>

              {/* CASE STUDY DETAILS */}
              <div className="case-study-block">
                <div className="case-study-item">
                  <span className="case-study-label">THE PROBLEM</span>
                  <p className="case-study-text">{project.problem}</p>
                </div>
                <div className="case-study-item">
                  <span className="case-study-label">MY APPROACH</span>
                  <p className="case-study-text">{project.approach}</p>
                </div>
                <div className="case-study-item">
                  <span className="case-study-label">WHAT I LEARNED</span>
                  <p className="case-study-text">{project.learned}</p>
                </div>
              </div>
            </div>

            {/* RIGHT: SLIDESHOW */}
            <div className="case-visual">
              <ImageSlideshow
                images={project.images}
                alt={project.title}
                variant="card"
                onImageClick={() => setSelectedProject(project)}
              />
            </div>

          </article>
        ))}
      </div>

      {/* ─── HOW I BUILD ─── */}
      <div className="process-section">
        <div className="process-header">
          <h2 className="process-title">HOW I BUILD</h2>
          <p className="process-note">
            I use AI tools as development assistants when appropriate, but I review the generated code, test the application, and make sure I understand the implementation before accepting it.
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="process-step">
                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
              {idx < processSteps.length - 1 && (
                <div className="process-connector">
                  <span className="process-arrow">↓</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── CURRENTLY ─── */}
      <div className="currently-section">
        <div className="currently-header">

          <h2 className="currently-title">CURRENTLY</h2>
        </div>

        <div className="currently-grid">
          {currentlyItems.map((item, idx) => (
            <div key={idx} className="currently-item">
              <span className="currently-label">{item.label}</span>
              <span className="currently-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── IMAGE POPUP LIGHTBOX ─── */}
      {selectedProject && (
        <div className="image-popup-overlay" onClick={() => setSelectedProject(null)}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-popup-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <div className="image-popup-img-wrapper">
              <ImageSlideshow
                images={selectedProject.images}
                alt={selectedProject.title}
                variant="popup"
              />
            </div>
            <div className="image-popup-info">
              <h3 className="image-popup-title">{selectedProject.title}</h3>
              <p className="image-popup-desc">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;