import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Node.js"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "React Native", "HTML", "CSS", "Bootstrap", "React Router", "Axios"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "TypeScript", "MongoDB", "RESTful APIs", "JWT Authentication", "bcrypt", "Multer", "dotenv", "CORS", "AWS SDK"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS S3", "AWS SDK", "Netlify", "Render", "Vercel"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "WordPress", "Jira", "Slack"]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 