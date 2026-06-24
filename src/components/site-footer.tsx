import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="flex items-center justify-end gap-6 px-6 md:px-10 py-2.5 border-t border-border text-sm">
      <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity">
        LinkedIn
      </a>
      <a href={profile.socials.github} target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity">
        Github
      </a>
    </footer>
  );
}