import React, { useState } from 'react';
import './DevSetup.css';

interface SetupItem {
  title: string;
  items: string[];
}

const setupData: SetupItem[] = [
  {
    title: 'VS Code Setup',
    items: [
      'Theme: One Dark Pro',
      'Extensions: ESLint, Prettier, GitLens, Docker, Thunder Client',
      'Auto save: onFocusChange',
      'Format on save: enabled',
    ],
  },
  {
    title: 'Terminal Setup',
    items: [
      'Shell: Zsh',
      'Framework: Oh My Zsh',
      'Theme: Powerlevel10k',
      'Plugins: git, zsh-autosuggestions, zsh-syntax-highlighting',
    ],
  },
  {
    title: 'Preferred Editor Font',
    items: [
      'Font: Fira Code',
      'Font size: 14px',
      'Line height: 1.6',
      'Font ligatures: enabled',
    ],
  },
];

export default function DevSetup() {
  const [active, setActive] = useState(0);

  return (
    <section id="setup" className="setup">
      <div className="section-label">How I Work</div>
      <h2 className="section-title">Developer Setup</h2>
      <div className="setup__container">
        <div className="setup__tabs">
          {setupData.map((item, i) => (
            <button
              key={i}
              className={`setup__tab ${active === i ? 'setup__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="setup__content">
          <h3 className="setup__content-title">{setupData[active].title}</h3>
          <ul className="setup__list">
            {setupData[active].items.map((item, i) => (
              <li key={i} className="setup__list-item">
                <span className="setup__bullet">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}