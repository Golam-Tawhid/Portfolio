"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  showBackToPortfolioButton?: boolean;
  showOnlyBackToPortfolioButton?: boolean;
}

export default function Navbar({
  showBackToPortfolioButton = false,
  showOnlyBackToPortfolioButton = false,
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 80) {
        setCompact(currentY > lastScrollY.current);
      } else {
        setCompact(false);
      }
      lastScrollY.current = currentY;

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = currentY + 100;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        const sectionId = el.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {!showOnlyBackToPortfolioButton &&
        NAV_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "nav-link text-sm",
              activeSection === item.href.slice(1) && "active"
            )}
          >
            {item.name}
          </a>
        ))}
      {showBackToPortfolioButton && (
        <Button variant="outline" size="sm" asChild>
          <Link href="/">Back to Portfolio</Link>
        </Button>
      )}
    </>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          compact ? "py-2" : "py-4"
        )}
      >
        <div
          className={cn(
            "container-site glass-panel rounded-2xl transition-all duration-300",
            compact ? "py-2 shadow-lg" : "py-3"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/#home"
              className="font-heading text-lg font-bold gradient-text md:text-xl focus-ring rounded-sm"
            >
              G.T. Fahad
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 lg:flex"
            >
              {navLinks}
            </nav>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-panel border-white/5">
                <SheetHeader>
                  <SheetTitle className="font-heading gradient-text">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <nav
                  aria-label="Mobile primary"
                  className="mt-8 flex flex-col gap-4"
                >
                  {!showOnlyBackToPortfolioButton &&
                    NAV_ITEMS.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "nav-link text-lg",
                          activeSection === item.href.slice(1) && "active"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  {showBackToPortfolioButton && (
                    <Button variant="outline" asChild>
                      <Link href="/">Back to Portfolio</Link>
                    </Button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
