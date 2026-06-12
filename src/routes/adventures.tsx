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
      title="On Campus"
      intro="What I'm up to at Stanford."
      items={[
        { title: "September 2023 – May 2026: COO @ Stanford BASES", description: "Where, why, and what you took away from it." },
        { title: "Adventure Two", description: "Where, why, and what you took away from it." },
        { title: "Adventure Three", description: "Where, why, and what you took away from it." },
      ]}
    />
  ),
});