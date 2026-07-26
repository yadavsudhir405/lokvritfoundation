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
import {GuidingPrinciple} from "@/app/components/guiding-principle";
import {SdgAlignment} from "@/app/components/sdg-alignment";
import {Meal} from "@/app/components/meal";
import {OrganizationalPolicies} from "@/app/components/organizational-policies";
import {FoundingMember} from "@/app/components/founding-member";
import {CoreValues} from "@/app/components/core-values";

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
                <GuidingPrinciple/>
                <SdgAlignment/>
                <Meal/>
                <OrganizationalPolicies/>
                <FoundingMember/>
                <CoreValues/>
                <Cta/>
            </main>
            <SiteFooter/>
        </>
    );
}
