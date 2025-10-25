/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Shreya Kale/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/shreya-kale" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/shreyakale" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="mailto:kaleshreyaa2205@gmail.com" className="footer__social-link" target="_blank">
                    <i className="bx bx-envelope"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Shreya Kale All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer