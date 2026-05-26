'use client';

import { useEffect, useState } from 'react';
import { Wrench } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-copper">
            <Wrench size={18} strokeWidth={2.5} />
          </span>
          {/* [PLATZHALTER] Firmenname */}
          <span>[Firmenname]</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          <a href="#benefits" className="hover:text-ink">Benefits</a>
          <a href="#tag" className="hover:text-ink">Dein Tag</a>
          <a href="#team" className="hover:text-ink">Team</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>

        <a href="#bewerben" className="btn-primary !py-2.5 !px-5 text-sm">
          In 3 Min bewerben
        </a>
      </div>
    </header>
  );
}
