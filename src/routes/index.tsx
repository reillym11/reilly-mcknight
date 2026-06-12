import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import { SiteFooter } from "@/components/site-footer";
import { SectionBlock } from "@/components/section-block";
import portrait from "@/assets/portrait.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Stanford CS & Economics` },
      { name: "description", content: profile.bio.slice(0, 160) },
      { property: "og:title", content: profile.name },
      { property: "og:description", content: profile.bio.slice(0, 160) },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="grid md:grid-cols-[2fr_3fr]">
        {/* Left column — identity */}
        <aside className="px-6 md:px-10 py-12 md:border-r border-border md:sticky md:top-0 md:self-start md:max-h-screen md:overflow-y-auto">
          <h1 className="font-display font-light tracking-tight leading-[0.95] text-6xl md:text-7xl mb-10">
            {profile.name}
          </h1>

          <div className="aspect-square w-56 md:w-64 border border-border bg-muted mb-8 overflow-hidden rounded-sm">
            <img src={portrait.url} alt={profile.name} className="h-full w-full object-cover" />
          </div>

          <div className="text-sm leading-relaxed max-w-sm space-y-3 mb-12">
            <p>Studying CS &amp; Economics at Stanford.</p>
            <p>Bullish on AI Agents for GTM, open source intelligence, and national security.</p>
            <p className="italic">I want to be in the room where it happens.</p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
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
