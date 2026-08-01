import { Container } from "./ui";

export function BeliefQuote() {
  return (
    <section className="w-full bg-accent py-14 shadow-md">
      <Container className="flex justify-center">
        <p className="max-w-[880px] text-center text-[24px] font-semibold text-primary-dark">
          &ldquo;We believe that lasting change is created not for people, but
          with people.&rdquo;
        </p>
      </Container>
    </section>
  );
}

