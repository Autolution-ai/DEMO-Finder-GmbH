import NavBrand from '@/components/landing/NavBrand';
import HeroCinematic from '@/components/landing/HeroCinematic';
import TrustBar from '@/components/landing/TrustBar';
import Leistungen from '@/components/landing/Leistungen';
import Showcase from '@/components/landing/Showcase';
import Prozess from '@/components/landing/Prozess';
import UeberUnsBrand from '@/components/landing/UeberUnsBrand';
import Kundenstimmen from '@/components/landing/Kundenstimmen';
import KarriereBruecke from '@/components/landing/KarriereBruecke';
import FAQKunden from '@/components/landing/FAQKunden';
import Kontakt from '@/components/landing/Kontakt';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finder GmbH | Sanitär, Heizung und Bad in Berlin',
  description:
    'Familienbetrieb für Sanitär, Heizung, Bad und Notdienst in Berlin Prenzlauer Berg. Seit 2010, über 2.500 Aufträge im Jahr, eigenes Team. Vereinbaren Sie jetzt Ihren Termin.',
};

export default function LandingPage() {
  return (
    <>
      <JsonLd />
      <NavBrand />
      <main className="bg-cream">
        <HeroCinematic />
        <TrustBar />
        <Leistungen />
        <Showcase />
        <Prozess />
        <UeberUnsBrand />
        <Kundenstimmen />
        <KarriereBruecke />
        <FAQKunden />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
