import '../styles/About.css';

import { useEffect, useRef, useState } from 'react';

function About() {

  const aboutRef = useRef(null);

  const [animate, setAnimate] = useState(false);

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
        threshold: 0.4,
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

  return (
    <section
      id="about"
      className="about-me-intro"
      ref={aboutRef}
    >
      <div className="about-content-container">

        <h2 className={`about-title ${animate ? 'animate-text' : ''}`}>ABOUT ME</h2>

        <div className="about-segments">
          {/* SEGMENT 1: EDUCATION */}
          <div className={`about-segment education ${animate ? 'animate-segment-left' : ''}`}>
            <div className="about-collage-wrapper education-collage">
              <img
                src={`${process.env.PUBLIC_URL}/educ1.jpg`}
                alt="Education Collage 1"
                className="collage-img img1"
              />
              <img
                src={`${process.env.PUBLIC_URL}/educ2.jpg`}
                alt="Education Collage 2"
                className="collage-img img2"
              />
              <img
                src={`${process.env.PUBLIC_URL}/educ3.jpg`}
                alt="Education Collage 3"
                className="collage-img img3"
              />
            </div>

            <div className="about-segment-text">
              <div className="about-header-row">
                <svg className="about-arrow arrow-education" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 10 10 L 10 30 L 30 30" />
                  <polyline points="22 22 30 30 22 38" />
                </svg>
                <h3>Education</h3>
              </div>
              <ul className="about-list">
                <li>Graduated Bachelor of Science in Information Technology, Major in Software Engineering, 2026</li>
                <li>Trinity University of Asia, 2022-2026</li>
              </ul>
            </div>
          </div>

          {/* SEGMENT 2: WORK EXPERIENCE */}
          <div className={`about-segment experience ${animate ? 'animate-segment-right' : ''}`}>
            <div className="about-collage-wrapper experience-collage">
              <img
                src={`${process.env.PUBLIC_URL}/work1.jpg`}
                alt="Work Experience Collage 1"
                className="collage-img img1"
              />
              <img
                src={`${process.env.PUBLIC_URL}/work2.jpg`}
                alt="Work Experience Collage 2"
                className="collage-img img2"
              />
              <img
                src={`${process.env.PUBLIC_URL}/work3.jpg`}
                alt="Work Experience Collage 3"
                className="collage-img img3"
              />
            </div>

            <div className="about-segment-text">
              <div className="about-header-row">
                <h3>Work Experience</h3>
                <svg className="about-arrow arrow-experience" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 30 30 L 30 10 L 10 10" />
                  <polyline points="18 18 10 10 18 2" />
                </svg>
              </div>
              <ul className="about-list">
                <li>Web Developer Intern at International Academy Manila, 2026</li>
                <li>Full-Stack Developer — Academic & Capstone Projects</li>
                <li>Frontend Developer — React.js & React Native Projects</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;