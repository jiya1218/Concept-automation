import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { InquiryModal } from "./InquiryModal";
import type { ProductDetail } from "@/data/catalog";

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    category: string;
    slug?: string;
    partNumber?: string;
    brand?: string;
    availability?: string;
    specs?: Record<string, string>;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const slug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <>
      <article className="card-surface group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40">
        <div className="relative aspect-square overflow-hidden bg-white/50 p-4 dark:bg-black/20">
          <span className="absolute left-3 top-3 z-10 rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/20">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Check className="h-3 w-3" /> {product.availability}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80";
            }}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 border-t border-border p-4">
          <span className="eyebrow text-[11px] text-muted-foreground uppercase tracking-widest">{product.category}</span>
          <h3 className="text-sm font-bold leading-snug text-foreground line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          {product.partNumber && (
            <p className="text-[11px] font-mono text-muted-foreground">
              Part No: <span className="text-foreground font-semibold">{product.partNumber}</span>
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent/90 hover:shadow"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Get Quote
            </button>
            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Details <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </article>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
        partNumber={product.partNumber}
      />
    </>
  );
}
