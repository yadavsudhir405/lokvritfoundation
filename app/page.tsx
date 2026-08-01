import {SiteHeader} from "./components/site-header";
import {SiteFooter} from "./components/site-footer";
import {Hero} from "./components/hero";
import {BeliefQuote} from "./components/belief-quote";
import {About} from "./components/about";
import {FocusAreas} from "./components/focus-areas";
import {WhyChooseUs} from "./components/why-choose-us";
import {Cta} from "./components/cta";
import {OurStory} from "@/app/components/our-story";
import {TheoryOfChange} from "@/app/components/theory-of-change";
import {GuidingPrinciple} from "@/app/components/guiding-principle";
import {SdgAlignment} from "@/app/components/sdg-alignment";
import {Meal} from "@/app/components/meal";
import {OrganizationalPolicies} from "@/app/components/organizational-policies";
import {FoundingMember} from "@/app/components/founding-member";
import {CoreValues} from "@/app/components/core-values";
import {AtAGlance} from "@/app/components/at-a-glance";

export default function Home() {
    return (
        <>
            <SiteHeader/>
            <main className="flex flex-1 flex-col bg-cream">
                <Hero/>
                <BeliefQuote/>
                <About/>
                <FocusAreas/>
                <WhyChooseUs/>
                <OurStory/>
                <TheoryOfChange/>
                <GuidingPrinciple/>
                <SdgAlignment/>
                <Meal/>
                <OrganizationalPolicies/>
                <FoundingMember/>
                <CoreValues/>
                <AtAGlance/>
                <Cta/>
            </main>
            <SiteFooter/>
        </>
    );
}
