/**
 * Synthesized Web Audio API Module
 * Provides subtle retro tactile clicks and arcade bleeps without external audio assets.
 */

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playBlip(freq = 600, duration = 0.04, type = 'sine') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Gracefully ignore any browser audio autoplay policy restrictions
  }
}

export function playSuccess() {
  playBlip(520, 0.06, 'triangle');
  setTimeout(() => playBlip(780, 0.08, 'triangle'), 60);
}

export function playGameOver() {
  playBlip(320, 0.12, 'sawtooth');
  setTimeout(() => playBlip(220, 0.18, 'sawtooth'), 100);
}
