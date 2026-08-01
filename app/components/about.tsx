import { Container } from "./ui";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./sections";

export function About() {
  return (
    <section id="about" className="w-full bg-white py-[100px] my-1 shadow-md">
      <Container>
        {/* The image floats so the copy wraps beside it and then reflows into
            the space underneath once it runs past the image's fixed height. */}
        <div>
          {/* Image placeholder */}
          <div className="mb-8 w-full md:float-left md:mr-10 md:mb-6 md:w-[41.666%]">
            <div className="h-[420px] w-full rounded-card border border-line bg-cream" />
          </div>

          {/* Copy — block flow (not flex/grid) so line boxes wrap the float. */}
          <div className="space-y-[18px]">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="text-[32px] leading-[40px] font-bold text-primary">
              LOKVRIT — The Unity of People
            </h2>
            <p className="text-[16px] leading-[26px]">
              <strong>LOKVRIT Foundation</strong> is a not-for-profit social development organization founded on the
              belief that <strong>LOKVRIT</strong> means <strong><q><em>Unity of People</em></q></strong>—the collective strength of individuals,
              communities, institutions, and partners working together to create lasting social change. Guided
              by our philosophy, <strong><q><em>Together for People, Progress, and Planet</em></q></strong> we strive to build an
              inclusive, resilient, and sustainable society where every person and community can realize their
              full potential with dignity, equity, and harmony with nature.
            </p>
            <details className="group mt-4">
              <summary className="flex cursor-pointer items-center gap-2 text-[15px] font-medium text-secondary transition-colors hover:text-primary list-none [&::-webkit-details-marker]:hidden">
                <ChevronRight className="size-4 shrink-0 transition-transform group-open:rotate-90" strokeWidth={2.5} />
                <span>Read our full story</span>
              </summary>
              <div className="mt-4 space-y-4 pl-6 text-[15px] leading-[24px] text-muted">
                <p>We believe that sustainable development is achieved <strong>with communities, not for communities</strong>.
                Through research-informed, participatory, and locally led approaches, we strengthen knowledge,
                skills, sustainable livelihoods, food and nutrition security, financial inclusion, environmental
                stewardship, and community institutions, enabling people to become active leaders of their own
                development.</p>
                <p>
                Our work focuses on <strong>youth development, women&#39;s empowerment, sustainable rural and
                urban livelihoods, education, climate resilience, and community institution building,
                creating integrated solutions that address the interconnected challenges of poverty, inequality,
                  and social exclusion.</strong>
                </p>
                <p>Driven by the values of <strong>equity, inclusion, innovation, accountability, and collective action,</strong>
                LOKVRIT Foundation collaborates with communities, governments, CSR partners, academic
                institutions, and civil society organizations to create sustainable and measurable impact, ensuring
                that no one is left behind.</p>
                <p>
                More than an organization, LOKVRIT Foundation is a movement that unites people to create
                opportunities, strengthen communities, and build a future where everyone can learn, earn, lead,
                and live with dignity.</p>
                <p><strong>Together for People, Progress, and Planet.</strong></p>
              </div>
            </details>
          </div>

          {/* Contain the float so it can't escape the section. */}
          <div className="clear-both" />
        </div>
      </Container>
    </section>
  );
}

