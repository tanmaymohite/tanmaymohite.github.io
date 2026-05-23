import React, { useState, useMemo } from 'react';
import { FaSearch, FaCalendarAlt, FaClock, FaArrowLeft, FaTimes } from 'react-icons/fa';
import './Blogs.css';
import blogsData from '../data/blogs.json';

function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  // Search filter
  const filteredBlogs = useMemo(() => {
    return blogsData.filter(blog => {
      const query = searchQuery.toLowerCase();
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.summary.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  return (
    <div className="blogs-page fade-in">
      <div className="glow-blob blob-cyan"></div>

      {/* Main Listing View (Only shown if no article is open) */}
      {!activeArticle ? (
        <>
          <div className="section-header">
            <h2 className="section-title">My Writings</h2>
            <p className="section-subtitle">Deep dives, technical guides, and architectural notes</p>
          </div>

          {/* Search bar */}
          <div className="search-blogs-container glass-card">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="form-input search-input"
                placeholder="Search articles by title, tag, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Blogs list */}
          {filteredBlogs.length > 0 ? (
            <div className="blogs-list">
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className="glass-card blog-card-item" onClick={() => setActiveArticle(blog)}>
                  <div className="blog-metadata">
                    <span className="meta-info"><FaCalendarAlt /> {blog.date}</span>
                    <span className="meta-info"><FaClock /> {blog.readTime}</span>
                  </div>
                  
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-summary">{blog.summary}</p>
                  
                  <div className="blog-tags-row">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="badge badge-blue">{tag}</span>
                    ))}
                  </div>

                  <span className="read-more-link">Read Article →</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs glass-card">
              <h3>No articles found</h3>
              <p>Try refining your search keyword.</p>
            </div>
          )}
        </>
      ) : (
        /* Reading Viewer Mode */
        <div className="blog-viewer glass-card slide-up">
          <button className="back-btn btn btn-secondary" onClick={() => setActiveArticle(null)}>
            <FaArrowLeft /> Back to Articles
          </button>
          
          <header className="viewer-header">
            <div className="blog-metadata">
              <span className="meta-info"><FaCalendarAlt /> {activeArticle.date}</span>
              <span className="meta-info"><FaClock /> {activeArticle.readTime}</span>
            </div>
            <h1 className="viewer-title">{activeArticle.title}</h1>
            <div className="blog-tags-row">
              {activeArticle.tags.map((tag) => (
                <span key={tag} className="badge badge-blue">{tag}</span>
              ))}
            </div>
          </header>

          <hr className="viewer-divider" />

          {/* Render article body content formatted with paragraphs */}
          <div className="viewer-content">
            {activeArticle.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
