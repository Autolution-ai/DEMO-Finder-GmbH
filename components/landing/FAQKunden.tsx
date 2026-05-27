'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
  {
    q: 'Wie schnell sind Sie bei einem Notfall vor Ort?',
    a: 'Werktags zwischen 8 und 14 Uhr erreichen Sie uns persönlich am Telefon. In dringenden Fällen schicken wir innerhalb von 4 bis 6 Stunden einen Monteur zu Ihnen. Außerhalb dieser Zeiten melden wir uns spätestens am nächsten Werktag bei Ihnen.',
  },
  {
    q: 'Was kostet eine neue Heizung im Durchschnitt?',
    a: 'Für eine moderne Gas-Brennwertanlage im Berliner Bestand liegen Sie bei 8.000 bis 14.000 €. Eine Wärmepumpe schlägt je nach Gebäude mit 22.000 bis 38.000 € zu Buche. Den genauen Preis erhalten Sie nach unserem Vor-Ort-Termin — schriftlich und ohne versteckte Kosten.',
  },
  {
    q: 'Übernehmen Sie auch die Förderanträge?',
    a: 'Selbstverständlich. Wir kennen die aktuellen Programme von BAFA, KfW und IBB im Detail, bereiten alle Unterlagen für Sie vor und reichen sie gemeinsam mit Ihnen ein. Dafür berechnen wir keinen Aufpreis.',
  },
  {
    q: 'Wie lange dauert eine Badsanierung?',
    a: 'Ein Standardbad in einer Berliner Altbauwohnung ist bei uns in drei bis fünf Wochen einzugsbereit, gerechnet ab Auftragsbestätigung. Wir blockieren keine acht Wochen für ein Vier-Wochen-Projekt.',
  },
  {
    q: 'Arbeiten Sie mit Subunternehmern?',
    a: 'Heizung, Sanitär und Klima erledigen wir mit eigenem Personal. Für Elektrik und Fliesenarbeiten vertrauen wir auf zwei langjährige Partnerbetriebe, deren Qualität wir persönlich kennen.',
  },
  {
    q: 'Erhalte ich ein verbindliches Angebot?',
    a: 'Ja — schriftlich, mit Festpreis pro Position und 30 Tage gültig. Sollte sich während der Arbeit unerwartet etwas ändern, sprechen wir vorher mit Ihnen, bevor sich der Preis bewegt.',
  },
];

export default function FAQKunden() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Was Sie noch
            <br />
            <span className="text-copper">wissen möchten.</span>
          </h2>
          <p className="mt-6 max-w-prose text-coal/70">
            Ist Ihre Frage hier nicht dabei? Schreiben Sie uns einfach. Wir
            antworten in der Regel innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-coal/10 rounded-2xl border border-coal/10 bg-white">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-coal">
                      {it.q}
                    </span>
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-coal/5 text-coal">
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
