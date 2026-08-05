import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, hotProducts, popularProducts } from "@/data/catalog";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products | PLC, HMI, VFD & Sensors — Concept Automation" },
      {
        name: "description",
        content:
          "Full product range: Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Danfoss, Fuji and Proface PLC, HMI, VFD, drives and sensors.",
      },
      { property: "og:title", content: "Our Products | Concept Automation Technologies" },
      {
        property: "og:description",
        content: "Browse 20 product categories of factory automation hardware.",
      },
    ],
  }),
  component: Products,
});

const filters = ["All", "PLC", "HMI", "VFD", "Sensors"] as const;

function Products() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? categories : categories.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Our Products</span>
            <h1 className="section-title mt-3 text-4xl sm:text-5xl">Factory Automation Range</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              PLC, HMI, VFD, DC drives, servo systems and sensors of various reputed brands.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md border px-5 py-2 font-display text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shown.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Featured</span>
            <h2 className="section-title mt-3 text-3xl">Popular & Hot Products</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...popularProducts, ...hotProducts].map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
