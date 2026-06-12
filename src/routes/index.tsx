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
      <main className="grid md:grid-cols-2">
        {/* Left column — identity */}
        <aside className="px-6 md:px-10 py-12 md:border-r border-border md:sticky md:top-0 md:self-start md:max-h-screen md:overflow-y-auto">
          <p className="text-sm mb-4">{profile.greeting}</p>
          <h1 className="font-display font-light tracking-tight leading-[0.95] text-6xl md:text-7xl mb-10">
            {profile.name}
          </h1>

          <div className="aspect-square w-40 md:w-44 border border-border bg-muted mb-8 overflow-hidden rounded-sm">
            <img src={portrait.url} alt={profile.name} className="h-full w-full object-cover" />
          </div>

          <p className="text-sm leading-relaxed max-w-sm mb-6">{profile.bio}</p>
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
