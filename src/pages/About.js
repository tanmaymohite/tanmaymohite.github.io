import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaTools } from 'react-icons/fa';
import './About.css';
import aboutData from '../data/about.json';

const iconMap = {
  code: <FaCode className="about-icon text-glow-cyan" />,
  server: <FaServer className="about-icon text-glow-blue" />,
  tools: <FaTools className="about-icon text-glow-cyan" />,
  briefcase: <FaBriefcase className="about-icon text-glow-green" />,
  graduationCap: <FaGraduationCap className="about-icon text-glow-blue" />
};

function About() {
  const { introParagraphs, skillsSection, timelineSection } = aboutData;
  const { categories: skillCategories } = skillsSection;
  const timelineItems = timelineSection.items;

  return (
    <div className="about-page fade-in">
      <div className="glow-blob blob-cyan"></div>

      {/* Intro Header */}
      <section className="section about-intro">
        <h2 className="section-title">{aboutData.pageTitle}</h2>
        <div className="intro-container glass-card">
          <div className="intro-text">
            {introParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section skills-section slide-up anim-delay-1">
        <div className="section-header">
          <h2 className="section-title">{skillsSection.title}</h2>
          <p className="section-subtitle">{skillsSection.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-card-header">
                {iconMap[category.iconKey]}
                <h3>{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section slide-up anim-delay-2">
        <div className="section-header">
          <h2 className="section-title">{timelineSection.title}</h2>
          <p className="section-subtitle">{timelineSection.subtitle}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-icon-node ${item.type === 'work' ? 'work-node' : 'edu-node'}`}>
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-org">{item.organization}</span>
                  </div>
                  <span className="timeline-duration badge">{item.duration}</span>
                </div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
