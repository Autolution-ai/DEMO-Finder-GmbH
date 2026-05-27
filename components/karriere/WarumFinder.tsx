'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, Euro, Truck, Clock, PiggyBank, Hammer } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const benefits = [
  {
    nr: '01',
    icon: Wrench,
    titel: 'Kundendienst statt Baustelle',
    zahl: '90 %',
    text: 'Bei uns warten Sie Heizungsanlagen, beheben Störungen und beraten Kunden in deren Zuhause. Kein Rohbau, kein Akkord, kein Baustellen-Stress. Sondern Handwerk in fertigen Räumen.',
    img: IMG.service.wartung,
  },
  {
    nr: '02',
    icon: Euro,
    titel: 'Übertarifliche Bezahlung',
    zahl: 'bis 4.600 €',
    text: 'Sie bekommen ein faires Gehalt deutlich über Tarif, dazu Zuschläge für Notdienst und Wochenend-Einsätze. Alles steht im Arbeitsvertrag. Ab dem ersten Tag, schriftlich.',
    img: IMG.service.heizung,
  },
  {
    nr: '03',
    icon: Truck,
    titel: 'Ihr eigener Firmenwagen',
    zahl: '24/7',
    text: 'Sie bekommen einen VW Caddy oder ein vergleichbares Fahrzeug inklusive Tankkarte. Auf Wunsch auch zur privaten Nutzung. Ihr Werkzeug bleibt im Firmenwagen, nicht in Ihrem eigenen Kofferraum.',
    img: IMG.service.notdienst,
  },
  {
    nr: '04',
    icon: Clock,
    titel: 'Pünktlicher Feierabend',
    zahl: '17:00',
    text: 'Sie arbeiten von Montag bis Freitag in planbaren Wochen. Ihr Wochenende gehört Ihnen. Notdienst übernehmen Sie nur freiwillig und werden dafür extra vergütet. Keine spontanen „nur schnell noch"-Anrufe um 19 Uhr.',
    img: IMG.hero.livingRoom,
  },
  {
    nr: '05',
    icon: PiggyBank,
    titel: 'Betriebliche Altersvorsorge',
    zahl: '+ 150 €',
    text: 'Wir legen monatlich für Ihre Zukunft drauf, ohne dass Sie etwas von Ihrem Netto abgeben müssen. Dazu Vermögenswirksame Leistungen und Weihnachtsgeld.',
    img: IMG.hero.workshopDawn,
  },
  {
    nr: '06',
    icon: Hammer,
    titel: 'Top-Werkzeug & Marken-Kleidung',
    zahl: 'Neu',
    text: 'Sie arbeiten mit Profi-Werkzeug von Hilti, Makita und Knipex. Dazu hochwertige Arbeitskleidung von Engelbert Strauss. Wer mit gutem Werkzeug arbeitet, macht auch gute Arbeit.',
    img: IMG.atmosphere.werkstatt,
  },
];

export default function WarumFinder() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-benefit]').forEach((el, i) => {
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
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="benefits"
      className="bg-cream py-24 sm:py-32"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Warum Finder</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Sechs Gründe,
              <br />
              <span className="text-copper">heute zu uns zu wechseln.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-coal/70">
              Das sind keine leeren Marketing-Versprechen, sondern fester
              Bestandteil unseres Arbeitsvertrags und Ihrer Lohnabrechnung.
              Sollten wir uns daran nicht halten, sagen Sie uns das gern direkt.
            </p>
          </div>
        </div>

        {/* Sticky Showcase */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Bild — vertikal zentriert */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-coal shadow-2xl">
                {benefits.map((b, i) => (
                  <div
                    key={b.nr}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: active === i ? 1 : 0 }}
                  >
                    <Image
                      src={b.img}
                      alt={b.titel}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="font-display text-7xl font-bold text-copper">
                        {b.zahl}
                      </div>
                      <div className="mt-3 font-display text-2xl font-semibold">
                        {b.titel}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute right-5 top-5 flex flex-col gap-1.5">
                  {benefits.map((_, i) => (
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

          {/* Liste */}
          <div className="lg:col-span-7">
            <div className="space-y-5 lg:space-y-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                const isActive = active === i;
                return (
                  <div
                    key={b.nr}
                    data-benefit
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? 'border-copper/50 bg-white shadow-xl lg:scale-[1.01]'
                        : 'border-coal/10 bg-cream-100'
                    }`}
                  >
                    {/* Mobile-Bild */}
                    <div className="relative aspect-[16/9] overflow-hidden lg:hidden">
                      <Image
                        src={b.img}
                        alt={b.titel}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coal/70 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <div className="font-display text-4xl font-bold text-copper">
                          {b.zahl}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 lg:p-7">
                      <div className="flex items-start gap-5">
                        <div
                          className={`grid h-12 w-12 flex-none place-items-center rounded-xl transition ${
                            isActive ? 'bg-copper text-coal' : 'bg-coal text-copper'
                          }`}
                        >
                          <Icon size={22} strokeWidth={2.2} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="font-display text-xs uppercase tracking-[0.25em] text-copper">
                              {b.nr}
                            </span>
                            <span className="hidden font-display text-2xl font-bold text-copper lg:block">
                              {b.zahl}
                            </span>
                          </div>
                          <h3 className="mt-1 font-display text-xl font-bold leading-tight text-coal sm:text-2xl">
                            {b.titel}
                          </h3>
                          <p className="mt-2 max-w-prose text-coal/70">
                            {b.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
