import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export function ExperiencePage({
  title,
  subtitle,
  bullets,
  imageUrl,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  imageUrl?: string;
  imageAlt?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-foreground/30"
        >
          ‹ back
        </Link>
        <div className="mt-10 mb-10">
          <h1 className="text-base">{title}</h1>
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ul className="text-sm leading-relaxed space-y-3 list-disc pl-5">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="aspect-square w-full border border-border bg-muted overflow-hidden rounded-sm">
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt ?? title} className="h-full w-full object-cover" />
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}