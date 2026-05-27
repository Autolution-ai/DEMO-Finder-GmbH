'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
  {
    q: 'Wie lange dauert die Probezeit?',
    a: 'Sechs Monate, wie überall. Aber die letzten zehn Einstellungen haben wir alle nach der Probezeit übernommen. Wir stellen nicht ein, um wieder zu trennen.',
  },
  {
    q: 'Bekomme ich den Firmenwagen auch privat?',
    a: 'Nach Absprache: ja. Wir regeln das pragmatisch, kein 1%-Theater wenn du es nicht willst. Tankkarte bekommst du sowieso.',
  },
  {
    q: 'Wie sieht die Einarbeitung aus?',
    a: 'Die ersten zwei Wochen fährst du mit einem erfahrenen Kollegen mit. Danach eigene Tour, aber Rückfragen jederzeit per Telefon. Niemand wird ins kalte Wasser geworfen.',
  },
  {
    q: 'Wie sind die Arbeitszeiten wirklich?',
    a: 'Montag bis Freitag, 7 bis 17 Uhr. Notdienst nur freiwillig und extra bezahlt. Wochenenden sind frei. Versprochen.',
  },
  {
    q: 'Was passiert wenn ich Quereinsteiger bin?',
    a: 'Ohne Ausbildung als Anlagenmechaniker SHK oder vergleichbar passt es leider nicht. Wir können dich nicht im laufenden Betrieb komplett ausbilden. Über unsere Ausbildungsstelle könnte es passen.',
  },
  {
    q: 'Was verdiene ich konkret?',
    a: 'Je nach Erfahrung 3.800 bis 4.600 € brutto im Monat, plus Zuschläge. Transparent im Vertrag, ab Tag eins. Genaues besprechen wir im Gespräch.',
  },
  {
    q: 'Wie schnell hört ihr euch?',
    a: 'Innerhalb von 24 Stunden nach deiner Bewerbung, garantiert. Meist ruft Thomas, Dietmar oder Jörg persönlich an.',
  },
  {
    q: 'Wer entscheidet, ob ich genommen werde?',
    a: 'Die Geschäftsführer plus der Teamleiter, mit dem du arbeiten würdest. Bei uns gibt es keine HR-Abteilung, die deine Bewerbung ablehnt, weil dein Anschreiben „zu kurz" ist.',
  },
];

export default function FAQBewerber() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Was Bewerber
            <br />
            <span className="text-copper">wirklich wissen wollen.</span>
          </h2>
          <p className="mt-6 max-w-prose text-coal/70">
            Wenn deine Frage hier nicht steht, schreib uns im Bewerbungs-Funnel
            mit rein oder ruf an. Wir antworten ehrlich, auch wenn die Antwort
            „Nein" ist.
          </p>

          <div className="mt-8 rounded-2xl border border-coal/10 bg-white p-6">
            <div className="font-display text-base font-semibold text-coal">
              Antwort-Garantie
            </div>
            <p className="mt-2 text-sm leading-relaxed text-coal/65">
              Jede Bewerbung wird innerhalb von 24 Stunden persönlich
              beantwortet. Auch eine Absage. Keine Funkstille, keine
              Massenmails.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-coal/10 rounded-2xl border border-coal/10 bg-white">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream-100/50"
                  >
                    <span className="font-display text-lg font-semibold text-coal">
                      {it.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 flex-none place-items-center rounded-full transition ${
                        isOpen ? 'bg-copper text-white' : 'bg-coal/5 text-coal'
                      }`}
                    >
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
                        <p className="px-6 pb-6 leading-relaxed text-coal/75">
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
