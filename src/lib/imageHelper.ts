// Robust image URL helper with proxies and brand-specific fallback images

const FALLBACK_IMAGES: Record<string, string> = {
  "siemens-plc": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
  "siemens-vfd": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80",
  "siemens-hmi": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
  "mitsubishi-plc": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
  "omron-plc": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80",
  "pepperl+fuchs-sensor": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop&q=80",
  "allen bradley-plc": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
  "default": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
};

export function getFallbackImageUrl(brand?: string, type?: string): string {
  const b = (brand || "").toLowerCase();
  const t = (type || "").toLowerCase();
  const key = `${b}-${t}`;

  if (FALLBACK_IMAGES[key]) return FALLBACK_IMAGES[key];
  if (b.includes("siemens")) return FALLBACK_IMAGES["siemens-plc"];
  if (b.includes("mitsubishi")) return FALLBACK_IMAGES["mitsubishi-plc"];
  if (b.includes("omron")) return FALLBACK_IMAGES["omron-plc"];
  if (b.includes("pepperl")) return FALLBACK_IMAGES["pepperl+fuchs-sensor"];
  if (b.includes("allen")) return FALLBACK_IMAGES["allen bradley-plc"];

  return FALLBACK_IMAGES["default"];
}

export function getProxiedImageUrl(rawUrl?: string): string {
  if (!rawUrl) return FALLBACK_IMAGES["default"];
  if (!rawUrl.startsWith("http")) return rawUrl;
  
  // Use wsrv.nl image proxy to bypass CORS / hotlinking restrictions
  return `https://wsrv.nl/?url=${encodeURIComponent(rawUrl)}&w=600&output=webp`;
}

// Generate inline SVG placeholder data URL when network images fail completely
export function getSvgDataUrl(name: string, brand?: string): string {
  const cleanName = (name || "Automation Hardware").replace(/[^a-zA-Z0-9\s-+]/g, "").slice(0, 28);
  const cleanBrand = (brand || "CONCEPT AUTOMATION").toUpperCase();
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
    <rect width="400" height="400" fill="#0F172A"/>
    <rect x="20" y="20" width="360" height="360" rx="16" fill="#1E293B" stroke="#334155" stroke-width="2"/>
    <circle cx="200" cy="160" r="48" fill="#F97316" fill-opacity="0.1" stroke="#F97316" stroke-width="3"/>
    <path d="M185 160L195 170L215 150" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="50" y="240" width="300" height="28" rx="6" fill="#F97316" fill-opacity="0.2"/>
    <text x="200" y="259" fill="#F97316" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" letter-spacing="2">${cleanBrand}</text>
    <text x="200" y="300" fill="#F8FAFC" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">${cleanName}</text>
    <text x="200" y="330" fill="#94A3B8" font-family="sans-serif" font-size="11" text-anchor="middle">100% Genuine OEM Stock</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
