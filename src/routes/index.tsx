import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionBlock } from "@/components/section-block";
import portrait from "@/assets/portrait.jpeg.asset.json";
import { assetUrl } from "@/lib/asset-url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reilly McKnight" },
      { name: "description", content: "CS & Economics student at Stanford. Building AI Agents at Attention." },
      { property: "og:title", content: "Reilly McKnight" },
      { property: "og:description", content: "CS & Economics student at Stanford. Building AI Agents for sales automation, open-source intelligence & national security." },
      { property: "og:image", content: "https://www.reillymcknight.com/preview-image.png" },
      { property: "og:url", content: "https://www.reillymcknight.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Reilly McKnight" },
      { name: "twitter:description", content: "CS & Economics student at Stanford. Building AI Agents for sales automation, open-source intelligence & national security." },
      { name: "twitter:image", content: "https://www.reillymcknight.com/preview-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.reillymcknight.com" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="grid md:grid-cols-[5fr_9fr]">
        {/* Left column — identity */}
        <aside className="px-6 md:px-10 py-12 md:border-r border-border md:sticky md:top-0 md:self-start md:max-h-screen md:overflow-y-auto">
          <h1 className="font-display font-light tracking-tight leading-[0.95] text-6xl md:text-7xl mb-10">
            {profile.name}
          </h1>

          <div className="aspect-square w-64 md:w-72 border border-border bg-muted mb-8 overflow-hidden rounded-sm">
            <img src={assetUrl(portrait)} alt={profile.name} className="h-full w-full object-cover" />
          </div>

          <div className="text-lg leading-relaxed max-w-md space-y-6 mb-12">
            <p className="whitespace-nowrap">Studying CS &amp; Economics @ Stanford</p>
            <p>
              Conviction in AI Agents for GTM,
              <br />
              open-source intelligence,
              <br />
              &amp; national security
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="text-base underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
          >
            {profile.email}
          </a>
        </aside>

        {/* Right column — sections */}
        <div className="px-6 md:px-10 pb-12">
          {sections.map((s, i) => (
            <SectionBlock key={s.number} section={s} last={i === sections.length - 1} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
