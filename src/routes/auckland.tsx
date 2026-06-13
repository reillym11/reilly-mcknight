import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/auckland")({
  head: () => ({
    meta: [
      { title: "Auckland, New Zealand" },
      { name: "description", content: "Summer 2025 in New Zealand with Auckland FC." },
      { property: "og:title", content: "Auckland, New Zealand" },
      { property: "og:description", content: "Summer 2025 in New Zealand with Auckland FC." },
      { property: "og:url", content: "/auckland" },
    ],
    links: [{ rel: "canonical", href: "/auckland" }],
  }),
  component: () => (
    <ExperiencePage
      title="Auckland, New Zealand"
      titleClassName="text-2xl"
      subtitle="Summer 2025"
      bullets={[
        "Led Sustainability on the management staff of Auckland FC, a newly-formed professional soccer team. Wore many hats: working with commercial partners, revamping facility operations, and supporting the comms team.",
        "AFC's ownership group under Bill Foley includes Vegas Golden Knights, AFC Bournemouth, etc.",
        "This opportunity was made possible by the incredible Tim Brown, founder of Allbirds and minority owner of AFC.",
      ]}
      imageUrls={[undefined, undefined]}
    />
  ),
});