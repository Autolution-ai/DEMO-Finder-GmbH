'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-24 text-white">
      {/* Hintergrund-Akzente */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-copper/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-ink-700/40 blur-3xl" />
      </div>

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow !bg-white/10 !text-white/80">
            Anlagenmechaniker SHK · Berlin & Brandenburg
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="sr-only">Anlagenmechaniker SHK Berlin: </span>
            Kundendienst{' '}
            <span className="text-copper">statt Baustelle.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Übertariflich. Eigener Firmenwagen. Antwort in 24 Stunden.
            Bewerbung in 3 Minuten. Ohne Anschreiben, ohne PDF.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#bewerben" className="btn-primary">
              In 3 Minuten bewerben <ArrowRight size={18} />
            </a>
            <a href="#benefits" className="btn-ghost !text-white !border-white/30 hover:!bg-white hover:!text-ink">
              Was du verdienst
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-copper text-copper" />
              {/* TODO: Echte Google-Bewertungszahl einsetzen, sobald vom Kunden bestätigt */}
              <span>Familienbetrieb · Berlin Prenzlauer Berg</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-copper" />
              <span>Eigener Firmenwagen inklusive</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-copper" />
              <span>Antwort in 24 h, garantiert</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
