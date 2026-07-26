import {AppSection} from "@/app/components/app-section";

export function TheoryOfChange() {
    return (
        <AppSection header="THEORY OF CHANGE" bgColor="bg-white" id="theory-of-change" headerShortDescription="From Vision to Impact">
            <p>
                At <strong>LOKVRIT Foundation</strong>, we believe that lasting change begins with the unity of people
                When individuals, communities, institutions, and partners come together with a shared purpose,
                they can collectively address social, economic, and environmental challenges. We believe that
                sustainable development is possible when people are empowered with knowledge, skills,
                opportunities, and strong community institutions to lead their own development journey.
            </p>
            <ul className="list-disc">
                <li>
                    <span className="block mb-2 font-bold text-secondary">Our Theory of Change</span>

                    <p><strong>If</strong> marginalized individuals and communities have access to education, skills,
                        sustainable
                        livelihood opportunities, food and nutrition security, financial inclusion, gender-equitable
                        opportunities, and resilient community institutions
                    </p>

                    <p>And if these efforts are guided by community participation, evidence-based learning,
                        partnerships, innovation, and continuous capacity strengthening</p>
                    <p>
                        <strong>Then</strong> communities will be better positioned to identify their priorities, build
                        local solutions,
                        strengthen resilience, and drive inclusive and sustainable development.</p>
                    <p><strong>We believe this pathway will contribute to</strong> an inclusive and resilient society
                        where every
                        person and community can realize their full potential with dignity, equity, and harmony with
                        nature, ensuring that no one is left behind.</p>

                </li>
                <li>
                    <span className="block mb-2 font-bold text-secondary">Our Change Pathway</span>
                </li>
            </ul>

            Unity of People → Community Participation → Knowledge &amp; Capacity Building →
            Sustainable Opportunities → Stronger Community Institutions → Inclusive &amp; Resilient
            Communities
        </AppSection>
    )
}
