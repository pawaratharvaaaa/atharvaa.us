import React from 'react';
import { projects } from '../data/projectsData';
import { playTick } from '../utils/audio';

export function Work({ onNavigate }) {
  const handleSelect = (id) => {
    playTick();
    onNavigate(`detail-${id}`);
  };

  return (
    <section className="page-view active" id="view-work">
      <header className="work-head">
        <h1 className="work-title editorial">Selected Work</h1>
        <p className="work-lead">Systems, tools, and digital artifacts built in 2026.</p>
      </header>

      <ol className="project-list">
        {projects.map((p) => (
          <li className="project-entry" key={p.id}>
            <a
              className="project-row"
              href={`#detail-${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(p.id);
              }}
            >
              <span className="num mono">{p.num}</span>
              <span className="meta mono">{p.meta}</span>
              <h2 className="entry-title editorial">{p.fullTitle}</h2>
              {p.isOngoing ? (
                <span className="badge mono">
                  <span className="pip" aria-hidden="true"></span> ONGOING
                </span>
              ) : (
                <span className="badge-mut mono">{p.status}</span>
              )}
              <span className="tags mono">{p.tags}</span>
              <span className="note hand">{p.handNote}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
