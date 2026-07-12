"use client";

import { Button, Container } from "./ui";
import {LokvritFoundationText} from "@/app/components/lokvrit-foundation-text";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#focus" },
  { label: "Our Story", href: "#about" },
  { label: "Get Involved", href: "#cta" },
  { label: "Contact", href: "#footer" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when menu is open
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-line-strong bg-white">
        <Container className="flex items-center justify-between py-3.5 md:py-4">
          <a href="#top" className="flex items-center gap-2.5 md:gap-3">
            <img 
              src="/lokvrit-logo.svg"
              alt="Lokvrit Foundation Logo" 
              width={38}
              height={38}
              className="size-[38px] shrink-0 rounded-full md:size-20"
            />
            <div className="flex flex-col">
              <span className="text-[13.5px] leading-tight md:text-base">
                <LokvritFoundationText/>
              </span>
              <span className="text-[8.5px] font-semibold leading-tight tracking-[0.2px] text-secondary md:text-[10.5px] md:font-medium">
                Together for People, Progress, and Planet
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
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

          {/* Desktop donate button */}
          <Button href="#cta" className="hidden px-6 py-3 text-[15px] md:inline-flex">
            Donate Now
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex size-9 flex-col items-center justify-center gap-1 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-5 rounded-full bg-primary" />
            <span className="h-0.5 w-5 rounded-full bg-primary" />
            <span className="h-0.5 w-5 rounded-full bg-primary" />
          </button>
        </Container>
      </header>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-primary-dark/97 md:hidden"
          onClick={closeMenu}
        >
          <button
            onClick={closeMenu}
            className="absolute right-5 top-4 text-[26px] text-white"
            aria-label="Close menu"
          >
            ×
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[20px] font-semibold text-white"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 rounded bg-secondary px-8 py-3 text-[20px] font-semibold text-white"
            onClick={closeMenu}
          >
            Donate Now
          </a>
        </div>
      )}
    </>
  );
}
