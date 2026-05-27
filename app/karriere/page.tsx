import type { Metadata } from 'next';
import NavBrand from '@/components/landing/NavBrand';
import KarriereHero from '@/components/karriere/KarriereHero';
import KarriereTrust from '@/components/karriere/KarriereTrust';
import AktuelleStellen from '@/components/karriere/AktuelleStellen';
import WarumFinder from '@/components/karriere/WarumFinder';
import DeinTagEditorial from '@/components/karriere/DeinTagEditorial';
import MonteurStimmen from '@/components/karriere/MonteurStimmen';
import AnforderungenNew from '@/components/karriere/AnforderungenNew';
import FunnelNew from '@/components/karriere/FunnelNew';
import FAQBewerber from '@/components/karriere/FAQBewerber';
import FinalCTANew from '@/components/karriere/FinalCTANew';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import KarriereJsonLd from '@/components/karriere/KarriereJsonLd';

export const metadata: Metadata = {
  title: 'Karriere Anlagenmechaniker SHK Berlin | Finder GmbH',
  description:
    'Bei uns erwartet Sie Kundendienst statt Baustelle: ein eigener Firmenwagen, bis 4.600 € brutto und persönliche Antwort innerhalb von 24 Stunden. Bewerben Sie sich in 3 Minuten bei Finder GmbH in Berlin Prenzlauer Berg.',
};

export default function KarrierePage() {
  return (
    <>
      <JsonLd />
      <KarriereJsonLd />
      <NavBrand />
      <main className="bg-cream">
        <KarriereHero />
        <KarriereTrust />
        <AktuelleStellen />
        <WarumFinder />
        <DeinTagEditorial />
        <MonteurStimmen />
        <AnforderungenNew />
        <FunnelNew />
        <FAQBewerber />
        <FinalCTANew />
      </main>
      <Footer />
    </>
  );
}
