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
      titleClassName="text-xl"
      intro="What I'm up to at Stanford."
      items={[
        { title: "COO @ Stanford BASES", description: "September 2023 – May 2026" },
        { title: "Counselor @ Camp Kaleidoscope", description: "June 2026" },
        { title: "Stanford Hacking for Defense", description: "April 2026 – June 2026" },
      ]}
    />
  ),
});