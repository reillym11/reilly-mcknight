import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "@/components/list-page";

export const Route = createFileRoute("/adventures")({
  head: () => ({
    meta: [
      { title: "Adventures — Your Name" },
      { name: "description", content: "Trips, moves, and other adventures." },
      { property: "og:title", content: "Adventures" },
      { property: "og:description", content: "Trips, moves, and other adventures." },
      { property: "og:url", content: "/adventures" },
    ],
    links: [{ rel: "canonical", href: "/adventures" }],
  }),
  component: () => (
    <ListPage
      number="03"
      title="Adventures"
      intro="Sometimes I move a long distance. Placeholder list — swap in real adventures."
      items={[
        { title: "Adventure One", meta: "Summer 2025", description: "Where, why, and what you took away from it." },
        { title: "Adventure Two", meta: "Winter 2024", description: "Where, why, and what you took away from it." },
        { title: "Adventure Three", meta: "2023", description: "Where, why, and what you took away from it." },
      ]}
    />
  ),
});