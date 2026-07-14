import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

const items = [
  "Grew up on the island of Oahu in Hawai'i. Now living in Sonoma County, California",
  "Lifelong Manchester United supporter. I finally made the pilgrimage to Old Trafford for a match this past February",
  <>
    Passionately opinionated about <i>Star Wars</i> (especially the masterpiece that is <i>Revenge of the Sith</i>)
  </>,
  <>
    Big fan of live theater, particularly <i>Hamilton</i> and <i>The Outsiders</i>
  </>,
  <>
    Favorite book: <i>All the Light We Cannot See</i> by Anthony Doerr
  </>,
    <>
    Favorite quote: <i>"If you can see it here [in your mind] and have the courage enough to speak it, it will happen."</i>
  </>,
];

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Miscellaneous" },
      { name: "description", content: "More about me and things I love." },
      { property: "og:title", content: "Miscellaneous" },
      { property: "og:description", content: "More about me and things I love." },
      { property: "og:url", content: "/favorites" },
    ],
    links: [{ rel: "canonical", href: "/favorites" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-foreground/30"
        >
          ‹ back
        </Link>
        <h1 className="text-base mt-10 mb-3">Miscellaneous</h1>
      <p className="text-base leading-relaxed mb-10">More about me and things I love</p>
      <ol className="space-y-6 text-base leading-relaxed">
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
