'use client';

import { motion } from 'framer-motion';
import {
  Euro,
  Truck,
  Wrench,
  Clock,
  PiggyBank,
  Shirt,
} from 'lucide-react';

const benefits = [
  {
    icon: Euro,
    titel: 'Übertariflich bezahlt',
    // [PLATZHALTER] Konkrete Lohnzahl mit Kunde abstimmen
    zahl: '3.800 – 4.600 €',
    text: 'Brutto im Monat, plus Zuschläge. Transparent, schriftlich, ab Tag 1.',
  },
  {
    icon: Truck,
    titel: 'Dein Firmenwagen',
    zahl: '100 %',
    // [PLATZHALTER] Modell anpassen
    text: 'VW Caddy oder vergleichbar. Tankkarte. Auch privat nutzbar nach Absprache.',
  },
  {
    icon: Wrench,
    titel: 'Kundendienst statt Baustelle',
    zahl: '90 %',
    text: 'Wartung, Service, Störungsbehebung. Kein Rohbau, kein Akkord.',
  },
  {
    icon: Clock,
    titel: 'Feierabend ist Feierabend',
    zahl: '17:00',
    text: 'Flexible Arbeitszeit, planbare Wochen, Wochenende gehört dir.',
  },
  {
    icon: PiggyBank,
    titel: 'Altersvorsorge',
    // [PLATZHALTER] BAV-Betrag
    zahl: '+150 €',
    text: 'Betriebliche Altersvorsorge – wir zahlen drauf, jeden Monat.',
  },
  {
    icon: Shirt,
    titel: 'Top-Werkzeug & Kleidung',
    zahl: 'Neu',
    text: 'Hilti, Makita, Engelbert Strauss. Nichts Gebrauchtes, nichts Halbes.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Was du bei uns bekommst</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Sechs Gründe, warum du{' '}
            <span className="text-copper">heute noch wechselst.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.titel}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition hover:border-copper/40 hover:shadow-lg hover:shadow-copper/10"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-copper">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <div className="font-display text-2xl font-bold text-copper">
                    {b.zahl}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {b.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {b.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
