import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-surface p-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-border p-4">
        <span className="eyebrow text-[0.65rem]">{product.category}</span>
        <h3 className="text-base font-semibold leading-snug text-card-foreground">
          {product.name}
        </h3>
        <Link
          to="/contact"
          className="mt-auto inline-flex w-fit items-center gap-1 pt-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-accent hover:underline"
        >
          Send Inquiry
        </Link>
      </div>
    </article>
  );
}
