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
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Malware Analyst and Threat Researcher </h3>
                </div>

                <div>
                    <h4 className="exp__comp" style={{ textAlign: "center" }}>LTI Mindtree Ltd.</h4>
                </div>
                <br></br>

                {/* <h3 className="exp__modal-title">Malware Analyst and Threat Researcher <br /> Aug 2023 - May 2025</h3>
                        <p className="exp__modal-description">Implemented advanced threat detection algorithms for PE, Non-PE, and PDF/UWP files, improving endpoint security across 100K+ devices.
                        </p> */}

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developed and deployed a fully automated malware analysis pipeline capable of processing 5,000+ executables per day, leveraging machine learning–based static analysis to detect malicious patterns and streamline threat evaluation.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Eliminated manual screening bottlenecks, enabling faster incident response, higher scalability, and improved detection reliability — achieving a 60% reduction in false positives and a 40% cut in triage time.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Engineered modular threat classification algorithms for PE, Non-PE, and PUA/UWS files, allowing automated rule generation and dynamic threat mapping. Integrated the models into Microsoft Defender’s engine, boosting real-time protection and reducing manual rule updates by 25%.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Performed deep reverse engineering and debugging of 300+ .NET/MSIL binaries using x64dbg, OllyDbg, DnSpy, and Wireshark to uncover obfuscation and network-level evasion patterns, enabling creation of zero-day detection signatures aligned with MITRE ATT&CK.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Collaborated with cybersecurity and DevSecOps teams to automate rule deployment and configuration management using Jenkins and Ansible within CI/CD pipelines, reducing release cycles by 35% and ensuring faster threat response.</p>
                            </li>

                        </ul>

                {/* <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Malware Analyst and Threat Researcher <br /> Aug 2023 - May 2025</h3>
                        <p className="exp__modal-description">Implemented advanced threat detection algorithms for PE, Non-PE, and PDF/UWP files, improving endpoint security across 100K+ devices.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Implemented reverse engineering and static/dynamic analysis, improving detection accuracy by 35% and reducing false positives by 60%.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developed advanced threat classification algorithms for PE, Non-PE, and PDF/UWP files integrating ML-based detection models.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Enhanced security for Splunk, OneDrive, Office365, and SAP/SIEM systems (Splunk, Wazuh), enhancing endpoint security across 100K+ devices.</p>
                            </li>

                        </ul>
                    </div>
                </div> */}
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Software Developer Intern</h3>
                </div>

                 <div>
                    <h4 className="exp__comp" style={{ textAlign: "center" }}>LTI Mindtree Ltd.</h4>
                </div>

                <br></br>

                <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Engineered two full-stack enterprise applications — Digital Banking and Claims Processing — using Angular, TypeScript, and Java (Spring Boot, JDBC) to deliver 99%+ system uptime and handle 10K+ concurrent users with seamless performance.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Integrated RESTful and GraphQL APIs for efficient client-server communication, enabling real-time transaction processing and secure data retrieval across distributed components.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Enhanced scalability, reliability, and security by implementing microservice modularization, optimizing SQL queries, and enforcing robust input validation and exception handling mechanisms.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Collaborated in Agile SDLC cycles, contributing to design, development, testing, and deployment phases while ensuring clean architecture and high maintainability across codebases.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Recognized as a “Star Performer” for achieving 90%+ technical evaluation scores and driving 30% faster code review and delivery cycles, demonstrating leadership and technical excellence.</p>
                            </li>

                        </ul>

                {/* <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer Intern <br /> Feb 2023 - May 2023</h3>
                        <p className="exp__modal-description">Implemented core Java modules leveraging JDBC for secure database connectivity and SQL operations, contributing to global financial services platform.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built interactive, component-based web solutions using Angular and TypeScript, improving UI responsiveness and enabling secure data visualization.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Worked with cross-functional teams to integrate RESTful APIs and optimize API integrations.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Consistently demonstrated high technical proficiency and team collaboration, earning the 'Star Performer' award for achievements.</p>
                            </li>

                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Experience