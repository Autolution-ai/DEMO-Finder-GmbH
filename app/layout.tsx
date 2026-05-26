import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Anlagenmechaniker Job Berlin – Kundendienst statt Baustelle | Finder GmbH',
  description:
    'Anlagenmechaniker SHK in Berlin gesucht. Kundendienst statt Baustelle, eigener Firmenwagen, übertariflich. Bewirb dich in 3 Minuten – Antwort in 24h. Finder GmbH, Greifswalder Str. 23.',
  metadataBase: new URL('https://karriere.finder-gmbh.info'),
  openGraph: {
    title: 'Anlagenmechaniker SHK Berlin – Kundendienst statt Baustelle',
    description:
      'Übertariflich, eigener Firmenwagen, Feierabend pünktlich. Bewerbung in 3 Minuten – ohne Anschreiben, ohne PDF.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Finder GmbH Karriere',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
