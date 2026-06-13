import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";
import puntingAsset from "@/assets/oxford-punting.jpg.asset.json";
import footballAsset from "@/assets/oxford-football.jpg.asset.json";

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
      titleClassName="text-2xl"
      subtitle="Trinity Term (Winter) 2026"
      bullets={[
        "Studied AI Ethics & Policy within the Oxford Internet Institute.",
        "Specifically focused on geopolitical tensions & national security concerns influencing international AI safety frameworks and understanding AI from an existentialist or normalist viewpoint.",
        "Integrated into Oxford student life within Magdalen College, a very special place. Played soccer and rugby for Magdalen.",
        "Went punting (as pictured) and nearly capsized my boat multiple times",
      ]}
      imageUrls={[puntingAsset.url, footballAsset.url]}
    />
  ),
});