'use client';

import { motion } from 'framer-motion';

export default function UeberUns() {
  return (
    <section id="team" className="bg-steel-50 py-24">
      <div className="container-tight grid gap-12 lg:grid-cols-5 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          {/* TODO: Echtes Foto der Geschäftsführer Thomas Finder & Dietmar Erler einsetzen */}
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-ink to-ink-700 p-6 text-white shadow-2xl">
            <div className="flex h-full flex-col justify-end">
              <span className="text-xs uppercase tracking-widest text-copper">
                Platzhalter Team-Foto
              </span>
              <div className="mt-2 font-display text-2xl font-bold">
                Thomas Finder &amp; Dietmar Erler
              </div>
              <div className="text-sm text-white/70">Geschäftsführer</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <span className="eyebrow">Wer wir sind</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Familienbetrieb. <span className="text-copper">Echte Menschen.</span>
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/75">
            Thomas Finder und Dietmar Erler führen die Finder GmbH in der
            Greifswalder Straße in Berlin. Wir sind der SHK-Betrieb, der auf
            Kundendienst setzt. Nicht auf Baustellen-Akkord. Kleines Team,
            Vornamen-Basis, ehrliche Arbeit.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {/* TODO: Mit Kunde verifizieren */}
            <Stat zahl="10+" label="Monteure im Team" />
            <Stat zahl="15+" label="Jahre am Markt" />
            <Stat zahl="2.500+" label="Aufträge pro Jahr" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ zahl, label }: { zahl: string; label: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5">
      <div className="font-display text-3xl font-bold text-copper">{zahl}</div>
      <div className="mt-1 text-xs leading-tight text-ink/70">{label}</div>
    </div>
  );
}
