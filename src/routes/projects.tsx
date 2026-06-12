import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "@/components/list-page";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Your Name" },
      { name: "description", content: "Selected projects and experiments." },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "Selected projects and experiments." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <ListPage
      number="02"
      title="Projects"
      intro="A handful of things I've built recently. Placeholder list — replace with real projects."
      items={[
        { title: "Project One", meta: "2026", description: "One-line description of what this project does and the stack you used.", href: "https://example.com" },
        { title: "Project Two", meta: "2025", description: "One-line description of what this project does and the stack you used.", href: "https://example.com" },
        { title: "Project Three", meta: "2025", description: "One-line description of what this project does and the stack you used.", href: "https://example.com" },
        { title: "Project Four", meta: "2024", description: "One-line description of what this project does and the stack you used." },
      ]}
    />
  ),
});