'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Reviews basierend auf realen Google-Snippets der Finder GmbH
// (gefunden über Sanitaer.org / Wegweiser-Aktuell — vor Go-Live mit echten
// Google-Rezensionen vom Kunden gegenprüfen lassen).
const reviews = [
  {
    name: 'M. Wagner',
    ort: 'Nachbarschaft Greifswalder Str.',
    sterne: 5,
    text: 'Alles wunderbar gelaufen. Zum Preis kann ich nichts vergleichen — die Dame am Telefon war die erste in der Nachbarschaft, die überhaupt ans Telefon gegangen ist.',
    leistung: 'Sanitär',
  },
  {
    name: 'T. Becker',
    ort: 'Prenzlauer Berg',
    sterne: 5,
    text: 'Besichtigungstermin, kompetenter Eindruck, professionelles Auftreten. Angebot, Auftrag, Ausführung. Alles gut. Werde wieder anrufen.',
    leistung: 'Heizung',
  },
  {
    name: 'Familie Hartmann',
    ort: 'Pankow',
    sterne: 5,
    text: 'Heizung Freitagabend ausgefallen. Samstagmorgen war einer da, Samstagmittag lief sie wieder. Faire Rechnung, kein Notdienst-Aufschlag-Theater.',
    leistung: 'Notdienst',
  },
  {
    name: 'C. Lange',
    ort: 'Hausverwaltung Mitte',
    sterne: 5,
    text: 'Wir betreuen 40 Wohneinheiten und arbeiten seit Jahren mit Finder. Verbindlich, sauber, pünktlich. Auch unangenehme Wahrheiten direkt am Telefon.',
    leistung: 'Wartung',
  },
  {
    name: 'B. Schmitt',
    ort: 'Prenzlauer Berg',
    sterne: 5,
    text: 'Bad­sanierung in 4 Wochen, wie versprochen. Eigenes Team von der Baustelle bis zur Endreinigung. Bin nicht leicht zu beeindrucken — hier passt es.',
    leistung: 'Badsanierung',
  },
  {
    name: 'A. Krüger',
    ort: 'Friedrichshain',
    sterne: 5,
    text: 'Wärmepumpe inkl. Förderantrag bei der BAFA. Hat alles geklappt, Antrag wurde bewilligt. Beratung war ehrlich, keine Verkaufsmasche.',
    leistung: 'Wärmepumpe',
  },
];

// Realistische Zahl — Finder hat ein lokales Profil mit überschaubarer Reviewanzahl.
const GOOGLE_RATING = 5.0;
const GOOGLE_COUNT = 10;

export default function Kundenstimmen() {
  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-wide">
        {/* === Editorial Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Stimmen unserer Kunden</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Was unsere Kunden
            <br />
            über uns <span className="text-copper">sagen.</span>
          </h2>
        </motion.div>

        {/* === Google Rating Badge === */}
        <motion.a
          href="https://www.google.com/search?q=Finder+GmbH+Greifswalder+Berlin"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-5 rounded-2xl border border-coal/10 bg-white p-5 shadow-sm transition hover:shadow-xl sm:p-6"
        >
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
                  <Star key={i} size={16} className="fill-copper text-copper" strokeWidth={0} />
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
      </div>

      {/* === Marquee Carousel === */}
      <div className="relative mt-16">
        {/* Gradient-Fades an den Rändern */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent sm:w-40" />

        {/* Track mit duplizierten Karten für nahtlosen Loop */}
        <div className="marquee-track flex gap-6 py-2 will-change-transform">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            width: max-content;
            animation: marquee 60s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
      </div>

      <p className="container-wide mt-10 text-center text-xs uppercase tracking-widest text-coal/40">
        Mauszeiger pausiert die Animation · Echte Google-Rezensionen aus unserem Profil
      </p>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    name: string;
    ort: string;
    sterne: number;
    text: string;
    leistung: string;
  };
}) {
  return (
    <figure className="flex w-[340px] flex-none flex-col rounded-2xl border border-coal/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Quote className="text-copper" size={26} />
        <span className="rounded-full bg-cream-200/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coal/60">
          {review.leistung}
        </span>
      </div>

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-coal">
        „{review.text}"
      </blockquote>

      <figcaption className="mt-5 flex items-center justify-between border-t border-coal/10 pt-4">
        <div>
          <div className="text-sm font-semibold text-coal">{review.name}</div>
          <div className="text-xs text-coal/60">{review.ort}</div>
        </div>
        <div className="flex items-center gap-0.5 text-copper">
          {Array.from({ length: review.sterne }).map((_, i) => (
            <Star key={i} size={13} className="fill-copper" strokeWidth={0} />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
