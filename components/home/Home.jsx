// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  const parallaxRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    // Pointer and scroll positions are written straight to the DOM inside a
    // single rAF loop. Keeping them out of React state avoids re-rendering the
    // whole hero on every mousemove, which is what made scrolling feel laggy.
    const pointer = { x: 0, y: 0 };
    let frame = null;

    const render = () => {
      frame = null;

      const scrolled = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }

      const layers = [
        [layer1Ref.current, 1, 'translateZ(-1px) scale(2)'],
        [layer2Ref.current, 1.5, 'translateZ(-2px) scale(3)'],
        [layer3Ref.current, 2, 'translateZ(-3px) scale(4)'],
      ];

      for (const [el, depth, base] of layers) {
        if (el) {
          el.style.transform = `translate(${pointer.x * depth}px, ${pointer.y * depth}px) ${base}`;
        }
      }
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const handleScroll = () => schedule();

    const handleMouseMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 20;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 20;
      schedule();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    schedule();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="home section" id="home">
        <div className="parallax-container">
            <div className="parallax-layer layer-1" ref={layer1Ref}></div>
            <div className="parallax-layer layer-2" ref={layer2Ref}></div>
            <div className="parallax-layer layer-3" ref={layer3Ref}></div>
            <div className="parallax-layer layer-4"></div>
        </div>
        <div className="home__container container grid" ref={parallaxRef}>
            <div className="home__content grid">
                <Social />

                <div className="home__img-wrapper">
                    <div className="home__img"></div>
                    <div className="home__img-glow"></div>
                </div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
