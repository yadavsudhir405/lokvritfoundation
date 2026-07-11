import { Button, Container, Grid, cn } from "./ui";

/** Small uppercase label used above section headings. */
function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold tracking-[1.5px] text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" className="w-full bg-primary py-[110px]">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="text-[13px] font-semibold tracking-[1.5px] text-accent">
          NOT-FOR-PROFIT SOCIAL DEVELOPMENT ORGANIZATION
        </p>
        <h1 className="max-w-[820px] text-[46px] leading-[56px] font-bold text-white">
          An Inclusive and Resilient Society
          <br />
          Where Every Person Can Thrive
        </h1>
        <p className="max-w-[660px] text-[18px] leading-[28px] text-hero-muted">
          LOKVRIT means &ldquo;unity of people.&rdquo; We work alongside
          communities — not above them — advancing education, livelihoods,
          women&apos;s empowerment, and climate resilience so people can earn,
          learn, lead, and live with dignity.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="#cta">Donate Today</Button>
          <Button href="#focus" variant="outline">
            Explore Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function BeliefQuote() {
  return (
    <section className="w-full bg-accent py-14">
      <Container className="flex justify-center">
        <p className="max-w-[880px] text-center text-[24px] font-semibold text-primary-dark">
          &ldquo;We believe that lasting change is created not for people, but
          with people.&rdquo;
        </p>
      </Container>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="w-full bg-white py-[100px]">
      <Container>
        <Grid className="items-center gap-y-12">
          {/* Image placeholder */}
          <div className="col-span-12 md:col-span-5">
            <div className="h-[420px] w-full rounded-card border border-line bg-cream" />
          </div>

          {/* Copy */}
          <div className="col-span-12 flex flex-col gap-[18px] md:col-span-7">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="text-[32px] leading-[40px] font-bold text-primary">
              LOKVRIT — The Unity of People
            </h2>
            <p className="text-[16px] leading-[26px] text-muted">
              LOKVRIT Foundation is a not-for-profit social development
              organization founded on the belief that unity — the collective
              strength of individuals, communities, institutions, and partners —
              creates lasting social change. We work with communities, not for
              them, through research-informed, participatory, and locally led
              approaches that strengthen knowledge, skills, livelihoods, food
              security, financial inclusion, and community institutions.
            </p>
            <a
              href="#"
              className="text-[15px] font-semibold text-secondary hover:underline"
            >
              Read our full story →
            </a>
          </div>
        </Grid>
      </Container>
    </section>
  );
}

const FOCUS_AREAS = [
  {
    title: "Youth Development",
    body: "Building skills, leadership, and opportunities that empower young people to shape their own futures.",
    icon: "bg-primary",
  },
  {
    title: "Women's Empowerment",
    body: "Vocational training and gender-equitable leadership to help women lead economic and social change.",
    icon: "bg-secondary",
  },
  {
    title: "Sustainable Livelihoods",
    body: "Rural and urban livelihood programs that create resilient, sustainable income for families.",
    icon: "bg-accent",
  },
  {
    title: "Education & Capacity Building",
    body: "Foundational learning, digital literacy, and life skills for children and communities.",
    icon: "bg-primary",
  },
  {
    title: "Climate & Environmental Sustainability",
    body: "Climate-resilient livelihoods, conservation, and natural resource management.",
    icon: "bg-secondary",
  },
  {
    title: "Community Institution Building",
    body: "Strengthening local institutions and governance so communities can lead their own development.",
    icon: "bg-accent",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="w-full bg-cream py-[100px]">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>OUR WORK</Eyebrow>
          <h2 className="text-[34px] font-bold text-primary">
            Where We Focus Our Efforts
          </h2>
        </div>

        {/* 6 cards on the 12-column grid: 3 per row (col-span-4). */}
        <Grid className="gap-y-6">
          {FOCUS_AREAS.map((area) => (
            <article
              key={area.title}
              className="col-span-12 flex flex-col gap-4 rounded-card border border-line bg-white px-7 py-8 sm:col-span-6 md:col-span-4"
            >
              <span className={cn("size-11 rounded-full", area.icon)} />
              <h3 className="text-[18px] font-semibold text-primary">
                {area.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-muted">
                {area.body}
              </p>
            </article>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

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
    <section className="w-full bg-white py-[100px]">
      <Container>
        <Grid className="gap-y-12">
          {/* Intro */}
          <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
            <Eyebrow>WHY CHOOSE US</Eyebrow>
            <h2 className="text-[30px] leading-[38px] font-bold text-primary">
              A Community-First Approach to Lasting Change
            </h2>
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
      </Container>
    </section>
  );
}

export function Cta() {
  return (
    <section id="cta" className="w-full bg-secondary py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[32px] font-bold text-white">
          Together, No One Is Left Behind
        </h2>
        <p className="text-[16px] text-secondary-soft">
          Every contribution helps empower communities through education,
          livelihoods, and women &amp; youth empowerment.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="#" variant="dark" className="px-9">
            Donate Now
          </Button>
          <Button href="#" variant="outline" className="px-9">
            Volunteer With Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
