import { AppSection } from "@/app/components/app-section";
import { Grid, cn, Card } from "@/app/components/ui";
import {
  Users,
  HeartHandshake,
  Sprout,
  GraduationCap,
  Leaf,
  Building2,
  type LucideIcon
} from "lucide-react";

const FOCUS_AREAS: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
  iconColor: string;
}> = [
  {
    title: "Youth Development",
    body: "Building skills, leadership, and opportunities that empower young people to shape their own futures.",
    icon: Users,
    iconColor: "text-primary",
  },
  {
    title: "Women's Empowerment",
    body: "Vocational training and gender-equitable leadership to help women lead economic and social change.",
    icon: HeartHandshake,
    iconColor: "text-secondary",
  },
  {
    title: "Sustainable Livelihoods",
    body: "Rural and urban livelihood programs that create resilient, sustainable income for families.",
    icon: Sprout,
    iconColor: "text-accent",
  },
  {
    title: "Education & Capacity Building",
    body: "Foundational learning, digital literacy, and life skills for children and communities.",
    icon: GraduationCap,
    iconColor: "text-primary",
  },
  {
    title: "Climate & Environmental Sustainability",
    body: "Climate-resilient livelihoods, conservation, and natural resource management.",
    icon: Leaf,
    iconColor: "text-secondary",
  },
  {
    title: "Community Institution Building",
    body: "Strengthening local institutions and governance so communities can lead their own development.",
    icon: Building2,
    iconColor: "text-accent",
  },
];

export function FocusAreas() {
  return (
    <AppSection id="focus" header="OUR WORK" headerShortDescription="Where We Focus Our Efforts">
      <Grid className="gap-y-6">
        {FOCUS_AREAS.map((area) => {
          const Icon = area.icon;
          return (
            <Card
              key={area.title}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <Icon className={cn("size-11", area.iconColor)} strokeWidth={1.5} />
              <h3 className="text-[18px] font-semibold text-primary">
                {area.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-muted">
                {area.body}
              </p>
            </Card>
          );
        })}
      </Grid>
    </AppSection>
  );
}

