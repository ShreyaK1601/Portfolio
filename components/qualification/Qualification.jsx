// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';

const Qualification = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h2 className="qualification__title">Master of Science in Computer Science🎓</h2><br></br>
                <h3 className="qualification__subtitle">Arizona State University - Tempe, AZ</h3><br></br>
                <span className="qualification__subtitle">GPA : 3.9/4.0</span><br></br>
                <span className="qualification__subtitle">Coursework: Statistical Machine Learning, Cloud Computing, Knowledge Representation and Reasoning, Data Visualization, Software Design, Foundation of Algorithms</span><br></br>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2025 - Present (Expected May 2027)
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h2 className="qualification__title">Bachelor of Engineering in Computer Engineering</h2><br></br>
                <h3 className="qualification__title">Savitribai Phule Pune University - Pune, IND</h3><br></br>
                <span className="qualification__subtitle">GPA : 3.72/4.0</span><br></br>
                <span className="qualification__subtitle">Coursework: Data Structures and Algorithm, Object Oriented Programming, Software Engineering, Operating System, System Design, Database Management System, Web Application Development</span><br></br>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2019 - Apr 2023
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;