import React from 'react';
import { TelemetryBar } from './TelemetryBar';
import { Signature } from './Signature';
import { playTick } from '../utils/audio';

export function Home({ onNavigate, onOpenPalette, onTriggerSnake }) {
  return (
    <section className="page-view active" id="view-home">
      <header className="masthead">
        <div className="rule-row" dir="ltr">
          <span>VOL. I</span>
          <span>NO. 1</span>
          <span>2026</span>
          <span>ATHARVAA.US — A PORTFOLIO QUARTERLY</span>
        </div>

        <div className="nameplate">
          <h1 className="hero-name editorial">Atharvaa Pawar</h1>
          <Signature width={160} />
        </div>

        <div className="role mono">Builder · Vibe Coder · Bhatwadi, Ghatkopar · Mumbai, India</div>
        <p className="bio">
          Atharvaa Anil Pawar — Making things that are fun, useful, and occasionally unhinged. Creator of <strong style={{ color: 'var(--ink)' }}>musclempire</strong>, <strong style={{ color: 'var(--ink)' }}>music-model</strong>, <strong style={{ color: 'var(--ink)' }}>Lumen</strong>, <strong style={{ color: 'var(--ink)' }}>wedoit</strong>, <strong style={{ color: 'var(--ink)' }}>PRANKER</strong>, and more.
        </p>

        <TelemetryBar />

        <blockquote className="pull editorial-italic">
          <span className="mark">“</span>i build what i want to exist.<span className="mark">”</span>
        </blockquote>

        {/* Interactive Keyboard Shortcuts Banner */}
        <div className="keys mono" aria-label="site shortcuts">
          <button
            type="button"
            className="key-chip"
            onClick={() => {
              playTick();
              onNavigate('work');
            }}
          >
            <kbd>01</kbd> <span>work</span>
          </button>
          <button
            type="button"
            className="key-chip"
            onClick={() => {
              playTick();
              onNavigate('now');
            }}
          >
            <kbd>02</kbd> <span>now</span>
          </button>
          <button
            type="button"
            className="key-chip"
            onClick={() => {
              playTick();
              onNavigate('lab');
            }}
          >
            <kbd>03</kbd> <span>lab</span>
          </button>
          <button
            type="button"
            className="key-chip"
            onClick={() => {
              playTick();
              onNavigate('contact');
            }}
          >
            <kbd>04</kbd> <span>contact</span>
          </button>
          <button
            type="button"
            className="key-chip"
            onClick={() => {
              playTick();
              onOpenPalette();
            }}
          >
            <kbd>`</kbd> <span>palette</span>
          </button>
          <button
            type="button"
            className="key-chip static"
            onClick={() => {
              playTick();
              onTriggerSnake();
            }}
            title="Press or type ↑↑↓↓←→←→BA"
          >
            <kbd>↑</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>↓</kbd> <span>arcade</span>
          </button>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="toc">
        <h2 className="toc-title mono">TABLE OF CONTENTS</h2>
        <ol className="toc-list">
          <li>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                playTick();
                onNavigate('work');
              }}
            >
              <span className="num mono">01</span>
              <span className="dot mono">·</span>
              <span className="label editorial">Work</span>
              <span className="desc hand">»Selected systems, apps, and explorations (7 projects)«</span>
            </a>
          </li>
          <li>
            <a
              href="#now"
              onClick={(e) => {
                e.preventDefault();
                playTick();
                onNavigate('now');
              }}
            >
              <span className="num mono">02</span>
              <span className="dot mono">·</span>
              <span className="label editorial">Now</span>
              <span className="desc hand">»What I'm currently hacking on, reading, and shipping«</span>
            </a>
          </li>
          <li>
            <a
              href="#lab"
              onClick={(e) => {
                e.preventDefault();
                playTick();
                onNavigate('lab');
              }}
            >
              <span className="num mono">03</span>
              <span className="dot mono">·</span>
              <span className="label editorial">Lab</span>
              <span className="desc hand">»Interactive toys, audio generators, and experiments«</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                playTick();
                onNavigate('contact');
              }}
            >
              <span className="num mono">04</span>
              <span className="dot mono">·</span>
              <span className="label editorial">Contact</span>
              <span className="desc hand">»How to reach me, collaborate, or say hello«</span>
            </a>
          </li>
        </ol>
      </section>

      {/* About & Colophon */}
      <section className="about-box">
        <h2 className="editorial">Colophon</h2>
        <p>
          This publication is designed with classical editorial aesthetics inspired by mid-century print quarterlies, combined with contemporary tactile computing and web audio feedback.
        </p>
        <div className="stack-line">
          Typeset in Fraunces Variable, Inter Tight, Geist Mono, and Caveat. Built with React & Vite.
        </div>
      </section>
    </section>
  );
}
