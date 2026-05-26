'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
  {
    q: 'Wie lange dauert die Probezeit?',
    // [PLATZHALTER] Mit Kunde abklären
    a: 'Sechs Monate, wie überall. Aber wir hatten die letzten zehn Einstellungen alle danach übernommen.',
  },
  {
    q: 'Bekomme ich den Firmenwagen auch privat?',
    a: 'Nach Absprache: ja. Wir regeln das pragmatisch, kein 1%-Theater wenn du es nicht willst.',
  },
  {
    q: 'Wie sieht die Einarbeitung aus?',
    a: 'Die ersten zwei Wochen fährst du mit einem erfahrenen Kollegen mit. Danach eigene Tour, aber Rückfragen immer per Telefon möglich.',
  },
  {
    q: 'Wie sind die Arbeitszeiten wirklich?',
    a: 'Montag bis Freitag, 7 bis 17 Uhr. Notdienst nur freiwillig und extra bezahlt. Wochenenden sind frei – versprochen.',
  },
  {
    q: 'Was passiert wenn ich Quereinsteiger bin?',
    a: 'Ohne Ausbildung als Anlagenmechaniker oder vergleichbar passt es leider nicht. Wir können dich nicht im laufenden Betrieb ausbilden.',
  },
  {
    q: 'Was verdiene ich konkret?',
    // [PLATZHALTER] Lohnzahlen verifizieren
    a: 'Je nach Erfahrung 3.800 bis 4.600 € brutto im Monat, plus Zuschläge für Notdienst. Transparent im Vertrag, ab Tag 1.',
  },
  {
    q: 'Wie schnell hört ihr euch?',
    a: 'Innerhalb von 24 Stunden, garantiert. Meist ruft der Geschäftsführer persönlich an.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-tight grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Was Bewerber{' '}
            <span className="text-copper">wirklich wissen wollen.</span>
          </h2>
          <p className="mt-5 max-w-prose text-ink/70">
            Wenn deine Frage fehlt: einfach im Funnel mit reinschreiben oder
            anrufen. Wir antworten ehrlich, auch wenn die Antwort „Nein" ist.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-ink">
                      {it.q}
                    </span>
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-ink/5 text-ink">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-ink/75 leading-relaxed">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
