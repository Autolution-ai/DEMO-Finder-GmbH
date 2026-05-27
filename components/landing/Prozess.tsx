'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ClipboardList, FileText, Wrench, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    nr: '01',
    icon: Phone,
    zeit: 'Tag 0',
    title: 'Du rufst an oder schreibst.',
    desc: 'Werktags 8 bis 14 Uhr persönlich am Telefon, kein Callcenter. Außerhalb per E-Mail oder über das Formular auf der Seite.',
    details: [
      'Persönliches Erstgespräch in 5 Minuten',
      'Keine Warteschleife, keine 3 Weiterverbindungen',
      'Antwort spätestens am nächsten Werktag',
    ],
  },
  {
    nr: '02',
    icon: ClipboardList,
    zeit: 'Innerhalb 5 Tagen',
    title: 'Wir kommen vorbei.',
    desc: 'Vor-Ort-Termin innerhalb von 5 Werktagen. Wir messen, fotografieren, hören zu und sagen ehrlich, was wir empfehlen würden.',
    details: [
      'Kostenlos und unverbindlich',
      'Wir nehmen uns Zeit für deine Fragen',
      'Sofort-Einschätzung von Aufwand und Budget',
    ],
  },
  {
    nr: '03',
    icon: FileText,
    zeit: 'Wenige Tage später',
    title: 'Du bekommst ein Festpreis-Angebot.',
    desc: 'Schriftlich, transparent, ohne Sternchentext. Position für Position aufgeschlüsselt. Gilt 30 Tage, du entscheidest in Ruhe.',
    details: [
      'Festpreis pro Position, keine Stundensätze',
      'Alle Materialien einzeln aufgelistet',
      'Bei Änderungen sprechen wir vorher mit dir',
    ],
  },
  {
    nr: '04',
    icon: Wrench,
    zeit: 'Nach deiner Freigabe',
    title: 'Wir setzen es um.',
    desc: 'Eigenes Team von der Anfahrt bis zur Endreinigung. Kein Subunternehmer-Roulette. Termin und Bauzeit halten wir, sonst sagen wir es vorher.',
    details: [
      'Eigene Monteure mit Meisterabschluss',
      'Saubere Baustelle, am Ende durchgekehrt',
      '2 Jahre Gewährleistung auf alle Arbeiten',
    ],
  },
];

export default function Prozess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animierte Linie zeichnet sich beim Scrollen
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: 'bottom 60%',
              scrub: 0.8,
            },
          }
        );
      }

      // Stagger Fade-In + Slide pro Step
      gsap.utils.toArray<HTMLElement>('[data-step]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        const dot = el.querySelector('[data-dot]');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="relative overflow-hidden bg-cream-100 py-24 sm:py-32"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">So arbeiten wir</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Vier Schritte.
              <br />
              <span className="text-copper">Kein Kleingedrucktes.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-coal/70">
              Wir wissen, dass ein Handwerker-Termin Nerven kosten kann. Hier
              ist genau, was passiert, wenn du uns anrufst. Keine Überraschungen.
            </p>
          </div>
        </div>

        {/* === Vertikale Timeline (kein Zickzack mehr) === */}
        <div className="relative mt-20 mx-auto max-w-4xl">
          {/* Statische Hintergrund-Linie */}
          <div
            aria-hidden
            className="absolute left-[31px] top-0 hidden h-full w-px bg-coal/10 sm:block"
          />
          {/* Animierte Vordergrund-Linie */}
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-[31px] top-0 hidden h-full w-px bg-copper sm:block"
          />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.nr}
                  data-step
                  className="relative grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-8"
                >
                  {/* Dot/Number-Badge auf der Linie */}
                  <div
                    data-dot
                    className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-coal text-copper ring-8 ring-cream-100"
                  >
                    <span className="font-display text-lg font-bold">
                      {s.nr}
                    </span>
                  </div>

                  {/* Karte mit Inhalt */}
                  <div className="group relative overflow-hidden rounded-3xl border border-coal/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-copper/40 hover:shadow-2xl sm:p-8">
                    {/* Großer dekorativer Hintergrund-Nummer */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-6 font-display text-[10rem] font-black leading-none text-coal/[0.04] transition-colors duration-500 group-hover:text-copper/10"
                    >
                      {s.nr}
                    </span>

                    <div className="relative">
                      {/* Zeit + Icon Zeile */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-coal px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-copper">
                          <Clock size={11} /> {s.zeit}
                        </div>
                        <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-cream-200/50 text-coal transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-copper group-hover:text-white">
                          <Icon size={26} strokeWidth={2.1} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-coal sm:text-3xl">
                        {s.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 max-w-prose text-lg leading-relaxed text-coal/75">
                        {s.desc}
                      </p>

                      {/* Details: erscheinen bei Hover smooth */}
                      <ul className="mt-6 grid gap-2.5 border-t border-coal/10 pt-5">
                        {s.details.map((d, di) => (
                          <li
                            key={di}
                            className="flex items-start gap-3 text-sm text-coal/70 transition-all duration-300"
                            style={{ transitionDelay: `${di * 60}ms` }}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-copper transition group-hover:scale-150" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-20 flex flex-col items-center text-center">
          <p className="font-display text-2xl font-semibold text-coal sm:text-3xl">
            Das war es. <span className="text-copper">Vier Schritte.</span>
          </p>
          <a href="#kontakt" className="btn-primary mt-6">
            Schritt 1 starten <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
