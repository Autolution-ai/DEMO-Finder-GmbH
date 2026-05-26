'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const flameRef = useRef<SVGGElement>(null);
  const dropsRef = useRef<SVGGElement>(null);

  useGSAP(
    () => {
      if (!pathRef.current) return;
      const len = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(flameRef.current, { opacity: 0, scale: 0.4, transformOrigin: 'center' });
      gsap.set(dropsRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: stickyRef.current,
        },
      });

      tl.to(pathRef.current, { strokeDashoffset: 0, ease: 'none', duration: 1 })
        .to(dropsRef.current, { opacity: 1, duration: 0.2 }, '>-0.2')
        .to(flameRef.current, { opacity: 1, scale: 1, duration: 0.4 }, '>-0.1');

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-white">
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <div className="container-tight grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Vom Kundenanruf bis zur warmen Heizung</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Du löst echte Probleme.{' '}
              <span className="text-copper">Jeden Tag.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
              Anruf rein. Du fährst hin. Brennwert-Therme tickt nicht.
              Eine Stunde später läuft sie wieder. Kunde bedankt sich.
              Du gehst weiter zum nächsten.
            </p>
          </div>

          <div className="aspect-square w-full">
            <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
              {/* Wassertropfen */}
              <g ref={dropsRef}>
                <circle cx="120" cy="100" r="4" fill="#0B2545" />
                <circle cx="140" cy="80" r="3" fill="#0B2545" />
                <circle cx="100" cy="120" r="3" fill="#0B2545" />
              </g>

              {/* Rohrleitung baut sich auf */}
              <path
                ref={pathRef}
                d="M40 60 L160 60 Q200 60 200 100 L200 200 Q200 240 240 240 L340 240"
                stroke="#0B2545"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Heizung / Brennwert */}
              <rect
                x="280"
                y="200"
                width="80"
                height="120"
                rx="8"
                fill="#0B2545"
              />
              <rect x="295" y="220" width="50" height="30" rx="3" fill="#13315C" />
              <circle cx="320" cy="290" r="6" fill="#94A3B8" />

              {/* Flamme */}
              <g ref={flameRef}>
                <path
                  d="M320 215 C310 225, 310 245, 320 250 C330 245, 330 225, 320 215 Z"
                  fill="#D97706"
                />
                <path
                  d="M320 222 C315 228, 315 240, 320 244 C325 240, 325 228, 320 222 Z"
                  fill="#F59E0B"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
