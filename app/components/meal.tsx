import {AppSection} from "@/app/components/app-section";

const MEAL_OUTCOMES = [
    "Monitor progress and programme quality.",
    "Measure outcomes and learn from our experiences.",
    "Strengthen accountability to communities, partners, and supporters.",
    "Improve programmes through continuous learning and innovation.",
];

export function Meal() {
    return (
        <AppSection id="meal" header="MONITORING, EVALUATION, ACCOUNTABILITY & LEARNING (MEAL)"
                    headerShortDescription="Listening, Learning, and Being Accountable" bgColor="bg-cream">
            <p>
                At <strong>LOKVRIT Foundation</strong>, we believe that meaningful change begins with listening,
                learning, and being accountable to the communities we serve. As we build our programmes, we are
                committed to developing a robust <strong>Monitoring, Evaluation, Accountability &amp; Learning
                (MEAL)</strong> system that ensures our work remains transparent, evidence-informed, and
                community-centred.
            </p>

            <span className="block mt-6 mb-2 font-bold text-secondary">Our MEAL framework will help us:</span>
            <ul className="list-disc pl-5">
                {MEAL_OUTCOMES.map((outcome) => (
                    <li key={outcome} className="mb-2">{outcome}</li>
                ))}
            </ul>

            <p className="mt-6">
                As we grow, we will integrate community feedback, data, and evidence into our decision-making
                to create sustainable and measurable impact.
            </p>
        </AppSection>
    );
}
