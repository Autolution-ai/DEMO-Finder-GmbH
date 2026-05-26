'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const punkte = [
  'Ausbildung als Anlagenmechaniker SHK oder vergleichbar',
  'Führerschein Klasse B',
  'Deutsch B2 oder gutes Englisch',
  'Bock auf Kunden – kein Baustellen-Mindset',
];

export default function Anforderungen() {
  return (
    <section className="bg-steel-50 py-24">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Das brauchst du</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Vier Sachen.{' '}
            <span className="text-copper">Mehr nicht.</span>
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/75">
            Keine endlose Liste mit Soft Skills. Wenn du diese vier Punkte
            mitbringst und Bock auf den Job hast, passt es.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {punkte.map((p, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-ink/10 bg-white p-5"
            >
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-copper text-white">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-lg font-medium text-ink">{p}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
