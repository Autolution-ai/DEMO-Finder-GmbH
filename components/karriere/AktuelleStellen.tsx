'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Wrench, GraduationCap, ShieldCheck } from 'lucide-react';

// TODO: mit aktuellem JOIN-Profil verifizieren: https://join.com/companies/finderjobs
const stellen = [
  {
    id: 'anlagenmechaniker-kundendienst',
    icon: Wrench,
    titel: 'Anlagenmechaniker SHK Kundendienst (m/w/d)',
    typ: 'Vollzeit · Festanstellung',
    ort: 'Berlin Prenzlauer Berg',
    gehalt: 'bis 4.600 € brutto',
    kurz: 'Sie fahren von Kunde zu Kunde, warten Heizungsanlagen, beheben Störungen und installieren Thermen oder Wärmepumpen. Bei uns erwartet Sie kein Akkord und kein Rohbau — sondern echter Handwerksstolz.',
    punkte: [
      'Abgeschlossene Ausbildung als Anlagenmechaniker SHK oder vergleichbar',
      'Führerschein der Klasse B',
      'Erfahrung im Kundendienst ist von Vorteil',
    ],
    badge: 'Sofort',
    badgeColor: 'bg-copper text-coal',
  },
  {
    id: 'servicetechniker',
    icon: ShieldCheck,
    titel: 'Servicetechniker Heizung & Sanitär (m/w/d)',
    typ: 'Vollzeit · Festanstellung',
    ort: 'Berlin & Brandenburg',
    gehalt: 'bis 4.400 € brutto',
    kurz: 'Ihr Schwerpunkt liegt auf Wartung und Inspektion von Brennwerttherme, Wärmepumpe sowie Gas- und Ölheizungen. Sie erstellen Protokolle, stellen Diagnosen und beraten unsere Kunden direkt vor Ort.',
    punkte: [
      'Erfahrung in der Wartung von Heizungsanlagen',
      'Selbstständige und strukturierte Arbeitsweise',
      'Gepflegtes Auftreten im direkten Kundenkontakt',
    ],
    badge: 'Offen',
    badgeColor: 'bg-white/10 text-white',
  },
  {
    id: 'ausbildung-anlagenmechaniker',
    icon: GraduationCap,
    titel: 'Ausbildung Anlagenmechaniker:in SHK (m/w/d)',
    typ: '3,5 Jahre · Start jährlich im August',
    ort: 'Berlin Prenzlauer Berg',
    gehalt: 'bis 1.200 € im 3. Lehrjahr',
    kurz: 'Bei uns lernen Sie alles, was den Beruf ausmacht: Heizungsbau, Sanitärinstallation, Wartung und Kundendienst. Schon ab der ersten Woche übernehmen Sie echte Aufgaben — und halten nicht nur das Werkzeug.',
    punkte: [
      'Guter Hauptschulabschluss oder besser',
      'Begeisterung für Handwerk und Lust auf Verantwortung',
      'Pünktlichkeit, Zuverlässigkeit und Teamgeist',
    ],
    badge: 'Start 2026',
    badgeColor: 'bg-white/10 text-white',
  },
];

export default function AktuelleStellen() {
  return (
    <section id="stellen" className="bg-anthra py-24 text-white sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow-light">Aktuelle Stellen</span>
            <h2 className="editorial-h2 mt-5 text-white">
              Drei Wege,
              <br />
              Teil von <span className="text-copper">Finder</span> zu werden.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/70">
              Sie finden Ihre Wunschrolle nicht in der Liste, möchten aber zu
              uns gehören? Schreiben Sie uns trotzdem. Wir wachsen und stellen
              ein, wann immer die Person zu uns passt.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5">
          {stellen.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-coal transition hover:border-copper/40"
              >
                <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
                  {/* Icon + Badge */}
                  <div className="lg:col-span-2">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.04] text-copper transition group-hover:bg-copper group-hover:text-coal group-hover:rotate-[-6deg]">
                      <Icon size={28} strokeWidth={2.1} />
                    </div>
                    <span
                      className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${s.badgeColor}`}
                    >
                      {s.badge}
                    </span>
                  </div>

                  {/* Inhalt */}
                  <div className="lg:col-span-7">
                    <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {s.titel}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-white/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} /> {s.typ}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> {s.ort}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-copper">
                        {s.gehalt}
                      </span>
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-white/75">
                      {s.kurz}
                    </p>

                    <ul className="mt-5 grid gap-2 text-sm text-white/65 sm:grid-cols-2">
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
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-4 font-semibold text-white shadow-md shadow-copper/30 transition hover:bg-copper-600 lg:w-auto"
                    >
                      Bewerben
                      <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                    </a>
                    <a
                      href="https://join.com/companies/finderjobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs uppercase tracking-widest text-white/40 hover:text-white"
                    >
                      Details auf JOIN.com →
                    </a>
                  </div>
                </div>

                {/* Dekorative Hover-Linie */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-widest text-white/40">
          Alle verbindlichen Stellenausschreibungen finden Sie auf{' '}
          <a
            href="https://join.com/companies/finderjobs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline"
          >
            join.com/companies/finderjobs
          </a>
        </p>
      </div>
    </section>
  );
}
