import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "AI Ethics & Policy @ Oxford University" },
      { name: "description", content: "Trinity Term (Winter) 2026 at Oxford University." },
      { property: "og:title", content: "AI Ethics & Policy @ Oxford University" },
      { property: "og:description", content: "Trinity Term (Winter) 2026 at Oxford University." },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: () => (
    <ExperiencePage
      title="AI Ethics & Policy @ Oxford University"
      subtitle="Trinity Term (Winter) 2026"
      bullets={[]}
    />
  ),
});