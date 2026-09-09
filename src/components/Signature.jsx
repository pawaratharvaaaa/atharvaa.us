import React from 'react';

export function Signature({ width = 160, className = '', style = {} }) {
  const height = Math.round((width * 211) / 275);

  return (
    <div
      className={`sig-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent)',
        opacity: 0.95,
        ...style
      }}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 275 211"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      >
        <defs>
          <mask id="atharvaSigMask">
            <image href="/signature.png" width="275" height="211" />
          </mask>
        </defs>
        <rect width="275" height="211" fill="currentColor" mask="url(#atharvaSigMask)" />
      </svg>
    </div>
  );
}
