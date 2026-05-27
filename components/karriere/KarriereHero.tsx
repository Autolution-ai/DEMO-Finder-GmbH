'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, MapPin, Briefcase } from 'lucide-react';
import { IMG } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function KarriereHero() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax: Bild scrollt langsamer als die Seite
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden bg-coal text-white"
    >
      {/* Parallax Background Image */}
      <div ref={imgRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src={IMG.hero.handsBoiler}
          alt="Anlagenmechaniker arbeitet an einer Brennwerttherme"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradients für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/85 to-coal/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-coal/40" />

      {/* Grain Overlay */}
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="h-20 flex-none" />

        <div className="flex flex-1 items-center">
          <div className="container-wide w-full">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow-light"
              >
                Karriere bei Finder · Seit 2010
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="editorial-h1 mt-6 text-white"
              >
                Kundendienst{' '}
                <span className="text-copper italic font-serif font-normal">
                  statt
                </span>{' '}
                Baustelle.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 max-w-xl text-xl leading-relaxed text-white/80"
              >
                Bei uns erwartet Sie übertarifliche Bezahlung, ein eigener
                Firmenwagen und eine persönliche Antwort innerhalb von 24
                Stunden. Bewerben Sie sich in drei Minuten — ganz ohne
                Anschreiben oder PDF.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <a href="#bewerben" className="btn-primary text-base">
                  Jetzt in 3 Minuten bewerben <ArrowRight size={18} />
                </a>
                <a href="#stellen" className="btn-light">
                  Offene Stellen ansehen
                </a>
              </motion.div>

              {/* Inline-Hinweise */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60"
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-copper" />
                  <span>3 offene Stellen</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-copper" />
                  <span>Greifswalder Str. 23, Berlin</span>
                </div>
                <a
                  href="tel:+493070073555"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone size={14} className="text-copper" />
                  <span>030 70073555</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container-wide flex-none pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-between text-xs uppercase tracking-widest text-white/40"
          >
            <span className="hidden sm:block">Ihre Bewerbung in drei Minuten</span>
            <a href="/" className="hover:text-white">
              ← Zurück zur Hauptseite
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
