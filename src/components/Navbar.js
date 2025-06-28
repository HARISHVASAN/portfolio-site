import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Harish's Portfolio</div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
