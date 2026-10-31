import story01 from '../assets/Stories/Morocco.jpg';
import story02 from '../assets/Stories/Egypt.jpg';
import story03 from '../assets/Stories/Arctic Circle.jpg';

import './FeaturedStories.css';

// Featured Stories Data
const stories = [
  {
    id: 1,
    category: 'TRAVEL GUIDE',
    title: 'A Journey Through the Morocco',
    description: 'Discover the breathtaking beauty of the Desert Morocco.',
    image: story01,
    featured: true
  },
  {
    id: 2,
    category: 'CULTURE',
    title: 'Discovering the Traditions of Egypt',
    description: 'Explore the timeless charm of Egypt culture.',
    image: story02,
    featured: false
  },
  {
    id: 3,
    category: 'ADVENTURE',
    title: 'Life Beyond the Arctic Circle',
    description: 'Experience the wild beauty of the Norwegian north.',
    image: story03,
    featured: false
  }
];

function FeaturedStories() {
  return (
    <section className="featured-stories" id="stories">

      {/* Section Header */}
      <div className="stories-header">
        <div>
          <p className="stories-label">
            03 — STORIES & INSPIRATION
          </p>

          <h2>
            Stories Worth Exploring
          </h2>

          <p className="stories-description">
            Inspiring stories, travel guides, and experiences
            from around the world.
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="stories-grid">

        {stories.map((story) => (
          <article
            className={`story-card ${story.featured ? 'story-card-featured' : ''}`}
            key={story.id}
          >

            <img
              className="story-image"
              src={story.image}
              alt={story.title}
            />

            <div className="story-overlay"></div>

            <div className="story-content">

              <span className="story-category">
                {story.category}
              </span>

              <h3>{story.title}</h3>

              <p>{story.description}</p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default FeaturedStories;