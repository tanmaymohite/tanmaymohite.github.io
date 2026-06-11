import React from 'react';
import { FaArrowRight, FaCode, FaServer, FaTerminal, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Home.css';
import projectsData from '../data/projects.json';
import homeData from '../data/home.json';

const iconMap = {
  code: <FaCode className="highlight-icon icon-cyan" />,
  server: <FaServer className="highlight-icon icon-blue" />,
  terminal: <FaTerminal className="highlight-icon icon-green" />
};

function Home({ setActivePage }) {
  const { heroSection, highlightsSection, featuredSection } = homeData;
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);
  const highlights = highlightsSection.highlights;

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="glow-blob blob-cyan"></div>
        <div className="glow-blob blob-blue"></div>
        
        <div className="hero-text-container">
          <p className="hero-greeting">{heroSection.greeting}</p>
          <h1 className="hero-title">{heroSection.name}</h1>
          <h2 className="hero-subtitle">{heroSection.subtitle}</h2>
          <p className="hero-description">
            {heroSection.description}
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setActivePage(heroSection.primaryButton.targetPage)}>
              {heroSection.primaryButton.label} <FaArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage(heroSection.secondaryButton.targetPage)}>
              {heroSection.secondaryButton.label}
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights-section slide-up anim-delay-1">
        <div className="section-header">
          <h2 className="section-title">{highlightsSection.title}</h2>
          <p className="section-subtitle">{highlightsSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-3">
          {highlights.map((item, index) => (
            <div key={index} className="glass-card highlight-card">
              <div className="highlight-icon-wrapper">{iconMap[item.iconKey]}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-section slide-up anim-delay-2">
        <div className="section-header">
          <h2 className="section-title">{featuredSection.title}</h2>
          <p className="section-subtitle">{featuredSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-description-short">{project.description}</p>
              
              <div className="project-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Source">
                    <FaGithub /> Source
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn primary-link" title="Live Preview">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="more-projects-link">
          <button className="btn btn-secondary" onClick={() => setActivePage(featuredSection.ctaButton.targetPage)}>
            {featuredSection.ctaButton.label} <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
