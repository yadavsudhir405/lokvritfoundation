import { AppSection } from "@/app/components/app-section";
import { Grid } from "@/app/components/ui";

const REASONS = [
  "Community-first approach",
  "Research and evidence-based programs",
  "Transparency and accountability",
  "Sustainable, measurable impact",
  "Experienced multidisciplinary leadership",
  "Integrated development model",
  "Innovation with purpose",
];

export function WhyChooseUs() {
  return (
    <AppSection id="why-choose-us" header="WHY CHOOSE US" headerShortDescription="A Community-First Approach to Lasting Change">
      <Grid className="gap-y-12">
        {/* Intro */}
        <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
          <p className="text-[15px] leading-[24px] text-muted">
            We listen to communities, co-create solutions, strengthen
            capacities, and measure what matters — continuously learning to
            scale what works.
          </p>
        </div>

        {/* Reasons in two balanced columns */}
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-[18px] sm:grid-cols-2">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-center gap-3">
                <span className="size-2 shrink-0 rounded-full bg-secondary" />
                <span className="text-[15px] font-medium text-ink">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </AppSection>
  );
}

