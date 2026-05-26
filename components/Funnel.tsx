'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Phone } from 'lucide-react';

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

export default function Funnel() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Antworten>({});
  const [done, setDone] = useState<'ok' | 'absage' | null>(null);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (a.ausbildung === 'nein') {
      setDone('absage');
    } else {
      setDone('ok');
      // [PLATZHALTER] Hier API-Call zum CRM / Mail-Service einbauen
      // z.B. fetch('/api/bewerbung', { method: 'POST', body: JSON.stringify(a) })
    }
  };

  const progress = ((step + 1) / TOTAL) * 100;

  return (
    <section id="bewerben" className="bg-ink py-24 text-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/10 !text-white/80">
            In 3 Minuten bewerben
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Ohne Anschreiben. <span className="text-copper">Ohne PDF.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Vier Fragen, deine Nummer. Du hörst innerhalb von 24 Stunden von uns.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-8 text-ink shadow-2xl sm:p-10">
          {done === 'ok' && (
            <Erfolg name={a.name} />
          )}
          {done === 'absage' && (
            <Absage />
          )}
          {!done && (
            <>
              {/* Progress */}
              <div className="mb-8 flex items-center justify-between text-xs font-semibold text-ink/60">
                <span>Schritt {step + 1} von {TOTAL}</span>
                <span className="text-copper">{Math.round(progress)} %</span>
              </div>
              <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full bg-copper transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
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
                          { v: 'ja', label: 'Ja' },
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
                          { v: '2-5', label: '2 – 5 Jahre' },
                          { v: '5-10', label: '5 – 10 Jahre' },
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
                    <Frage titel="Wann könntest du anfangen?">
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
                          placeholder="Dein Vor- und Nachname"
                          value={a.name ?? ''}
                          onChange={(e) => setA({ ...a, name: e.target.value })}
                          className="w-full rounded-xl border border-ink/15 bg-white px-5 py-4 text-base outline-none transition focus:border-copper"
                        />
                        <input
                          type="tel"
                          inputMode="tel"
                          placeholder="Handynummer"
                          value={a.telefon ?? ''}
                          onChange={(e) => setA({ ...a, telefon: e.target.value })}
                          className="w-full rounded-xl border border-ink/15 bg-white px-5 py-4 text-base outline-none transition focus:border-copper"
                        />
                        <label className="flex items-center gap-3 rounded-xl bg-steel-50 p-4 text-sm">
                          <input
                            type="checkbox"
                            checked={a.whatsapp ?? false}
                            onChange={(e) => setA({ ...a, whatsapp: e.target.checked })}
                            className="h-5 w-5 accent-copper"
                          />
                          <span>Per WhatsApp ist mir am liebsten</span>
                        </label>
                        <p className="text-xs text-ink/60">
                          Mit dem Absenden stimmst du unserer{' '}
                          <a href="/datenschutz" className="underline">Datenschutzerklärung</a> zu.
                          Wir nutzen deine Daten nur für deine Bewerbung.
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink/60 hover:text-ink"
                  >
                    <ArrowLeft size={16} /> Zurück
                  </button>
                ) : <span />}

                {step === TOTAL - 1 && (
                  <button
                    onClick={submit}
                    disabled={!a.name || !a.telefon}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Bewerbung abschicken <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Frage({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold leading-tight">{titel}</h3>
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
            className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left font-medium transition ${
              active
                ? 'border-copper bg-copper/5 text-ink'
                : 'border-ink/15 hover:border-ink/30 hover:bg-ink/[0.02]'
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
    <div className="text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-copper text-white">
        <Check size={28} strokeWidth={3} />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold">
        Danke{name ? `, ${name.split(' ')[0]}` : ''}.
      </h3>
      <p className="mt-3 text-ink/75">
        Du hörst innerhalb von 24 Stunden von uns – persönlich, nicht per
        Massenmail.
      </p>
    </div>
  );
}

function Absage() {
  return (
    <div className="text-center">
      <h3 className="font-display text-2xl font-bold">Ehrliche Antwort.</h3>
      <p className="mt-3 text-ink/75">
        Ohne Ausbildung als Anlagenmechaniker (oder vergleichbar) können wir
        leider nichts anbieten. Vielleicht passt unsere{' '}
        {/* [PLATZHALTER] Ausbildungs-URL falls vorhanden */}
        <a href="#" className="text-copper underline">Ausbildungsstelle</a>?
      </p>
      <a
        href="tel:+4930000000"
        className="btn-ghost mt-6 inline-flex"
      >
        <Phone size={16} /> Trotzdem anrufen
      </a>
    </div>
  );
}
