'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// TODO: echte Mitarbeiter-Aussagen vom Kunden, sobald Fotos + Freigabe da.
const stimmen = [
  {
    initialen: 'MK',
    name: 'M. König',
    rolle: 'Servicetechniker SHK',
    jahre: '4. Jahr bei Finder',
    text: 'Vorher war ich auf der Baustelle. Akkord, Dreck, jeden Tag eine andere Adresse. Hier mache ich Kundendienst, fahre meinen Caddy, bin um fünf zu Hause. Würde nie zurück.',
  },
  {
    initialen: 'JS',
    name: 'J. Schmidt',
    rolle: 'Anlagenmechaniker',
    jahre: '2. Jahr bei Finder',
    text: 'Lohn ist ehrlich gesagt 600 Euro mehr als vorher. Werkzeug ist neu. Chef ruft mich an, wenn was ist. Nicht andersrum. Verrückte Branche.',
  },
  {
    initialen: 'TL',
    name: 'T. Lehmann',
    rolle: 'Kundendiensttechniker',
    jahre: '7. Jahr bei Finder',
    text: 'Bin direkt nach der Ausbildung hier reingekommen. Die Kollegen sind wie Familie. Habe noch nie über Wechsel nachgedacht.',
  },
  {
    initialen: 'AM',
    name: 'A. Meier',
    rolle: 'Servicetechniker',
    jahre: '3. Jahr bei Finder',
    text: 'Was mich überzeugt: Sie sagen ehrlich was Sache ist. Wenn etwas nicht passt, sagen sie es. Wenn ich Bock auf was Neues habe, schicken sie mich auf Fortbildung.',
  },
  {
    initialen: 'DR',
    name: 'D. Richter',
    rolle: 'Auszubildender 3. Lehrjahr',
    jahre: 'Ausbildung seit 2023',
    text: 'Ich darf richtige Sachen machen, nicht nur Werkzeug halten. Meister erklären in Ruhe, wenn ich etwas nicht verstehe. Fair behandelt von Tag eins.',
  },
];

export default function MonteurStimmen() {
  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Stimmen aus dem Team</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Fragen Sie nicht uns —
            <br />
            <span className="text-copper">fragen Sie unser Team.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-coal/70">
            Hier kommen die zu Wort, die jeden Tag bei uns arbeiten — ungekürzt
            und ehrlich. Keine Marketing-Phrasen, keine geschönten
            Geschäftsführer-Worte.
          </p>
        </motion.div>
      </div>

      {/* Marquee — Richtung umgekehrt zu Kundenstimmen (links nach rechts) */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent sm:w-40" />

        <div className="team-marquee flex gap-6 py-2 will-change-transform">
          {[...stimmen, ...stimmen].map((s, i) => (
            <figure
              key={`${s.name}-${i}`}
              className="flex w-[340px] flex-none flex-col rounded-2xl border border-coal/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-[400px]"
            >
              <div className="flex items-start justify-between">
                <Quote className="text-copper" size={26} />
                <span className="rounded-full bg-cream-200/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coal/60">
                  {s.jahre}
                </span>
              </div>

              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-coal">
                „{s.text}"
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-4 border-t border-coal/10 pt-5">
                {/* TODO: echte Mitarbeiter-Fotos einsetzen */}
                <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-coal font-display text-sm font-bold text-copper">
                  {s.initialen}
                </div>
                <div>
                  <div className="font-semibold text-coal">{s.name}</div>
                  <div className="text-xs text-coal/60">{s.rolle}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <style jsx>{`
          .team-marquee {
            width: max-content;
            animation: team-marquee 70s linear infinite;
          }
          .team-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes team-marquee {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .team-marquee {
              animation: none;
            }
          }
        `}</style>
      </div>

      <p className="container-wide mt-10 text-center text-xs uppercase tracking-widest text-coal/40">
        Persönliche Mitarbeiter-Fotos folgen mit unserem Foto-Shooting im Sommer
      </p>
    </section>
  );
}
