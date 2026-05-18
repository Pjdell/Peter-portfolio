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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };

  }, []);

  return (

    <section
      id="about"
      className="about-me-intro"
      ref={aboutRef}
    >

      <div className="moonwalk-container">

        {/* MJ GIF */}
        <div className={`mj-figure ${animate ? 'animate-mj' : ''}`}>

          <video
            src={`${process.env.PUBLIC_URL}/0517.mp4`}
            alt="pj-typing"
            className="mj-gif"
            autoPlay
            loop
            muted
          />

        </div>

        {/* TEXT */}
        <div className={`intro-text-box ${animate ? 'animate-text' : ''}`}>

          <h3 className="intro-heading">
            About Me
          </h3>

          <p className="intro-lead">
            Aspiring Web Developer  
          </p>

          <p className="intro-bio">
            I'm a passionate web developer with a love for creating websites that are not onlt visually appealing
            but also beneficial for the community. I have a background in developing websites using HTML,CSS, ReactJS, PHP, MySQL, and PosgreSQL. I am always eager to learn new technologies and improve my skills to create better web experiences.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;