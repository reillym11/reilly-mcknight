import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const PHRASE = "I want to be in the room where it happens.";

export function SiteHeader() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(PHRASE.slice(0, i));
      if (i >= PHRASE.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="flex items-center justify-between gap-5 pl-6 md:pl-10 pr-8 md:pr-14 py-4 border-b border-border text-sm">
      <span className="italic font-bold text-base md:text-lg text-foreground/80">
        {typed}
        <span aria-hidden className="inline-block w-px h-4 align-middle ml-0.5 bg-foreground/60 animate-pulse" />
      </span>
      <span className="text-xs tracking-wider text-foreground/70">{profile.initials}</span>
    </header>
  );
}