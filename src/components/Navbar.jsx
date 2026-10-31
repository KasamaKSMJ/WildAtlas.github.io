import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        WILDATLAS.
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <a href="#explore">Books</a>
        <a href="#encyclopedia">Encyclopedia</a>
        <Link to="/about">About</Link>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-action">
        <a href="/#explore">Start Exploring</a>
      </div>

    </nav>
  );
}

export default Navbar;
