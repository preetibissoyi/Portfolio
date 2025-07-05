import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: "Software Developer",
      company: "Xappsoft Technologies Pvt Ltd",
      period: "Jun 2024 – Jul 2025",
      description: [
        "Designed scalable cloud-based systems using AWS S3, Node.js, MongoDB, and TypeScript",
        "Integrated npm packages including bcrypt, jsonwebtoken, multer, and aws-sdk",
        "Optimized backend APIs and implemented reusable modules"
      ]
    },
    {
      title: "Software Developer",
      company: "Livoso Technologies Pvt Ltd",
      period: "May 2023 – Jan 2024",
      description: [
        "Built responsive UIs using React.js, Bootstrap, and React Router",
        "Implemented JWT-based authentication, file handling with Multer, and used Git for version control"
      ]
    },
    {
      title: "Trainee Developer",
      company: "FunctionUp",
      period: "Jan 2023 – Apr 2023",
      description: [
        "Built backend services using Node.js, Express.js, and MongoDB",
        "Strengthened debugging and API design skills through real-world projects"
      ]
    },
    {
      title: "Software Developer",
      company: "SiweTech Pvt Ltd",
      period: "Sept 2021 – Dec 2022",
      description: [
        "Developed RESTful APIs using Node.js and Express.js",
        "Integrated APIs with frontend using Axios and optimized MongoDB queries"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 