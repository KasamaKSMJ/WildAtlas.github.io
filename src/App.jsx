
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Destination from './components/Destination.jsx';
import FeaturedStories from './components/FeaturedStories.jsx';
import About from './pages/About.jsx';

import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <FeaturedStories />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;