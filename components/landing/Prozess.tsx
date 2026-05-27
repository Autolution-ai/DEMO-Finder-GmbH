'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ClipboardList, FileText, Wrench, Clock } from 'lucide-react';

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
              start: 'top 30%',
              end: 'bottom 70%',
              scrub: 0.8,
            },
          }
        );
      }

      // Fade-in pro Step
      gsap.utils.toArray<HTMLElement>('[data-step]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Number-Counter Animation
        const num = el.querySelector('[data-num]');
        if (num) {
          gsap.fromTo(
            num,
            { scale: 0.6, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'back.out(1.4)',
              scrollTrigger: {
                trigger: el,
                start: 'top 75%',
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

        {/* === Timeline === */}
        <div className="relative mt-20">
          {/* Statische Hintergrund-Linie */}
          <div
            aria-hidden
            className="absolute left-[27px] top-0 hidden h-full w-px bg-coal/10 sm:block lg:left-1/2 lg:-translate-x-1/2"
          />
          {/* Animierte Vordergrund-Linie */}
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-[27px] top-0 hidden h-full w-px bg-copper sm:block lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-20 lg:space-y-32">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 1;
              return (
                <div
                  key={s.nr}
                  data-step
                  className={`relative grid gap-6 sm:grid-cols-[56px_1fr] sm:gap-8 lg:grid-cols-2 lg:gap-20 ${
                    isEven ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Linke Seite (oder rechte bei isEven) */}
                  <div
                    className={`relative ${
                      isEven ? 'lg:pl-16 lg:text-left' : 'lg:pr-16 lg:text-right'
                    }`}
                  >
                    {/* Number-Badge auf der Linie (Desktop: zentriert) */}
                    <div
                      data-num
                      className={`absolute top-0 z-10 grid h-14 w-14 place-items-center rounded-full bg-coal text-copper ring-8 ring-cream-100 sm:left-0 lg:left-auto ${
                        isEven
                          ? 'lg:-left-7 lg:right-auto'
                          : 'lg:-right-7 lg:left-auto'
                      }`}
                    >
                      <span className="font-display text-base font-bold">
                        {s.nr}
                      </span>
                    </div>

                    {/* Zeit-Tag */}
                    <div
                      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-copper ${
                        isEven ? '' : 'lg:justify-end'
                      }`}
                    >
                      <Clock size={12} />
                      {s.zeit}
                    </div>

                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-coal sm:text-4xl">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-md text-lg leading-relaxed text-coal/75 ${
                        isEven ? '' : 'lg:ml-auto'
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* Andere Seite: Detail-Karte mit Hover-Animation */}
                  <div className="sm:col-start-2 lg:col-start-auto">
                    <div className="group relative rounded-3xl border border-coal/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-copper/30 hover:shadow-xl sm:p-8">
                      <div className="flex items-start gap-5">
                        <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-coal text-copper transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                          <Icon size={26} strokeWidth={2.1} />
                        </div>
                        <div className="font-display text-sm font-semibold uppercase tracking-widest text-coal/40 group-hover:text-coal transition">
                          Was passiert
                        </div>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {s.details.map((d, di) => (
                          <li
                            key={di}
                            className="flex items-start gap-3 text-coal/75 transition-all duration-500"
                            style={{ transitionDelay: `${di * 50}ms` }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-copper" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Großer Hintergrund-Nummer für Editorial-Touch */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute bottom-3 right-5 font-display text-[8rem] font-black leading-none text-coal/[0.04] transition group-hover:text-copper/10"
                      >
                        {s.nr}
                      </span>
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
            Schritt 1 starten
          </a>
        </div>
      </div>
    </section>
  );
}
