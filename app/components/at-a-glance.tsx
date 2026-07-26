import {AppSection} from "@/app/components/app-section";
import {ReactNode} from "react";

const WORK_AREAS = [
    "Youth Development",
    "Women Empowerment",
    "Community Development",
    "Sustainable Rural & Urban Livelihoods",
    "Education & Capacity Building",
    "Food & Nutrition Security",
    "Climate & Environmental Sustainability",
    "Research",
    "Innovation",
    "Advocacy",
    "Financial Inclusion",
    "Institutional Strengthening",
];

const IMPACT_STEPS = [
    "Problem Identification",
    "Research",
    "Feasibility assessment",
    "Inputs",
    "Activities",
    "Outputs",
    "Outcomes",
    "Long-term Impact",
];

const GOVERNANCE_BODIES = [
    "Board of Directors",
    "Executive Leadership",
    "Program Teams",
    "Advisory Network",
];

const LEADERSHIP_EXPERTISE = [
    "Education",
    "Livelihoods",
    "Women empowerment",
    "Youth development",
    "Governance",
    "Research",
    "Climate resilience",
    "Finance",
    "Monitoring & evaluation",
    "Institutional development",
];

const CSR_PARTNERS = [
    "CSR foundations",
    "Government agencies",
    "Academic institutions",
    "Civil society organizations",
    "Development partners",
];

const VOLUNTEER_ROLES = [
    "Teaching",
    "Mentoring",
    "Research",
    "Digital literacy",
    "Environmental campaigns",
    "Communication",
    "Fundraising",
    "Community mobilization",
];

/** Sub-heading + body pairing repeated for each block in this section. */
function Block({title, children}: { title: string; children: ReactNode }) {
    return (
        <div className="mb-10 last:mb-0">
            <span className="block mb-2 font-bold text-secondary">{title}</span>
            {children}
        </div>
    );
}

function BulletList({items}: { items: string[] }) {
    return (
        <ul className="list-disc pl-5">
            {items.map((item) => (
                <li key={item} className="mb-2">{item}</li>
            ))}
        </ul>
    );
}

export function AtAGlance() {
    return (
        <AppSection id="at-a-glance" header="AT A GLANCE"
                    headerShortDescription="Our Work, Governance, and How to Join Us" bgColor="bg-cream">
            <Block title="Our Work">
                <p>We work in:</p>
                <BulletList items={WORK_AREAS}/>
            </Block>

            <Block title="Impact Framework">
                <ul className="list-decimal pl-5">
                    {IMPACT_STEPS.map((step) => (
                        <li key={step} className="mb-2">{step}</li>
                    ))}
                </ul>
                <p className="mt-6">
                    We use <strong>Results-Based Management</strong> with continuous monitoring, community feedback,
                    evaluation, and learning to ensure measurable and sustainable outcomes.
                </p>
            </Block>

            <Block title="Governance">
                <p>
                    As a <strong>Section 8 non-profit company</strong>, LOKVRIT Foundation follows high standards of
                    transparency, accountability, ethical leadership, statutory compliance, independent audits, and
                    strong financial management. Governance includes:
                </p>
                <BulletList items={GOVERNANCE_BODIES}/>
            </Block>

            <Block title="Leadership Team">
                <p>
                    Our leadership consists of experienced professionals committed to servant leadership and
                    community-driven development, with expertise in:
                </p>
                <BulletList items={LEADERSHIP_EXPERTISE}/>
            </Block>

            <Block title="CSR Partnership">
                <p>
                    We partner in education, livelihoods, climate action, women empowerment, youth employability,
                    nutrition, digital inclusion, and research with:
                </p>
                <BulletList items={CSR_PARTNERS}/>
                <p className="mt-6">
                    We offer transparent implementation, measurable outcomes, and SDG-aligned programs.
                </p>
            </Block>

            <Block title="Volunteers">
                <p>
                    Students, professionals, educators, researchers, and corporate volunteers can contribute through:
                </p>
                <BulletList items={VOLUNTEER_ROLES}/>
            </Block>

            <Block title="Donate Us">
                <p>
                    Every contribution helps empower communities through education, livelihoods, women and youth
                    empowerment, food security, environmental conservation, and institution building. Together, we
                    can ensure that no one is left behind.
                </p>
            </Block>
        </AppSection>
    );
}
