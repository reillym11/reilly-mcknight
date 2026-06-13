import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export function ExperiencePage({
  title,
  subtitle,
  bullets,
  imageUrl,
  imageUrls,
  imageAlt,
  titleClassName,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  imageUrl?: string;
  imageUrls?: string[];
  imageAlt?: string;
  titleClassName?: string;
}) {
  const images = imageUrls ?? (imageUrl ? [imageUrl] : [undefined, undefined]);
  const [idx, setIdx] = useState(0);
  const current = images[idx];
  const advance = () => setIdx((i) => (i + 1) % images.length);
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
          <h1 className={titleClassName ?? "text-base"}>{title}</h1>
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ul className="text-sm leading-relaxed space-y-3 list-disc pl-5">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="space-y-3">
            <button
              type="button"
              onClick={advance}
              className="block aspect-square w-full border border-border bg-muted overflow-hidden rounded-sm cursor-pointer"
              aria-label="Next photo"
            >
              {current && (
                <img src={current} alt={imageAlt ?? title} className="h-full w-full object-cover" />
              )}
            </button>
            {images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i === idx ? "bg-foreground" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}