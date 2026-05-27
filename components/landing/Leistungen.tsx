'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Flame, Bath, Droplets, Wrench, Siren, Wind } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    nr: '01',
    icon: Flame,
    titel: 'Heizung',
    sub: 'Wärmepumpe · Brennwert · Hybrid',
    text: 'Wir beraten, planen und montieren neue Heizungen für Wohnhäuser, Mehrfamilienobjekte und Gewerbe. BAFA- und KfW-Förderanträge übernehmen wir komplett.',
    img: IMG.service.heizung,
  },
  {
    nr: '02',
    icon: Bath,
    titel: 'Badsanierung',
    sub: 'Komplett aus einer Hand',
    text: 'Vom ersten Strich bis zur letzten Fuge. Eigene Gewerke, feste Partner für Fliesen und Elektrik. Standard-Bad in 3 bis 5 Wochen Bauzeit.',
    img: IMG.service.bad,
  },
  {
    nr: '03',
    icon: Droplets,
    titel: 'Sanitär',
    sub: 'Installation · Tausch · Reparatur',
    text: 'Wasser, Abfluss, Armaturen. Vom tropfenden Hahn bis zur kompletten Steigleitungs-Sanierung. Sauber gearbeitet, am Ende durchgekehrt.',
    img: IMG.service.sanitaer,
  },
  {
    nr: '04',
    icon: Wrench,
    titel: 'Wartung',
    sub: 'Jährlich · Mit Protokoll',
    text: 'Heizungs-Inspektion und Wartung für Brennwert, Wärmepumpe, Gas und Öl. Mit schriftlichem Protokoll. Termin per Telefon oder WhatsApp.',
    img: IMG.service.wartung,
  },
  {
    nr: '05',
    icon: Siren,
    titel: 'Notdienst',
    sub: 'Werktags · Vor-Ort in 4 – 6 Stunden',
    text: 'Wasserrohrbruch, Heizung ausgefallen, Therme defekt. Werktags 8 bis 14 Uhr persönlich am Telefon, Reaktion innerhalb von Stunden.',
    img: IMG.service.notdienst,
  },
  {
    nr: '06',
    icon: Wind,
    titel: 'Klima & Lüftung',
    sub: 'Wohnen · Büro · Praxis',
    text: 'Split-Klima und kontrollierte Lüftung für Wohnung, Büro und Praxis. Auch im Berliner Altbau möglich, mit dezenter Leitungsführung.',
    img: IMG.service.klima,
  },
];

export default function Leistungen() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-svc]');
      items.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      className="bg-cream py-24 sm:py-32"
    >
      <div className="container-wide">
        {/* Header asymmetrisch */}
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Leistungen</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Sechs Dinge,
              <br />
              die wir <span className="text-copper">richtig</span> machen.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-coal/70">
              Heizung, Bad, Sanitär, Wartung, Notdienst, Klima. Alles aus einer
              Hand, mit eigenem Team. Wir sagen Nein, wenn etwas nicht in unser
              Können passt.
            </p>
          </div>
        </div>

        {/* === Sticky Scroll Showcase === */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Linke Spalte: Sticky Bild — vertikal in Viewport zentriert */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-coal shadow-2xl">
                {services.map((s, i) => (
                  <div
                    key={s.nr}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: active === i ? 1 : 0 }}
                  >
                    <Image
                      src={s.img}
                      alt={s.titel}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal/70 via-coal/10 to-transparent" />
                    <div className="absolute bottom-7 left-7 right-7 text-white">
                      <div className="font-display text-xs uppercase tracking-[0.25em] text-copper">
                        {s.nr} · {s.sub}
                      </div>
                      <div className="mt-2 font-display text-4xl font-bold">
                        {s.titel}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Progress-Indikator */}
                <div className="absolute right-5 top-5 flex flex-col gap-1.5">
                  {services.map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1.5 w-6 rounded-full transition ${
                        active === i ? 'bg-copper' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Liste */}
          <div className="lg:col-span-7">
            <div className="space-y-6 lg:space-y-3">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isActive = active === i;
                return (
                  <a
                    key={s.nr}
                    data-svc
                    href="#kontakt"
                    className={`group relative block overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? 'border-copper/50 bg-white shadow-xl lg:scale-[1.01]'
                        : 'border-coal/10 bg-cream-100 hover:border-coal/20'
                    }`}
                  >
                    {/* Mobile Bild */}
                    <div className="relative aspect-[16/9] overflow-hidden lg:hidden">
                      <Image
                        src={s.img}
                        alt={s.titel}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
                    </div>

                    <div className="p-6 lg:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-start gap-5">
                          <div
                            className={`grid h-12 w-12 flex-none place-items-center rounded-xl transition ${
                              isActive
                                ? 'bg-copper text-coal'
                                : 'bg-coal text-copper'
                            }`}
                          >
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                          <div className="flex-1">
                            <div className="font-display text-xs uppercase tracking-[0.25em] text-copper">
                              {s.nr} · {s.sub}
                            </div>
                            <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-coal sm:text-3xl">
                              {s.titel}
                            </h3>
                            <p className="mt-3 max-w-prose text-coal/70">
                              {s.text}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`hidden h-10 w-10 flex-none place-items-center rounded-full transition lg:grid ${
                            isActive
                              ? 'bg-coal text-white'
                              : 'bg-coal/5 text-coal/40 group-hover:bg-coal/10'
                          }`}
                        >
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Block am Ende */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-coal/10 bg-coal p-7 text-white">
              <div>
                <div className="font-display text-lg font-semibold">
                  Nichts dabei?
                </div>
                <div className="mt-1 text-sm text-white/70">
                  Schreib uns, was du brauchst — wir sagen ehrlich, ob wir passen.
                </div>
              </div>
              <a href="#kontakt" className="btn-primary !py-3 !px-5 text-sm">
                Anfrage stellen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
