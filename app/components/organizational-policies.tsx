import {AppSection} from "@/app/components/app-section";

const POLICIES = [
    "Child Protection & Safeguarding",
    "Prevention of Sexual Harassment (POSH)",
    "Anti-Fraud & Anti-Corruption",
    "Human Resources",
    "Finance & Procurement",
    "Data Privacy & Information Security",
    "Environmental Sustainability",
];

export function OrganizationalPolicies() {
    return (
        <AppSection id="organizational-policies" header="ORGANIZATIONAL POLICIES"
                    headerShortDescription="Governance Built on Integrity">
            <p>
                At <strong>LOKVRIT Foundation</strong>, we believe that strong institutions are built on
                <strong> integrity, transparency, inclusion, and accountability</strong>. As we grow, we are committed
                to establishing policies and systems that promote ethical governance, safeguard people&#39;s rights,
                and strengthen organizational excellence.
            </p>

            <span className="block mt-6 mb-2 font-bold text-secondary">Our policy framework will include:</span>
            <ul className="list-disc pl-5">
                {POLICIES.map((policy) => (
                    <li key={policy} className="mb-2">{policy}</li>
                ))}
            </ul>

            <p className="mt-6">
                These policies will guide our governance, partnerships, and programmes, ensuring that our work
                reflects the values we promote and the trust placed in us by communities and partners.
            </p>
        </AppSection>
    );
}
