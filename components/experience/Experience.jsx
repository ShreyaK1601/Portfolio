/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Technical Experience 💼</h2>
        <span className="section__subtitle">Where I have worked</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-graduation-cap exp__icon"></i>
                    <h3 className="exp__title">Grader <br /> CSE 575 <br /> Statistical ML</h3>
                </div>

                <div>
                    <span className="exp__comp">Arizona State University</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Grader, CSE 575 Statistical Machine Learning <br /> Aug 2026 - Present</h3>
                        <p className="exp__modal-description">Graduate grader for CSE 575 Statistical Machine Learning at Arizona State University, under Professor Yingzhen Yang.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Grade homework assignments, exams, and course projects for CSE 575, applying consistent rubrics and giving feedback that helps students correct their reasoning.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Hold weekly office hours (2 hrs/week), answering student questions on course material, assignments, and machine learning concepts.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Reinforce core statistical machine learning topics, including supervised and unsupervised learning, model evaluation, and optimization.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Malware <br /> Analyst and <br /> Threat Researcher </h3>
                </div>

                <div>
                    <span className="exp__comp">LTIMindtree Ltd.</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Malware Analyst and Threat Researcher <br /> Aug 2023 - May 2025</h3>
                        <p className="exp__modal-description">Designed and automated a large-scale malware analysis pipeline that processed 5K+ executables daily, improving endpoint security across 100K+ devices.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Implemented reverse engineering and static/dynamic analysis, improving detection accuracy by 35% and reducing false positives by 60%.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Developed advanced threat classification algorithms for PE, Non-PE, and PDF/UWP files integrating ML-based detection models.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Reverse-engineered 300+ .NET/MSIL binaries with x64dbg, OllyDbg, DnSpy, and Wireshark to build zero-day signatures mapped to MITRE ATT&amp;CK.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Software <br /> Developer <br/> Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">LTIMindtree Ltd.</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer Intern <br /> Feb 2023 - May 2023</h3>
                        <p className="exp__modal-description">Implemented core Java modules leveraging JDBC for secure database connectivity and SQL operations, contributing to global financial services platform.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Built interactive, component-based web solutions using Angular and TypeScript, improving UI responsiveness and enabling secure data visualization.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Worked with cross-functional teams to integrate and optimize REST and GraphQL APIs across two enterprise applications.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Consistently demonstrated high technical proficiency and team collaboration, earning the 'Star Performer' award for achievements.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
