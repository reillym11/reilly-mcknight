import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export type ListItem = {
  title: string;
  meta?: string;
  description?: string;
  href?: string;
  bullets?: string[];
};

export function ListPage({
  number,
  title,
  titleClassName,
  intro,
  items,
}: {
  number?: string;
  title: string;
  titleClassName?: string;
  intro?: string;
  items: ListItem[];
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-foreground/30">
          ‹ back
        </Link>
        {number && <div className="mt-10 mb-2 text-sm text-muted-foreground">{number}</div>}
        <h1 className={`mb-6 ${number ? "" : "mt-10"} ${titleClassName ?? "text-base"}`}>{title}</h1>
        {intro && <p className="text-sm leading-relaxed max-w-2xl mb-6">{intro}</p>}
        <ul className="divide-y divide-border border-y border-border">
          {items.map((item, i) => (
            <li key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="max-w-xl">
                <div className="text-sm">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground">
                      {item.title}<span aria-hidden className="ml-0.5 text-foreground/60">↗</span>
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                )}
                {item.bullets && (
                  <ul className="text-sm leading-relaxed space-y-1.5 mt-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span aria-hidden="true">–</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {item.meta && <div className="text-sm text-muted-foreground shrink-0">{item.meta}</div>}
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}