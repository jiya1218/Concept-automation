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
    if (errorCount === 0) {
      return getProxiedImageUrl(product.image);
    }
    if (errorCount === 1) {
      return getFallbackImageUrl(product.brand, product.type);
    }
    return getSvgDataUrl(product.name, product.brand);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    navigate({ to: "/products/$slug", params: { slug } });
  };

  return (
    <>
      <article
        onClick={handleCardClick}
        className="industrial-card group flex flex-col overflow-hidden rounded-2xl bg-white cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden bg-slate-50 p-4 sm:p-6 border-b border-slate-100 flex items-center justify-center">
          <span className="absolute left-3 top-3 z-10 rounded-lg bg-sky-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-sky-800 border border-sky-200 shadow-sm">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800 border border-emerald-200">
              <Check className="h-3 w-3" /> {product.availability}
            </span>
          )}

          <img
            src={getImageSrc()}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => {
              setErrorCount((prev) => prev + 1);
            }}
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
          <span className="eyebrow text-[10px] sm:text-[11px] text-sky-700 uppercase tracking-widest">{product.category}</span>
          
          <Link
            to="/products/$slug"
            params={{ slug }}
            className="text-xs sm:text-sm font-extrabold leading-snug text-slate-900 line-clamp-2 min-h-[2.5rem] hover:text-sky-700 transition-colors"
          >
            {product.name}
          </Link>

          {product.partNumber && (
            <p className="text-[11px] font-mono text-slate-500">
              Part No: <span className="text-slate-900 font-bold">{product.partNumber}</span>
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-700 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-sky-800 active:scale-95 shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Get Quote
            </button>
            
            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
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
