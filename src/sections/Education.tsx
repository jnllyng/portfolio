import React from 'react';
import './Education.css';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

const educations: EducationItem[] = [
  {
    school: 'Red River College Polytech',
    degree: 'Full Stack Web Development',
    period: 'May 2025 — Aug 2026',
    location: 'Winnipeg, MB',
  },
  {
    school: 'Wuhan University',
    degree: 'Bachelor of Software Engineering',
    period: 'Sep 2019 — Jun 2023',
    location: 'Wuhan, Hubei',
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-label">Background</div>
      <h2 className="section-title">Education</h2>
      <div className="education__list">
        {educations.map((edu, i) => (
          <div key={i} className="education__item">
            <div className="education__left">
              <div className="education__period">{edu.period}</div>
              <div className="education__location">{edu.location}</div>
            </div>
            <div className="education__right">
              <h3 className="education__school">{edu.school}</h3>
              <div className="education__degree">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}