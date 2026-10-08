import React from 'react';
import { TelemetryBar } from './TelemetryBar';
import { playTick } from '../utils/audio';

export function NotFound({ onNavigate }) {
  return (
    <article className="page-view active" id="view-404">
      <div className="rule-row" dir="ltr">
        <span>ERR</span>
        <span>/ 404</span>
        <span>2026</span>
        <span>REGISTER MISSING</span>
      </div>

      <TelemetryBar />

      <header className="detail-head">
        <h1 className="detail-title editorial" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1 }}>
          404 — Page Not Found
        </h1>
        <p className="detail-subtitle">
          The requested page or artifact does not exist in this quarterly volume.
        </p>

        <dl className="stats-dl mono">
          <div>
            <dt>status</dt>
            <dd style={{ color: 'var(--err)', fontWeight: 600 }}>404 · NOT FOUND</dd>
          </div>
          <div>
            <dt>origin</dt>
            <dd>unmapped coordinate</dd>
          </div>
          <div>
            <dt>resolution</dt>
            <dd>return to index</dd>
          </div>
          <div>
            <dt>location</dt>
            <dd>Bhatwadi, Mumbai</dd>
          </div>
        </dl>

        <nav className="detail-links mono" style={{ marginTop: 'var(--s-4)' }}>
          <a
            className="detail-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              playTick();
              onNavigate('home');
            }}
          >
            <span className="arr">←</span>
            <span className="k">return home</span>
            <span className="host">atharvaa.us</span>
          </a>
          <a
            className="detail-link"
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              playTick();
              onNavigate('work');
            }}
          >
            <span className="k">browse work</span>
            <span className="arr">↗</span>
            <span className="host">selected work</span>
          </a>
        </nav>
      </header>

      {/* Taped 404 Card Frame matching design system */}
      <figure className="cover-frame">
        <div className="taped-card">
          <span className="tape tape-top" style={{ '--r': '-2deg' }}></span>
          <span className="tape tape-bottom" style={{ '--r': '2.5deg' }}></span>
          <div className="preview-canvas">
            <div className="watermark" style={{ color: 'var(--err)' }}>404</div>
            <div className="desc">
              Whatever you were looking for has either moved, been archived, or never existed in the register.
            </div>
          </div>
        </div>
      </figure>

      <blockquote className="pull editorial-italic">
        <span className="mark">“</span>
        not all who wander are lost, but this url definitely is.
        <span className="mark">”</span>
      </blockquote>

      <footer className="detail-foot mono">
        <a
          href="#home"
          className="back"
          onClick={(e) => {
            e.preventDefault();
            playTick();
            onNavigate('home');
          }}
        >
          ← [00] return to masthead
        </a>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            playTick();
            onNavigate('work');
          }}
        >
          [01] selected work →
        </a>
      </footer>
    </article>
  );
}
