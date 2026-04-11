import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiMdn, SiReact, SiDocker } from 'react-icons/si';
import './Resources.css';

interface Resource {
  title: string;
  icon: React.ReactNode;
  summary: string;
  link: string;
}

const resources: Resource[] = [
  {
    title: 'MDN Web Docs',
    icon: <SiMdn />,
    summary: 'The go-to reference for HTML, CSS, and JavaScript. Essential for looking up web APIs and browser compatibility.',
    link: 'https://developer.mozilla.org',
  },
  {
    title: 'React Documentation',
    icon: <SiReact />,
    summary: 'Official React docs with guides on components, hooks, and best practices for building modern UIs.',
    link: 'https://react.dev',
  },
  {
    title: 'Docker Documentation',
    icon: <SiDocker />,
    summary: 'Official Docker docs covering containerization, Dockerfiles, and deployment pipelines.',
    link: 'https://docs.docker.com',
  },
  {
    title: 'W3Schools',
    icon: <span className="resources__w3">W3</span>,
    summary: 'Beginner-friendly tutorials and references for web development languages and frameworks.',
    link: 'https://www.w3schools.com',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="resources">
      <div className="section-label">Helpful Links</div>
      <h2 className="section-title">Resources</h2>
      <div className="resources__grid">
        {resources.map((resource, i) => (

            key={i}
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            className="resources__card"
          >
            <div className="resources__icon">{resource.icon}</div>
            <h3 className="resources__title">{resource.title}</h3>
            <p className="resources__summary">{resource.summary}</p>
            <span className="resources__link">
              Visit <FaExternalLinkAlt />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}