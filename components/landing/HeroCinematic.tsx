'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Auf 3 Frames eingedampft: Setup → Handwerk → Ergebnis
const frames = [
  {
    src: IMG.hero.workshopDawn,
    alt: 'Finder GmbH Werkstatt in Berlin im Morgenlicht',
    eyebrow: 'Sanitär · Heizung · Bad · Berlin & Brandenburg',
    titleLine1: 'Wenn dein Wasser',
    titleLine2: 'kalt ist,',
    titleAccent: 'fangen wir an.',
  },
  {
    src: IMG.hero.handsBoiler,
    alt: 'SHK Monteur arbeitet an einer Brennwerttherme',
    eyebrow: 'Meisterbetrieb · Seit 2010',
    titleLine1: 'Wir reparieren,',
    titleLine2: 'was kaputt ist.',
    titleAccent: 'Sauber. Einmal.',
  },
  {
    src: IMG.hero.livingRoom,
    alt: 'Warmes Berliner Wohnzimmer mit modernem Heizkörper',
    eyebrow: 'Finder GmbH · 030 70073555',
    titleLine1: 'Damit du wieder',
    titleLine2: 'zu Hause bist.',
    titleAccent: 'Pünktlich.',
  },
];

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray<HTMLElement>('[data-frame]');
      const texts = gsap.utils.toArray<HTMLElement>('[data-text]');

      // Initial: nur erstes Frame + Text sichtbar
      gsap.set(slides.slice(1), { opacity: 0 });
      gsap.set(texts.slice(1), { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          pin: stickyRef.current,
          onUpdate: (self) => {
            // Active-Index aus Progress berechnen (3 Frames → 0, 1, 2)
            const i = Math.min(
              frames.length - 1,
              Math.round(self.progress * (frames.length - 1))
            );
            setActiveIndex(i);
          },
        },
      });

      // Crossfade Frame i → Frame i+1
      for (let i = 1; i < frames.length; i++) {
        tl.to(slides[i - 1], { opacity: 0, duration: 1, ease: 'power2.inOut' }, i - 1)
          .fromTo(
            slides[i],
            { opacity: 0, scale: 1.06 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' },
            i - 1
          )
          .to(
            texts[i - 1],
            { opacity: 0, y: -40, duration: 0.5, ease: 'power2.in' },
            i - 1
          )
          .fromTo(
            texts[i],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            i - 0.4
          );
      }

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      // 3 Frames → 2 Transitions → 2.5x Viewport-Höhe (kürzer als zuvor 6x)
      style={{ height: `${frames.length * 100}vh` }}
      className="relative bg-coal text-white"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Bilder-Layer */}
        <div className="absolute inset-0">
          {frames.map((f, i) => (
            <div key={i} data-frame className="absolute inset-0" aria-hidden={i > 0}>
              <Image
                src={f.src}
                alt={f.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              {/* Lesbarkeits-Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-coal/50 via-coal/30 to-coal" />
              <div className="absolute inset-0 bg-gradient-to-r from-coal/85 via-coal/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Grain Overlay */}
        <div className="grain absolute inset-0" />

        {/* Content-Layer: Text + CTAs in EINEM Container, sauber ausgerichtet */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Spacer für Nav */}
          <div className="h-20 flex-none" />

          {/* Haupt-Content vertikal mittig */}
          <div className="flex flex-1 items-center">
            <div className="container-wide w-full">
              <div className="max-w-3xl">
                {/* Text-Container: relativ, alle Frames-Texte gestackt */}
                <div className="relative min-h-[280px] sm:min-h-[340px]">
                  {frames.map((f, i) => (
                    <div
                      key={i}
                      data-text
                      className={i === 0 ? 'relative' : 'absolute inset-0'}
                    >
                      <span className="eyebrow-light">{f.eyebrow}</span>
                      <h1 className="editorial-h1 mt-5 text-white">
                        {f.titleLine1}
                        <br />
                        {f.titleLine2}{' '}
                        <span className="text-copper">{f.titleAccent}</span>
                      </h1>
                    </div>
                  ))}
                </div>

                {/* CTAs – immer sichtbar, unabhängig vom Frame */}
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href="/#kontakt" className="btn-primary">
                    Termin anfragen <ArrowRight size={18} />
                  </a>
                  <a
                    href="tel:+493070073555"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-coal"
                  >
                    <Phone size={16} /> 030 70073555
                  </a>
                  <a
                    href="/karriere"
                    className="ml-auto hidden text-sm text-white/70 underline-offset-4 hover:text-white hover:underline sm:inline-block"
                  >
                    Bist du Anlagenmechaniker? →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Bar: Scroll-Indikator + Frame-Counter */}
          <div className="container-wide flex-none pb-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-white/30" />
                <span>Scroll</span>
                <ChevronDown size={14} className="animate-bounce text-copper" />
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="font-display text-2xl font-bold text-white">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-white/30">/</span>
                <span>{String(frames.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
