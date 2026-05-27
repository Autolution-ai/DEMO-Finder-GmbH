'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Euro, Truck, Clock, ShieldCheck } from 'lucide-react';

type Stat = {
  icon: React.ElementType;
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  {
    icon: Euro,
    prefix: 'bis ',
    value: 4600,
    suffix: ' €',
    label: 'Brutto im Monat',
  },
  {
    icon: Truck,
    value: 100,
    suffix: ' %',
    label: 'Eigener Firmenwagen',
  },
  {
    icon: Clock,
    value: 24,
    suffix: ' h',
    label: 'Persönliche Antwort',
  },
  {
    icon: ShieldCheck,
    value: 0,
    suffix: '',
    label: 'Akkord. Nie wieder.',
  },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {decimals > 0
        ? val.toFixed(decimals).replace('.', ',')
        : Math.round(val).toLocaleString('de-DE')}
    </span>
  );
}

export default function KarriereTrust() {
  return (
    <section className="bg-coal py-16 text-white">
      <div className="container-wide">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-5 bg-coal p-7 transition hover:bg-anthra"
              >
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-copper/15 text-copper transition group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-copper">
                    {s.prefix}
                    <Counter to={s.value} decimals={s.decimals ?? 0} />
                    {s.suffix}
                  </div>
                  <div className="mt-0.5 text-xs uppercase tracking-widest text-white/60">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
