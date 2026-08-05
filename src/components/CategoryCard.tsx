import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: category.slug }}
      className="card-surface group relative flex flex-col overflow-hidden rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="aspect-4/3 overflow-hidden bg-surface p-5">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-border p-4">
        <span className="eyebrow text-[0.65rem]">{category.brand}</span>
        <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-card-foreground">
          {category.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.blurb}</p>
      </div>
    </Link>
  );
}
