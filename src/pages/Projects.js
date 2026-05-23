import React, { useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import './Projects.css';
import projectsData from '../data/projects.json';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract unique categories from projects config
  const categories = useMemo(() => {
    const allCats = projectsData.map(p => p.category);
    return ['All', ...new Set(allCats)];
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="projects-page fade-in">
      <div className="glow-blob blob-blue"></div>

      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A collection of academic, professional, and open-source applications</p>
      </div>

      {/* Filters and Search Bar Container */}
      <div className="controls-container glass-card">
        {/* Search */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search projects by name, technology, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories Tab Buttons */}
        <div className="categories-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-2 projects-grid">
          {filteredProjects.map((project) => (
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
      ) : (
        <div className="no-projects glass-card">
          <h3>No projects found</h3>
          <p>Try refining your search query or choosing another category filter.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
