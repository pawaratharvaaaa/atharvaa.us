import React, { useState } from 'react';

export function Signature({ width = 175, className = '', style = {} }) {
  const [key, setKey] = useState(0);

  // Click to replay animation
  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  const height = Math.round((width * 203) / 267);

  return (
    <div
      key={key}
      className={`sig-container ${className}`}
      onClick={handleReplay}
      title="Atharva Pawar — Click to replay signature animation"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        filter: 'drop-shadow(0 2px 8px rgba(255, 90, 61, 0.25))',
        ...style
      }}
      aria-label="Atharva Pawar Signature"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 267 203"
        width={width}
        height={height}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          overflow: 'visible'
        }}
      >
        <style>{`
          @keyframes atharvaDrawSig {
            0% {
              stroke-dashoffset: 1200;
              opacity: 0.2;
            }
            15% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
          @keyframes atharvaFadeSig {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .sig-stroke-anim {
            stroke: #ff5a3d;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
            animation: atharvaDrawSig 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .sig-fill-anim {
            fill: #ff5a3d;
            opacity: 0;
            animation: atharvaFadeSig 0.6s ease-out 1.9s forwards;
          }
          .sig-container:hover .sig-stroke-anim,
          .sig-container:hover .sig-fill-anim {
            filter: drop-shadow(0 0 6px rgba(255, 90, 61, 0.6));
          }
        `}</style>

        {/* Animated Drawing Pen Strokes */}
        <g className="sig-draw-group">
          <path d="M59,191 L54,192 L60,191" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M79,186 L71,188 L80,186" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M89,183 L83,185 L90,183" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M114,175 L96,181 L115,175" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M131,170 L118,174 L132,170" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M85,169 L80,173 L84,170" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M141,167 L135,169 L142,167" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M81,167 L75,174 L78,174 L76,172 L82,167" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M166,159 L145,166 L167,159" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M124,157 L118,163 L114,163 L120,162 L123,158" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M179,155 L173,157 L180,155" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M105,155 L96,166 L93,167 L88,161 L87,166 L84,166 L86,167 L89,164 L94,167 L98,165 L105,156 L112,162 L106,156" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M196,150 L183,154 L197,150" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M46,149 L47,148 L49,150 L49,159 L47,161 L45,158 L46,150" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M203,148 L200,149 L204,148" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M144,147 L145,153 L138,161 L131,162 L126,158 L131,162 L140,160 L145,153 L145,147" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M167,146 L167,151 L168,147" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M224,142 L207,147 L225,142" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M239,138 L228,141 L242,138 L240,138" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M176,138 L170,140 L170,143 L173,139 L175,139" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M33,135 L15,151 L32,136" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M207,125 L206,136 L204,138 L199,131 L193,129 L187,132 L176,146 L173,144 L176,146 L178,145 L185,135 L193,129 L196,129 L203,136 L205,141 L204,143 L207,126" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M38,125 L39,129 L35,134 L35,140 L35,134 L39,129 L38,126" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M60,121 L49,131 L49,139 L45,151 L45,158 L47,161 L46,167 L46,162 L48,160 L50,163 L50,168 L48,171 L47,169 L49,176 L48,171 L50,168 L50,163 L48,160 L48,140 L50,132 L57,123 L60,121 L65,121 L71,127 L72,135 L69,141 L56,152 L67,144 L72,135 L70,125 L65,121 L61,121" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M40,114 L39,123 L40,115" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M64,105 L41,128 L65,105" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M42,104 L41,112 L42,105" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M45,101 L65,103 L69,101 L92,102 L69,101 L65,103 L46,101" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M94,89 L97,97 L94,101 L96,101 L97,97 L94,90" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M99,85 L130,105 L100,86" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M88,72 L91,79 L70,99 L90,81 L92,84 L88,73" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M47,71 L43,99 L46,72" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M44,69 L16,89 L11,94 L9,100 L18,102 L40,101 L18,102 L11,101 L9,98 L18,88 L44,70" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M83,58 L87,70 L83,59" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M77,50 L50,66 L78,50" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M51,44 L48,63 L51,45" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M58,19 L57,24 L58,20" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M62,11 L60,14 L64,11 L69,16 L77,38 L68,14 L63,11" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M161,10 L81,48 L78,40 L80,49 L162,10" className="sig-stroke-anim" strokeWidth="2.8" />
          <path d="M169,8 L165,9 L169,8 L171,10 L164,18 L93,78 L167,15 L168,16 L167,15 L172,8 L170,9" className="sig-stroke-anim" strokeWidth="2.8" />
        </g>

        {/* Solid Crisp Vector Ink Layer */}
        <g className="sig-fill-anim">
          <path d="M146,149 L145,147 L143,155 L136,161 L131,161 L124,156 L118,162 L113,162 L105,154 L102,159 L96,165 L93,166 L88,160 L86,165 L79,167 L75,171 L74,174 L78,175 L83,173 L89,165 L92,167 L98,166 L102,162 L104,158 L107,158 L110,162 L114,164 L120,163 L125,158 L131,163 L136,163 L140,161 L144,157 Z" />
          <path d="M85,168 L81,172 L77,172 L81,168 Z" />
          <path d="M258,133 L213,144 L166,158 L144,166 L114,174 L92,182 L54,192 L55,194 L62,191 L85,186 L117,175 L147,167 L182,155 L227,142 L258,135 Z" />
          <path d="M209,121 L207,121 L204,136 L199,130 L197,129 L190,129 L186,132 L182,139 L176,145 L173,143 L173,140 L176,138 L170,139 L166,146 L167,152 L172,144 L175,146 L178,146 L185,138 L186,135 L190,131 L196,130 L202,136 L204,143 L206,142 L207,128 Z" />
          <path d="M65,120 L58,121 L49,130 L48,136 L45,144 L45,167 L47,175 L49,177 L51,165 L50,134 L56,125 L60,122 L67,123 L71,129 L70,138 L61,148 L58,149 L56,153 L63,149 L72,138 L72,127 Z" />
          <path d="M99,85 L100,87 L119,100 L136,109 L138,109 L137,107 L135,107 L124,101 L101,85 Z" />
          <path d="M172,8 L165,8 L158,10 L133,23 L111,32 L81,47 L75,27 L69,14 L65,10 L62,10 L58,16 L53,32 L47,64 L45,68 L16,88 L10,94 L8,98 L9,101 L13,102 L41,103 L41,108 L36,131 L23,142 L15,151 L17,151 L26,142 L35,137 L35,140 L37,139 L38,132 L68,103 L92,103 L97,101 L98,97 L94,88 L92,80 L168,16 L171,12 Z" />
          <path d="M64,104 L40,128 L39,124 L40,123 L42,107 L44,102 Z" />
          <path d="M90,82 L96,97 L95,100 L93,101 L71,99 Z" />
          <path d="M45,72 L43,94 L41,100 L18,101 L10,98 L18,89 L37,75 Z" />
          <path d="M79,50 L87,71 L89,80 L67,101 L43,100 L48,68 L62,59 Z" />
          <path d="M64,12 L68,16 L73,27 L78,43 L78,49 L58,59 L53,63 L49,63 L49,57 L55,31 L60,15 Z" />
          <path d="M169,11 L164,17 L99,71 L92,78 L90,76 L81,50 L83,48 L109,35 L142,21 L158,12 L164,10 Z" />
        </g>
      </svg>
    </div>
  );
}
