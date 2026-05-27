'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sunrise, Coffee, Wrench, Soup, ClipboardCheck, Home } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tag = [
  {
    zeit: '07:00',
    icon: Sunrise,
    titel: 'Start in der Werkstatt',
    text: 'Sie beginnen Ihren Tag mit einem Kaffee und einem Blick auf die Tour-Übersicht im Tablet. Ihr Werkzeug ist bereits seit gestern fest im Firmenwagen verstaut.',
    img: IMG.hero.workshopDawn,
  },
  {
    zeit: '08:00',
    icon: Coffee,
    titel: 'Erste Adresse',
    text: 'Ein Kundendienst-Termin steht an. Die Heizung läuft nicht rund — Sie hören zu, stellen die Diagnose und lösen das Problem. Sauber, ruhig, kompetent.',
    img: IMG.hero.caddyStreet,
  },
  {
    zeit: '12:00',
    icon: Soup,
    titel: 'Mittagspause',
    text: 'Eine ganze Stunde Pause — und Sie entscheiden, wo Sie diese verbringen möchten. Nicht eingequetscht zwischen Werkbänken in einer Kantine.',
    img: IMG.hero.livingRoom,
  },
  {
    zeit: '14:00',
    icon: Wrench,
    titel: 'Wartung der Brennwerttherme',
    text: 'Eine geplante Jahresinspektion steht auf dem Programm — Routine, kein Zeitdruck. Sie arbeiten gründlich und dokumentieren alles im Protokoll.',
    img: IMG.service.wartung,
  },
  {
    zeit: '16:30',
    icon: ClipboardCheck,
    titel: 'Bericht & Rückkehr',
    text: 'Eine kurze Dokumentation, dann zurück in die Werkstatt. Ihren Firmenwagen können Sie auf Wunsch direkt mit nach Hause nehmen.',
    img: IMG.atmosphere.werkstatt,
  },
  {
    zeit: '17:00',
    icon: Home,
    titel: 'Pünktlicher Feierabend',
    text: 'Punkt fünf Uhr ist Feierabend. Wirklich. Ohne „nur noch schnell"-Anrufe — Ihr Abend gehört wieder ganz Ihnen und Ihrer Familie.',
    img: IMG.hero.livingRoom,
  },
];

export default function DeinTagEditorial() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-day-item]').forEach((el, i) => {
        const dir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(
          el,
          { opacity: 0, x: dir },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="tag"
      className="overflow-hidden bg-coal py-24 text-white sm:py-32"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-light">Ihr Tag bei uns</span>
          <h2 className="editorial-h2 mt-5 text-white">
            Sieben Stunden,
            <br />
            <span className="text-copper">planbar und sauber.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            So sieht ein typischer Werktag bei uns aus. Keine Zehn-Stunden-Schichten,
            kein Akkorddruck und auch kein „Eigentlich müssten Sie schon weiter
            sein" — sondern echtes Handwerk in einem gesunden Rhythmus.
          </p>
        </motion.div>

        <div className="mt-20 space-y-12 lg:space-y-20">
          {tag.map((t, i) => {
            const Icon = t.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={t.zeit}
                data-day-item
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Bild-Seite */}
                <div className="group relative aspect-[5/4] overflow-hidden rounded-3xl bg-anthra">
                  <Image
                    src={t.img}
                    alt={t.titel}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-coal/70 via-transparent to-transparent" />

                  {/* Zeit-Tag floating */}
                  <div className="absolute left-6 top-6 rounded-2xl bg-coal/85 px-5 py-3 backdrop-blur-md">
                    <div className="font-display text-3xl font-bold text-copper">
                      {t.zeit}
                    </div>
                  </div>
                </div>

                {/* Text-Seite */}
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-copper/15 text-copper">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                    {t.titel}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
                    {t.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer-Hinweis */}
        <div className="mt-20 text-center">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            Klingt das nicht nach einem klassischen Handwerksberuf?{' '}
            <span className="text-copper">Bei uns ist es Alltag.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
