'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, GraduationCap, ShieldCheck, Phone } from 'lucide-react';
import { IMG } from '@/lib/images';

const stellen = [
  {
    icon: Wrench,
    titel: 'Anlagenmechaniker SHK',
    sub: 'Kundendienst · Vollzeit',
    gehalt: 'bis 4.600 €',
  },
  {
    icon: ShieldCheck,
    titel: 'Servicetechniker',
    sub: 'Heizung & Sanitär',
    gehalt: 'bis 4.400 €',
  },
  {
    icon: GraduationCap,
    titel: 'Ausbildung 2026',
    sub: 'Anlagenmechaniker:in SHK',
    gehalt: '3,5 Jahre',
  },
];

export default function KarriereBruecke() {
  return (
    <section className="relative overflow-hidden bg-coal py-24 text-white sm:py-32">
      {/* Background Image */}
      <Image
        src={IMG.hero.handsBoiler}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/95 to-coal/40" />
      <div className="grain absolute inset-0" />

      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Linke Seite: Headline + Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow-light">Karriere bei Finder</span>
            <h2 className="editorial-h1 mt-5 text-white">
              Du bist Anlagen­mechaniker?
              <br />
              <span className="text-copper italic font-serif font-normal">
                Wir suchen dich.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Kundendienst statt Baustelle. Eigener Firmenwagen, übertariflich,
              Antwort in 24 Stunden auf deine Bewerbung. Drei offene Stellen
              gerade.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/karriere#stellen" className="btn-primary">
                Offene Stellen <ArrowRight size={18} />
              </a>
              <a href="/karriere#bewerben" className="btn-light">
                In 3 Min bewerben
              </a>
              <a
                href="tel:+493070073555"
                className="inline-flex items-center gap-2 px-2 py-4 text-sm text-white/70 hover:text-white"
              >
                <Phone size={14} /> 030 70073555
              </a>
            </div>
          </motion.div>

          {/* Rechte Seite: Stellen-Preview-Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="grid gap-3">
              {stellen.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.titel}
                    href="/karriere#stellen"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-copper/40 hover:bg-white/[0.08] sm:p-5"
                  >
                    <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-coal text-copper transition group-hover:bg-copper group-hover:text-coal">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-base font-semibold">
                        {s.titel}
                      </div>
                      <div className="text-xs text-white/55">{s.sub}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-sm font-semibold text-copper">
                        {s.gehalt}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40">
                        Bewerben →
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <a
              href="/karriere"
              className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-white/15 px-5 py-4 text-sm text-white/60 transition hover:border-copper/40 hover:text-white"
            >
              <span>Alles zur Karriere bei Finder</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
