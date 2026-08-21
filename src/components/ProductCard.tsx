import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { InquiryModal } from "./InquiryModal";
import { getProxiedImageUrl, getFallbackImageUrl, getSvgDataUrl } from "@/lib/imageHelper";
import { useQuery } from "@tanstack/react-query";
import { getGlobalSettings } from "@/lib/products";

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
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const navigate = useNavigate();
  const slug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const { data: settings = { show_stock_status: true } } = useQuery({
    queryKey: ["globalSettings"],
    queryFn: getGlobalSettings,
    staleTime: 1000 * 60 * 10,
  });

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
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        onClick={handleCardClick}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e5e4] bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#b45309]/50 cursor-pointer"
      >
        {/* Product Image Container — Pure Uniform White (#ffffff) */}
        <div className="relative aspect-square overflow-hidden bg-white p-2.5 sm:p-5 border-b border-[#e7e5e4]/60 flex items-center justify-center">
          <span className="absolute left-2 top-2 z-10 rounded bg-[#1a130f] px-2 py-0.5 text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {settings.show_stock_status && (product.availability || (product as any).stock) && (
            <span className="absolute right-2 top-2 z-10 hidden sm:flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-200">
              <Check className="h-2.5 w-2.5" /> Stock
            </span>
          )}

          <motion.img
            src={getImageSrc()}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setErrorCount((prev) => prev + 1)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full object-contain"
          />

          {/* Descriptive Hover Overlay */}
          <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-5 text-white z-20">
            <div>
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-[#b45309] block mb-1">
                {product.category}
              </span>
              <h4 className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-2 text-white font-display">
                {product.name}
              </h4>
              {product.partNumber && (
                <div className="mt-2.5">
                  <span className="text-[9px] text-stone-400 font-bold block mb-0.5">PART NUMBER</span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">
                    {product.partNumber}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-stone-300">
                <span className="font-medium">Category:</span>
                <span className="font-bold text-white uppercase tracking-wider">{product.type || "Hardware"}</span>
              </div>
              <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-stone-300">
                <span className="font-medium">Price:</span>
                <span className="font-extrabold text-amber-400">On Request (Wholesale)</span>
              </div>
              <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-stone-300">
                <span className="font-medium">Availability:</span>
                <span className="font-bold text-emerald-400">In Stock (Ahmedabad)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Box — Uniform White (#ffffff) */}
        <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-4 gap-2 bg-white">
          <div>
            <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#b45309] block mb-0.5">
              {product.category}
            </span>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="text-[11px] sm:text-xs font-bold leading-tight text-[#1a130f] line-clamp-2 min-h-[2.1rem] group-hover:text-[#b45309] transition-colors"
            >
              {product.name}
            </Link>

            {product.partNumber && (
              <p className="mt-1 text-[9px] sm:text-[10px] font-mono text-slate-500 truncate">
                PN: <span className="text-[#1a130f] font-bold">{product.partNumber}</span>
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-[#e7e5e4] flex items-center justify-between gap-1">
            <button
              onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#1a130f] px-2 py-1.5 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-all shadow-sm shrink-0"
            >
              <MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" /> Quote
            </button>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-bold text-[#1a130f] group-hover:text-[#b45309] transition-colors shrink-0"
            >
              Details <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </Link>
          </div>
        </div>
      </motion.article>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
