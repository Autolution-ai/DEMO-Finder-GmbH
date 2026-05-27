import NavBrand from '@/components/landing/NavBrand';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Finder GmbH',
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <NavBrand />
      <main className="bg-white pt-32 pb-24">
        <article className="container-tight max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Datenschutzerklärung</h1>

          <p className="mt-6 text-sm text-ink/60">
            Diese Webseite wird betrieben von der Finder GmbH, Greifswalder
            Str. 23, 10405 Berlin. Verantwortlich im Sinne der DSGVO ist die
            Geschäftsführung (Thomas Finder, Dietmar Erler, Jörg Stolz).
          </p>

          <Section titel="1. Erhebung und Speicherung personenbezogener Daten">
            <p>
              Wir verarbeiten Ihre personenbezogenen Daten nur, soweit dies zur
              Bereitstellung dieser Website und zur Bearbeitung Ihrer
              Bewerbung oder Kontaktanfrage erforderlich ist (Art. 6 Abs. 1
              lit. b und f DSGVO).
            </p>
          </Section>

          <Section titel="2. Bewerbungsformular">
            <p>
              Wenn Sie sich über unser Online-Formular bewerben, übermitteln
              Sie uns folgende Daten: Name, Telefonnummer sowie Ihre Antworten
              zu Ausbildung, Berufserfahrung, Führerschein und Startwunsch.
            </p>
            <p className="mt-3">
              Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer
              Bewerbung und zur Kontaktaufnahme. Eine Weitergabe an Dritte
              erfolgt nicht. Nach Abschluss des Bewerbungsverfahrens werden
              die Daten spätestens nach 6 Monaten gelöscht. Eine längere
              Speicherung erfolgt nur, wenn Sie ausdrücklich zustimmen.
            </p>
          </Section>

          <Section titel="3. Server-Logfiles">
            <p>
              Unser Hosting-Anbieter erhebt automatisch IP-Adresse, Datum,
              Uhrzeit und aufgerufene URL zur Sicherstellung des Betriebs.
              Diese Daten werden nach 7 Tagen anonymisiert oder gelöscht.
            </p>
          </Section>

          <Section titel="4. Cookies">
            <p>
              Diese Website setzt ausschließlich technisch notwendige Cookies
              ein. Es werden keine Tracking-Cookies, kein Google Analytics
              und keine Marketing-Pixel verwendet, solange Sie nicht
              ausdrücklich zustimmen.
            </p>
          </Section>

          <Section titel="5. Schriftarten">
            <p>
              Schriftarten werden lokal über next/font geladen. Es findet kein
              externer Aufruf an Google-Server statt.
            </p>
          </Section>

          <Section titel="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              und Widerspruch. Kontaktieren Sie uns dafür einfach unter{' '}
              <a href="mailto:info@finder-gmbh.info" className="text-copper hover:underline">
                info@finder-gmbh.info
              </a>
              .
            </p>
            <p className="mt-3">
              Sie haben außerdem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig in Berlin
              ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
            </p>
          </Section>

          <p className="mt-12 text-sm text-ink/50">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-ink">{titel}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}
