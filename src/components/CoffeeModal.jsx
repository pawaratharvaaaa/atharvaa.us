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

  const validAmount = amount && !isNaN(Number(amount)) && Number(amount) > 0 ? Number(amount) : null;
  const upiUrl = validAmount
    ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR&am=${validAmount}&tn=${encodeURIComponent('Coffee for Atharva')}`
    : `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR&tn=${encodeURIComponent('Coffee for Atharva')}`;

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

  const presetAmounts = [
    { label: '₹50', value: '50', icon: '☕' },
    { label: '₹100', value: '100', icon: '☕☕' },
    { label: '₹250', value: '250', icon: '🥐' },
    { label: '₹500', value: '500', icon: '🚀' }
  ];

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

        {/* Amount Selector */}
        <div style={{ marginTop: '16px' }}>
          <label className="mono" style={{ fontSize: 'var(--fs-xxs)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
            SELECT AMOUNT
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
            {presetAmounts.map((preset) => {
              const active = amount === preset.value;
              return (
                <button
                  key={preset.value}
                  type="button"
                  className="mono"
                  onClick={() => {
                    playTick();
                    setAmount(preset.value);
                  }}
                  style={{
                    padding: '8px 4px',
                    fontSize: 'var(--fs-xs)',
                    fontWeight: active ? 700 : 500,
                    border: `1px solid ${active ? 'var(--accent)' : 'var(--rule)'}`,
                    background: active ? 'var(--accent)' : 'var(--paper-2)',
                    color: active ? 'var(--accent-ink)' : 'var(--ink)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all var(--d-fast) var(--ease-out)',
                    textAlign: 'center'
                  }}
                >
                  <div>{preset.icon}</div>
                  <div>{preset.label}</div>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--paper-2)', border: '1px solid var(--rule)', padding: '6px 12px' }}>
            <span className="mono" style={{ color: 'var(--muted)', fontSize: 'var(--fs-xs)' }}>Custom ₹:</span>
            <input
              type="number"
              min="1"
              max="100000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="mono"
              style={{
                flex: 1,
                background: 'transparent',
                border: 0,
                color: 'var(--ink)',
                fontSize: 'var(--fs-sm)',
                outline: 'none'
              }}
            />
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
