import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { InquiryModal } from "./InquiryModal";
import { getProxiedImageUrl, getFallbackImageUrl, getSvgDataUrl } from "@/lib/imageHelper";

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
  const [errorCount, setErrorCount] = useState(0);
  const navigate = useNavigate();
  const slug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const getImageSrc = () => {
    if (errorCount === 0) return getProxiedImageUrl(product.image);
    if (errorCount === 1) return getFallbackImageUrl(product.brand, product.type);
    return getSvgDataUrl(product.name, product.brand);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    navigate({ to: "/products/$slug", params: { slug } });
  };

  return (
    <>
      <article
        onClick={handleCardClick}
        className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 cursor-pointer"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-stone-50 p-5">
          <span className="absolute left-3 top-3 z-10 rounded-full bg-stone-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
              <Check className="h-3 w-3" /> In Stock
            </span>
          )}
          <img
            src={getImageSrc()}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setErrorCount((prev) => prev + 1)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col gap-1.5 border-t border-stone-100 p-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">{product.category}</span>

          <Link
            to="/products/$slug"
            params={{ slug }}
            className="text-sm font-semibold leading-snug text-stone-900 line-clamp-2 min-h-[2.5rem] hover:text-amber-700 transition-colors"
          >
            {product.name}
          </Link>

          {product.partNumber && (
            <p className="text-[11px] font-mono text-stone-400">
              PN: <span className="text-stone-600 font-medium">{product.partNumber}</span>
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-stone-950 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white hover:bg-amber-600 transition-colors"
            >
              <MessageSquare className="h-3 w-3" /> Get Quote
            </button>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-500 group-hover:text-amber-600 transition-colors"
            >
              Details <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </article>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
