import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
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
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        onClick={handleCardClick}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#d97706]/40 cursor-pointer"
      >
        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#d97706]/20 pointer-events-none transition-colors duration-300" />

        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/50 p-6 border-b border-slate-100 flex items-center justify-center">
          <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-[#0f2a4a] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
            {product.brand || product.category.split(" ")[0]}
          </span>
          {product.availability && (
            <span className="absolute right-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-500/20 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              In Stock
            </span>
          )}

          <motion.img
            src={getImageSrc()}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setErrorCount((prev) => prev + 1)}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full object-contain filter drop-shadow-sm"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5 gap-3">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d97706] block mb-1">
              {product.category}
            </span>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="text-sm font-bold leading-snug text-[#0f2a4a] line-clamp-2 min-h-[2.6rem] group-hover:text-[#d97706] transition-colors"
            >
              {product.name}
            </Link>

            {product.partNumber && (
              <p className="mt-1.5 text-[11px] font-mono text-slate-500">
                PN: <span className="text-[#0f2a4a] font-bold">{product.partNumber}</span>
              </p>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0f2a4a] px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#d97706] transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5 text-amber-400 group-hover:text-white" /> Get Quote
            </button>

            <Link
              to="/products/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0f2a4a] group-hover:text-[#d97706] group-hover:translate-x-1 transition-all"
            >
              Details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </motion.article>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
