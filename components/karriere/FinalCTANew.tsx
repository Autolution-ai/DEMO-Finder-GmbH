'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { IMG } from '@/lib/images';

export default function FinalCTANew() {
  return (
    <section className="relative overflow-hidden bg-coal py-32 text-white sm:py-40">
      {/* Atmospheric Image */}
      <Image
        src={IMG.hero.flame}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/95 to-coal/70" />
      <div className="grain absolute inset-0" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="editorial-h1 text-white">
            Lust auf einen Job{' '}
            <span className="text-copper italic font-serif font-normal">
              ohne
            </span>{' '}
            leere Versprechen?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl text-white/80">
            Drei Minuten Zeit, vier Fragen — und Sie hören innerhalb von 24
            Stunden persönlich von Thomas, Dietmar oder Jörg.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#bewerben" className="btn-primary text-lg !py-5 !px-9">
              Jetzt in 3 Minuten bewerben <ArrowRight size={20} />
            </a>
          </div>

          <a
            href="tel:+493070073555"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
          >
            <Phone size={16} />
            Lieber telefonieren? 030 70073555 · Mo–Fr 8–14 Uhr
          </a>
        </motion.div>
      </div>
    </section>
  );
}
