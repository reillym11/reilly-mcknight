## Problem

The profile photo (and three other images: `oxford-football`, `oxford-punting`, `auckland-trophy`) are stored as Lovable CDN assets. Their `.asset.json` pointers give a **root-relative** URL:

```
/__l5e/assets-v1/<id>/portrait.jpeg
```

That path is served by Lovable's infrastructure. On the Lovable-hosted preview/published URL it works. On your Vercel deployment, `https://your-app.vercel.app/__l5e/...` returns 404 because Vercel doesn't host that route — so the `<img>` breaks.

## Fix

Rewrite the asset URL at usage time to point at Lovable's CDN absolute origin, so the browser fetches from Lovable regardless of where the page is hosted.

Add a tiny helper:

```ts
// src/lib/asset-url.ts
const CDN_ORIGIN = "https://cdn.lovable.dev"; // Lovable assets CDN origin

export function assetUrl(asset: { url: string }) {
  return asset.url.startsWith("/__l5e/") ? `${CDN_ORIGIN}${asset.url}` : asset.url;
}
```

Then update the four call sites that render `.asset.json` images:

- `src/routes/index.tsx` — portrait
- `src/routes/auckland.tsx` — auckland-trophy
- `src/routes/writing.tsx` — oxford-football, oxford-punting

Change `src={portrait.url}` → `src={assetUrl(portrait)}` etc.

No changes to the `.asset.json` files themselves, no re-uploads, no Vercel config changes.

## Verification

After the edit I'll confirm the absolute CDN origin actually serves these files (a single HEAD against the portrait URL), then the production build picks up the change on the next Vercel deploy.

## Open question

Before I implement: do you want me to (a) use the absolute Lovable CDN URL as above — fastest, zero infra — or (b) pull the four images back into the repo as regular Vite-imported assets so the site has no dependency on Lovable's CDN at all? Option (b) is more portable but adds ~few hundred KB to the repo. I'll default to (a) unless you say otherwise.