import React from 'react';
import { playTick } from '../utils/audio';

export function Footer({ onOpenPalette }) {
  return (
    <footer className="footer container">
      <div className="footer-inner">
        <div>
          <span className="commit mono">atharva.portfolio @ a4f92bc</span>
          <span className="sep" aria-hidden="true">
            ·
          </span>
          <span className="mono">built 2026-09-09 03:00Z</span>
        </div>
        <div>
          <button
            className="palette-trigger mono"
            type="button"
            onClick={() => {
              playTick();
              onOpenPalette();
            }}
            aria-label="open command palette"
          >
            <kbd>`</kbd> <span>press · for palette</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
