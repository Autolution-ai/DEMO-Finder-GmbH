'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// TODO: echte Google-Rezensionen einsetzen sobald freigegeben
const reviews = [
  {
    name: 'Familie Hartmann',
    ort: 'Pankow',
    sterne: 5,
    text: 'Heizung Freitagabend ausgefallen. Samstagmorgen war einer da, Samstagmittag lief sie wieder. Faire Rechnung, kein Notdienst-Aufschlag-Theater. Klare Empfehlung.',
  },
  {
    name: 'C. Lange',
    ort: 'Hausverwaltung Mitte',
    sterne: 5,
    text: 'Wir betreuen 40 Wohneinheiten und arbeiten seit Jahren mit Finder. Verbindlich, sauber, pünktlich. Auch unangenehme Wahrheiten direkt am Telefon. Selten geworden.',
  },
  {
    name: 'B. Schmitt',
    ort: 'Prenzlauer Berg',
    sterne: 5,
    text: 'Bad­sanierung in 4 Wochen, wie versprochen. Eigenes Team von der Baustelle bis zur Endreinigung. Bin nicht leicht zu beeindrucken, aber hier passt es.',
  },
];

export default function Kundenstimmen() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow">Stimmen unserer Kunden</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Lieber Original,
              <br />
              <span className="text-copper">als Werbeversprechen.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-coal/70">
            Drei von hunderten. Vollständige Bewertungen sind auf Google
            einsehbar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex h-full flex-col rounded-2xl border border-coal/10 bg-white p-7"
            >
              <Quote className="text-copper" size={28} />

              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-coal">
                „{r.text}"
              </blockquote>

              <figcaption className="mt-6 border-t border-coal/10 pt-5">
                <div className="flex items-center gap-1 text-copper">
                  {Array.from({ length: r.sterne }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-copper" />
                  ))}
                </div>
                <div className="mt-2 font-semibold text-coal">{r.name}</div>
                <div className="text-xs text-coal/60">{r.ort}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
