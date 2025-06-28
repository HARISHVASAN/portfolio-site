import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Linux Enthusiast', 'Cloud Learner'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" data-aos="fade-up" style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <h1>Hello, I’m <span style={{ color: '#58a6ff' }}>Harish</span></h1>
      <h2><span ref={el}></span></h2>
    </section>
  );
};

export default Hero;
