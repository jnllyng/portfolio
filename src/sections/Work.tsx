import React, { useState } from 'react';
import './Work.css';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Manitoba Nature Archive',
    description: 'A web archive website to catalog Manitoba species information using PHP, Apache, and MySQL. Designed to support nature conservation in the Manitoba region.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    link: 'https://github.com/jnllyng',
    tech: ['PHP', 'Apache', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: 'Generative AI Education Website',
    description: 'A communication group project — an educational website helping AI-inexperienced users understand and apply generative AI tools effectively.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    link: 'https://github.com/jnllyng',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Pest Detection System',
    description: 'A deep learning-based pest detection system using YOLOv8 to identify crop pests and support sustainable agriculture. Built as undergraduate thesis at Wuhan University.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    link: 'https://github.com/jnllyng',
    tech: ['Python', 'YOLOv8', 'Deep Learning'],
  },
  {
    title: 'Tech4Good Mobile App',
    description: 'A demo mobile application focused on reducing educational inequality among older adults. Won First Prize at the Huawei Tech4Good Local Competition 2021.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    link: 'https://github.com/jnllyng',
    tech: ['Mobile', 'UI/UX', 'Java'],
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="work">
      <div className="section-label">Selected Work</div>
      <h2 className="section-title">Projects</h2>
      <div className="work__list">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`work__item ${hovered === i ? 'work__item--hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="work__item-left">
              <span className="work__number">0{i + 1}</span>
              <div>
                <h3 className="work__title">{project.title}</h3>
                <p className="work__desc">{project.description}</p>
                <div className="work__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="work__tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="work__link">
                  View Project →
                </a>
              </div>
            </div>
            <div className="work__item-right">
              <img src={project.image} alt={project.title} className="work__image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}