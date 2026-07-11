import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import {
  About,
  BeliefQuote,
  Cta,
  FocusAreas,
  Hero,
  WhyChooseUs,
} from "./components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BeliefQuote />
        <About />
        <FocusAreas />
        <WhyChooseUs />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
