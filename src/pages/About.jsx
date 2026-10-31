
import { Link } from 'react-router-dom';
import './About.css';

import aboutHero from '../assets/About/About01.jpg';
import storyImage from '../assets/About/About02.jpg';
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


      {/* 02. Our Story */}
      <section className="our-story">

        <div className="story-image-wrapper">
          <img src={storyImage} alt="A journey through nature" />
        </div>

        <div className="story-content">

          <p className="about-label">01 — OUR STORY</p>

          <h2>
            A World Beyond
            <br />
            the Map.
          </h2>

          <p>
            WildAtlas was created for those who seek more
            than just a destination. We believe that traveling
            is about discovering new perspectives, experiencing
            different cultures, and finding beauty in places
            both familiar and unknown.
          </p>

          <p>
            Through carefully selected destinations and
            inspiring travel stories, WildAtlas invites you
            to explore the world with curiosity and an open mind.
          </p>

        </div>

      </section>


      {/* 03. Our Philosophy */}
      <section className="our-philosophy">

        <div className="philosophy-header">
          <p className="about-label">02 — OUR PHILOSOPHY</p>

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


      {/* 04. What You'll Find */}
      <section className="what-youll-find">

        <div className="find-header">
          <p className="about-label">03 — WHAT YOU'LL FIND</p>

          <h2>Your Guide to Somewhere New.</h2>
        </div>

        <div className="find-list">

          <div className="find-item">
            <span>01</span>
            <h3>Destinations</h3>
            <p>Discover remarkable places around the world.</p>
          </div>

          <div className="find-item">
            <span>02</span>
            <h3>Travel Stories</h3>
            <p>Explore stories and inspiration from different journeys.</p>
          </div>

          <div className="find-item">
            <span>03</span>
            <h3>Travel Guides</h3>
            <p>Find useful insights for your next adventure.</p>
          </div>

          <div className="find-item">
            <span>04</span>
            <h3>Culture & Lifestyle</h3>
            <p>Experience the traditions and lifestyles of different places.</p>
          </div>

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

        <Link to="/#explore" className="closing-button">
          START EXPLORING <span>↗</span>
        </Link>

      </section>

    </main>
  );
}

export default About;
