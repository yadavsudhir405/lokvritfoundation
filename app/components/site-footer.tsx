import { Container } from "./ui";

const FOOTER_COLUMNS = [
  {
    heading: "Organization",
    links: ["About Us", "Our Story", "Our Work", "Governance", "Careers"],
  },
  {
    heading: "Get Involved",
    links: ["Donate", "Volunteer", "CSR Partnership", "Fundraise"],
  },
  {
    heading: "Contact",
    links: ["info@lokvritfoundation.org", "New Delhi, India"],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="w-full bg-primary-dark pb-7 pt-11 md:pb-8 md:pt-16">
      <Container className="flex flex-col gap-7 md:gap-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-10">
          {/* Brand blurb */}
          <div className="flex max-w-[360px] flex-col gap-2.5 md:gap-3">
            <p className="text-[16px] font-bold text-white md:text-[18px]">
              LOKVRIT FOUNDATION
            </p>
            <p className="text-[13px] leading-[1.6] text-footer-muted md:text-[14px] md:leading-[22px]">
              A not-for-profit social development organization uniting people to
              create opportunities, strengthen communities, and build a future
              where everyone can learn, earn, lead, and live with dignity.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-2.5 md:gap-3.5">
              <p className="text-[12.5px] font-bold tracking-[0.3px] text-accent md:text-[14px] md:font-semibold">
                {column.heading.toUpperCase()}
              </p>
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[13px] text-footer-muted transition-colors hover:text-white md:text-[14px]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-footer-line" />

        <p className="text-[11px] leading-[1.5] text-footer-muted md:text-[12px]">
          © 2026 LOKVRIT Foundation. All rights reserved. Registered as a
          Section 8 non-profit company.
        </p>
      </Container>
    </footer>
  );
}
