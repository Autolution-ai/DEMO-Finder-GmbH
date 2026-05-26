'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// [PLATZHALTER] Echte Mitarbeiter-Zitate + Fotos einsetzen
const stimmen = [
  {
    name: '[Vorname Nachname]',
    rolle: 'Servicetechniker SHK',
    jahre: 'seit 4 Jahren dabei',
    text: 'Vorher war ich auf der Baustelle. Akkord, dreckig, Stress. Hier mache ich Kundendienst, fahre meinen Caddy, bin um fünf zu Hause. Würde nie zurück.',
  },
  {
    name: '[Vorname Nachname]',
    rolle: 'Anlagenmechaniker',
    jahre: 'seit 2 Jahren dabei',
    text: 'Lohn ist ehrlich gesagt 600 Euro mehr als vorher. Werkzeug ist neu. Chef ruft mich an, wenn was ist – nicht andersrum.',
  },
  {
    name: '[Vorname Nachname]',
    rolle: 'Kundendiensttechniker',
    jahre: 'seit 7 Jahren dabei',
    text: 'Bin mit der Ausbildung hier reingekommen. Die Kollegen sind wie Familie. Habe noch nie über Wechsel nachgedacht.',
  },
];

export default function Stimmen() {
  return (
    <section className="py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Was unsere Monteure sagen</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Keine Marketing-Sprüche.{' '}
            <span className="text-copper">O-Töne.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stimmen.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              <Quote className="text-copper" size={28} />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                „{s.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                {/* [PLATZHALTER] Echtes Mitarbeiter-Foto */}
                <div className="grid h-12 w-12 place-items-center rounded-full bg-ink text-copper font-semibold">
                  {s.name.split(' ')[0]?.[1] ?? '·'}
                </div>
                <div>
                  <div className="font-semibold text-ink">{s.name}</div>
                  <div className="text-xs text-ink/60">
                    {s.rolle} · {s.jahre}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
