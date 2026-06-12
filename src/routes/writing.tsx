import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "@/components/list-page";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Your Name" },
      { name: "description", content: "Essays and notes on tech, economics, and life." },
      { property: "og:title", content: "Writing" },
      { property: "og:description", content: "Essays and notes on tech, economics, and life." },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: () => (
    <ListPage
      number="04"
      title="Writing"
      intro="Occasional essays. Placeholder list — swap in real posts."
      items={[
        { title: "An essay title goes here", meta: "Jun 2026", description: "A one-line dek that previews the piece." },
        { title: "Another essay title", meta: "Mar 2026", description: "A one-line dek that previews the piece." },
        { title: "An older essay", meta: "Nov 2025", description: "A one-line dek that previews the piece." },
      ]}
    />
  ),
});