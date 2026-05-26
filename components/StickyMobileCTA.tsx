'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition md:hidden ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <a
        href="#bewerben"
        className="flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-4 font-semibold text-white shadow-2xl shadow-copper/40"
      >
        In 3 Minuten bewerben <ArrowRight size={18} />
      </a>
    </div>
  );
}
