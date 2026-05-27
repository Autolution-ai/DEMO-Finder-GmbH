'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
  {
    q: 'Wie lange dauert die Probezeit?',
    a: 'Bei uns gilt die übliche Probezeit von sechs Monaten. Aber: Die letzten zehn Einstellungen haben wir alle übernommen. Wir stellen niemanden ein, um uns später wieder zu trennen.',
  },
  {
    q: 'Bekomme ich den Firmenwagen auch privat?',
    a: 'Ja, wenn Sie das möchten. Wir regeln das ganz pragmatisch mit Ihnen, ohne kompliziertes 1-Prozent-Theater. Die Tankkarte bekommen Sie ohnehin.',
  },
  {
    q: 'Wie sieht die Einarbeitung aus?',
    a: 'In den ersten zwei Wochen begleiten Sie einen erfahrenen Kollegen auf seinen Touren. Danach übernehmen Sie eine eigene Tour. Bei Rückfragen ist jederzeit jemand für Sie am Telefon. Wir werfen niemanden ins kalte Wasser.',
  },
  {
    q: 'Wie sehen die Arbeitszeiten tatsächlich aus?',
    a: 'Sie arbeiten von Montag bis Freitag zwischen 7 und 17 Uhr. Notdienst übernehmen Sie nur freiwillig und werden dafür extra vergütet. Die Wochenenden gehören Ihnen. Versprochen.',
  },
  {
    q: 'Was, wenn ich Quereinsteiger bin?',
    a: 'Ohne abgeschlossene Ausbildung als Anlagenmechaniker SHK oder eine vergleichbare Qualifikation können wir Sie im laufenden Betrieb leider nicht komplett ausbilden. Über unsere Ausbildungsstelle wäre ein Einstieg aber gut möglich.',
  },
  {
    q: 'Was werde ich konkret verdienen?',
    a: 'Je nach Erfahrung erhalten Sie zwischen 3.800 und 4.600 € brutto im Monat, dazu kommen Zuschläge. Alles steht transparent im Arbeitsvertrag, ab dem ersten Tag. Die genauen Zahlen besprechen wir gerne im persönlichen Gespräch.',
  },
  {
    q: 'Wie schnell höre ich von Ihnen?',
    a: 'Garantiert innerhalb von 24 Stunden nach Ihrer Bewerbung. In den meisten Fällen meldet sich Thomas, Dietmar oder Jörg persönlich bei Ihnen.',
  },
  {
    q: 'Wer entscheidet über meine Einstellung?',
    a: 'Bei uns entscheiden die Geschäftsführer gemeinsam mit dem Teamleiter, mit dem Sie zusammenarbeiten würden. Wir haben keine HR-Abteilung, die Ihre Bewerbung wegen eines „zu kurzen Anschreibens" aussortiert.',
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
            <span className="text-copper">wirklich wissen möchten.</span>
          </h2>
          <p className="mt-6 max-w-prose text-coal/70">
            Sollte Ihre Frage hier nicht dabei sein, schreiben Sie sie gern in
            das Bewerbungsformular oder rufen Sie uns an. Wir antworten ehrlich.
            Auch wenn die Antwort einmal „Nein" lauten sollte.
          </p>

          <div className="mt-8 rounded-2xl border border-coal/10 bg-white p-6">
            <div className="font-display text-base font-semibold text-coal">
              Unser Antwort-Versprechen
            </div>
            <p className="mt-2 text-sm leading-relaxed text-coal/65">
              Jede Bewerbung wird innerhalb von 24 Stunden persönlich
              beantwortet. Auch eine Absage. Keine Funkstille, keine
              automatischen Massenmails.
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
