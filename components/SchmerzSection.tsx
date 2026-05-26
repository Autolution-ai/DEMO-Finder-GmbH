'use client';

import { motion } from 'framer-motion';

const punkte = [
  {
    titel: 'Akkord & Baustelle.',
    text: 'Jeden Tag eine neue Baustelle, Dreck, Stress, kein Feierabend.',
  },
  {
    titel: 'Dein Auto leidet.',
    text: 'Werkzeug im eigenen Kofferraum, Kratzer im Lack, Diesel selbst gezahlt.',
  },
  {
    titel: 'Der Kumpel verdient mehr.',
    text: 'Gleiche Ausbildung, gleiche Jahre. Nur ein anderer Betrieb.',
  },
  {
    titel: 'Chef kennt deinen Namen nicht.',
    text: 'Du bist eine Nummer auf dem Schichtplan, mehr nicht.',
  },
];

export default function SchmerzSection() {
  return (
    <section className="bg-steel-50 py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Kennst du das?</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Wenn der Job dich auffrisst,{' '}
            <span className="text-copper">läuft was falsch.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {punkte.map((p, i) => (
            <motion.div
              key={p.titel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <div className="font-display text-xl font-semibold text-ink">
                {p.titel}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-lg text-ink/80"
        >
          Dann lies weiter. <span className="text-copper font-semibold">↓</span>
        </motion.p>
      </div>
    </section>
  );
}
