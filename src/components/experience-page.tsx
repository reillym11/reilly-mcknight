import { useState, type ReactNode } from "react";
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
  bullets: ReactNode[];
  imageUrl?: string;
  imageUrls?: (string | undefined)[];
  imageAlt?: string;
  titleClassName?: string;
}) {
  const images = imageUrls ?? (imageUrl ? [imageUrl] : [undefined, undefined]);
  const [idx, setIdx] = useState(0);
  const current = images[idx];
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
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
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ul className="text-sm leading-relaxed space-y-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true">–</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <div className="relative w-full border border-border bg-muted overflow-hidden rounded-sm">
              {current ? (
                <img
                  src={current}
                  alt={imageAlt ?? title}
                  className="block w-full h-auto"
                />
              ) : (
                <div className="aspect-square w-full" />
              )}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background text-foreground text-xl border border-border shadow-sm"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background text-foreground text-xl border border-border shadow-sm"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
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