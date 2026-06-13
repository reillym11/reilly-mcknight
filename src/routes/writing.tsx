import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Oxford University" },
      { name: "description", content: "Trinity Term (Winter) 2026 at Oxford University." },
      { property: "og:title", content: "Oxford University" },
      { property: "og:description", content: "Trinity Term (Winter) 2026 at Oxford University." },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: () => (
    <ExperiencePage
      title="Oxford University"
      titleClassName="text-xl"
      subtitle="Trinity Term (Winter) 2026"
      bullets={[]}
      imageUrls={[undefined, undefined]}
    />
  ),
});