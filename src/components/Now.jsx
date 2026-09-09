import React from 'react';
import { playTick } from '../utils/audio';

export function Now({ onNavigate }) {
  return (
    <section className="page-view active" id="view-now">
      <header className="work-head">
        <h1 className="work-title editorial">Now</h1>
        <p className="work-lead">What I'm on this month.</p>
      </header>

      <div className="panes">
        {/* Main Tmux Pane (~/now.md) */}
        <div className="tmux-frame mono" dir="ltr">
          <header className="tmux-bar">
            <span className="tmux-dots" aria-hidden="true">
              <span className="tmux-dot"></span>
              <span className="tmux-dot"></span>
              <span className="tmux-dot"></span>
            </span>
            <span className="tmux-title">~/now.md</span>
          </header>
          <div className="tmux-body prose">
            <h2>building</h2>
            <ul>
              <li>
                <strong>musclempire</strong> — shipping workout logging that gym-goers can use in 2 taps.
              </li>
              <li>
                <strong>music-model</strong> — making the phonetic song identification and playlist clustering engine sharper.
              </li>
              <li>
                <strong>Lumen</strong> — the offline music library player that needs zero cloud subscriptions or tracking.
              </li>
            </ul>
            <h2>on my mind</h2>
            <ul>
              <li>
                <strong>vibe coding</strong> — building software that feels alive, tactile, and fun to make.
              </li>
              <li>
                <strong>music technology</strong> — exploring the sweet spot between local audio files and modern machine learning models.
              </li>
              <li>
                <strong>shipping fast</strong> — putting working code out into the world and iterating in public.
              </li>
            </ul>
          </div>
          <footer className="tmux-bar bot">
            <span className="tmux-pane-tab active">[0] now</span>
            <span
              className="tmux-pane-tab"
              onClick={() => {
                playTick();
                onNavigate('lab');
              }}
            >
              [1] lab
            </span>
            <span
              className="tmux-pane-tab"
              onClick={() => {
                playTick();
                onNavigate('contact');
              }}
            >
              [2] contact
            </span>
          </footer>
        </div>

        {/* Side Tmux Pane (~/ps) */}
        <aside className="tmux-frame mono" dir="ltr">
          <header className="tmux-bar">
            <span className="tmux-dots" aria-hidden="true">
              <span className="tmux-dot"></span>
              <span className="tmux-dot"></span>
              <span className="tmux-dot"></span>
            </span>
            <span className="tmux-title">~/ps</span>
          </header>
          <div className="tmux-body">
            <table className="ps-table">
              <thead>
                <tr>
                  <th>PID</th>
                  <th>CMD</th>
                  <th>STATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0101</td>
                  <td>musclempire</td>
                  <td className="ok">running</td>
                </tr>
                <tr>
                  <td>0202</td>
                  <td>music-model</td>
                  <td className="warn">building</td>
                </tr>
                <tr>
                  <td>0303</td>
                  <td>lumen/appeul</td>
                  <td className="warn">building</td>
                </tr>
                <tr>
                  <td>0404</td>
                  <td>sleep</td>
                  <td className="err">denied</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </div>
    </section>
  );
}
