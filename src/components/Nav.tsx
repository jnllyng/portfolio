import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Nav.css';

interface NavProps {
  active: string;
}

const links = ['home', 'work', 'skills', 'resources', 'setup'];

export default function Nav({ active }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo">JY</div>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={600}
              offset={-80}
              className={`nav__link ${active === link ? 'nav__link--active' : ''}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}