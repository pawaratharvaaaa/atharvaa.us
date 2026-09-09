import React, { useState } from 'react';

export function Signature({ width = 175, className = '', style = {} }) {
  const [key, setKey] = useState(0);

  // Click to replay signing animation
  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  const height = Math.round((width * 207) / 271);

  return (
    <div
      key={key}
      className={`sig-container ${className}`}
      onClick={handleReplay}
      title="Atharva Pawar — Click to replay signing animation"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        filter: 'drop-shadow(0 2px 8px rgba(255, 90, 61, 0.28))',
        ...style
      }}
      aria-label="Atharva Pawar Signature"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 271 207"
        width={width}
        height={height}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          overflow: 'visible'
        }}
      >
        <defs>
          {/* Authentic Pen Mask for Hollow Star */}
          <mask id="atharvaStarMask" maskUnits="userSpaceOnUse" x="0" y="0" width="271" height="207">
            <path
              className="sig-mask-star-loop"
              d="M 18 153 L 40 110 L 65 12 L 75 30 L 174 10 L 120 60 L 94 80 L 140 111"
            />
            <path
              className="sig-mask-star-bar1"
              d="M 10 100 L 45 102 L 98 102"
            />
            <path
              className="sig-mask-star-bar2"
              d="M 42 105 L 55 65 L 75 27 L 80 50"
            />
            <path
              className="sig-mask-star-bar3"
              d="M 10 100 L 18 153"
            />
          </mask>
        </defs>

        <style>{`
          @keyframes drawStarLoop {
            0% {
              stroke-dashoffset: 800;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          @keyframes drawStarBars {
            0% {
              stroke-dashoffset: 250;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          @keyframes writeP {
            0% {
              clip-path: inset(0 0 100% 0);
            }
            100% {
              clip-path: inset(0 0 0% 0);
            }
          }
          @keyframes writeCursive {
            0% {
              clip-path: inset(0 100% 0 0);
            }
            100% {
              clip-path: inset(0 0% 0 0);
            }
          }
          @keyframes sweepUnderline {
            0% {
              clip-path: inset(0 100% 0 0);
            }
            100% {
              clip-path: inset(0 0% 0 0);
            }
          }

          /* Star mask stroke animations */
          .sig-mask-star-loop {
            stroke: white;
            stroke-width: 36;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            stroke-dasharray: 800;
            stroke-dashoffset: 800;
            animation: drawStarLoop 1.05s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
          }
          .sig-mask-star-bar1 {
            stroke: white;
            stroke-width: 36;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            animation: drawStarBars 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.75s forwards;
          }
          .sig-mask-star-bar2 {
            stroke: white;
            stroke-width: 36;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            animation: drawStarBars 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.85s forwards;
          }
          .sig-mask-star-bar3 {
            stroke: white;
            stroke-width: 36;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            animation: drawStarBars 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.95s forwards;
          }

          /* Path reveals */
          .sig-path-star {
            mask: url(#atharvaStarMask);
            -webkit-mask: url(#atharvaStarMask);
          }
          .sig-path-p {
            clip-path: inset(0 0 100% 0);
            animation: writeP 0.35s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards;
          }
          .sig-path-aw {
            clip-path: inset(0 100% 0 0);
            animation: writeCursive 0.38s cubic-bezier(0.4, 0, 0.2, 1) 1.38s forwards;
          }
          .sig-path-ar {
            clip-path: inset(0 100% 0 0);
            animation: writeCursive 0.35s cubic-bezier(0.4, 0, 0.2, 1) 1.68s forwards;
          }
          .sig-path-underline {
            clip-path: inset(0 100% 0 0);
            animation: sweepUnderline 0.45s cubic-bezier(0.2, 0, 0.1, 1) 1.95s forwards;
          }

          .sig-container:hover svg path {
            filter: drop-shadow(0 0 5px rgba(255, 90, 61, 0.7));
            transition: filter 0.2s ease;
          }
        `}</style>

        {/* Crisp Authentic Vector Ink Paths in Vibrant Red with Hollow Star */}
        <g fill="#ff5a3d" fillRule="evenodd">
          <path className="sig-path-star" d="M174,10 L167,10 L160,12 L135,25 L113,34 L83,49 L77,29 L71,16 L67,12 L64,12 L60,18 L52,46 L49,66 L47,70 L37,76 L18,90 L12,96 L10,100 L11,103 L15,104 L43,105 L43,110 L38,133 L25,144 L17,153 L19,153 L28,144 L37,139 L37,142 L39,141 L39,136 L40,134 L70,105 L94,105 L99,103 L100,99 L98,93 L96,90 L95,82 L100,86 L102,89 L121,102 L138,111 L140,111 L139,109 L137,109 L126,103 L108,91 L105,87 L97,80 L104,73 L117,63 L170,18 L173,14 Z M66,106 L42,130 L41,126 L42,125 L42,120 L44,109 L46,104 Z M92,84 L94,87 L98,99 L97,102 L95,103 L73,101 Z M47,74 L47,81 L45,96 L43,102 L20,103 L12,100 L20,91 L39,77 Z M81,52 L91,79 L91,82 L69,103 L45,102 L49,79 L49,72 L50,70 L64,61 Z M66,14 L70,18 L75,29 L80,45 L80,51 L60,61 L55,65 L51,65 L51,59 L57,33 L62,17 Z M171,13 L166,19 L114,62 L95,79 L92,77 L83,52 L85,50 L111,37 L144,23 L160,14 L166,12 Z" />
          <path className="sig-path-p" d="M67,122 L62,122 L60,123 L54,130 L51,132 L50,138 L48,142 L47,146 L47,169 L49,177 L51,179 L53,167 L52,136 L58,127 L62,124 L67,124 L69,125 L73,131 L73,137 L72,140 L63,150 L60,151 L58,155 L65,151 L70,146 L74,140 L74,129 L73,127 Z" />
          <path className="sig-path-aw" d="M148,151 L147,149 L145,157 L138,163 L133,163 L126,158 L120,164 L115,164 L107,156 L105,158 L104,161 L98,167 L95,168 L90,162 L88,167 L81,169 L77,173 L76,176 L80,177 L85,175 L91,167 L94,169 L98,169 L100,168 L104,164 L106,160 L109,160 L112,164 L116,166 L120,166 L122,165 L125,161 L127,160 L133,165 L138,165 L142,163 L146,159 Z M87,170 L83,174 L79,174 L83,170 Z" />
          <path className="sig-path-ar" d="M211,123 L209,123 L206,138 L201,132 L199,131 L192,131 L188,134 L184,141 L178,147 L175,145 L175,142 L178,140 L174,140 L172,141 L169,145 L168,148 L169,154 L171,152 L174,146 L177,148 L180,148 L187,140 L188,137 L192,133 L195,132 L198,132 L204,138 L206,145 L208,144 L209,139 L209,130 Z" />
          <path className="sig-path-underline" d="M260,135 L245,139 L241,139 L215,146 L168,160 L146,168 L116,176 L94,184 L76,189 L61,192 L56,194 L57,196 L64,193 L87,188 L119,177 L149,169 L184,157 L229,144 L257,137 L260,137 Z" />
        </g>
      </svg>
    </div>
  );
}
