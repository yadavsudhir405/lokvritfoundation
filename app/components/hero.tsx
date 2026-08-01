import { Button, Container } from "./ui";

export function Hero() {
  return (
    <section id="top" className="w-full bg-primary py-14 md:py-[110px] shadow-md">
      <Container className="flex flex-col items-center gap-4 text-center md:gap-6">
        <p className="text-[10.5px] font-bold tracking-[1.2px] text-accent md:text-[13px] md:tracking-[1.5px]">
          NOT-FOR-PROFIT SOCIAL DEVELOPMENT ORGANIZATION
        </p>
        <h1 className="max-w-[820px] text-[28px] leading-[1.28] font-extrabold text-white md:text-[46px] md:leading-[56px]">
          An Inclusive and Resilient Society Where Every Person Can Thrive
        </h1>
        <p className="max-w-[660px] text-[14.5px] leading-[1.6] text-hero-muted md:text-[18px] md:leading-[28px]">
          LOKVRIT means &ldquo;unity of people.&rdquo; We work alongside
          communities — not above them — advancing education, livelihoods,
          women&apos;s empowerment, and climate resilience so people can earn,
          learn, lead, and live with dignity.
        </p>
        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-4">
          <Button href="#cta" className="w-full md:w-auto">Donate Today</Button>
          <Button href="#focus" variant="outline" className="w-full md:w-auto">
            Explore Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}

