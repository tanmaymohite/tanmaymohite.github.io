import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaTools } from 'react-icons/fa';
import './About.css';

function About() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="about-icon text-glow-cyan" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "Go (Golang)", "Python", "HTML5 & CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaServer className="about-icon text-glow-blue" />,
      skills: ["React.js", "Node.js", "Express", "FastAPI", "Three.js"]
    },
    {
      title: "Tools & Infrastructure",
      icon: <FaTools className="about-icon text-glow-cyan" />,
      skills: ["Git & GitHub", "Docker", "MongoDB", "PostgreSQL", "Linux / Bash"]
    }
  ];

  const timelineItems = [
    {
      type: "work",
      title: "Full Stack Engineering Intern",
      organization: "TechCorp Labs",
      duration: "May 2025 - August 2025",
      desc: "Architected modern responsive dashboards using React and integrated robust server configurations. Improved page-load speed by 35% through efficient asset optimization and state caching."
    },
    {
      type: "education",
      title: "B.Tech in Computer Science & Engineering",
      organization: "State Technical University",
      duration: "2023 - Present",
      desc: "Maintaining a 9.2/10 CGPA. Core focus areas include Advanced Data Structures, Operating Systems, Database Management Systems, and Software Architecture principles."
    },
    {
      type: "work",
      title: "Open Source Core Contributor",
      organization: "Go CLI Ecosystems",
      duration: "2024 - Present",
      desc: "Actively contributing to open-source terminal interface builders. Implemented lightweight networking adapters and optimized window resizing event listeners."
    }
  ];

  return (
    <div className="about-page fade-in">
      <div className="glow-blob blob-cyan"></div>

      {/* Intro Header */}
      <section className="section about-intro">
        <h2 className="section-title">About Me</h2>
        <div className="intro-container glass-card">
          <div className="intro-text">
            <p>
              Hello! I'm Tanmay, a technology enthusiast and computer science student who loves engineering applications that sit at the intersection of high utility and visual beauty. My software journey started when I built simple automation scripts in python, which quickly expanded into creating high-performance web systems and customizable terminal widgets.
            </p>
            <p>
              I focus on writing clean, accessible, and self-documenting code. I enjoy working on challenges that involve concurrent systems, modular frontend design systems, and fast network streaming.
            </p>
            <p>
              Outside of programming, I actively review technological research articles, participate in hackathons, and collaborate on developer tools.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section skills-section slide-up anim-delay-1">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and toolsets I work with daily</p>
        </div>
        
        <div className="grid grid-cols-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-card-header">
                {category.icon}
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
          <h2 className="section-title">Timeline</h2>
          <p className="section-subtitle">My professional and academic journey so far</p>
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
