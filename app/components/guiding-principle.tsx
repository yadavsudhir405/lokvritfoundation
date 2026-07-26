import {AppSection} from "@/app/components/app-section";
import {cn, Grid} from "@/app/components/ui";

const PRINCIPLES = [
    {
        title: "People First",
        body: "We work with communities, not for them.",
        icon: "bg-primary",
    },
    {
        title: "Unity & Participation",
        body: "Collective action drives lasting change.",
        icon: "bg-secondary",
    },
    {
        title: "Women & Youth Leadership",
        body: "Empowering change-makers for an inclusive future.",
        icon: "bg-accent",
    },
    {
        title: "Community Ownership",
        body: "Strong local institutions sustain development.",
        icon: "bg-primary",
    },
    {
        title: "Research & Learning",
        body: "Evidence informs our actions and continuous improvement.",
        icon: "bg-secondary",
    },
    {
        title: "Partnerships for Impact",
        body: "Collaboration strengthens outcomes and expands reach.",
        icon: "bg-accent",
    },
    {
        title: "Sustainability",
        body: "People, progress, and the planet are interconnected.",
        icon: "bg-primary",
    },
];

export function GuidingPrinciple() {
    return (
        <AppSection id="guiding-principles" header="GUIDING PRINCIPLES" headerShortDescription="What Shapes Our Work"
                    bgColor="bg-cream">
            <Grid className="gap-y-6">
                {PRINCIPLES.map((principle) => (
                    <article
                        key={principle.title}
                        className="col-span-12 flex flex-col gap-4 rounded-card border border-line bg-white px-7 py-8 sm:col-span-6 md:col-span-4"
                    >
                        <span className={cn("size-11 rounded-full", principle.icon)}/>
                        <h3 className="text-[18px] font-semibold text-primary">
                            {principle.title}
                        </h3>
                        <p className="text-[14px] leading-[22px] text-muted">
                            {principle.body}
                        </p>
                    </article>
                ))}
            </Grid>
            <p className="mt-10">
                Through these principles, <strong>LOKVRIT Foundation</strong> seeks to strengthen communities, foster
                local leadership, and contribute to inclusive, resilient, and sustainable development where no one is
                left behind.
            </p>
        </AppSection>
    );
}
