import React from 'react';
import { FaReact, FaPython, FaPhp, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si';
import './Skills.css';

const languages = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
];

const tools = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaGitAlt />, name: 'Git' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label">What I Know</div>
      <h2 className="section-title">Skills</h2>
      <div className="skills__grid">
        <div className="skills__block">
          <p className="skills__desc">
            Full Stack Web Development student at Red River College Polytech
            with a background in Software Engineering from Wuhan University.
            I enjoy building clean, accessible, and functional web experiences.
          </p>
        </div>
        <div className="skills__block">
          <h3 className="skills__subtitle">Languages & Frameworks</h3>
          <div className="skills__icons">
            {languages.map((item) => (
              <div key={item.name} className="skills__icon-item">
                <span className="skills__icon">{item.icon}</span>
                <span className="skills__icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills__block">
          <h3 className="skills__subtitle">Tools</h3>
          <div className="skills__icons">
            {tools.map((item) => (
              <div key={item.name} className="skills__icon-item">
                <span className="skills__icon">{item.icon}</span>
                <span className="skills__icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}