import dolomitesImg from '../assets/Destination/Des01.jpg';
import kyotoImg from '../assets/Destination/Des02.jpg';
import lofotenImg from '../assets/Destination/Des03.jpg';
import amalfiImg from '../assets/Destination/Des04.jpg';
import './Destination.css';

// Destination Data
const destinations = [
  {
    id: 1,
    name: 'Dolomites',
    country: 'Italy',
    category: 'Mountain',
    image: dolomitesImg
  },
  {
    id: 2,
    name: 'Kyoto',
    country: 'Japan',
    category: 'Culture',
    image: kyotoImg
  },
  {
    id: 3,
    name: 'Lofoten Islands',
    country: 'Norway',
    category: 'Nature',
    image: lofotenImg
  },
  {
    id: 4,
    name: 'Amalfi Coast',
    country: 'Italy',
    category: 'Coastal',
    image: amalfiImg
  }
];

function Destination() {
  return (
    <section className="destination" id="explore">

      {/* Section Header */}
      <div className="destination-header">
        <p className="destination-label">
          EXPLORE THE WORLD
        </p>

        <h2>Discover Your Next Destination</h2>

        <p className="destination-description">
          Find inspiration for your next unforgettable journey.
        </p>
      </div>

      {/* Destination Grid */}
      <div className="destination-grid">

        {destinations.map((place) => (
          <article className="destination-card" key={place.id}>

            <img
              src={place.image}
              alt={place.name}
            />

            <div className="destination-card-content">

              <span className="destination-category">
                {place.category}
              </span>

              <h3>{place.name}</h3>

              <p>{place.country}</p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Destination;