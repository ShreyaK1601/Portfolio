// eslint-disable-next-line no-unused-vars
import React from 'react';
import { skillGroups } from './Data';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">The tools I build with</span>

      <div className="skills__container container grid">
        {skillGroups.map((group) => (
          <div className="skills__content" key={group.id}>
            <div className="skills__header">
              <i className={`${group.icon} skills__icon`}></i>
              <h3 className="skills__title">{group.title}</h3>
            </div>

            <div className="skills__list">
              {group.skills.map((skill) => (
                <span className="skills__pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
