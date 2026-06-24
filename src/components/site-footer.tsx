import { profile } from "@/data/profile";

function openLink(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function SiteFooter() {
  return (
    <footer className="flex items-center justify-end gap-6 px-6 md:px-10 py-3.5 border-t border-border text-base">
      <a
        href={profile.socials.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => {
          e.preventDefault();
          openLink(profile.socials.linkedin);
        }}
        className="hover:opacity-60 transition-opacity cursor-pointer"
      >
        LinkedIn
      </a>
      <a
        href={profile.socials.github}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => {
          e.preventDefault();
          openLink(profile.socials.github);
        }}
        className="hover:opacity-60 transition-opacity cursor-pointer"
      >
        Github
      </a>
    </footer>
  );
}