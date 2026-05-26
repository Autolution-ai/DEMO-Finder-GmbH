import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
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

export default function Page() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
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
