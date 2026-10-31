function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        WILDATLAS.
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#explore">Books</a>
        <a href="#encyclopedia">Encyclopedia</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-action">
        <a href="#explore">Start Exploring</a>
      </div>

    </nav>
  );
}

export default Navbar;
