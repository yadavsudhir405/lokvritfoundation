import {AppSection} from "@/app/components/app-section";
import {Grid, cn, Avatar} from "@/app/components/ui";
import { UserRound } from "lucide-react";

const FOUNDING_MEMBERS = [
    {
        name: "Saptama Kumari",
        role: "Co-Founder",
        body: "A Master's graduate in Social Work from the Tata Institute of Social Sciences (TISS), she has played a central leadership role since inception, reflecting LOKVRIT's commitment to equity, inclusion, and women-led development.",
        iconColor: "text-primary",
        image: "/sapta-kumari.png",
    },
    {
        name: "Punam Kumari",
        role: "Co-Founder",
        body: "An education professional whose work anchors the Foundation's focus on foundational learning, capacity building, and gender-equitable participation in shaping institutions and communities.",
        iconColor: "text-secondary",
        image: "/poonam-kumari.jpg",
    },
    {
        name: "Mukesh Baa",
        role: "Co-Founder",
        body: "A Master's graduate in Social Work from the Tata Institute of Social Sciences (TISS). Raised in a remote Scheduled Tribe village in Gumla, Jharkhand, he later moved to Germany to pursue further education and build global partnerships for community-led development in India.",
        iconColor: "text-accent",
        image: null,
    },
    {
        name: "Sujit Modi",
        role: "Co-Founder",
        body: "A lawyer and journalist educated at the Indian Institute of Mass Communication (IIMC), bringing expertise in law, communication, and advocacy to the Foundation's governance and outreach.",
        iconColor: "text-primary",
        image: "/sujit-modi.jpg",
    },
];

export function FoundingMember() {
    return (
        <AppSection id="founding-member" header="FOUNDING MEMBER" headerShortDescription="The People Behind LOKVRIT"
                    bgColor="bg-cream">
            <Grid className="gap-y-6">
                {FOUNDING_MEMBERS.map((member) => (
                    <article
                        key={member.name}
                        className="col-span-12 flex flex-col gap-4 rounded-card border border-line bg-white px-7 py-8 sm:col-span-6"
                    >
                        <Avatar
                            src={member.image}
                            alt={member.name}
                            fallback={
                                <UserRound className={cn("size-16", member.iconColor)} strokeWidth={1.5} />
                            }
                            className={"size-64"}
                        />
                        <div>
                            <h3 className="text-[18px] font-semibold text-primary">
                                {member.name}
                            </h3>
                            <p className="text-[13px] font-medium text-secondary">
                                {member.role}
                            </p>
                        </div>
                        <p className="text-[14px] leading-[22px] text-muted">
                            {member.body}
                        </p>
                    </article>
                ))}
            </Grid>
        </AppSection>
    );
}
