'use client';

import { motion } from 'framer-motion';
import { Check, X, Briefcase, IdCard, MessageSquare, Heart } from 'lucide-react';

const ja = [
  { icon: Briefcase, label: 'Abgeschlossene Ausbildung als Anlagenmechaniker SHK oder vergleichbar' },
  { icon: IdCard, label: 'Führerschein der Klasse B' },
  { icon: MessageSquare, label: 'Gute Deutschkenntnisse (B2) oder gutes Englisch' },
  { icon: Heart, label: 'Freude am Kundenkontakt, keine Baustellen-Mentalität' },
];

const nein = [
  'Lückenlose Lebensläufe (interessieren uns nicht)',
  'Ein klassisches Anschreiben (benötigen wir nicht)',
  'Perfekte Schulnoten (sind für uns nebensächlich)',
  'Eine bestimmte Mindestzahl an Berufsjahren',
];

export default function AnforderungenNew() {
  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Was wir suchen</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Vier Dinge.
            <br />
            <span className="text-copper">Mehr ist nicht nötig.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* JA-Spalte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-coal/10 bg-white p-8 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-copper text-white">
                <Check size={20} strokeWidth={3} />
              </div>
              <h3 className="font-display text-2xl font-bold text-coal">
                Das bringen Sie mit
              </h3>
            </div>

            <ul className="mt-8 space-y-4">
              {ja.map((j, i) => {
                const Icon = j.icon;
                return (
                  <motion.li
                    key={j.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition hover:border-copper/20 hover:bg-cream"
                  >
                    <div className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-coal text-copper transition group-hover:scale-110">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <span className="pt-2 text-base font-medium text-coal">
                      {j.label}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* NEIN-Spalte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-coal p-8 text-white sm:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
                <X size={20} strokeWidth={3} />
              </div>
              <h3 className="font-display text-2xl font-bold">
                Das brauchen Sie nicht
              </h3>
            </div>

            <ul className="mt-8 space-y-3">
              {nein.map((n, i) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-copper" />
                  <span className="line-through decoration-white/30">{n}</span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-10 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/65">
              Wir sortieren Bewerbungen nicht nach Papier. Uns interessiert,
              ob Sie anpacken können und ob es menschlich zusammenpasst. Den
              Rest besprechen wir in Ruhe im persönlichen Gespräch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
