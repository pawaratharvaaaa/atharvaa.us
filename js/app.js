/**
 * Main Application Orchestrator
 * Coordinates Routing, Telemetry, Command Palette, Audio, and Konami Easter Egg
 */
import { initTelemetry } from './telemetry.js';
import { initRouter } from './router.js';
import { initPalette } from './palette.js';
import { initSnake } from './snake.js';
import { playSuccess } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Telemetry Sensors
  initTelemetry();

  // 2. Initialize Retro Snake Arcade
  const { spawnSnake, closeSnake } = initSnake();

  // 3. Initialize Router
  const { navTo } = initRouter();

  // 4. Initialize Command Palette & Theming
  const { openPal, closePal, toggleTheme, toggleCRT } = initPalette(navTo, spawnSnake);

  // Expose global methods for inline HTML event handlers (e.g. onclick)
  window.navTo = navTo;
  window.openPal = openPal;
  window.closePal = closePal;
  window.toggleTheme = toggleTheme;
  window.toggleCRT = toggleCRT;
  window.spawnSnake = spawnSnake;
  window.closeSnake = closeSnake;

  // 5. Global Hotkeys & Konami Code Detector
  let konamiHistory = [];
  const konamiSeq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

  document.addEventListener('keydown', e => {
    // Command Palette hotkeys: ` or . or Cmd+K / Ctrl+K
    if (e.key === '`' || e.key === '.' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      const palModal = document.getElementById('palOverlay');
      if (!palModal.classList.contains('open')) {
        e.preventDefault();
        openPal();
        return;
      }
    }

    if (e.key === 'Escape') {
      closePal();
      closeSnake();
    }

    // Konami sequence accumulator
    konamiHistory.push(e.key);
    if (konamiHistory.length > konamiSeq.length) konamiHistory.shift();
    if (JSON.stringify(konamiHistory) === JSON.stringify(konamiSeq)) {
      triggerKonami();
    }
  });

  function triggerKonami() {
    const flash = document.createElement('div');
    flash.className = 'konami-flash';
    document.body.appendChild(flash);
    playSuccess();
    setTimeout(() => flash.remove(), 1200);
    spawnSnake();
  }
});
