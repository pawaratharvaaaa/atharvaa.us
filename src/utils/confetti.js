import confetti from 'canvas-confetti';
import { playSuccess } from './audio';

/**
 * Triggers a high-performance canvas celebration burst.
 * Uses the exact paper & ink accent colors from the design system.
 */
export function triggerCanvasConfetti(options = {}) {
  playSuccess();

  const defaults = {
    particleCount: 100,
    spread: 75,
    origin: { x: 0.5, y: 0.6 },
    colors: ['#ff5a3d', '#d4a54e', '#7fb069', '#ece6d8', '#d63a1a']
  };

  const config = { ...defaults, ...options };

  // Center primary explosion
  confetti(config);

  // Side cannons for full celebration
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: config.colors
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: config.colors
    });
  }, 180);
}

/**
 * Pure DOM / CSS confetti system (Zero-dependency matching ziad.us particle physics)
 */
export function triggerDomConfetti() {
  playSuccess();

  const layer = document.createElement('div');
  layer.style.cssText = `
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    overflow: hidden;
  `;
  document.body.appendChild(layer);

  const colors = ['#ff5a3d', '#d4a54e', '#7fb069', '#ece6d8', '#d63a1a'];
  const count = 65;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    const bg = colors[Math.floor(Math.random() * colors.length)];
    const width = Math.random() * 8 + 6;
    const height = Math.random() * 12 + 6;
    const vx = (Math.random() - 0.5) * 800;
    const vy = -(Math.random() * 500 + 200);
    const rot = Math.random() * 360;

    piece.style.cssText = `
      position: absolute;
      left: 50%;
      top: 50%;
      width: ${width}px;
      height: ${height}px;
      background: ${bg};
      border-radius: 1px;
      opacity: 1;
      transform: translate(0, 0) rotate(0deg);
      transition: transform 2.4s cubic-bezier(0.25, 0.7, 0.4, 1), opacity 2.4s ease-out;
    `;

    layer.appendChild(piece);

    // Animate outwards
    requestAnimationFrame(() => {
      piece.style.transform = `translate(${vx}px, ${vy + 600}px) rotate(${rot + 720}deg)`;
      piece.style.opacity = '0';
    });
  }

  setTimeout(() => layer.remove(), 2600);
}
