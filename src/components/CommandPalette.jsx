import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projectsData';
import { playTick, playSuccess } from '../utils/audio';
import { triggerCanvasConfetti, triggerDomConfetti } from '../utils/confetti';

export function CommandPalette({ isOpen, onClose, onNavigate, theme, onToggleTheme, isCrtOn, onToggleCrt, onTriggerSnake }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const inputRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const baseItems = [
    // Pages
    { group: 'Pages', label: 'Work', hint: '01 · selected projects', action: () => onNavigate('work') },
    { group: 'Pages', label: 'Now', hint: "02 · what i'm on this month", action: () => onNavigate('now') },
    { group: 'Pages', label: 'Lab', hint: '03 · experiments & toys', action: () => onNavigate('lab') },
    { group: 'Pages', label: 'Contact', hint: '04 · how to reach me', action: () => onNavigate('contact') },
    { group: 'Pages', label: 'Home', hint: '00 · masthead & toc', action: () => onNavigate('home') },

    // Projects
    ...projects.map((p) => ({
      group: 'Projects',
      label: p.title,
      hint: `${p.num} · ${p.tags}`,
      action: () => onNavigate(`detail-${p.id}`)
    })),

    // Confetti Celebrations
    {
      group: 'Commands',
      label: ':confetti',
      hint: '🎉 celebrate with canvas confetti burst',
      action: () => {
        triggerCanvasConfetti();
        showToast('🎉 Celebration triggered!');
      }
    },
    {
      group: 'Commands',
      label: ':confetti-dom',
      hint: '✨ zero-dependency particle physics',
      action: () => {
        triggerDomConfetti();
        showToast('✨ DOM Confetti active!');
      }
    },

    // Commands & Tools
    {
      group: 'Commands',
      label: ':theme dark',
      hint: 'switch to dark paper',
      action: () => {
        if (theme !== 'dark') onToggleTheme();
        showToast('Theme: Dark');
      }
    },
    {
      group: 'Commands',
      label: ':theme light',
      hint: 'switch to light paper',
      action: () => {
        if (theme !== 'light') onToggleTheme();
        showToast('Theme: Light');
      }
    },
    {
      group: 'Commands',
      label: `:crt ${isCrtOn ? 'off' : 'on'}`,
      hint: 'toggle phosphor scanline filter',
      action: () => {
        onToggleCrt();
        showToast(`CRT Filter: ${!isCrtOn ? 'ON' : 'OFF'}`);
      }
    },
    {
      group: 'Commands',
      label: ':snake',
      hint: 'launch retro arcade mini-game',
      action: () => {
        playSuccess();
        onTriggerSnake();
      }
    },
    {
      group: 'Commands',
      label: ':copy email',
      hint: 'pawaratharvaak@gmail.com',
      action: () => {
        navigator.clipboard?.writeText('pawaratharvaak@gmail.com');
        playSuccess();
        showToast('✓ Copied email to clipboard!');
      }
    },
    {
      group: 'Social',
      label: ':github',
      hint: 'github.com/pawaratharvaaaa',
      action: () => window.open('https://github.com/pawaratharvaaaa', '_blank')
    },
    {
      group: 'Social',
      label: ':twitter',
      hint: 'x.com/thevibecoderguy',
      action: () => window.open('https://x.com/thevibecoderguy', '_blank')
    }
  ];

  const q = query.trim().toLowerCase();
  const filteredItems = baseItems.filter((item) => {
    if (!q) return true;
    return item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q) || item.group.toLowerCase().includes(q);
  });

  if (q.includes('404') || q.includes('admin')) {
    filteredItems.unshift({
      group: 'Admin',
      label: ':404',
      hint: 'secret 404 error page',
      action: () => onNavigate('404')
    });
  }

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      playTick();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      playTick();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        playTick();
        filteredItems[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div
          className="mono"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--ink)',
            color: 'var(--paper)',
            fontSize: 'var(--fs-xs)',
            padding: '8px 18px',
            border: '1px solid var(--accent)',
            borderRadius: '2px',
            zIndex: 9999,
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            pointerEvents: 'none',
            letterSpacing: '0.05em'
          }}
        >
          {toast}
        </div>
      )}

      {isOpen && (
        <div className="pal-overlay open" onClick={onClose}>
          <div className="pal-box" onClick={(e) => e.stopPropagation()}>
            <div className="pal-prompt">
              <span className="caret">›</span>
              <input
                ref={inputRef}
                className="pal-input"
                placeholder="Type a page, project, :confetti, or :command…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <ul className="pal-list">
              {filteredItems.length === 0 ? (
                <li className="mono" style={{ padding: '16px', color: 'var(--muted)', fontSize: 'var(--fs-xs)' }}>
                  No matching pages or commands found.
                </li>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <li
                      key={idx}
                      className={`pal-row ${isSelected ? 'sel' : ''}`}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <button
                        type="button"
                        className="mono"
                        onClick={() => {
                          playTick();
                          item.action();
                          onClose();
                        }}
                      >
                        <span>{item.label}</span>
                        <span className="hint">{item.hint}</span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>

            <div className="pal-foot mono">↑↓ navigate &nbsp;·&nbsp; Enter select &nbsp;·&nbsp; Esc close</div>
          </div>
        </div>
      )}
    </>
  );
}
