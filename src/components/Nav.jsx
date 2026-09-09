import React from 'react';
import { playTick } from '../utils/audio';

export function Nav({ activeRoute, onNavigate, onOpenPalette }) {
  const handleNav = (route) => {
    playTick();
    onNavigate(route);
  };

  const isWorkActive = activeRoute === 'work' || activeRoute.startsWith('detail-');

  return (
    <nav className="nav container" aria-label="primary">
      <a
        className="home-mark"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleNav('home');
        }}
        aria-label="Atharva — home"
      >
        A.
      </a>
      <ol className="nav-list mono">
        <li>
          <a
            href="#work"
            className={`nl ${isWorkActive ? 'active' : ''}`}
            data-p="work"
            onClick={(e) => {
              e.preventDefault();
              handleNav('work');
            }}
          >
            <span className="num">01</span> <span>Work</span>
          </a>
        </li>
        <li>
          <a
            href="#now"
            className={`nl ${activeRoute === 'now' ? 'active' : ''}`}
            data-p="now"
            onClick={(e) => {
              e.preventDefault();
              handleNav('now');
            }}
          >
            <span className="num">02</span> <span>Now</span>
          </a>
        </li>
        <li>
          <a
            href="#lab"
            className={`nl ${activeRoute === 'lab' ? 'active' : ''}`}
            data-p="lab"
            onClick={(e) => {
              e.preventDefault();
              handleNav('lab');
            }}
          >
            <span className="num">03</span> <span>Lab</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nl ${activeRoute === 'contact' ? 'active' : ''}`}
            data-p="contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
          >
            <span className="num">04</span> <span>Contact</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="palette-btn mono"
            onClick={() => {
              playTick();
              onOpenPalette();
            }}
            aria-label="open command palette"
          >
            <kbd>`</kbd> <span className="palette-label">palette</span>
          </button>
        </li>
      </ol>
    </nav>
  );
}
