import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../components/Button/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__tag">Full Stack Web Developer</div>
          <h1 className="hero__name">
            Jueun<br />Yang
          </h1>
          <p className="hero__bio">
            Full Stack Web Development student at Red River College Polytech.
            Passionate about building clean, functional web experiences.
            Previously studied Software Engineering at Wuhan University.
          </p>
          <div className="hero__links">
            <a href="https://github.com/jnllyng" target="_blank" rel="noreferrer" className="hero__icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jueun-y-9185701ba" target="_blank" rel="noreferrer" className="hero__icon">
              <FaLinkedin />
            </a>
            <Button
              label="Get in touch"
              backgroundColor="#c8f542"
              onClick={() => window.location.href = 'mailto:jueunyang00@gmail.com'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}