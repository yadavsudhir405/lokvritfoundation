import {AppSection} from "@/app/components/app-section";

const SDGS = [
    {
        title: "SDG 1 – No Poverty",
        body: "Promoting sustainable livelihoods, entrepreneurship, financial inclusion, and income enhancement for vulnerable households.",
    },
    {
        title: "SDG 2 – Zero Hunger",
        body: "Strengthening food and nutrition security through sustainable agriculture, nutrition awareness, and resilient food systems.",
    },
    {
        title: "SDG 3 – Good Health and Well-being",
        body: "Supporting community awareness on health, nutrition, sanitation, mental well-being, and healthy lifestyles.",
    },
    {
        title: "SDG 4 – Quality Education",
        body: "Improving access to quality education, foundational learning, digital literacy, life skills, and capacity building.",
    },
    {
        title: "SDG 5 – Gender Equality",
        body: "Empowering women and girls through leadership development, economic opportunities, gender awareness, and institutional participation.",
    },
    {
        title: "SDG 8 – Decent Work and Economic Growth",
        body: "Enhancing employability, vocational skills, entrepreneurship, and sustainable livelihood opportunities for youth and communities.",
    },
    {
        title: "SDG 10 – Reduced Inequalities",
        body: "Working with marginalized, vulnerable, and underserved populations to promote social inclusion and equal opportunities.",
    },
    {
        title: "SDG 11 – Sustainable Cities and Communities",
        body: "Supporting resilient urban and rural communities through participatory planning, local governance, and community institutions.",
    },
    {
        title: "SDG 13 – Climate Action",
        body: "Promoting climate-resilient livelihoods, environmental conservation, natural resource management, and climate awareness.",
    },
    {
        title: "SDG 15 – Life on Land",
        body: "Encouraging biodiversity conservation, sustainable land management, afforestation, and ecosystem restoration.",
    },
    {
        title: "SDG 16 – Peace, Justice and Strong Institutions",
        body: "Strengthening community institutions, local governance, civic participation, transparency, and social accountability.",
    },
    {
        title: "SDG 17 – Partnerships for the Goals",
        body: "Building collaborative partnerships with governments, CSR partners, academic institutions, civil society organizations, and communities to maximize collective impact.",
    },
];

export function SdgAlignment() {
    return (
        <AppSection id="sdg-alignment" header="SUSTAINABLE DEVELOPMENT GOALS (SDG) ALIGNMENT"
                    headerShortDescription="Our Work in the Global Agenda" bgColor="bg-white">
            <p>
                <strong>LOKVRIT Foundation</strong> aligns its programmes with the <strong>United Nations Sustainable
                Development Goals (SDGs)</strong> and contributes towards achieving the global vision of inclusive,
                equitable, and sustainable development by 2030. Our integrated approach recognizes that social,
                economic, and environmental challenges are interconnected and must be addressed collectively.
            </p>

            <span className="block mt-6 mb-2 font-bold text-secondary">Our Contribution to the SDGs</span>
            <ol className="list-decimal pl-5">
                {SDGS.map((sdg) => (
                    <li key={sdg.title} className="mb-3">
                        <strong>{sdg.title}</strong>
                        <p>{sdg.body}</p>
                    </li>
                ))}
            </ol>

            <span className="block mt-6 mb-2 font-bold text-secondary">Our Commitment</span>
            <p>
                At <strong>LOKVRIT Foundation</strong>, the SDGs are more than a global framework—they guide the way we
                design programmes, measure impact, and build partnerships. Every initiative is aligned with our
                mission of creating inclusive, resilient, and sustainable communities where people can earn,
                learn, lead, and live with dignity, ensuring that no one is left behind.
            </p>
        </AppSection>
    );
}
