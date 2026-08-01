import { Button, Container } from "./ui";

export function Cta() {
  return (
    <section id="cta" className="w-full bg-secondary py-12 md:py-20 my-1 shadow-md">
      <Container className="flex flex-col items-center gap-4 text-center md:gap-6">
        <h2 className="text-[22px] font-extrabold text-white md:text-[32px]">
          Together, No One Is Left Behind
        </h2>
        <p className="text-[14px] leading-[1.6] text-secondary-soft md:text-[16px]">
          Every contribution helps empower communities through education,
          livelihoods, and women &amp; youth empowerment.
        </p>
        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-4">
          <Button href="#" variant="dark" className="w-full px-9 md:w-auto">
            Donate Now
          </Button>
          <Button href="#" variant="outline" className="w-full px-9 md:w-auto">
            Volunteer With Us
          </Button>
        </div>
      </Container>
    </section>
  );
}

