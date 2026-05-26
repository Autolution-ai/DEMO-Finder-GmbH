'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-copper py-24 text-ink">
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-5xl font-bold leading-[1.05] sm:text-6xl">
            Bock auf einen Job{' '}
            <span className="underline decoration-ink/30 underline-offset-8">
              ohne Bullshit?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80">
            Drei Minuten. Vier Fragen. Antwort in 24 Stunden, persönlich.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#bewerben"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-5 text-lg font-semibold text-white shadow-xl transition hover:bg-ink-700 active:scale-[0.98]"
            >
              Jetzt in 3 Minuten bewerben <ArrowRight size={20} />
            </a>
          </div>

          <a
            href="tel:+493070073555"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-ink"
          >
            <Phone size={16} />
            Lieber telefonieren? 030 70073555 · Mo–Fr 8–14 Uhr
          </a>
        </motion.div>
      </div>
    </section>
  );
}
