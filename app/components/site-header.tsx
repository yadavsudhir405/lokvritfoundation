import { Button, Container } from "./ui";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#focus" },
  { label: "Our Story", href: "#about" },
  { label: "Get Involved", href: "#cta" },
  { label: "Contact", href: "#footer" },
];

export function SiteHeader() {
  return (
    <header className="w-full border-b border-line-strong bg-white">
      <Container className="flex items-center justify-between py-4">
        {/* Brand */}
        <a href="#top" className="flex flex-col">
          <span className="text-[17px] font-bold text-primary">
            LOKVRIT FOUNDATION
          </span>
          <span className="text-[10.5px] font-medium text-secondary">
            Together for People, Progress, and Planet
          </span>
        </a>

        {/* Primary navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-ink transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#cta" className="px-6 py-3 text-[15px]">
          Donate Now
        </Button>
      </Container>
    </header>
  );
}
