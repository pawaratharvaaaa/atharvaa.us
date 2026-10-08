import React from 'react';
import { projects } from '../data/projectsData';
import { TelemetryBar } from './TelemetryBar';
import { playTick } from '../utils/audio';

export function ProjectDetail({ projectId, onNavigate }) {
  const project = projects.find((p) => p.id === projectId) || projects[0];
  const nextProject = projects.find((p) => p.id === project.nextId) || projects[0];

  const handleBack = () => {
    playTick();
    onNavigate('work');
  };

  const handleNext = () => {
    playTick();
    onNavigate(`detail-${nextProject.id}`);
  };

  return (
    <article className="page-view active" id={`view-detail-${project.id}`}>
      <div className="rule-row" dir="ltr">
        <span>WORK</span>
        <span>/ {project.num}</span>
        <span>{project.duration}</span>
        <span>{project.status}</span>
      </div>

      <TelemetryBar showScroll={false} />

      <header className="detail-head">
        <h1 className="detail-title editorial">{project.fullTitle}</h1>
        <p className="detail-subtitle">{project.subtitle}</p>

        <dl className="stats-dl mono">
          <div>
            <dt>role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>duration</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>team</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>stack</dt>
            <dd>{project.stack}</dd>
          </div>
        </dl>

        <nav className="detail-links mono">
          {project.liveUrl && (
            <a className="detail-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <span className="k">visit</span>
              <span className="arr">↗</span>
              <span className="host">{project.liveUrl.replace(/^https?:\/\//, '')}</span>
            </a>
          )}
          {project.repoUrl && (
            <a className="detail-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <span className="k">repo</span>
              <span className="arr">↗</span>
              <span className="host">{project.repoUrl.replace(/^https?:\/\//, '')}</span>
            </a>
          )}
          {project.downloadUrl && (
            <a className="detail-link" href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
              <span className="k">download</span>
              <span className="arr">↗</span>
              <span className="host">APK Releases</span>
            </a>
          )}
        </nav>
      </header>

      {/* Taped Preview Card Frame (1:1 with ziad.us) */}
      <figure className="cover-frame">
        <div className="taped-card">
          <span className="tape tape-top" style={{ '--r': '-2deg' }}></span>
          <span className="tape tape-bottom" style={{ '--r': '2.5deg' }}></span>
          <div className="preview-canvas">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  maxHeight: '220px',
                  maxWidth: '90%',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
            ) : (
              <div className="watermark">{project.watermark}</div>
            )}
            <div className="desc">{project.previewDesc}</div>
          </div>
        </div>
      </figure>

      <blockquote className="pull editorial-italic">
        <span className="mark">“</span>
        {project.pullQuote}
        <span className="mark">”</span>
      </blockquote>

      <div className="detail-columns">
        <aside className="notes">
          {project.notes.map((note, idx) => (
            <div className="margin-note" key={idx}>
              <span className="note-label">note</span>
              <span className="body hand">{note}</span>
            </div>
          ))}
        </aside>

        <div className="prose">
          {project.sections.map((sec, idx) => (
            <React.Fragment key={idx}>
              <h2>{sec.title}</h2>
              <p>{sec.body}</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <nav className="detail-foot mono">
        <button
          type="button"
          className="back"
          onClick={handleBack}
          style={{ background: 'transparent', border: 0, padding: 0 }}
        >
          ← back to work
        </button>
        <button
          type="button"
          className="next"
          onClick={handleNext}
          style={{ background: 'transparent', border: 0, padding: 0, color: 'var(--ink-2)' }}
        >
          next · {nextProject.title} →
        </button>
      </nav>
    </article>
  );
}
