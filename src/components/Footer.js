import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Copyright */}
        <div className="footer-copyright">
          <p>© {currentYear} Tanmay Mohite. Built with React & Passion.</p>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="footer-socials">
          <a
            href="https://github.com/tanmaymohite"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tanmaymohite"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tanmaymohite"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter Profile"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:tanmaymohite@email.com"
            className="social-link"
            aria-label="Email Contact"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
