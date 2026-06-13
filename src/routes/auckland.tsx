import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";
import trophyAsset from "@/assets/auckland-trophy.jpeg.asset.json";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
  >
    {children}
  </a>
);

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
        <>Led Sustainability on the management staff of <A href="https://aucklandfc.co.nz/">Auckland FC</A>, a newly-formed professional soccer team.</>,
        "Wore many hats: working with commercial partners, revamping facility operations, and supporting the comms team.",
        <>AFC's ownership group under <A href="https://www.forbes.com/profile/william-foley-ii/">Bill Foley</A> includes <A href="https://www.nhl.com/goldenknights/">Vegas Golden Knights</A>, <A href="https://www.afcb.co.uk/">AFC Bournemouth</A>, etc.</>,
        <>This opportunity was made possible by the incredible <A href="https://www.linkedin.com/in/timbrown64/">Tim Brown</A>, founder of <A href="https://www.allbirds.com/?srsltid=AfmBOor2Kjg7buvmL4MicOH7l7uiShl3REmPEJqWbv4BQamhOqFzpdjU">Allbirds</A> and minority owner of AFC.</>,
        "After my internship, I took a life-changing solo road trip for 10 days on New Zealand's South Island. I finally conquered my fear of heights by bungy jumping off the 142-feet-tall Kawarau Bridge.",
      ]}
      imageUrls={[trophyAsset.url, undefined]}
    />
  ),
});