import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/auckland")({
  head: () => ({
    meta: [
      { title: "Auckland FC & New Zealand" },
      { name: "description", content: "Summer 2025 in New Zealand with Auckland FC." },
      { property: "og:title", content: "Auckland FC & New Zealand" },
      { property: "og:description", content: "Summer 2025 in New Zealand with Auckland FC." },
      { property: "og:url", content: "/auckland" },
    ],
    links: [{ rel: "canonical", href: "/auckland" }],
  }),
  component: () => (
    <ExperiencePage
      title="Auckland FC & New Zealand"
      subtitle="Summer 2025"
      bullets={[]}
    />
  ),
});