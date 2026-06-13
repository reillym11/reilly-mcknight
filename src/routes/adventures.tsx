import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "@/components/list-page";

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

export const Route = createFileRoute("/adventures")({
  head: () => ({
    meta: [
      { title: "Adventures — Your Name" },
      { name: "description", content: "Trips, moves, and other adventures." },
      { property: "og:title", content: "Adventures" },
      { property: "og:description", content: "Trips, moves, and other adventures." },
      { property: "og:url", content: "/adventures" },
    ],
    links: [{ rel: "canonical", href: "/adventures" }],
  }),
  component: () => (
    <ListPage
      title="On Campus"
      titleClassName="text-xl mb-2"
      intro="What I'm up to at Stanford."
      items={[
        { title: <>COO @ <A href="https://bases.stanford.edu/">Stanford BASES</A></>, titleClassName: "text-base", description: "September 2023 – May 2026", bullets: [
          "Honored to lead Stanford's largest & oldest entrepreneurship org, a special community of student builders & founders",
          "I joined as a freshman, served as VP of Startup Dev my sophomore year, and COO my junior year, and recently retired.",
          "Hosted speaker events with Jamie Dimon, Garry Tan, Jake Paul, etc.",
          "Launched a startup incubator and organized Stanford's largest pitch competition",
        ]},
        { title: <>Counselor @ <A href="https://campkaleidoscope.org/">Camp Kaleidoscope</A></>, titleClassName: "text-base", description: "June 2026", bullets: [
          "Green Unit counselor, supporting children ages 12-15 with families affected by cancer.",
          "I lead activities and conversations focused on values of learning & empathy. This is very important to me.",
        ]},
        { title: "Stanford Hacking for Defense", titleClassName: "text-base", description: "April 2026 – June 2026", bullets: [
          <>Learning from the incredible <A href="https://www.linkedin.com/in/steveblank">Steve Blank</A>.</>,
          <>My team's project was sponsored by Dep. of War and is now a stealth startup in <A href="https://www.diu.mil/">DIU</A> accelerator</>,
        ]},
      ]}
    />
  ),
});