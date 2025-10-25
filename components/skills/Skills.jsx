// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
// import Coursework from './Coursework';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Skills 🛠️</h2>
      <br></br>
      {/* <span className="section__subtitle">My Technical Level</span> */}

      <div className="skills__container container">
        <Frontend />
      </div>
    </section>
  )
}

export default Skills