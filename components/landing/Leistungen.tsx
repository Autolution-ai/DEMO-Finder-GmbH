'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { IMG } from '@/lib/images';

const services = [
  {
    nr: '01',
    titel: 'Heizung',
    desc: 'Brennwert, Hybrid, Wärmepumpe. Beratung bis Inbetriebnahme. Förderanträge inklusive.',
    img: IMG.service.heizung,
  },
  {
    nr: '02',
    titel: 'Bad­sanierung',
    desc: 'Vom ersten Strich bis zur letzten Fuge. Eigenes Gewerk, keine fremden Subs.',
    img: IMG.service.bad,
  },
  {
    nr: '03',
    titel: 'Sanitär',
    desc: 'Wasser, Abfluss, Armaturen. Installation, Tausch, Reparatur. Sauber, dicht, fertig.',
    img: IMG.service.sanitaer,
  },
  {
    nr: '04',
    titel: 'Wartung',
    desc: 'Jährliche Heizungs-Inspektion. Mit Protokoll. Termin per WhatsApp möglich.',
    img: IMG.service.wartung,
  },
  {
    nr: '05',
    titel: 'Notdienst',
    desc: 'Wasserrohrbruch, Heizung kalt, Therme defekt. Werktags 8 bis 14 Uhr planbar erreichbar.',
    img: IMG.service.notdienst,
  },
  {
    nr: '06',
    titel: 'Klima­technik',
    desc: 'Split-Klima und Lüftung für Wohnen und Büro. Auch in Altbauten möglich.',
    img: IMG.service.klima,
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="bg-cream py-24 sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow">Was wir machen</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Sanitär, Heizung,
              <br />
              <span className="text-copper">alles aus einer Hand.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-coal/70">
            Wir bauen, reparieren und warten alles, was mit Wasser und Wärme zu
            tun hat. In Berlin, Brandenburg und manchmal auch dazwischen.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.nr}
              href="#kontakt"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-coal"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={`${s.titel} – Finder GmbH Berlin`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-xs uppercase tracking-widest text-copper">
                      {s.nr}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold">
                      {s.titel}
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-white/10 transition group-hover:bg-copper">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {s.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
