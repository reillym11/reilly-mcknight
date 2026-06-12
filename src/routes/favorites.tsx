import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "@/components/list-page";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites — Your Name" },
      { name: "description", content: "Books, blogs, films, and other recs." },
      { property: "og:title", content: "Favorites" },
      { property: "og:description", content: "Books, blogs, films, and other recs." },
      { property: "og:url", content: "/favorites" },
    ],
    links: [{ rel: "canonical", href: "/favorites" }],
  }),
  component: () => (
    <ListPage
      number="05"
      title="Favorites"
      intro="Things I keep coming back to. Placeholder list — swap in your own."
      items={[
        { title: "Book title", meta: "Book", description: "Author — one line on why it stuck." },
        { title: "Blog name", meta: "Blog", description: "What it's about and why you read it.", href: "https://example.com" },
        { title: "Film title", meta: "Film", description: "Director — one line on why you love it." },
        { title: "Album / artist", meta: "Music", description: "One line on why it's on repeat." },
      ]}
    />
  ),
});