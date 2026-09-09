/**
 * Telemetry & Live Sensors Module
 * Calculates live BOM (Indian Standard Time / UTC+5:30) and tracks scroll offset
 */

export function initTelemetry() {
  function updateClock() {
    const now = new Date();
    // UTC offset in ms + IST offset (5.5 hrs = 19800000 ms)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    const timeStr = ist.toTimeString().split(' ')[0];
    document.querySelectorAll('.live-clock').forEach(el => el.textContent = timeStr);
  }

  function updateScroll() {
    const py = Math.round(window.scrollY);
    document.querySelectorAll('.live-scroll').forEach(el => el.textContent = py + 'px');
  }

  setInterval(updateClock, 1000);
  updateClock();

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
}
