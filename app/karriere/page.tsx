import NavBrand from '@/components/landing/NavBrand';
import Hero from '@/components/Hero';
import AktuelleStellen from '@/components/karriere/AktuelleStellen';
import SchmerzSection from '@/components/SchmerzSection';
import Benefits from '@/components/Benefits';
import DeinTag from '@/components/DeinTag';
import ScrollStory from '@/components/ScrollStory';
import UeberUns from '@/components/UeberUns';
import Stimmen from '@/components/Stimmen';
import Anforderungen from '@/components/Anforderungen';
import Funnel from '@/components/Funnel';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import KarriereJsonLd from '@/components/karriere/KarriereJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karriere Anlagenmechaniker SHK Berlin | Finder GmbH',
  description:
    'Kundendienst statt Baustelle. Eigener Firmenwagen, übertariflich, Antwort in 24h. Bewirb dich in 3 Minuten bei Finder GmbH in Berlin Prenzlauer Berg.',
};

export default function KarrierePage() {
  return (
    <>
      <JsonLd />
      <KarriereJsonLd />
      <NavBrand />
      <main>
        <Hero />
        <AktuelleStellen />
        <SchmerzSection />
        <Benefits />
        <DeinTag />
        <ScrollStory />
        <UeberUns />
        <Stimmen />
        <Anforderungen />
        <Funnel />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
