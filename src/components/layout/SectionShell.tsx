import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section", className)}
    >
      <div className="container-site">
        <header className="mb-12 flex flex-col gap-3 md:mb-16">
          <h2 id={headingId} className="section-heading">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
