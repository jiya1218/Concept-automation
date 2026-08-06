import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, MessageSquare, Check, Layers } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, brands, categories } from "@/data/catalog";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products Catalog | Siemens, Mitsubishi, Omron, AB, Delta — Concept Automation" },
      {
        name: "description",
        content:
          "Full product range: Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Danfoss, Fuji and Proface PLC, HMI, VFD, drives and sensors.",
      },
    ],
  }),
  component: Products,
});

const productTypes = ["All", "PLC", "HMI", "VFD", "Sensors"] as const;

function Products() {
  const searchParams = useSearch({ strict: false }) as { q?: string };
  const [searchQuery, setSearchQuery] = useState(searchParams.q || "");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    brands.forEach((b) => {
      counts[b] = allProducts.filter((p) => p.brand.toLowerCase() === b.toLowerCase()).length;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return allProducts.filter((product) => {
      const matchesBrand = selectedBrand === "All" || product.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchesType = selectedType === "All" || product.type === selectedType;
      
      const searchableText = `${product.name} ${product.partNumber} ${product.brand} ${product.category} ${product.type} ${product.description}`.toLowerCase();
      const matchesSearch = searchTerms.length === 0 || searchTerms.every((term) => searchableText.includes(term));

      return matchesBrand && matchesType && matchesSearch;
    });
  }, [selectedBrand, selectedType, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Header Banner */}
        <section className="border-b border-border bg-ink text-ink-foreground py-12">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">Concept Automation Catalog</span>
            <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Factory Automation Products & Parts
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/80 leading-relaxed">
              Explore 100% genuine Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Fuji, Proface & Danfoss controllers, touch panels, inverters & sensors.
            </p>

            {/* Search Input */}
            <div className="mt-6 relative max-w-2xl">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search model number or keyword (e.g. S7-1200, GS2110, FR-CS84, DOP-107)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-black/40 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-xs font-semibold text-white/70 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filter Controls Bar */}
        <section className="sticky top-[65px] z-30 border-b border-border bg-background/95 backdrop-blur py-4 shadow-sm">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
            {/* Product Type Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1 flex items-center gap-1">
                <Filter className="h-3.5 w-3.5 text-accent" /> Type:
              </span>
              {productTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-md border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedType === type
                      ? "border-accent bg-accent text-accent-foreground shadow"
                      : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* General Quote Action */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-muted-foreground">
                Showing <strong className="text-foreground">{filteredProducts.length}</strong> products
              </span>
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 shadow transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Request Custom Quote
              </button>
            </div>
          </div>

          {/* Brand Pills Sub-bar */}
          <div className="mx-auto max-w-7xl px-6 mt-3 pt-3 border-t border-border/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mr-1">Brand:</span>
            <button
              onClick={() => setSelectedBrand("All")}
              className={`rounded px-2.5 py-1 text-[11px] font-semibold transition-all ${
                selectedBrand === "All" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent/20"
              }`}
            >
              All Brands ({allProducts.length})
            </button>
            {brands.map((b) => {
              const count = brandCounts[b] || 0;
              return (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`rounded px-2.5 py-1 text-[11px] font-semibold transition-all ${
                    selectedBrand === b ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                  }`}
                >
                  {b} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Product Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
              <Layers className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-foreground">No Products Found</h3>
              <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                No matching automation components found for "{searchQuery}". Call us directly or request a custom quotation.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedBrand("All");
                    setSelectedType("All");
                  }}
                  className="rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground"
                >
                  Inquire Any Part Number
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
