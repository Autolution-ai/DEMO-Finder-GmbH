'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

export default function Kontakt() {
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    tel: '',
    anliegen: '',
    text: '',
    datenschutz: false,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API-Route /api/kontakt anbinden, die per E-Mail an info@finder-gmbh.info sendet
    setDone(true);
  };

  return (
    <section id="kontakt" className="bg-cream py-24 sm:py-32">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        {/* Linke Spalte: Kontaktdaten */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Kontakt</span>
          <h2 className="editorial-h2 mt-5 text-coal">
            Schreib uns.
            <br />
            <span className="text-copper">Wir melden uns.</span>
          </h2>
          <p className="mt-6 max-w-prose text-coal/70">
            Persönlich am Telefon Mo–Fr von 8 bis 14 Uhr. Außerhalb dieser
            Zeiten nutzen wir das Formular und melden uns am nächsten Werktag.
          </p>

          <div className="mt-10 space-y-5">
            <Info icon={Phone}>
              <a href="tel:+493070073555" className="font-semibold hover:text-copper">
                030 70073555
              </a>
              <span className="block text-sm text-coal/60">
                Mo–Fr 08:00 – 14:00 Uhr
              </span>
            </Info>
            <Info icon={Mail}>
              <a href="mailto:info@finder-gmbh.info" className="font-semibold hover:text-copper">
                info@finder-gmbh.info
              </a>
            </Info>
            <Info icon={MapPin}>
              <span className="font-semibold">Greifswalder Str. 23</span>
              <span className="block text-sm text-coal/60">10405 Berlin</span>
            </Info>
            <Info icon={Clock}>
              <span className="font-semibold">Mo–Fr 08 – 14 Uhr</span>
              <span className="block text-sm text-coal/60">
                Termine nach Vereinbarung
              </span>
            </Info>
          </div>
        </motion.div>

        {/* Rechte Spalte: Formular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl bg-coal p-8 text-white shadow-xl sm:p-10">
            {done ? (
              <div className="grid h-full place-items-center py-10 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-copper">
                    <Check size={28} strokeWidth={3} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">
                    Danke. Wir sind dran.
                  </h3>
                  <p className="mt-3 text-white/70">
                    Du hörst innerhalb von 24 Stunden von uns – persönlich.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Dein Name"
                    type="text"
                    value={data.name}
                    onChange={(v) => setData({ ...data, name: v })}
                    required
                  />
                  <Field
                    label="Telefon"
                    type="tel"
                    value={data.tel}
                    onChange={(v) => setData({ ...data, tel: v })}
                    required
                  />
                </div>
                <Field
                  label="E-Mail"
                  type="email"
                  value={data.email}
                  onChange={(v) => setData({ ...data, email: v })}
                  required
                />

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">
                    Anliegen
                  </label>
                  <select
                    value={data.anliegen}
                    onChange={(e) => setData({ ...data, anliegen: e.target.value })}
                    required
                    className="mt-2 w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white outline-none transition focus:border-copper"
                  >
                    <option value="" className="bg-coal">Bitte wählen</option>
                    <option value="heizung" className="bg-coal">Heizung</option>
                    <option value="bad" className="bg-coal">Badsanierung</option>
                    <option value="sanitaer" className="bg-coal">Sanitär</option>
                    <option value="wartung" className="bg-coal">Wartung</option>
                    <option value="notdienst" className="bg-coal">Notdienst</option>
                    <option value="klima" className="bg-coal">Klima</option>
                    <option value="andere" className="bg-coal">Andere</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">
                    Was sollen wir wissen?
                  </label>
                  <textarea
                    value={data.text}
                    onChange={(e) => setData({ ...data, text: e.target.value })}
                    rows={4}
                    placeholder="Kurz dein Anliegen – wir kümmern uns."
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white placeholder-white/40 outline-none transition focus:border-copper"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={data.datenschutz}
                    onChange={(e) => setData({ ...data, datenschutz: e.target.checked })}
                    required
                    className="mt-1 h-4 w-4 accent-copper"
                  />
                  <span>
                    Ich habe die{' '}
                    <a href="/datenschutz" className="underline hover:text-white">
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und stimme zu.
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn-primary mt-4 self-start"
                >
                  Anfrage abschicken <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-coal text-copper">
        <Icon size={18} strokeWidth={2.2} />
      </div>
      <div className="text-coal">{children}</div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white outline-none transition focus:border-copper"
      />
    </div>
  );
}
