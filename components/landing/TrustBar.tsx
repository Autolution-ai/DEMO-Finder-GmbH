'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  raw?: boolean; // ohne Tausender-Trennzeichen (z.B. Jahreszahl)
};

const stats: Stat[] = [
  { value: 2010, suffix: '', label: 'Gegründet in Berlin', raw: true },
  { value: 2500, suffix: '+', label: 'Aufträge pro Jahr' },
  { value: 3, suffix: '', label: 'Meister im Betrieb' },
  { value: 4.9, suffix: '★', label: 'Google Bewertung', decimals: 1 },
];

function Counter({
  to,
  decimals = 0,
  raw = false,
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  raw?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {decimals > 0
        ? val.toFixed(decimals).replace('.', ',')
        : raw
          ? String(Math.round(val))
          : Math.round(val).toLocaleString('de-DE')}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative -mt-px border-y border-white/5 bg-coal py-10 text-white">
      <div className="container-wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-baseline gap-3"
            >
              <div className="font-display text-5xl font-bold text-copper">
                <Counter to={s.value} decimals={s.decimals ?? 0} raw={s.raw ?? false} />
                <span>{s.suffix}</span>
              </div>
              <div className="text-sm uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
