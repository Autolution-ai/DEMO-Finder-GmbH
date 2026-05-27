'use client';

import { motion } from 'framer-motion';
import { Phone, ClipboardList, FileText, Wrench } from 'lucide-react';

const steps = [
  {
    nr: '01',
    icon: Phone,
    title: 'Du rufst an oder schreibst.',
    desc: 'Werktags 8 bis 14 Uhr persönlich am Telefon. Außerhalb per WhatsApp oder Formular, Antwort am nächsten Werktag.',
  },
  {
    nr: '02',
    icon: ClipboardList,
    title: 'Wir kommen vorbei.',
    desc: 'Vor-Ort-Termin innerhalb von 5 Werktagen. Wir messen, fotografieren, hören zu. Kein Druck, keine Vertragsfalle.',
  },
  {
    nr: '03',
    icon: FileText,
    title: 'Du bekommst ein Festpreis-Angebot.',
    desc: 'Schriftlich, transparent, ohne Sternchentext. Du entscheidest in Ruhe. Wir warten.',
  },
  {
    nr: '04',
    icon: Wrench,
    title: 'Wir setzen es um.',
    desc: 'Eigenes Team, keine fremden Subunternehmer. Sauber gearbeitet, am Ende durchgekehrt.',
  },
];

export default function Prozess() {
  return (
    <section id="prozess" className="bg-cream-100 py-24 sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow">So arbeiten wir</span>
            <h2 className="editorial-h2 mt-5 text-coal">
              Vier Schritte.
              <br />
              <span className="text-copper">Kein Theater.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-coal/70">
            Wir wissen, dass ein Handwerker-Termin Nerven kostet. Deshalb
            haben wir den Prozess so einfach gemacht, wie es geht.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-coal/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.nr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-cream p-8 lg:p-10"
              >
                <div className="font-display text-xs uppercase tracking-widest text-copper">
                  Schritt {s.nr}
                </div>
                <div className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-coal text-copper">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-coal">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-coal/65">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
