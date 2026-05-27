'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function KarriereBruecke() {
  return (
    <section className="relative overflow-hidden bg-coal py-24 text-white sm:py-32">
      <Image
        src={IMG.hero.handsBoiler}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/85 to-coal/40" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="eyebrow-light">Karriere bei Finder</span>
          <h2 className="editorial-h2 mt-5">
            Wir wachsen.
            <br />
            <span className="text-copper">Du auch?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Anlagenmechaniker SHK, Kundendienst­techniker, Auszubildende. Bei
            uns kein Akkord, kein Baustellen-Stress. Eigener Firmenwagen,
            übertariflich, Antwort in 24 Stunden.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/karriere" className="btn-primary">
              Offene Stellen ansehen <ArrowRight size={18} />
            </a>
            <a href="/karriere#bewerben" className="btn-light">
              In 3 Minuten bewerben
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
