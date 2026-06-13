import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

const items = [
  "Grew up on the island of Oahu in Hawai'i. Now living in Sonoma County, California",
  "Lifelong Manchester United fan. Finally made the pilgrimige to Old Trafford for a match this past February",
  <>
    Passionately opinionated about <i>Star Wars</i> (especially the masterpiece that is{" "}
    <i>Revenge of the Sith</i>)
  </>,
  <>
    Big fan of live theater, particularly <i>Hamilton</i> and <i>The Outsiders</i>
  </>,
  <>
    Favorite book: <i>All the Light We Cannot See</i> by Anthony Doerr
  </>,
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