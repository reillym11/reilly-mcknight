import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-border">
      <Link to="/" className="flex items-center gap-3 text-sm">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-muted text-[10px] tracking-tight">
          {profile.initials.replace(/\./g, "").slice(0, 2)}
        </span>
        <span className="tracking-tight">{profile.initials}</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm">
        <a href={profile.socials.twitter} target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity" aria-label="Twitter / X">
          <XIcon />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity inline-flex items-center gap-1.5">
          <LinkedInIcon /> <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a href={profile.socials.github} target="_blank" rel="noreferrer noopener" className="hover:opacity-60 transition-opacity" aria-label="GitHub">
          <GitHubIcon />
        </a>
      </nav>
    </header>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.91l-5.41-7.07L4.5 22H1.24l8.03-9.17L1 2h7.09l4.89 6.47L18.244 2Zm-1.21 18h1.91L7.06 4H5.05l11.984 16Z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8Z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .38 11.86c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.49.11-3.1 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.61.23 2.8.11 3.1.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.62 11.86 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}