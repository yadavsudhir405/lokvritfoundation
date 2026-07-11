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
    <footer id="footer" className="w-full bg-primary-dark pt-16 pb-8">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand blurb */}
          <div className="flex max-w-[360px] flex-col gap-3">
            <p className="text-[18px] font-bold text-white">LOKVRIT FOUNDATION</p>
            <p className="text-[14px] leading-[22px] text-footer-muted">
              A not-for-profit social development organization uniting people to
              create opportunities, strengthen communities, and build a future
              where everyone can learn, earn, lead, and live with dignity.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3.5">
              <p className="text-[14px] font-semibold text-accent">
                {column.heading}
              </p>
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] text-footer-muted transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-footer-line" />

        <p className="text-[12px] text-footer-muted">
          © 2026 LOKVRIT Foundation. All rights reserved. Registered as a
          Section 8 non-profit company.
        </p>
      </Container>
    </footer>
  );
}
