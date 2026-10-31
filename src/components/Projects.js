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
function Projects({ onOpenResume }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const projects = [
    {
      num: "01",
      client: "CAPSTONE PROJECT · QA HIGHLIGHT",
      title: "Trinity University of Asia Marketplace",
      subtitle: "A campus marketplace built with React & Firebase that served as the System Under Test for a 72-test-case QA cycle.",
      description: "Engineered a student & vendor marketplace with real-time chat and Firebase authentication. Beyond frontend development, the platform was designated as the System Under Test for a full Quality Assurance cycle. Created and documented 72 manual test cases covering system, functional, negative, regression, and UAT testing, reporting defects and retesting after fixes.",
      role: "Frontend Developer & QA Tester",
      stack: ["React.js", "Firebase Auth & Realtime DB", "Postman", "Agile / Scrum"],
      focus: ["72 Manual Test Cases", "System & Functional QA", "Regression & UAT", "Defect Retesting"],
      problem: "Campus peer-to-peer commerce requires high trust and resilience — invalid auth states, unhandled database drops, or messaging desyncs could directly compromise student transactions.",
      approach: "Authored 72 structured manual test cases covering happy and negative paths. Executed exploratory, negative, regression, and UAT testing; logged bug reports with reproducible steps and expected vs. actual outcomes, then verified fixes across Agile sprint cycles.",
      learned: "Rigorous test documentation and regression testing ensure rapid iterations don't break established features, making QA central to reliable software delivery.",
      images: [
        asset('/tua.jpg'),
        asset('/tuamar2.jpg'),
        asset('/tuamar3.jpg'),
      ],
    },
    {
      num: "02",
      client: "INTERNATIONAL ACADEMY MANILA",
      title: "School Management Portal",
      subtitle: "A centralized multi-role portal connecting students, faculty, and administrators across academic workflows.",
      description: "Tested and contributed to a centralized school portal built with React.js, PHP, and PostgreSQL. Validated multi-role academic and administrative workflows including enrollment, grading, documentation requests, and permissions.",
      role: "QA Intern · Full-Stack Intern",
      stack: ["React.js", "PHP", "PostgreSQL", "Git", "Postman"],
      focus: ["Functional & Negative QA", "Unit & SIT Testing", "Multi-Role RBAC", "Bug Verification"],
      problem: "A centralized school system has distinct roles (students, faculty, administrators). Inconsistent input validation or cross-role permission flaws could lead to unauthorized data access or corrupted student records.",
      approach: "Conducted manual functional and negative testing on all core forms and modules. Ran unit and system integration testing (SIT) to ensure frontend components, PHP backend APIs, and PostgreSQL database worked in lockstep; reported defects and retested after developer fixes.",
      learned: "Negative testing and clear, actionable bug logging accelerate developer turnaround times and protect critical role-based data workflows.",
      images: [
        asset('/iamport1.jpg'),
        asset('/iamport2.jpg'),
        asset('/iamport3.jpg'),
      ],
    },
    {
      num: "03",
      client: "PERSONAL PROJECT",
      title: "Workforce Allocation Optimizer",
      subtitle: "A resource optimization system matching employees with projects based on skills, availability, and workloads.",
      description: "Built a full-stack allocation engine with React.js, Tailwind CSS, Laravel/PHP, and PostgreSQL. Designed specifically to practice end-to-end QA on a complex multi-module application with algorithmic scoring logic.",
      role: "Full-Stack Developer & QA Tester",
      stack: ["React.js", "Tailwind CSS", "Laravel / PHP", "PostgreSQL"],
      focus: ["Exploratory Testing", "Allocation Logic Verification", "Boundary Value Testing", "Workload Balancing"],
      problem: "Balancing skills, overlapping timelines, availability, and workload capacity can easily introduce algorithmic edge cases, over-allocations, and silent constraint violations.",
      approach: "Engineered a PHP scoring engine and executed modular exploratory testing across all parameters. Tested edge cases, invalid availability inputs, and boundary values to verify optimization accuracy, retesting after code revisions.",
      learned: "Structuring complex logic into verifiable constraints makes designing boundary test cases easier and ensures predictable, auditable allocation suggestions.",
      images: [
        asset('/workopt.jpg'),
      ],
    },
    {
      num: "04",
      client: "PERSONAL PROJECT",
      title: "Pasig Garbage Tracking System",
      subtitle: "A real-time tracking system for municipal waste collection in Pasig City.",
      description: "Built a community tracking system integrating Leaflet maps with real-time location data to display waste collection routes and progress, helping residents stay informed.",
      role: "Full-Stack Developer",
      stack: ["React", "Leaflet", "PHP", "MySQL"],
      focus: ["Real-time Tracking", "Map Integration", "Community UX", "System Usability"],
      problem: "Residents had no visibility on garbage collection schedules, leading to missed collections and street waste build-up.",
      approach: "Integrated Leaflet maps with dynamic vehicle status updates, testing responsive map behaviors and route accuracy for barangay-level tracking.",
      learned: "Handling frequent real-time state updates without sacrificing UI rendering performance.",
      images: [
        asset('/garbage1.jpg'),
        asset('/garbage2.jpg'),
        asset('/garbage3.jpg'),
      ],
    },
  ];

  const processSteps = [
    { num: "1", title: "UNDERSTAND", desc: "Analyze business requirements, user stories, and acceptance criteria." },
    { num: "2", title: "DESIGN & PLAN", desc: "Design intuitive interfaces and map out structured test case scenarios." },
    { num: "3", title: "BUILD", desc: "Engineer robust React frontends, backend APIs, and database schemas." },
    { num: "4", title: "TEST & QA", desc: "Execute manual functional, negative, boundary, SIT, and regression tests." },
    { num: "5", title: "REFINE & RETEST", desc: "Log defects, verify fixes through retesting, and validate UAT readiness." },
  ];

  const currentlyItems = [
    { label: "Looking for", value: "Entry-Level QA Engineer / Software Tester / Full-Stack opportunities" },
    { label: "Learning", value: "Test Automation (Selenium) · Postman API automated testing" },
    { label: "Testing & Building", value: "Workforce Allocation Optimizer & QA Test Suites" },
    { label: "Interested in", value: "Software Quality Assurance · STLC · Defect Life Cycle · Web Systems" },
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
              </div>
              <div className="case-title-row">
                <h3 className="case-title">{project.title}</h3>
              </div>
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
                <div className="case-meta-item">
                  <span className="case-meta-label">PROJECT TYPE</span>
                  <span className="case-meta-value">{project.client}</span>
                </div>
              </div>

              {/* CASE STUDY DETAILS */}
              <div className="case-study-block">
                <div className="case-study-item">
                  <span className="case-study-label">THE PROBLEM</span>
                  <p className="case-study-text">{project.problem}</p>
                </div>
                <div className="case-study-item">
                  <span className="case-study-label">MY APPROACH & QA METHOD</span>
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

      {/* ─── HOW I BUILD & TEST ─── */}
      <div className="process-section">
        <div className="process-header">
          <h2 className="process-title">HOW I BUILD & TEST</h2>
          <p className="process-note">
            I combine full-stack development with rigorous Quality Assurance practices — reviewing code, designing negative test cases, finding edge cases, and verifying fixes to ensure delivered software is dependable and production-ready.
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
