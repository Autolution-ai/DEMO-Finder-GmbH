'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Award, Users, MapPin } from 'lucide-react';
import { IMG } from '@/lib/images';

const team = [
  {
    name: 'Thomas Finder',
    rolle: 'Geschäftsführer',
    bio: 'Gründer der Finder GmbH und Meister mit über 30 Jahren Erfahrung im Berliner Heizungsbau und in der Sanitärtechnik. Sein Anspruch: handwerkliche Sorgfalt, bei jedem einzelnen Auftrag.',
  },
  {
    name: 'Dietmar Erler',
    rolle: 'Geschäftsführer',
    bio: 'Verantwortlich für Technik und Projektplanung. Als Spezialist für Wärmepumpen-Umrüstung und Förderanträge begleitet er Sie durch jeden Schritt der Energiewende im eigenen Zuhause.',
  },
  {
    name: 'Jörg Stolz',
    rolle: 'Geschäftsführer',
    bio: 'Ihr Ansprechpartner für Kundendienst und Wartung. Erste Adresse für Hausverwaltungen, die einen verlässlichen Partner für ihre Bestände suchen.',
  },
];

const werte = [
  {
    icon: Handshake,
    titel: 'Ehrliche Beratung',
    text: 'Gute Beratung fängt nicht beim Verkauf an, sondern beim Zuhören. Wir nehmen uns Zeit, schauen Ihre Anlage in Ruhe an und empfehlen, was für Sie passt. Auch wenn das die günstigere Lösung ist.',
  },
  {
    icon: Award,
    titel: 'Höchste Qualität',
    text: 'Wir arbeiten mit Markenprodukten von Viessmann, Vaillant und Buderus. Unsere Monteure tragen einen Meisterabschluss in der Tasche. Bei Materialien und Verarbeitung machen wir keine Kompromisse.',
  },
  {
    icon: Users,
    titel: 'Eigenes Team',
    text: 'Heizung, Sanitär und Klima erledigen wir mit eigenen Mitarbeitern. Für Elektrik und Fliesen vertrauen wir auf zwei langjährige Partnerbetriebe, deren Qualität wir persönlich kennen.',
  },
];

export default function UeberUnsBrand() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-coal py-24 text-white sm:py-32">
      {/* === Teil 1: Story + Werkstatt-Bild === */}
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Bild links, klein-floating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={IMG.atmosphere.werkstatt}
                alt="Finder GmbH Werkstatt in Berlin Prenzlauer Berg"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-coal/60 via-transparent to-transparent" />

              {/* Floating Bild-Caption */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-coal/80 px-5 py-2.5 backdrop-blur-md">
                <MapPin size={14} className="text-copper" />
                <div className="text-sm">
                  <span className="font-semibold">Greifswalder Str. 23</span>
                  <span className="text-white/60"> · 10405 Berlin</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text rechts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow-light">Über Finder · Seit 2010</span>
            <h2 className="editorial-h2 mt-5">
              Meisterbetrieb
              <br />
              <span className="text-copper">aus Prenzlauer Berg.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
              <p>
                2010 in Berlin gegründet. Drei Geschäftsführer, ein eingespieltes
                Team. Über 2.500 Aufträge pro Jahr in Berlin und Brandenburg.
              </p>
              <p>
                Wir sind die, die beim ersten Termin kommen und beim zweiten
                Termin wiederkommen. Eigene Monteure mit Meisterabschluss, kein
                Subunternehmer-Roulette, kein wechselndes Personal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* === Teil 2: Werte === */}
      <div className="container-wide mt-24">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow-light">Worauf wir Wert legen</span>
          <h3 className="editorial-h2 mt-4 text-white">
            Drei Werte,
            <br />
            <span className="text-copper">an denen wir festhalten.</span>
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {werte.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.titel}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-copper/40 hover:bg-white/[0.06]"
              >
                {/* Dekorative Hintergrund-Nummer */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-8 font-display text-[8rem] font-black leading-none text-white/[0.04] transition group-hover:text-copper/15"
                >
                  0{i + 1}
                </span>

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="relative grid h-14 w-14 place-items-center rounded-xl bg-copper text-coal"
                >
                  <Icon size={24} strokeWidth={2.3} />
                </motion.div>

                <h4 className="relative mt-6 font-display text-xl font-bold">
                  {w.titel}
                </h4>
                <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                  {w.text}
                </p>

                {/* Hover-Underline Reveal */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* === Teil 3: Team === */}
      <div className="container-wide mt-24">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow-light">Das Team</span>
            <h3 className="editorial-h2 mt-4 text-white">
              Drei Meister,
              <br />
              <span className="text-copper">ein gemeinsames Versprechen.</span>
            </h3>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Wir sind klein genug, dass Sie jeden von uns persönlich kennenlernen.
            Und groß genug, um auch komplexe Sanierungen verlässlich umzusetzen.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {team.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* TODO: Echtes Portrait einsetzen — Platzhalter mit Initialen */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-anthra via-coal to-anthra">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-[7rem] font-bold leading-none text-white/8">
                    {p.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-2xl font-bold leading-tight">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-copper">
                    {p.rolle}
                  </div>
                </div>
              </div>
              <figcaption className="p-6">
                <p className="text-sm leading-relaxed text-white/70">{p.bio}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-widest text-white/40">
          Persönliche Portraits folgen mit unserem nächsten Foto-Shooting
        </p>
      </div>
    </section>
  );
}
