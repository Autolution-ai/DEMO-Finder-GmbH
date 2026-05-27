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
  title: 'Anlagenmechaniker Job Berlin: Kundendienst statt Baustelle | Finder GmbH',
  description:
    'Anlagenmechaniker SHK in Berlin gesucht. Bei Finder GmbH erwartet Sie Kundendienst statt Baustelle, ein eigener Firmenwagen und übertarifliche Bezahlung. Bewerben Sie sich in 3 Minuten. Antwort in 24 Stunden.',
  metadataBase: new URL('https://karriere.finder-gmbh.info'),
  openGraph: {
    title: 'Anlagenmechaniker SHK Berlin: Kundendienst statt Baustelle',
    description:
      'Übertarifliche Bezahlung, eigener Firmenwagen und pünktlicher Feierabend. Bewerben Sie sich in 3 Minuten. Ohne Anschreiben, ohne PDF.',
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
