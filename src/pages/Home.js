import React from 'react';
import { FaArrowRight, FaCode, FaServer, FaTerminal, FaBrain, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Home.css';
import projectsData from '../data/projects.json';

function Home({ setActivePage }) {
  // Extract only featured projects
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);

  const highlights = [
    {
      icon: <FaCode className="highlight-icon icon-cyan" />,
      title: "Frontend Engineering",
      desc: "Creating high-fidelity, responsive user interfaces with focus on semantic structure, clean layouts, and rich micro-interactions."
    },
    {
      icon: <FaServer className="highlight-icon icon-blue" />,
      title: "Backend Architectures",
      desc: "Designing secure, Dockerized microservices, high-speed RESTful/gRPC APIs, and robust relational & NoSQL databases."
    },
    {
      icon: <FaTerminal className="highlight-icon icon-green" />,
      title: "CLI & System Utilities",
      desc: "Developing fast, thread-safe command line tools and automated script workflows in Go, Python, and shell scripts."
    }
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="glow-blob blob-cyan"></div>
        <div className="glow-blob blob-blue"></div>
        
        <div className="hero-text-container">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Tanmay Mohite.</h1>
          <h2 className="hero-subtitle">I build things.</h2>
          <p className="hero-description">
            I am a passionate computer science student specializing in constructing modern frontend architectures, high-performance CLI utilities, and robust backend systems. Let's create something exceptional!
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setActivePage('projects')}>
              View Projects <FaArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('about')}>
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights-section slide-up anim-delay-1">
        <div className="section-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">My core focus areas and engineering competencies</p>
        </div>
        <div className="grid grid-cols-3">
          {highlights.map((item, index) => (
            <div key={index} className="glass-card highlight-card">
              <div className="highlight-icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-section slide-up anim-delay-2">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A curated selection of my recent works</p>
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
          <button className="btn btn-secondary" onClick={() => setActivePage('projects')}>
            Browse All Projects <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
