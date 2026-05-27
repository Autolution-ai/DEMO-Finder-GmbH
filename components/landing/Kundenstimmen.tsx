'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// TODO: echte Google-Rezensionen vom Kunden einsetzen
const reviews = [
  {
    name: 'Familie Hartmann',
    ort: 'Pankow',
    sterne: 5,
    text: 'Heizung Freitagabend ausgefallen. Samstagmorgen war einer da, Samstagmittag lief sie wieder. Faire Rechnung, kein Notdienst-Aufschlag-Theater. Klare Empfehlung.',
    leistung: 'Heizungs-Notdienst',
  },
  {
    name: 'C. Lange',
    ort: 'Hausverwaltung Mitte',
    sterne: 5,
    text: 'Wir betreuen 40 Wohneinheiten und arbeiten seit Jahren mit Finder. Verbindlich, sauber, pünktlich. Auch unangenehme Wahrheiten direkt am Telefon. Selten geworden.',
    leistung: 'Wartung & Service',
  },
  {
    name: 'B. Schmitt',
    ort: 'Prenzlauer Berg',
    sterne: 5,
    text: 'Bad­sanierung in 4 Wochen, wie versprochen. Eigenes Team von der Baustelle bis zur Endreinigung. Bin nicht leicht zu beeindrucken, aber hier passt es.',
    leistung: 'Badsanierung komplett',
  },
];

// TODO: echte Google-Bewertungszahlen vom Kunden einsetzen.
// Aktuell Platzhalter — bei Veröffentlichung gegen verifizierte Werte tauschen.
const GOOGLE_RATING = 4.9;
const GOOGLE_COUNT = 87;

export default function Kundenstimmen() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-wide">
        {/* === Google-Badge oben mittig (Editorial Hero-Treatment) === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Stimmen unserer Kunden</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Hunderte Berliner
            <br />
            <span className="text-copper">haben es schon ausprobiert.</span>
          </h2>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.a
          href="https://www.google.com/search?q=Finder+GmbH+Greifswalder+Berlin"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-5 rounded-2xl border border-coal/10 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-6"
        >
          {/* G-Logo */}
          <div className="grid h-14 w-14 flex-none place-items-center rounded-xl bg-white shadow-inner ring-1 ring-coal/5">
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38Z"
              />
            </svg>
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-bold text-coal">
                {GOOGLE_RATING.toString().replace('.', ',')}
              </span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-copper text-copper"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>
            <div className="mt-0.5 text-sm text-coal/70">
              {GOOGLE_COUNT}+ Bewertungen auf Google
            </div>
          </div>

          <span className="hidden text-xs uppercase tracking-widest text-coal/40 sm:block">
            Anzeigen →
          </span>
        </motion.a>

        {/* === Reviews === */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex h-full flex-col rounded-2xl border border-coal/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <Quote className="text-copper" size={28} />
                <span className="rounded-full bg-cream-200/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coal/60">
                  {r.leistung}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-coal">
                „{r.text}"
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between border-t border-coal/10 pt-5">
                <div>
                  <div className="font-semibold text-coal">{r.name}</div>
                  <div className="text-xs text-coal/60">{r.ort}</div>
                </div>
                <div className="flex items-center gap-1 text-copper">
                  {Array.from({ length: r.sterne }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="fill-copper"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* TODO-Hinweis im Code, wird live ersetzt */}
        <p className="mt-10 text-center text-xs uppercase tracking-widest text-coal/40">
          Platzhalter-Texte · Echte Google-Rezensionen werden vor Go-Live eingebunden
        </p>
      </div>
    </section>
  );
}
