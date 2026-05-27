'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMG } from '@/lib/images';

export default function UeberUnsBrand() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-coal py-24 text-white sm:py-32">
      <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Bild links */}
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
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-coal/80 p-5 backdrop-blur-md">
              <div className="text-xs uppercase tracking-widest text-copper">
                Werkstatt
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                Greifswalder Str. 23, Berlin
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
          <span className="eyebrow-light">Über uns · Seit 2010</span>
          <h2 className="editorial-h2 mt-5">
            Meisterbetrieb für
            <br />
            <span className="text-copper">Installation und Heizungsbau.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Seit 2010 stehen wir für Service auf höchstem Niveau in den
              Bereichen Heizung, Sanitär, Klima und Lüftung. Berlin und
              Brandenburg, von der ersten Beratung bis zur Wartung Jahre
              später.
            </p>
            <p>
              Drei Geschäftsführer, ein Team. Wir sind die, die du beim ersten
              Termin kennenlernst und beim zweiten Termin wiederfindest. Kein
              Subunternehmer-Roulette, kein wechselndes Personal.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {/* TODO: echte Portraits einsetzen */}
            <Person name="Thomas Finder" rolle="Geschäftsführer" />
            <Person name="Dietmar Erler" rolle="Geschäftsführer" />
            <Person name="Jörg Stolz" rolle="Geschäftsführer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Person({ name, rolle }: { name: string; rolle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      {/* TODO: echtes Foto einsetzen */}
      <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-anthra to-coal" />
      <div className="mt-3 font-display text-base font-semibold leading-tight">{name}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/50">
        {rolle}
      </div>
    </div>
  );
}
