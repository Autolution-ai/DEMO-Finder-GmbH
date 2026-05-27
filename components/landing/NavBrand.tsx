'use client';

import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const linksLanding = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#projekte', label: 'Projekte' },
  { href: '/#prozess', label: 'So arbeiten wir' },
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/karriere', label: 'Karriere' },
];

const linksKarriere = [
  { href: '/karriere#stellen', label: 'Offene Stellen' },
  { href: '/karriere#benefits', label: 'Benefits' },
  { href: '/karriere#tag', label: 'Dein Tag' },
  { href: '/karriere#faq', label: 'FAQ' },
  { href: '/', label: '← Hauptseite' },
];

export default function NavBrand() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onKarriere = pathname?.startsWith('/karriere');
  const links = onKarriere ? linksKarriere : linksLanding;
  const ctaHref = onKarriere ? '/karriere#bewerben' : '/#kontakt';
  const ctaLabel = onKarriere ? 'In 3 Min bewerben' : 'Termin anfragen';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-coal/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <a href="/" className="flex items-baseline gap-2 text-white">
            <span className="font-display text-xl font-bold tracking-tight">Finder</span>
            <span className="text-xs uppercase tracking-[0.2em] text-copper">GmbH</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-white/80 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+493070073555"
              className="hidden items-center gap-2 text-sm font-medium text-white/80 hover:text-white md:flex"
            >
              <Phone size={14} />
              030 70073555
            </a>
            <a
              href={ctaHref}
              className="hidden rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-copper/30 transition hover:bg-copper-600 md:inline-flex"
            >
              {ctaLabel}
            </a>
            <button
              aria-label="Menü"
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-coal pt-20 lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-2xl font-display font-semibold text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-6 btn-primary"
            >
              {ctaLabel}
            </a>
            <a
              href="tel:+493070073555"
              className="mt-3 inline-flex items-center justify-center gap-2 text-white/70"
            >
              <Phone size={16} /> 030 70073555
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
