import {AppSection} from "@/app/components/app-section";
import {cn, Grid, Card} from "@/app/components/ui";
import {
    UserCircle,
    UsersRound,
    Sparkles,
    Home,
    BookOpen,
    Network,
    Globe,
    type LucideIcon
} from "lucide-react";

const PRINCIPLES: Array<{
    title: string;
    body: string;
    icon: LucideIcon;
    iconColor: string;
}> = [
    {
        title: "People First",
        body: "We work with communities, not for them.",
        icon: UserCircle,
        iconColor: "text-primary",
    },
    {
        title: "Unity & Participation",
        body: "Collective action drives lasting change.",
        icon: UsersRound,
        iconColor: "text-secondary",
    },
    {
        title: "Women & Youth Leadership",
        body: "Empowering change-makers for an inclusive future.",
        icon: Sparkles,
        iconColor: "text-accent",
    },
    {
        title: "Community Ownership",
        body: "Strong local institutions sustain development.",
        icon: Home,
        iconColor: "text-primary",
    },
    {
        title: "Research & Learning",
        body: "Evidence informs our actions and continuous improvement.",
        icon: BookOpen,
        iconColor: "text-secondary",
    },
    {
        title: "Partnerships for Impact",
        body: "Collaboration strengthens outcomes and expands reach.",
        icon: Network,
        iconColor: "text-accent",
    },
    {
        title: "Sustainability",
        body: "People, progress, and the planet are interconnected.",
        icon: Globe,
        iconColor: "text-primary",
    },
];

export function GuidingPrinciple() {
    return (
        <AppSection id="guiding-principles" header="GUIDING PRINCIPLES" headerShortDescription="What Shapes Our Work">
            <Grid className="gap-y-6">
                {PRINCIPLES.map((principle) => {
                    const Icon = principle.icon;
                    return (
                        <Card
                            key={principle.title}
                            className="col-span-12 sm:col-span-6 md:col-span-4"
                        >
                            <Icon className={cn("size-11", principle.iconColor)} strokeWidth={1.5} />
                            <h3 className="text-[18px] font-semibold text-primary">
                                {principle.title}
                            </h3>
                            <p className="text-[14px] leading-[22px] text-muted">
                                {principle.body}
                            </p>
                        </Card>
                    );
                })}
            </Grid>
            <p className="mt-10">
                Through these principles, <strong>LOKVRIT Foundation</strong> seeks to strengthen communities, foster
                local leadership, and contribute to inclusive, resilient, and sustainable development where no one is
                left behind.
            </p>
        </AppSection>
    );
}
