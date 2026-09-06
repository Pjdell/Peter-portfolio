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
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const draggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const projects = [
    {
      title: "School Management System for International Academy Manila",
      images: [
        asset('/iamport1.jpg'),
        asset('/iamport2.jpg'),
        asset('/iamport3.jpg'),
      ],
      description: "Enhanced usability and accessibility of the portal, improving the experience for students and staff across devices while maintaining  quality and design consistency."
    },
    {
      title: "Work-Allocation Optimizer",
      images: [
        asset('/inprogress.jpg'),
      ],
      description: "Designed to help organizations efficiently assign employees to projects based on skills, availability, workload, and project requirements. "
    },
    {
      title: "TUA Marketplace",
      images: [
        asset('/tua.jpg'),
        asset('/tuamar2.jpg'),
        asset('/tuamar3.jpg'),
      ],
      description: "Collaborated in a team to develop a campus marketplace using React.js, PHP, and MySQL,featuring AI-based product recommendations and buyer-seller messaging."
    },
    {
      title: "Pasig Garbage Tracking System",
      images: [
        asset('/garbage1.jpg'),
        asset('/garbage2.jpg'),
        asset('/garbage3.jpg'),
      ],
      description: " Enabled users to track garbage trucks within their location (Pasig City), improving community waste management efficiency."
    },

  ];

  const loopedProjects = [...projects, ...projects];

  // Initialize scroll position to the start of the second set of projects for infinite feel in both directions
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    if (!track || track.children.length < projects.length) return;

    const firstCard = track.children[0];
    const nextSetCard = track.children[projects.length];
    if (!firstCard || !nextSetCard) return;

    const S = nextSetCard.offsetLeft - firstCard.offsetLeft;
    carousel.scrollLeft = S;
  }, [projects.length]);

  // Autoplay loop using requestAnimationFrame
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    const speed = 0.6; // Scroll speed (pixels per frame)

    const step = () => {
      // Only auto-scroll if not actively dragging
      if (!isDraggingRef.current) {
        carousel.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    draggedRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStartRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;

    if (Math.abs(walk) > 5) {
      draggedRef.current = true;
    }

    carouselRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  const handleTouchStart = () => {
    isDraggingRef.current = true;
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    if (!track || track.children.length < projects.length) return;

    const firstCard = track.children[0];
    const nextSetCard = track.children[projects.length];
    if (!firstCard || !nextSetCard) return;

    const S = nextSetCard.offsetLeft - firstCard.offsetLeft;

    if (carousel.scrollLeft >= S * 1.5) {
      carousel.scrollLeft -= S;
    } else if (carousel.scrollLeft <= S * 0.5) {
      carousel.scrollLeft += S;
    }
  };

  const handleClickCapture = (e) => {
    if (draggedRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        PROJECTS
      </h2>

      <div
        ref={carouselRef}
        className={`carousel ${isDragging ? 'dragging' : ''}`}
        mask="true"
        style={{ "--items": projects.length }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        onClickCapture={handleClickCapture}
      >
        <div className="carousel-track">
          {loopedProjects.map((project, index) => (
            <article key={`${project.title}-${index}`}>
              <ImageSlideshow
                images={project.images}
                alt={project.title}
                variant="card"
                onImageClick={() => setSelectedProject(project)}
              />
              <h2>{project.title}</h2>
              <div>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

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