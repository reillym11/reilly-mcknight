import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

const items = [
  "Placeholder one",
  "Placeholder two",
  "Placeholder three",
  "Placeholder four",
];

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Tidbits" },
      { name: "description", content: "More about me and random things I love." },
      { property: "og:title", content: "Tidbits" },
      { property: "og:description", content: "More about me and random things I love." },
      { property: "og:url", content: "/favorites" },
    ],
    links: [{ rel: "canonical", href: "/favorites" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-foreground/30">
          ‹ back
        </Link>
        <h1 className="text-base mt-10 mb-3">Tidbits</h1>
        <p className="text-sm leading-relaxed mb-8">More about me and random things I love</p>
        <ol className="space-y-3 text-sm leading-relaxed">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </div>
  ),
});