import React, { useState, useEffect } from 'react';
import { playTick, playSuccess } from '../utils/audio';

export function CoffeeModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('100');
  const [copied, setCopied] = useState(false);
  const upiId = '8850061997@upi';
  const payeeName = 'Atharva';

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lastTickRef = React.useRef(0);

  const numAmount = Math.max(1, Math.min(1000, Number(amount) || 1));
  const validAmount = numAmount;
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR&am=${validAmount}&tn=${encodeURIComponent('Coffee for Atharva')}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}&margin=10`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      playSuccess();
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {
      playTick();
    });
  };

  const handleSliderChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    const now = Date.now();
    if (now - lastTickRef.current > 60) {
      playTick();
      lastTickRef.current = now;
    }
  };

  const setExactAmount = (val) => {
    playTick();
    setAmount(String(val));
  };

  const getPerk = (val) => {
    if (val < 50) return { icon: '🍬', text: 'Sweet gesture & good vibes' };
    if (val < 100) return { icon: '☕', text: 'Cutting chai for quick sprints' };
    if (val < 250) return { icon: '☕', text: 'Hot coffee for midnight debugging' };
    if (val < 500) return { icon: '🥐', text: 'Coffee + snack fuel combo' };
    if (val < 1000) return { icon: '⚡', text: 'Dev rocket fuel pack' };
    return { icon: '👑', text: 'Supreme Sponsor & Vibe Master' };
  };

  const perk = getPerk(numAmount);
  const percent = ((numAmount - 1) / (1000 - 1)) * 100;
  const milestones = [1, 100, 250, 500, 750, 1000];

  return (
    <div className="pal-overlay open" onClick={onClose} style={{ zIndex: 'var(--z-toast)', alignItems: 'center', paddingTop: 0 }}>
      <div
        className="pal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(500px, 94vw)',
          padding: '24px',
          background: 'var(--paper)',
          border: '1px solid var(--rule)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
          borderRadius: '2px',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--rule)', paddingBottom: '14px' }}>
          <div>
            <span className="mono" style={{ fontSize: 'var(--fs-xxs)', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              UPI PAYMENT INTERFACE
            </span>
            <h2 className="editorial" style={{ fontSize: 'var(--fs-xl)', margin: '4px 0 0', fontWeight: 900 }}>
              Buy Atharva a Coffee ☕
            </h2>
            <p style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: 'var(--fs-xs)' }}>
              Scan the QR or tap below to support code, models & vibe builds.
            </p>
          </div>
          <button
            type="button"
            className="mono"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 0,
              color: 'var(--muted)',
              fontSize: 'var(--fs-sm)',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
          >
            [ESC]
          </button>
        </div>

        {/* 1 to 1000 Interactive Amount Slider */}
        <div style={{ marginTop: '18px', background: 'var(--paper-2)', border: '1px solid var(--rule)', padding: '16px', borderRadius: '2px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
            <span className="mono" style={{ fontSize: 'var(--fs-xxs)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              AMOUNT SLIDER (₹1 – ₹1,000)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--paper)', border: '1px solid var(--rule)', padding: '3px 8px', borderRadius: '2px' }}>
              <span className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--muted)' }}>₹</span>
              <input
                type="number"
                min="1"
                max="1000"
                value={amount}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setAmount('');
                  } else {
                    const n = parseInt(val, 10);
                    if (!isNaN(n)) {
                      setAmount(String(Math.min(1000, Math.max(1, n))));
                    }
                  }
                }}
                className="mono"
                style={{
                  width: '54px',
                  background: 'transparent',
                  border: 0,
                  color: 'var(--ink)',
                  fontSize: 'var(--fs-sm)',
                  fontWeight: 700,
                  outline: 'none',
                  textAlign: 'right'
                }}
              />
            </div>
          </div>

          {/* Large Hero Display & Perk Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0 10px' }}>
            <div className="editorial" style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1, color: 'var(--ink)' }}>
              ₹{numAmount}
            </div>
            <div className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{perk.icon}</span>
              <span style={{ fontWeight: 600 }}>{perk.text}</span>
            </div>
          </div>

          {/* Range Slider 1 to 1000 */}
          <input
            type="range"
            min="1"
            max="1000"
            step="1"
            value={numAmount}
            onChange={handleSliderChange}
            className="coffee-slider"
            style={{
              background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${percent}%, var(--rule) ${percent}%, var(--rule) 100%)`
            }}
            aria-label="Payment amount slider from 1 to 1000"
          />

          {/* Scale Milestones (Clickable) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            {milestones.map((m) => {
              const active = numAmount === m;
              return (
                <button
                  key={m}
                  type="button"
                  className={`coffee-scale-btn ${active ? 'active' : ''}`}
                  onClick={() => setExactAmount(m)}
                  title={`Set to ₹${m}`}
                >
                  {m === 1 ? '₹1 (Min)' : m === 1000 ? '₹1,000 (Max)' : `₹${m}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic QR Code Card */}
        <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              background: '#ffffff',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid var(--rule)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
          >
            <img
              src={qrUrl}
              alt="UPI Payment QR Code"
              width="190"
              height="190"
              style={{ display: 'block', maxWidth: '100%' }}
            />
          </div>
          <div className="mono" style={{ marginTop: '10px', fontSize: 'var(--fs-xxs)', color: 'var(--muted)', letterSpacing: '0.05em' }}>
            Scan with GPay · PhonePe · Paytm · BHIM
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Direct Mobile Launch Button */}
          <a
            href={upiUrl}
            className="mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 18px',
              background: 'var(--accent)',
              color: 'var(--accent-ink)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 'var(--fs-sm)',
              borderRadius: '2px',
              letterSpacing: '0.02em',
              textAlign: 'center'
            }}
          >
            <span>☕ Pay ₹{validAmount || '...'} via UPI App</span>
            <span>↗</span>
          </a>

          {/* Copy UPI ID Button */}
          <button
            type="button"
            className="mono"
            onClick={handleCopy}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 18px',
              background: 'var(--paper-2)',
              border: '1px solid var(--rule)',
              color: copied ? 'var(--ok)' : 'var(--ink)',
              fontWeight: 600,
              fontSize: 'var(--fs-xs)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'color var(--d-fast) var(--ease-out)'
            }}
          >
            <span>{copied ? '✓ UPI ID Copied!' : `📋 Copy UPI ID: ${upiId}`}</span>
          </button>
        </div>

        {/* Footer info */}
        <div
          className="mono"
          style={{
            marginTop: '16px',
            paddingTop: '12px',
            borderTop: '1px solid var(--rule)',
            fontSize: 'var(--fs-xxs)',
            color: 'var(--muted)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '6px'
          }}
        >
          <span>Payee: Atharva Pawar</span>
          <span>Verified Merchant: @upi</span>
        </div>
      </div>
    </div>
  );
}
