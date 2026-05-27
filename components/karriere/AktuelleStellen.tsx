'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Wrench, GraduationCap, ShieldCheck } from 'lucide-react';

// TODO: Diese Stellen mit dem Kunden / dem aktuellen JOIN-Profil verifizieren:
// https://join.com/companies/finderjobs
const stellen = [
  {
    id: 'anlagenmechaniker-kundendienst',
    icon: Wrench,
    titel: 'Anlagenmechaniker SHK Kundendienst (m/w/d)',
    typ: 'Vollzeit · Festanstellung',
    ort: 'Berlin Prenzlauer Berg',
    kurz: 'Du fährst von Kunde zu Kunde, wartest Heizungen, behebst Störungen, baust Therme oder Wärmepumpe ein. Kein Akkord, kein Rohbau.',
    punkte: [
      'Ausbildung als Anlagenmechaniker SHK oder vergleichbar',
      'Führerschein Klasse B',
      'Berufserfahrung im Kundendienst von Vorteil',
    ],
    badge: 'Sofort verfügbar',
  },
  {
    id: 'servicetechniker',
    icon: ShieldCheck,
    titel: 'Servicetechniker Heizung & Sanitär (m/w/d)',
    typ: 'Vollzeit · Festanstellung',
    ort: 'Berlin & Brandenburg',
    kurz: 'Schwerpunkt Wartung und Inspektion. Brennwerttherme, Wärmepumpe, Gas, Öl. Mit Protokoll, Diagnose, Beratung beim Kunden.',
    punkte: [
      'Erfahrung in Wartung von Heizungsanlagen',
      'Selbstständige Arbeitsweise',
      'Gepflegtes Auftreten im Kundenkontakt',
    ],
    badge: 'Offen',
  },
  {
    id: 'ausbildung-anlagenmechaniker',
    icon: GraduationCap,
    titel: 'Ausbildung Anlagenmechaniker:in SHK (m/w/d)',
    typ: '3,5 Jahre · Start jährlich im August',
    ort: 'Berlin Prenzlauer Berg',
    kurz: 'Du lernst alles. Heizungsbau, Sanitärinstallation, Wartung, Kundendienst. Mit echten Aufgaben ab Woche eins, nicht nur Werkzeug halten.',
    punkte: [
      'Guter Hauptschulabschluss oder besser',
      'Bock auf Handwerk, Lust auf Verantwortung',
      'Pünktlich, zuverlässig, teamfähig',
    ],
    badge: 'Ausbildungsplatz 2026',
  },
];

export default function AktuelleStellen() {
  return (
    <section id="stellen" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="eyebrow">Aktuelle Stellen</span>
            <h2 className="editorial-h2 mt-4 text-ink">
              Drei Wege,
              <br />
              <span className="text-copper">Teil von Finder zu werden.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-ink/70">
            Wenn deine Rolle nicht dabei ist und du trotzdem passt: schreib uns
            trotzdem. Wir wachsen und stellen ein, wenn die Person stimmt.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {stellen.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative grid gap-6 rounded-2xl border border-ink/10 bg-cream-100 p-6 transition hover:border-copper/40 hover:bg-cream sm:p-8 lg:grid-cols-12 lg:items-start lg:gap-10"
              >
                {/* Icon + Badge */}
                <div className="lg:col-span-2">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-ink text-copper">
                    <Icon size={26} strokeWidth={2.1} />
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-copper px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                    {s.badge}
                  </span>
                </div>

                {/* Inhalt */}
                <div className="lg:col-span-7">
                  <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                    {s.titel}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} /> {s.typ}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} /> {s.ort}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-ink/75">{s.kurz}</p>

                  <ul className="mt-5 grid gap-1.5 text-sm text-ink/70">
                    {s.punkte.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-copper" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="#bewerben"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-copper lg:w-auto"
                  >
                    Auf diese Stelle bewerben
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://join.com/companies/finderjobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs uppercase tracking-widest text-ink/40 hover:text-ink"
                  >
                    Details auf JOIN.com →
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink/50">
          Hinweis: Verbindliche Stellenausschreibungen findest du auf{' '}
          <a
            href="https://join.com/companies/finderjobs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline"
          >
            join.com/companies/finderjobs
          </a>
          . Bei Abweichungen zählt der dort hinterlegte Stand.
        </p>
      </div>
    </section>
  );
}
