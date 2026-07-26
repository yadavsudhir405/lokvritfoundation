import {SiteHeader} from "./components/site-header";
import {SiteFooter} from "./components/site-footer";
import {
    About,
    BeliefQuote,
    Cta,
    FocusAreas,
    Hero,
    WhyChooseUs,
} from "./components/sections";
import {OurStory} from "@/app/components/our-story";
import {TheoryOfChange} from "@/app/components/theory-of-change";

export default function Home() {
    return (
        <>
            <SiteHeader/>
            <main className="flex flex-1 flex-col">
                <Hero/>
                <BeliefQuote/>
                <About/>
                <FocusAreas/>
                <WhyChooseUs/>
                <OurStory/>
                <TheoryOfChange/>
                <Cta/>
            </main>
            <SiteFooter/>
        </>
    );
}
