import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: profile.social.github },
    { name: "LinkedIn", icon: Linkedin, href: profile.social.linkedin },
    { name: "Email", icon: Mail, href: profile.social.email },
  ];

  return (
    <footer className="border-t border-white/5 bg-secondary/30 py-12">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold gradient-text">
              {profile.name}
            </h3>
            <p className="text-muted-foreground">{profile.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                ["Home", "/#home"],
                ["About", "/#about"],
                ["Projects", "/#projects"],
                ["Blog", "/blog"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary focus-ring rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex size-11 items-center justify-center rounded-full border border-white/5 bg-background transition-colors hover:border-primary/30 hover:bg-primary/10 focus-ring"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
