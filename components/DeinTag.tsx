'use client';

import { motion } from 'framer-motion';
import { Sunrise, Coffee, Wrench, Soup, ClipboardCheck, Home } from 'lucide-react';

const steps = [
  { zeit: '07:00', icon: Sunrise, titel: 'Firmenwagen', text: 'Du steigst in deinen Caddy. Tour ist im Tablet, Werkzeug an Bord.' },
  { zeit: '08:00', icon: Coffee, titel: 'Erster Kunde', text: 'Heizung checkt nicht. Du klingelst, redest, löst. Sauber, freundlich.' },
  { zeit: '12:00', icon: Soup, titel: 'Mittag', text: 'Eine Stunde Pause. Wo du willst – nicht in der Werkstatt-Kantine.' },
  { zeit: '14:00', icon: Wrench, titel: 'Wartung', text: 'Brennwert-Therme jährlich durchchecken. Routine, kein Druck.' },
  { zeit: '16:30', icon: ClipboardCheck, titel: 'Bericht & Rückgabe', text: 'Kurz dokumentieren, Werkstatt – Auto bleibt bei dir, wenn du willst.' },
  { zeit: '17:00', icon: Home, titel: 'Feierabend', text: 'Pünktlich. Wirklich. Ohne „nur noch schnell".' },
];

export default function DeinTag() {
  return (
    <section id="tag" className="bg-ink py-24 text-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow !bg-white/10 !text-white/80">Dein Tag bei uns</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Planbar. Sauber. <span className="text-copper">Auf Augenhöhe.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/15 lg:block" />
          <div className="grid gap-6 lg:grid-cols-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.zeit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-copper text-ink ring-4 ring-ink">
                    <Icon size={20} strokeWidth={2.3} />
                  </div>
                  <div className="mt-4 font-display text-sm font-semibold text-copper">
                    {s.zeit}
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">{s.titel}</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{s.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
