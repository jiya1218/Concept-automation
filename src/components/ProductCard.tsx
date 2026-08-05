import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { InquiryModal } from "./InquiryModal";

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    category: string;
    slug?: string;
    partNumber?: string;
    brand?: string;
    availability?: string;
    type?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const slug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Format image URL using wsrv.nl proxy to bypass TradeIndia hotlinking restrictions
  const imageUrl = product.image.startsWith("http")
    ? `https://wsrv.nl/?url=${encodeURIComponent(product.image)}&w=400&output=webp`
    : product.image;

  const handleCardClick = (e: React.MouseEvent) => {
    // If clicking the Get Quote button, don't navigate
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    navigate({ to: "/products/$slug", params: { slug } });
  };

  return (
    <>
      <article
        onClick={handleCardClick}
        className="card-surface group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden bg-white p-4 dark:bg-black/20">
          <span className="absolute left-3 top-3 z-10 rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/20">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Check className="h-3 w-3" /> {product.availability}
            </span>
          )}

          <img
            src={imageUrl}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // High resolution industrial fallback image
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80";
            }}
            className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 border-t border-border p-4">
          <span className="eyebrow text-[11px] text-muted-foreground uppercase tracking-widest">{product.category}</span>
          
          <Link
            to="/products/$slug"
            params={{ slug }}
            className="text-sm font-bold leading-snug text-foreground line-clamp-2 min-h-[2.5rem] hover:text-accent transition-colors"
          >
            {product.name}
          </Link>

          {product.partNumber && (
            <p className="text-[11px] font-mono text-muted-foreground">
              Part No: <span className="text-foreground font-semibold">{product.partNumber}</span>
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent/90 hover:shadow"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Get Quote
            </button>
            
            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:translate-x-0.5 transition-transform"
            >
              Details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
