/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import "./../scrollup/scrollup.css";

const ScrollUp = () => {
    // Registered once. Previously this ran in the render body, so every render
    // attached another scroll listener that was never cleaned up.
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (!scrollUp) return;
            scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp
