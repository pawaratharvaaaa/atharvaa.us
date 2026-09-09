/**
 * Command Palette & Theme Engine (1:1 with ziad.us)
 * Handles fast fuzzy command search, keyboard shortcuts (` or Cmd+K), theme switching, and actions.
 */
import { playBlip } from './audio.js';

export function initPalette(navTo, spawnSnake) {
  const overlay = document.getElementById('palOverlay');
  const input = document.getElementById('palInput');
  const resultsContainer = document.getElementById('palResults');

  function toggleTheme(forced) {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = forced || (cur === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ath-theme', next);
    closePal();
  }

  function toggleCRT() {
    const cur = document.documentElement.getAttribute('data-crt');
    const next = cur === 'on' ? 'off' : 'on';
    document.documentElement.setAttribute('data-crt', next);
    localStorage.setItem('ath-crt', next);
    closePal();
  }

  // Restore saved theme & CRT states
  const savedTheme = localStorage.getItem('ath-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  const savedCRT = localStorage.getItem('ath-crt');
  if (savedCRT) document.documentElement.setAttribute('data-crt', savedCRT);

  const commands = [
    { group: 'Navigate', label: 'Home', desc: 'editorial masthead', action: () => navTo('home') },
    { group: 'Navigate', label: '01 Work', desc: 'all seven projects', action: () => navTo('work') },
    { group: 'Navigate', label: '02 Now', desc: "what i'm on this month", action: () => navTo('now') },
    { group: 'Navigate', label: '03 Lab', desc: 'palette & experiments', action: () => navTo('lab') },
    { group: 'Navigate', label: '04 Contact', desc: 'verified channels', action: () => navTo('contact') },

    { group: 'Projects', label: 'musclempire', desc: '2026 · fitness tracking', action: () => navTo('detail-musclempire') },
    { group: 'Projects', label: 'music-model', desc: '2026 · ML song identification', action: () => navTo('detail-music-model') },
    { group: 'Projects', label: 'Lumen', desc: '2026 · offline music library', action: () => navTo('detail-lumen') },
    { group: 'Projects', label: 'wedoit', desc: '2026 · collaborative todo', action: () => navTo('detail-wedoit') },
    { group: 'Projects', label: 'PRANKER', desc: '2026 · rickroll APK', action: () => navTo('detail-pranker') },
    { group: 'Projects', label: 'custome_todo', desc: '2026 · lean custom todo', action: () => navTo('detail-custome-todo') },
    { group: 'Projects', label: 'portfolio', desc: '2026 · living quarterly', action: () => navTo('detail-portfolio') },

    { group: 'Actions', label: 'Email Atharva', desc: 'pawaratharvaak@gmail.com', action: () => window.location.href = 'mailto:pawaratharvaak@gmail.com' },
    { group: 'Actions', label: 'GitHub Profile', desc: 'github.com/pawaratharvaaaa', action: () => window.open('https://github.com/pawaratharvaaaa', '_blank') },
    { group: 'Actions', label: 'X / Twitter', desc: '@thevibecoderguy', action: () => window.open('https://x.com/thevibecoderguy', '_blank') },
    { group: 'Actions', label: 'Phone', desc: '+91 88500 61997', action: () => window.location.href = 'tel:+918850061997' },

    { group: 'Commands', label: ':theme dark', desc: 'switch to dark ink theme', action: () => toggleTheme('dark') },
    { group: 'Commands', label: ':theme light', desc: 'switch to light newsprint', action: () => toggleTheme('light') },
    { group: 'Commands', label: ':crt', desc: 'toggle CRT monitor scanlines', action: () => toggleCRT() },
    { group: 'Commands', label: ':snake', desc: 'launch retro snake arcade', action: () => spawnSnake() },
    { group: 'Commands', label: ':help', desc: 'show available commands', action: () => alert('Commands:\n:theme dark\n:theme light\n:crt\n:snake\n\nShortcuts:\n` or ⌘K — Command Palette\n↑↑↓↓←→←→BA — Konami Code') }
  ];

  let palIndex = 0;
  let filteredCmds = [...commands];

  function renderPalette() {
    resultsContainer.innerHTML = '';
    if (!filteredCmds.length) {
      const empty = document.createElement('li');
      empty.className = 'pal-row';
      empty.style.padding = '12px 16px';
      empty.style.color = 'var(--muted)';
      empty.textContent = 'No matching commands.';
      resultsContainer.appendChild(empty);
      return;
    }
    let currentGroup = '';
    filteredCmds.forEach((cmd, idx) => {
      if (cmd.group !== currentGroup) {
        currentGroup = cmd.group;
        const gh = document.createElement('li');
        gh.className = 'pal-group-head mono';
        gh.textContent = currentGroup;
        resultsContainer.appendChild(gh);
      }
      const li = document.createElement('li');
      li.className = 'pal-row' + (idx === palIndex ? ' sel' : '');
      li.innerHTML = `<button type="button"><span class="label mono">${cmd.label}</span><span class="hint">${cmd.desc}</span></button>`;
      li.addEventListener('click', () => {
        playBlip(750, 0.05);
        cmd.action();
        closePal();
      });
      resultsContainer.appendChild(li);
    });

    const selected = resultsContainer.querySelector('.pal-row.sel');
    if (selected) selected.scrollIntoView({ block: 'nearest' });
  }

  function openPal() {
    palIndex = 0;
    filteredCmds = [...commands];
    overlay.classList.add('open');
    input.value = '';
    renderPalette();
    playBlip(440, 0.03);
    setTimeout(() => input.focus(), 30);
  }

  function closePal() {
    overlay.classList.remove('open');
  }

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePal();
  });

  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    filteredCmds = q ? commands.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)) : [...commands];
    palIndex = 0;
    renderPalette();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      palIndex = Math.min(palIndex + 1, filteredCmds.length - 1);
      playBlip(500, 0.02);
      renderPalette();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      palIndex = Math.max(palIndex - 1, 0);
      playBlip(550, 0.02);
      renderPalette();
      e.preventDefault();
    } else if (e.key === 'Enter' && filteredCmds[palIndex]) {
      playBlip(800, 0.05);
      filteredCmds[palIndex].action();
      closePal();
      e.preventDefault();
    } else if (e.key === 'Escape') {
      closePal();
    }
  });

  return { openPal, closePal, toggleTheme, toggleCRT };
}
