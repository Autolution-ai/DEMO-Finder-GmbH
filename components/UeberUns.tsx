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
          {/* [PLATZHALTER] Echtes Foto Geschäftsführer + Team einfügen */}
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-ink to-ink-700 p-6 text-white shadow-2xl">
            <div className="flex h-full flex-col justify-end">
              <span className="text-xs uppercase tracking-widest text-copper">
                [Platzhalter Foto]
              </span>
              <div className="mt-2 font-display text-2xl font-bold">
                [Vorname Nachname]
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
            {/* [PLATZHALTER] Firmengeschichte 2-3 Sätze */}
            Seit [Jahr] sind wir der SHK-Betrieb für Berlin und Brandenburg, der
            auf Kundendienst setzt – nicht auf Baustellen-Akkord. Wir sind ein
            kleines Team, kennen uns beim Vornamen und arbeiten so, wie wir
            selbst behandelt werden wollen.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {/* [PLATZHALTER] Echte Zahlen */}
            <Stat zahl="[XX]" label="Monteure im Team" />
            <Stat zahl="[XX]" label="Jahre am Markt" />
            <Stat zahl="[X.XXX]" label="Aufträge pro Jahr" />
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
