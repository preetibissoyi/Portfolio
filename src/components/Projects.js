import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaNpm } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "@yourname/secure-storage",
      description: "A secure, framework-agnostic JavaScript library for encrypted client-side storage. Implements AES-256 encryption using the Web Crypto API with automatic key management and optional TTL-based expiration.",
      tech: ["JavaScript", "TypeScript", "Web Crypto API", "Vitest", "tsup"],
      role: "Author / Maintainer",
      links: {
        npm: "https://www.npmjs.com/package/@yourname/secure-storage",
        github: "https://github.com/preetibissoyi/secure-storage"
      },
      featured: true
    },
    {
      title: "i18next-ai",
      description: "A CLI tool that automates the translation of missing i18n keys using OpenAI's GPT model. Parses and compares JSON locale files, detects untranslated keys, and updates them in-place.",
      tech: ["TypeScript", "Node.js", "OpenAI API", "i18next", "Commander.js"],
      role: "Author / Maintainer",
      links: {
        npm: "https://www.npmjs.com/package/i18next-ai",
        github: "https://github.com/preetibissoyi/i18next-ai"
      },
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Published NPM packages and featured work
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              
              <p className="project-role">{project.role}</p>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.links.npm && (
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link npm-link"
                  >
                    <FaNpm />
                    <span>NPM</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 