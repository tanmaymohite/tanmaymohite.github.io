import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';

function App() {
  // Application routing is managed via state to make the app incredibly quick,
  // responsive, and 100% compatible with static hostings like GitHub Pages.
  const [activePage, setActivePage] = useState('home');

  // Simple view resolver mapping page state to component layouts
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'blogs':
        return <Blogs />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Dynamic Viewport */}
      <main className="main-content">
        {renderActivePage()}
      </main>

      {/* Dynamic Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
