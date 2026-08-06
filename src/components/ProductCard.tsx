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
        className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#d97706] cursor-pointer"
      >
        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden bg-slate-50 p-5 border-b border-slate-100">
          <span className="absolute left-3 top-3 z-10 rounded bg-[#0f2a4a] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-200">
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

        {/* Content */}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d97706]">{product.category}</span>

          <Link
            to="/products/$slug"
            params={{ slug }}
            className="text-xs font-bold leading-snug text-[#0f2a4a] line-clamp-2 min-h-[2.4rem] hover:text-[#d97706] transition-colors"
          >
            {product.name}
          </Link>

          {product.partNumber && (
            <p className="text-[11px] font-mono text-slate-500">
              Part No: <span className="text-[#0f2a4a] font-semibold">{product.partNumber}</span>
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
              className="inline-flex items-center justify-center gap-1.5 rounded bg-[#0f2a4a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#d97706] transition-colors shadow-sm"
            >
              <MessageSquare className="h-3 w-3" /> Get Quote
            </button>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0f2a4a] group-hover:text-[#d97706] transition-colors"
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
