
import './About.css';

import aboutHero from '../assets/91436.jpg';
import exploreImage from '../assets/About/About03.jpg';
import discoverImage from '../assets/About/About04.jpg';
import experienceImage from '../assets/About/About05.jpg';

function About() {
  return (
    <main className="about-page">

      {/* 01. About Hero */}
      <section className="about-hero">

        <img
          src={aboutHero}
          alt="WildAtlas landscape"
          className="about-hero-image"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p>ABOUT WILDATLAS</p>

          <h1>
            The World
            <br />
            Is Waiting.
          </h1>

          <span>
            Discover the world beyond the ordinary.
          </span>
        </div>

      </section>


      {/* 03. Our Philosophy */}
      <section className="our-philosophy">

        <div className="philosophy-header">
          <p className="about-label">01 — OUR PHILOSOPHY</p>

          <h2>Three Ways to See the World.</h2>

          <p>
            Every journey begins with curiosity.
            Discover what makes each experience meaningful.
          </p>
        </div>

        <div className="philosophy-grid">

          <article className="philosophy-card">
            <img src={exploreImage} alt="Explore the world" />

            <div className="philosophy-card-content">
              <span>01</span>
              <h3>Explore</h3>
              <p>
                Step beyond the familiar and embrace the unknown.
              </p>
            </div>
          </article>

          <article className="philosophy-card">
            <img src={discoverImage} alt="Discover new cultures" />

            <div className="philosophy-card-content">
              <span>02</span>
              <h3>Discover</h3>
              <p>
                Find inspiration in cultures, places, and hidden stories.
              </p>
            </div>
          </article>

          <article className="philosophy-card">
            <img src={experienceImage} alt="Experience new places" />

            <div className="philosophy-card-content">
              <span>03</span>
              <h3>Experience</h3>
              <p>
                Make every journey a meaningful experience.
              </p>
            </div>
          </article>

        </div>

      </section>

      {/* 05. Closing Section */}
      <section className="about-closing">

        <h2>
          Your Next Journey
          <br />
          Starts Here.
        </h2>

        <p>
          The world is full of places to discover and stories
          to experience. Where will your curiosity take you next?
        </p>
      </section>

        {/* ROLE SELECTION */}
        <section className="roles-section">

        <div className="roles-grid">

            <article className="role-card">
            <img src="/images/naturalist.png" alt="Naturalist" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Naturalist</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/moonshiner.jpg" alt="Moonshiner" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Moonshiner</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/collector.jpg" alt="Collector" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Collector</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/bounty-hunter.jpg" alt="Bounty Hunter" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Bounty Hunter</h3>
            </div>
            </article>

            <article className="role-card">
            <img src="/images/trader.png" alt="Trader / Merchant" />
            <div className="role-overlay"></div>
            <div className="role-content">
                <h3>Trader / Merchant</h3>
            </div>
            </article>

        </div>
        </section>
    </main>
  );
}

export default About;
