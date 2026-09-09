import React, { useState } from 'react';
import { playTone, playTick, playSuccess } from '../utils/audio';
import { triggerCanvasConfetti, triggerDomConfetti } from '../utils/confetti';

export function Lab({ onTriggerSnake, isCrtOn, onToggleCrt }) {
  const [copyMsg, setCopyMsg] = useState('');
  const [freq, setFreq] = useState(440);
  const [waveType, setWaveType] = useState('sine');
  const [burstCount, setBurstCount] = useState(0);

  const swatches = [
    { label: 'Paper (Dark)', val: '#0e0d0b' },
    { label: 'Ink (Dark)', val: '#ece6d8' },
    { label: 'Vermilion Accent', val: '#ff5a3d' },
    { label: 'Gold Masking Tape', val: '#d4a54e' },
    { label: 'Paper (Light)', val: '#f4efe6' },
    { label: 'Ink (Light)', val: '#161412' }
  ];

  const handleCopy = (hex) => {
    playTick();
    navigator.clipboard?.writeText(hex);
    setCopyMsg(`Copied ${hex} to clipboard!`);
    setTimeout(() => setCopyMsg(''), 2000);
  };

  const handlePlaySynth = () => {
    playTone(Number(freq), waveType, 0.25);
  };

  const handleCanvasConfetti = () => {
    setBurstCount((c) => c + 1);
    triggerCanvasConfetti();
  };

  const handleDomConfetti = () => {
    setBurstCount((c) => c + 1);
    triggerDomConfetti();
  };

  return (
    <section className="page-view active" id="view-lab">
      <header className="work-head">
        <h1 className="work-title editorial">Lab</h1>
        <p className="work-lead">Half-built things, on purpose.</p>
      </header>

      <div className="tmux-frame mono" dir="ltr">
        <header className="tmux-bar">
          <span className="tmux-dots" aria-hidden="true">
            <span className="tmux-dot"></span>
            <span className="tmux-dot"></span>
            <span className="tmux-dot"></span>
          </span>
          <span className="tmux-title">~/lab/palette [2026]</span>
        </header>

        <div className="tmux-body">
          {/* Experiment 1: Palette Swatches */}
          <div style={{ marginBottom: 'var(--s-6)' }}>
            <h2 className="editorial" style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--s-2)' }}>
              01 · Chromatic Swatches
            </h2>
            <p className="mono" style={{ color: 'var(--muted)', fontSize: 'var(--fs-xs)', marginBottom: 'var(--s-3)' }}>
              Click any token swatch to copy hex value to clipboard.
            </p>
            {copyMsg && (
              <div className="mono" style={{ color: 'var(--accent)', fontSize: 'var(--fs-xs)', marginBottom: 'var(--s-2)' }}>
                ✓ {copyMsg}
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
              {swatches.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopy(s.val)}
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--rule)',
                    padding: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ height: '38px', background: s.val, border: '1px solid var(--rule)' }}></div>
                  <div style={{ fontSize: 'var(--fs-xxs)', color: 'var(--ink)' }}>{s.label}</div>
                  <div style={{ fontSize: 'var(--fs-xxs)', color: 'var(--muted)' }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiment 2: Synthesizer */}
          <div style={{ marginBottom: 'var(--s-6)', borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-5)' }}>
            <h2 className="editorial" style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--s-2)' }}>
              02 · Web Audio Tone Synthesizer
            </h2>
            <p className="mono" style={{ color: 'var(--muted)', fontSize: 'var(--fs-xs)', marginBottom: 'var(--s-3)' }}>
              Direct browser oscillator frequency & waveform synthesis.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '440px' }}>
              <div>
                <label className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-2)', display: 'block', marginBottom: '4px' }}>
                  Frequency: <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{freq} Hz</span>
                </label>
                <input
                  type="range"
                  min="110"
                  max="1320"
                  step="10"
                  value={freq}
                  onChange={(e) => setFreq(e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--accent)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {['sine', 'triangle', 'sawtooth', 'square'].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => {
                      playTick();
                      setWaveType(w);
                    }}
                    style={{
                      padding: '4px 8px',
                      fontSize: 'var(--fs-xxs)',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid',
                      borderColor: waveType === w ? 'var(--accent)' : 'var(--rule)',
                      color: waveType === w ? 'var(--accent)' : 'var(--ink-2)',
                      background: waveType === w ? 'var(--paper-2)' : 'transparent'
                    }}
                  >
                    {w}
                  </button>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={handlePlaySynth}
                  className="palette-btn mono"
                  style={{ display: 'inline-flex', padding: '8px 16px' }}
                >
                  ▶ Synthesize Tone
                </button>
              </div>
            </div>
          </div>

          {/* Experiment 3: CRT & Arcade */}
          <div style={{ marginBottom: 'var(--s-6)', borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-5)' }}>
            <h2 className="editorial" style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--s-2)' }}>
              03 · Tactical Overlays & Arcade
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 'var(--s-3)' }}>
              <button
                type="button"
                className="palette-btn mono"
                onClick={() => {
                  playTick();
                  onToggleCrt();
                }}
              >
                CRT Filter: {isCrtOn ? '[ON]' : '[OFF]'}
              </button>
              <button
                type="button"
                className="palette-btn mono"
                onClick={() => {
                  playSuccess();
                  onTriggerSnake();
                }}
              >
                🐍 Launch Retro Snake Arcade
              </button>
            </div>
          </div>

          {/* Experiment 4: Confetti Engine (Canvas & DOM) */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 className="editorial" style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--s-1)' }}>
                  04 · Confetti Particle Engine
                </h2>
                <p className="mono" style={{ color: 'var(--muted)', fontSize: 'var(--fs-xs)' }}>
                  Physics-based celebrations using design system palette colors.
                </p>
              </div>
              <div className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-2)' }}>
                Bursts: <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{burstCount}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: 'var(--s-4)' }}>
              <button
                type="button"
                className="palette-btn mono"
                onClick={handleCanvasConfetti}
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-ink)',
                  borderColor: 'var(--accent)',
                  fontWeight: 600,
                  padding: '8px 18px'
                }}
              >
                🎉 Fire Canvas Confetti
              </button>

              <button
                type="button"
                className="palette-btn mono"
                onClick={handleDomConfetti}
                style={{
                  borderColor: 'var(--ok)',
                  color: 'var(--ok)',
                  padding: '8px 18px'
                }}
              >
                ✨ Fire DOM Confetti
              </button>
            </div>

            <div className="mono" style={{ fontSize: 'var(--fs-xxs)', color: 'var(--muted)', marginTop: 'var(--s-3)' }}>
              Hint: You can also trigger confetti anytime from the Command Palette with <kbd>:confetti</kbd> or <kbd>:confetti-dom</kbd>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
