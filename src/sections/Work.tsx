import React, { useState } from 'react';
import { Label } from '../components/Label/Label';
import { Button } from '../components/Button/Button';
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
    title: 'InnovAsia — AI Tutorial',
    description: 'An educational website helping Communication instructors understand and apply generative AI tools like ChatGPT effectively in the classroom.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    link: 'https://jnllyng.github.io/Tutorial/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Manitoba Nature Archive',
    description: 'A web archive website to catalog Manitoba species information using PHP, Apache, and MySQL. Designed to support nature conservation in the Manitoba region.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    link: 'https://github.com/jnllyng/Project',
    tech: ['PHP', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Vintage Furniture E-Commerce',
    description: 'An agile e-commerce project for a vintage furniture store built with Ruby on Rails. Includes product listings, cart functionality, and a clean shopping experience.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    link: 'https://github.com/jnllyng/nesting-project',
    tech: ['Ruby', 'HTML', 'CSS', 'JavaScript'],
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
                    <Label key={t} text={t} backgroundColor="#1a1a1a" />
                  ))}
                </div>
                <div className="work__btn">
                  <Button
                    label="View Project →"
                    backgroundColor="#c8f542"
                    onClick={() => window.open(project.link, '_blank')}
                  />
                </div>
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