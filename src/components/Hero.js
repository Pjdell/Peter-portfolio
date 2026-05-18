import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">

      {/* 🌟 STAR BACKGROUND LAYER */}
<div className="stars-container">

  {Array.from({ length: 80 }).map((_, i) => (
    <span
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 3}s`
      }}
    />
  ))}

</div>

      {/* LEFT SIDE */}
      <div className="hero-left">

        <h1>Hello, I'm Peter  Joshua E. Deloria</h1>

        <p>Web Developer | Frontend Developer</p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            View Projects
          </a>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div className="image-wrapper">

          {/* animated waves behind image */}
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>

          <img
            src={`${process.env.PUBLIC_URL}/formalPic.jpg`}
            alt="Profile"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;