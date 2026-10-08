import React from 'react';

export function Contact() {
  const channels = [
    {
      num: '01',
      where: 'Email',
      sub: 'pawaratharvaak@gmail.com',
      host: 'inbox',
      href: 'mailto:pawaratharvaak@gmail.com'
    },
    {
      num: '02',
      where: 'GitHub',
      sub: 'github.com/pawaratharvaaaa',
      host: 'repositories',
      href: 'https://github.com/pawaratharvaaaa'
    },
    {
      num: '03',
      where: 'Twitter / X',
      sub: '@thevibecoderguy',
      host: 'broadcast',
      href: 'https://x.com/thevibecoderguy'
    },
    {
      num: '04',
      where: 'Pinterest',
      sub: 'kavikogussabohotaatah',
      host: 'visual boards',
      href: 'https://in.pinterest.com/kavikogussabohotaatah/'
    },
    {
      num: '05',
      where: 'Phone / Signal',
      sub: '+91 88500 61997',
      host: 'direct line',
      href: 'tel:+918850061997'
    },
    {
      num: '06',
      where: 'Location',
      sub: 'Bhatwadi, Ghatkopar, Mumbai',
      host: 'base',
      href: 'https://maps.google.com/?q=Bhatwadi,+Ghatkopar,+Mumbai'
    },
    {
      num: '07',
      where: '☕ Buy Me a Coffee',
      sub: '8850061997@upi',
      host: 'UPI pay',
      href: 'upi://pay?pa=8850061997@upi&pn=Atharva&cu=INR'
    }
  ];

  return (
    <section className="page-view active" id="view-contact">
      <header className="work-head">
        <h1 className="work-title editorial">Contact</h1>
        <p className="work-lead">How to reach me.</p>
      </header>

      <ol className="contact-list">
        {channels.map((c) => {
          const isHttp = c.href.startsWith('http');
          return (
            <li className="contact-row" key={c.num}>
              <a
                className="contact-entry"
                href={c.href}
                target={isHttp ? '_blank' : undefined}
                rel={isHttp ? 'noopener noreferrer' : undefined}
              >
                <span className="num mono">{c.num}</span>
                <span className="where editorial">{c.where}</span>
                <span className="sub mono">{c.sub}</span>
                <span className="host mono">{c.host}</span>
                <span className="arr" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <div style={{ marginBlock: 'var(--s-6)' }}>
        <a
          href="upi://pay?pa=8850061997@upi&pn=Atharva&cu=INR"
          className="detail-link mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            fontSize: 'var(--fs-sm)',
            border: '1px solid var(--rule)',
            background: 'var(--paper-2)',
            color: 'var(--ink)'
          }}
        >
          ☕ Buy Me a Coffee <span className="host mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--muted)' }}>(8850061997@upi)</span>
        </a>
      </div>

      <p className="contact-closer hand">i'd rather you drop a message than wait to run into me somewhere.</p>
    </section>
  );
}
