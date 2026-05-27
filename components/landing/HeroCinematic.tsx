'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const frames = [
  {
    src: IMG.hero.workshopDawn,
    eyebrow: '5:47 Uhr · Greifswalder Straße',
    title: 'Der Tag beginnt,',
    titleAccent: 'wenn dein Wasser kalt ist.',
  },
  {
    src: IMG.hero.caddyStreet,
    eyebrow: 'Im Einsatz für Berlin',
    title: 'Wir sind auf dem Weg.',
    titleAccent: 'Pünktlich. Vor 9.',
  },
  {
    src: IMG.hero.handsBoiler,
    eyebrow: 'Handwerk. Nicht Hektik.',
    title: 'Reparieren statt austauschen.',
    titleAccent: 'Wenn’s geht.',
  },
  {
    src: IMG.hero.flame,
    eyebrow: 'Brennwerttechnik · Wärmepumpe · Klima',
    title: 'Wärme. Wieder da.',
    titleAccent: 'Gleicher Tag.',
  },
  {
    src: IMG.hero.livingRoom,
    eyebrow: 'Familien · Hausverwalter · Gewerbe',
    title: '2.500 Berliner pro Jahr',
    titleAccent: 'rufen uns an.',
  },
  {
    src: IMG.hero.bathroom,
    eyebrow: 'Heizung · Bad · Notdienst',
    title: 'Finder GmbH.',
    titleAccent: 'Sanitär & Heizung in Berlin.',
  },
];

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const total = frames.length;
      // Frames werden via Scroll geblendet. ScrollDistance: 100vh pro Frame.
      const slides = gsap.utils.toArray<HTMLElement>('[data-frame]');
      const texts = gsap.utils.toArray<HTMLElement>('[data-text]');

      // alle bis auf erstes verstecken
      gsap.set(slides.slice(1), { opacity: 0 });
      gsap.set(texts.slice(1), { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          pin: stickyRef.current,
        },
      });

      for (let i = 1; i < total; i++) {
        // crossfade previous out and current in
        tl.to(slides[i - 1], { opacity: 0, duration: 1 }, i - 1)
          .fromTo(
            slides[i],
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 1 },
            i - 1
          )
          .to(texts[i - 1], { opacity: 0, y: -30, duration: 0.6 }, i - 1)
          .fromTo(
            texts[i],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 },
            i - 0.6
          );
      }

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      // Höhe = (frames * 100vh) — ergibt die Scroll-Strecke
      style={{ height: `${frames.length * 100}vh` }}
      className="relative bg-coal text-white"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Frames (alle gestackt, GSAP blendet ein/aus) */}
        <div className="absolute inset-0">
          {frames.map((f, i) => (
            <div
              key={i}
              data-frame
              className="absolute inset-0"
              aria-hidden={i > 0}
            >
              <Image
                src={f.src}
                alt={`${f.title} ${f.titleAccent}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-coal/40 via-coal/30 to-coal" />
              <div className="absolute inset-0 bg-gradient-to-r from-coal/80 via-coal/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Grain Overlay */}
        <div className="grain absolute inset-0" />

        {/* Text Layer */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container-wide">
            <div className="max-w-3xl">
              {frames.map((f, i) => (
                <div
                  key={i}
                  data-text
                  className={`${i === 0 ? '' : 'absolute inset-x-0 top-0 mt-[calc(50vh-6rem)] container-wide'}`}
                >
                  <div className="max-w-3xl">
                    <span className="eyebrow-light">{f.eyebrow}</span>
                    <h1 className="editorial-h1 mt-5 text-white">
                      {f.title}
                      <br />
                      <span className="text-copper">{f.titleAccent}</span>
                    </h1>
                  </div>
                </div>
              ))}

              {/* CTAs – immer sichtbar */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#kontakt" className="btn-primary">
                  Termin anfragen <ArrowRight size={18} />
                </a>
                <a href="/karriere" className="btn-light">
                  Karriere
                </a>
              </div>

              <div className="mt-16 flex items-center gap-3 text-sm text-white/60">
                <span className="h-px w-16 bg-white/30" />
                <span className="uppercase tracking-widest text-xs">Scroll</span>
                <ChevronDown size={16} className="animate-bounce text-copper" />
              </div>
            </div>
          </div>
        </div>

        {/* Frame-Indikator unten rechts */}
        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/40 md:flex">
          <span className="font-display text-2xl text-white/80 font-bold">01</span>
          <span>/</span>
          <span>{String(frames.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
