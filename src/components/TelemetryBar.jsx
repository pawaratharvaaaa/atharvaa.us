import React, { useState, useEffect } from 'react';

export function TelemetryBar({ showScroll = true }) {
  const [timeStr, setTimeStr] = useState('--:--:--');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function updateClock() {
      try {
        const d = new Date();
        const str = d.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setTimeStr(str);
      } catch {
        const d = new Date();
        setTimeStr(d.toTimeString().split(' ')[0]);
      }
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);

    function onScroll() {
      setScrollY(Math.round(window.scrollY));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="rule-row status mono" dir="ltr">
      <span>
        LAT <span className="val">19°04'N</span>
      </span>
      <span>
        LON <span className="val">72°52'E</span>
      </span>
      <span>
        BOM <span className="val live-clock">{timeStr}</span>
      </span>
      {showScroll && (
        <span className="scroll-indicator">
          SCROLL <span className="val">{scrollY}px</span>
        </span>
      )}
    </div>
  );
}
