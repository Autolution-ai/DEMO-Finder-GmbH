'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Phone, MessageCircle } from 'lucide-react';

type Antworten = {
  ausbildung?: 'ja' | 'vergleichbar' | 'nein';
  jahre?: string;
  fuehrerschein?: 'ja' | 'nein';
  start?: 'sofort' | '1 Monat' | '3 Monate' | 'später';
  name?: string;
  telefon?: string;
  whatsapp?: boolean;
};

const TOTAL = 5;

export default function FunnelNew() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Antworten>({});
  const [done, setDone] = useState<'ok' | 'absage' | null>(null);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const progress = ((step + 1) / TOTAL) * 100;

  const submit = () => {
    if (a.ausbildung === 'nein') setDone('absage');
    else setDone('ok');
    // TODO: API-Route /api/bewerbung an info@finder-gmbh.info
  };

  return (
    <section id="bewerben" className="relative overflow-hidden bg-coal py-24 text-white sm:py-32">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-copper/15 blur-[120px]"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-light">Deine Bewerbung</span>
          <h2 className="editorial-h2 mt-5 text-white">
            In 3 Minuten.
            <br />
            <span className="text-copper">Ohne Anschreiben. Ohne PDF.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Vier Fragen, deine Handynummer. Du hörst innerhalb von 24 Stunden
            persönlich von uns. Versprochen.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl bg-white p-8 text-coal shadow-2xl sm:p-10">
            {done === 'ok' && <Erfolg name={a.name} />}
            {done === 'absage' && <Absage />}

            {!done && (
              <>
                {/* Progress mit Step-Indicators */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-coal/60">
                    <span>Frage {step + 1} von {TOTAL}</span>
                    <span className="text-copper">{Math.round(progress)} %</span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: TOTAL }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          i <= step ? 'bg-copper' : 'bg-coal/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <Frage titel="Hast du eine Ausbildung als Anlagenmechaniker SHK?">
                        <Choices
                          value={a.ausbildung}
                          onChange={(v) => {
                            setA({ ...a, ausbildung: v as Antworten['ausbildung'] });
                            setTimeout(next, 200);
                          }}
                          options={[
                            { v: 'ja', label: 'Ja, abgeschlossen' },
                            { v: 'vergleichbar', label: 'Vergleichbare Ausbildung' },
                            { v: 'nein', label: 'Nein' },
                          ]}
                        />
                      </Frage>
                    )}

                    {step === 1 && (
                      <Frage titel="Wie viele Jahre Berufserfahrung hast du?">
                        <Choices
                          value={a.jahre}
                          onChange={(v) => {
                            setA({ ...a, jahre: v });
                            setTimeout(next, 200);
                          }}
                          options={[
                            { v: '<2', label: 'Weniger als 2 Jahre' },
                            { v: '2-5', label: '2 bis 5 Jahre' },
                            { v: '5-10', label: '5 bis 10 Jahre' },
                            { v: '10+', label: 'Mehr als 10 Jahre' },
                          ]}
                        />
                      </Frage>
                    )}

                    {step === 2 && (
                      <Frage titel="Hast du einen Führerschein Klasse B?">
                        <Choices
                          value={a.fuehrerschein}
                          onChange={(v) => {
                            setA({ ...a, fuehrerschein: v as Antworten['fuehrerschein'] });
                            setTimeout(next, 200);
                          }}
                          options={[
                            { v: 'ja', label: 'Ja' },
                            { v: 'nein', label: 'Nein' },
                          ]}
                        />
                      </Frage>
                    )}

                    {step === 3 && (
                      <Frage titel="Wann könntest du bei uns anfangen?">
                        <Choices
                          value={a.start}
                          onChange={(v) => {
                            setA({ ...a, start: v as Antworten['start'] });
                            setTimeout(next, 200);
                          }}
                          options={[
                            { v: 'sofort', label: 'Sofort' },
                            { v: '1 Monat', label: 'In 1 Monat' },
                            { v: '3 Monate', label: 'In 3 Monaten' },
                            { v: 'später', label: 'Später' },
                          ]}
                        />
                      </Frage>
                    )}

                    {step === 4 && (
                      <Frage titel="Wie heißt du und wie erreichen wir dich?">
                        <div className="space-y-4">
                          <input
                            type="text"
                            aria-label="Vor- und Nachname"
                            autoComplete="name"
                            placeholder="Dein Vor- und Nachname"
                            value={a.name ?? ''}
                            onChange={(e) => setA({ ...a, name: e.target.value })}
                            className="w-full rounded-xl border-2 border-coal/10 bg-cream-100 px-5 py-4 text-base outline-none transition focus:border-copper focus:bg-white"
                          />
                          <input
                            type="tel"
                            inputMode="tel"
                            aria-label="Handynummer"
                            autoComplete="tel"
                            placeholder="Handynummer"
                            value={a.telefon ?? ''}
                            onChange={(e) => setA({ ...a, telefon: e.target.value })}
                            className="w-full rounded-xl border-2 border-coal/10 bg-cream-100 px-5 py-4 text-base outline-none transition focus:border-copper focus:bg-white"
                          />
                          <label className="flex items-start gap-3 rounded-xl bg-cream-100 p-4 text-sm">
                            <input
                              type="checkbox"
                              checked={a.whatsapp ?? false}
                              onChange={(e) => setA({ ...a, whatsapp: e.target.checked })}
                              className="mt-0.5 h-5 w-5 flex-none accent-copper"
                            />
                            <span className="text-coal">
                              <strong className="font-semibold">Per WhatsApp ist mir am liebsten.</strong>
                              <br />
                              <span className="text-xs text-coal/60">
                                Schnellste Antwort, oft innerhalb einer Stunde während der Bürozeiten.
                              </span>
                            </span>
                          </label>
                          <p className="text-xs text-coal/55">
                            Mit dem Absenden stimmst du der{' '}
                            <a href="/datenschutz" className="text-copper underline">
                              Datenschutzerklärung
                            </a>{' '}
                            zu. Wir nutzen deine Daten nur für deine Bewerbung.
                          </p>
                        </div>
                      </Frage>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  {step > 0 ? (
                    <button
                      onClick={back}
                      className="inline-flex items-center gap-1 text-sm font-medium text-coal/60 hover:text-coal"
                    >
                      <ArrowLeft size={16} /> Zurück
                    </button>
                  ) : (
                    <span />
                  )}

                  {step === TOTAL - 1 && (
                    <button
                      onClick={submit}
                      disabled={!a.name || !a.telefon}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Bewerbung abschicken <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Alternative Kontaktwege unter dem Formular */}
          {!done && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+493070073555"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-copper/50 hover:bg-white/[0.06]"
              >
                <Phone size={18} className="flex-none text-copper" />
                <div>
                  <div className="text-sm font-semibold">Lieber telefonieren?</div>
                  <div className="text-xs text-white/60">030 70073555 · Mo–Fr 8–14</div>
                </div>
              </a>
              <a
                href="https://wa.me/493070073555?text=Hallo%2C%20ich%20bewerbe%20mich%20bei%20Finder%20GmbH%20als%20Anlagenmechaniker."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-copper/50 hover:bg-white/[0.06]"
              >
                <MessageCircle size={18} className="flex-none text-copper" />
                <div>
                  <div className="text-sm font-semibold">WhatsApp direkt</div>
                  <div className="text-xs text-white/60">Schreib uns einfach</div>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Frage({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold leading-tight text-coal sm:text-3xl">
        {titel}
      </h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Choices<T extends string>({
  value,
  onChange,
  options,
}: {
  value?: T;
  onChange: (v: T) => void;
  options: { v: T; label: string }[];
}) {
  return (
    <div className="grid gap-3">
      {options.map((o) => {
        const active = value === o.v;
        return (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left font-medium transition ${
              active
                ? 'border-copper bg-copper/5 text-coal'
                : 'border-coal/10 bg-cream-100 hover:border-coal/30 hover:bg-cream'
            }`}
          >
            <span>{o.label}</span>
            {active && (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-copper text-white">
                <Check size={14} strokeWidth={3} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Erfolg({ name }: { name?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-copper text-white"
      >
        <Check size={36} strokeWidth={3} />
      </motion.div>
      <h3 className="mt-8 font-display text-3xl font-bold text-coal">
        Danke{name ? `, ${name.split(' ')[0]}` : ''}.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-coal/70">
        Wir melden uns innerhalb von 24 Stunden persönlich. Nicht per Massenmail,
        sondern direkt von Thomas, Dietmar oder Jörg.
      </p>
    </motion.div>
  );
}

function Absage() {
  return (
    <div className="text-center">
      <h3 className="font-display text-2xl font-bold text-coal">
        Ehrliche Antwort.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-coal/70">
        Ohne Ausbildung als Anlagenmechaniker SHK oder vergleichbar passt es
        leider nicht. Falls dich unsere{' '}
        <a href="#stellen" className="text-copper underline">
          Ausbildungsstelle
        </a>{' '}
        interessiert, melde dich gern dort.
      </p>
      <a
        href="tel:+493070073555"
        className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-coal/15 px-6 py-3 font-semibold text-coal hover:border-coal/30"
      >
        <Phone size={16} /> Trotzdem anrufen: 030 70073555
      </a>
    </div>
  );
}
