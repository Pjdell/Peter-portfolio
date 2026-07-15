import React, { useState, useRef, useEffect } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const draggedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const projects = [
    {
      title: "School Management System for International Academy Manila",
      image: asset('/IAM.png'),
      description: "Enhanced usability and accessibility of the portal, improving the experience for students and staff across devices while maintaining  quality and design consistency."
    },
    {
      title: "Multi-Criteria Decision Support System",
      image: asset('/inprogress.jpg'),
      description: "Designed to assist higher education institutions in faculty hiring and teaching load allocation. "
    },
    {
      title: "TUA Marketplace",
      image: asset('/tua.jpg'),
      description: "Collaborated in a team to develop a campus marketplace using React.js, PHP, and MySQL,featuring AI-based product recommendations and buyer-seller messaging."
    },
    {
      title: "Pasig Garbage Tracking System",
      image: asset('/garbage.jpg'),
      description: " Enabled users to track garbage trucks within their location (Pasig City), improving community waste management efficiency."
    },
    {
      title: "Pasig Garbage Tracking System (Map Integration)",
      image: asset('/map.jpg'),
      description: "Integrated OpenStreetMap API and React Leaflet for real-time location tracking."
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
      if (!isPaused) {
        carousel.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    draggedRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStartRef.current = carouselRef.current.scrollLeft;
    setIsPaused(true);
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
      setIsPaused(false);
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
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
        className="carousel"
        mask="true"
        style={{ "--items": projects.length }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        onClickCapture={handleClickCapture}
      >
        <div className="carousel-track">
          {loopedProjects.map((project, index) => (
            <article key={`${project.title}-${index}`}>
              <img
                src={project.image}
                alt={project.title}
                onClick={() => setSelectedProject(project)}
                className="project-image-clickable"
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
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="image-popup-img"
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