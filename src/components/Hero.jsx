import heroImg from '../assets/91436.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">

      <img
        className="hero-image"
        src={heroImg}
        alt="Beautiful mountain landscape"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">
          DISCOVER THE WORLD
        </p>

        <h1>
          Explore Beyond
          <br />
          The Ordinary.
        </h1>

        <p className="hero-description">
          Discover extraordinary places, explore new destinations,
          and create unforgettable memories.
        </p>

        <a href="#explore" className="hero-button">
          Start Exploring
        </a>
      </div>

    </section>
  );
}
export default Hero;