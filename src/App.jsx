import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { ProjectDetail } from './components/ProjectDetail';
import { Now } from './components/Now';
import { Lab } from './components/Lab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { SnakeModal } from './components/SnakeModal';
import { playSuccess } from './utils/audio';

export function App() {
  const [route, setRoute] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isCrtOn, setIsCrtOn] = useState(() => {
    return localStorage.getItem('crt') === 'on';
  });
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSnakeOpen, setIsSnakeOpen] = useState(false);

  // Sync theme attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync CRT scanline attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-crt', isCrtOn ? 'on' : 'off');
    localStorage.setItem('crt', isCrtOn ? 'on' : 'off');
  }, [isCrtOn]);

  // Client-side Hash Router
  useEffect(() => {
    function parseHash() {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (hash) {
        setRoute(hash);
      } else {
        setRoute('home');
      }
    }

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (target) => {
    window.location.hash = `#${target}`;
    setRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCrt = () => {
    setIsCrtOn((prev) => !prev);
  };

  const triggerSnake = () => {
    setIsPaletteOpen(false);
    setIsSnakeOpen(true);
  };

  // Global Keyboard Shortcuts & Konami Code Detector
  useEffect(() => {
    let konamiHistory = [];
    const konamiSeq = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

    function onKeyDown(e) {
      // Hotkeys for palette: ` or . or Cmd+K / Ctrl+K
      if (e.key === '`' || e.key === '.' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        if (!isPaletteOpen) {
          e.preventDefault();
          setIsPaletteOpen(true);
          return;
        }
      }

      if (e.key === 'Escape') {
        setIsPaletteOpen(false);
        setIsSnakeOpen(false);
      }

      // Konami detector
      konamiHistory.push(e.key.toLowerCase());
      if (konamiHistory.length > konamiSeq.length) {
        konamiHistory.shift();
      }
      if (JSON.stringify(konamiHistory) === JSON.stringify(konamiSeq)) {
        // Trigger Konami Flash and Snake Game
        const flash = document.createElement('div');
        flash.className = 'konami-flash';
        document.body.appendChild(flash);
        playSuccess();
        setTimeout(() => flash.remove(), 1200);
        triggerSnake();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPaletteOpen]);

  // Determine current view
  let ViewComponent = Home;
  let detailId = null;

  if (route === 'work') {
    ViewComponent = Work;
  } else if (route.startsWith('detail-')) {
    ViewComponent = ProjectDetail;
    detailId = route.replace('detail-', '');
  } else if (route === 'now') {
    ViewComponent = Now;
  } else if (route === 'lab') {
    ViewComponent = Lab;
  } else if (route === 'contact') {
    ViewComponent = Contact;
  } else {
    ViewComponent = Home;
  }

  return (
    <>
      <a href="#main" className="skip-link">
        skip to main
      </a>

      {route !== 'home' && (
        <Nav
          activeRoute={route}
          onNavigate={handleNavigate}
          onOpenPalette={() => setIsPaletteOpen(true)}
        />
      )}

      <main id="main" className="container">
        {ViewComponent === ProjectDetail ? (
          <ProjectDetail projectId={detailId} onNavigate={handleNavigate} />
        ) : ViewComponent === Lab ? (
          <Lab
            onTriggerSnake={triggerSnake}
            isCrtOn={isCrtOn}
            onToggleCrt={toggleCrt}
          />
        ) : ViewComponent === Now ? (
          <Now onNavigate={handleNavigate} />
        ) : ViewComponent === Work ? (
          <Work onNavigate={handleNavigate} />
        ) : ViewComponent === Contact ? (
          <Contact />
        ) : (
          <Home
            onNavigate={handleNavigate}
            onOpenPalette={() => setIsPaletteOpen(true)}
            onTriggerSnake={triggerSnake}
          />
        )}
      </main>

      <Footer onOpenPalette={() => setIsPaletteOpen(true)} />

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        isCrtOn={isCrtOn}
        onToggleCrt={toggleCrt}
        onTriggerSnake={triggerSnake}
      />

      <SnakeModal isOpen={isSnakeOpen} onClose={() => setIsSnakeOpen(false)} />
    </>
  );
}
