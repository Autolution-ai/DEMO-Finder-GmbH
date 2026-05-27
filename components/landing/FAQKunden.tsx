'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
  {
    q: 'Wie schnell kommt jemand bei einem Notfall?',
    a: 'Werktags zwischen 8 und 14 Uhr sind wir telefonisch erreichbar. In dringenden Fällen schicken wir innerhalb von 4 bis 6 Stunden einen Monteur. Außerhalb dieser Zeiten antworten wir am nächsten Werktag.',
  },
  {
    q: 'Was kostet eine neue Heizung im Schnitt?',
    a: 'Eine moderne Gas-Brennwertanlage liegt im Berliner Bestand bei 8.000 bis 14.000 €, eine Wärmepumpe je nach Gebäude bei 22.000 bis 38.000 €. Der genaue Preis kommt nach Vor-Ort-Termin, schriftlich, ohne versteckte Kosten.',
  },
  {
    q: 'Übernehmt ihr Förderanträge?',
    a: 'Ja. BAFA, KfW, IBB. Wir kennen die aktuellen Programme, bereiten die Unterlagen vor und reichen sie mit dir gemeinsam ein. Kein Aufpreis dafür.',
  },
  {
    q: 'Wie lange dauert eine Bad­sanierung?',
    a: 'Standardbad in einer Berliner Altbauwohnung: 3 bis 5 Wochen ab Auftragsbestätigung. Wir blockieren keine 8 Wochen für einen 4-Wochen-Job.',
  },
  {
    q: 'Arbeitet ihr mit Subunternehmern?',
    a: 'Heizung, Sanitär und Klima machen wir mit eigenem Personal. Für Elektrik und Fliesen arbeiten wir mit zwei festen Partnerbetrieben, die wir seit Jahren kennen.',
  },
  {
    q: 'Bekomme ich ein verbindliches Angebot?',
    a: 'Ja, schriftlich, mit Festpreis pro Position. Gilt 30 Tage. Wenn sich während der Arbeit unerwartet etwas ändert, sprechen wir vorher mit dir, bevor die Rechnung höher wird.',
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
            Was du wissen
            <br />
            <span className="text-copper">willst.</span>
          </h2>
          <p className="mt-6 max-w-prose text-coal/70">
            Wenn deine Frage hier nicht steht, schreib uns einfach. Wir
            antworten in unter 24 Stunden.
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
