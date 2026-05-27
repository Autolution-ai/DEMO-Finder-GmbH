'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMG } from '@/lib/images';

export default function Showcase() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <section id="projekte" className="bg-coal py-24 text-white sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow-light">Vorher · Nachher</span>
            <h2 className="editorial-h2 mt-5 text-white">
              Vom dunklen Bad
              <br />
              <span className="text-copper">zum Lieblingsort.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Ziehe den Slider und siehe, was bei einer Bad­sanierung in
            Berlin Prenzlauer Berg passiert. Echte Projekt-Referenzen folgen
            mit dem Foto-Shooting im Sommer.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div
            ref={ref}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onClick={(e) => handleMove(e.clientX)}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl bg-coal"
          >
            {/* Nachher (unten) */}
            <Image
              src={IMG.showcase.badNachher}
              alt="Bad nach der Sanierung"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Vorher (drüber, Clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src={IMG.showcase.badVorher}
                alt="Bad vor der Sanierung"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Labels */}
            <div className="absolute left-5 top-5 rounded-full bg-coal/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              Vorher
            </div>
            <div className="absolute right-5 top-5 rounded-full bg-copper px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Nachher
            </div>

            {/* Divider */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-px bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-coal shadow-lg">
                <span className="text-lg">⇆</span>
              </div>
            </div>

            <input
              type="range"
              min={2}
              max={98}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Vorher-Nachher-Slider"
              className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="mt-5 text-center text-sm text-white/50">
            Tipp: Slider per Maus oder Touch verschieben.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
