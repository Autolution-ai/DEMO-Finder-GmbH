import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Finder GmbH',
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-32 pb-24">
        <article className="container-tight max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Impressum</h1>

          <section className="prose-section mt-10">
            <h2 className="section-h2">Herausgeber und Betreiber der Website</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Finder GmbH<br />
              Greifswalder Str. 23<br />
              10405 Berlin
            </p>
          </section>

          <Field label="Geschäftsführer" value="Thomas Finder & Dietmar Erler" />
          <Field label="Öffnungszeiten" value="Montag – Freitag 08:00 – 14:00 Uhr" />
          <Field label="Telefon" value={<a href="tel:+493070073555" className="text-copper hover:underline">030 70073555</a>} />
          <Field label="E-Mail" value={<a href="mailto:info@finder-gmbh.info" className="text-copper hover:underline">info@finder-gmbh.info</a>} />
          <Field label="Registergericht" value="Amtsgericht Charlottenburg" />
          <Field label="Registernummer" value="–" />
          <Field label="Umsatzsteuer-ID" value="–" />

          <section className="mt-10">
            <h2 className="section-h2">Bildnachweise</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              <a
                href="https://www.unsplash.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-copper hover:underline"
              >
                www.unsplash.com
              </a>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-h2">Haftungshinweis</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
              sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <p className="mt-12 text-sm text-ink/50">
            Design by Çelik &amp; Finder GbR
          </p>
        </article>
      </main>
      <Footer />

      <style>{`
        .section-h2 { font-family: var(--font-display); font-weight: 600; font-size: 1.25rem; color: #0B2545; }
        .prose-section + .prose-section { margin-top: 2rem; }
      `}</style>
    </>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <section className="mt-8 grid gap-1 sm:grid-cols-3">
      <div className="text-sm font-semibold uppercase tracking-wide text-ink/60">
        {label}
      </div>
      <div className="text-ink/80 sm:col-span-2">{value}</div>
    </section>
  );
}
