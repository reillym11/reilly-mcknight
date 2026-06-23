// Lovable assets are served as root-relative paths like `/__l5e/assets-v1/<id>/<file>`.
// That works on Lovable-hosted previews but 404s on other hosts (e.g. Vercel),
// because only Lovable's edge serves the /__l5e/ route. Rewrite to an absolute
// URL on Lovable's published origin so the image loads regardless of host.
const LOVABLE_ASSET_ORIGIN = "https://reilly-mcknight.lovable.app";

export function assetUrl(asset: { url: string }): string {
  if (asset.url.startsWith("/__l5e/")) {
    return `${LOVABLE_ASSET_ORIGIN}${asset.url}`;
  }
  return asset.url;
}