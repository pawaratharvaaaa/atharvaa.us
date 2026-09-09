/**
 * Client-Side Router Module
 * Controls page-view visibility, active nav links, and hash state navigation.
 */

export function initRouter(onNavigate) {
  const views = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-list a.nl');

  function navTo(pageId) {
    const cleanId = (pageId || 'home').replace(/^#/, '');
    views.forEach(v => v.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById('view-' + cleanId);
    if (target) {
      target.classList.add('active');
      if (window.location.hash !== '#' + cleanId) {
        window.history.pushState(null, '', '#' + cleanId);
      }
    } else {
      const fallback = document.getElementById('view-home');
      if (fallback) fallback.classList.add('active');
    }

    const topSection = cleanId.startsWith('detail-') ? 'work' : cleanId;
    navLinks.forEach(l => {
      if (l.dataset.p === topSection) l.classList.add('active');
    });

    const navEl = document.querySelector('.nav');
    if (navEl) {
      navEl.style.display = cleanId === 'home' ? 'none' : 'flex';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof onNavigate === 'function') onNavigate(cleanId);
  }

  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (h) navTo(h);
  });

  const initialHash = window.location.hash.replace('#', '') || 'home';
  navTo(initialHash);

  return { navTo };
}
