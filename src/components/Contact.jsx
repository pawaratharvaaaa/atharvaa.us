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
    }
  ];

  return (
    <section className="page-view active" id="view-contact">
      <header className="work-head">
        <h1 className="work-title editorial">Contact</h1>
        <p className="work-lead">How to reach me.</p>
      </header>

      <ol className="contact-list">
        {channels.map((c) => (
          <li className="contact-row" key={c.num}>
            <a className="contact-entry" href={c.href} target="_blank" rel="noopener noreferrer">
              <span className="num mono">{c.num}</span>
              <span className="where editorial">{c.where}</span>
              <span className="sub mono">{c.sub}</span>
              <span className="host mono">{c.host}</span>
              <span className="arr" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ol>

      <p className="contact-closer hand">i'd rather you drop a message than wait to run into me somewhere.</p>
    </section>
  );
}
