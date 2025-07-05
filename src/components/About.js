import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Full Stack Developer passionate about creating innovative web solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I'm a Full Stack Developer with hands-on experience in building and deploying 
              scalable web applications using React.js, React Native, Node.js, Express.js, 
              TypeScript, and MongoDB.
            </p>
            <p>
              Skilled in designing secure RESTful APIs, creating responsive frontend interfaces, 
              and deploying full-stack applications using platforms like Render, Netlify, and AWS S3. 
              Proficient with tools and libraries including Axios, JWT, Multer, and bcrypt.
            </p>
            <p>
              I'm a strong team player with a commitment to writing clean, maintainable code 
              and delivering end-to-end solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stat-item">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>2</h3>
              <p>NPM Packages</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 