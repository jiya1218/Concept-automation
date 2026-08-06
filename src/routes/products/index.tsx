import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search, SlidersHorizontal, X, Check, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, brands, categories } from "@/data/catalog";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products Catalog | Siemens, Mitsubishi, Omron, AB, Delta — Concept Automation" },
      { name: "description", content: "Full product range: Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Danfoss, Fuji and Proface PLC, HMI, VFD, drives and sensors." },
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

  useEffect(() => {
    if (searchParams.q) setSearchQuery(searchParams.q);
  }, [searchParams.q]);

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

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedType("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] pb-16 sm:pb-0">
      <Header />

      <main>
        {/* Page Header Banner */}
        <div className="border-b border-[#e7e5e4] bg-[#140d09] py-8 sm:py-14 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#b45309]">Complete Catalog</span>
            <h1 className="mt-1 font-display text-xl font-extrabold text-white sm:text-4xl">
              Industrial Automation Products
            </h1>
            <p className="mt-1 text-xs text-slate-300 max-w-lg mx-auto font-medium">
              {allProducts.length}+ genuine OEM products from {brands.length} global manufacturers. Ready for dispatch.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TOP FILTER SECTION                                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div className="sticky top-14 sm:top-16 z-30 border-b border-[#e7e5e4] bg-[#f4f1eb]/95 backdrop-blur-md py-3 shadow-sm">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 space-y-2.5">
            {/* Search Input Bar & Result Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#334155]" />
                <input
                  type="text"
                  placeholder="Search model, part number, brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[#e7e5e4] bg-white pl-9 pr-4 py-2 text-xs text-[#1a130f] font-semibold placeholder-[#334155] focus:border-[#1a130f] focus:outline-none focus:ring-1 focus:ring-[#1a130f]/20 shadow-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-bold text-[#1a130f]">
                <span>
                  Found <strong className="text-[#b45309]">{filteredProducts.length}</strong> products
                </span>
                {(selectedBrand !== "All" || selectedType !== "All" || searchQuery) && (
                  <button
                    onClick={resetFilters}
                    className="rounded-lg border border-[#e7e5e4] bg-white px-2.5 py-1 text-[10px] font-bold text-[#b45309] hover:bg-[#f6f4ee] transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Product Type Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#334155] mr-1 shrink-0">Type:</span>
              {productTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`shrink-0 rounded-xl px-3 py-1 text-[11px] font-extrabold transition-all ${
                    selectedType === t
                      ? "bg-[#1a130f] text-white shadow-sm"
                      : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Brand Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#334155] mr-1 shrink-0">Brand:</span>
              <button
                onClick={() => setSelectedBrand("All")}
                className={`shrink-0 rounded-xl px-3 py-1 text-[11px] font-extrabold transition-all ${
                  selectedBrand === "All"
                    ? "bg-[#b45309] text-white shadow-sm"
                    : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f6f4ee]"
                }`}
              >
                All Brands ({allProducts.length})
              </button>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`shrink-0 rounded-xl px-3 py-1 text-[11px] font-extrabold transition-all ${
                    selectedBrand === b
                      ? "bg-[#b45309] text-white shadow-sm"
                      : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {b} ({brandCounts[b] || 0})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2-COLUMN MOBILE PRODUCT GRID (User Request: 2 products in mobile view) */}
        <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-[#e7e5e4] bg-white p-12 text-center shadow-sm">
              <p className="text-[#334155] text-sm font-semibold">No products match your filter criteria.</p>
              <button onClick={resetFilters} className="mt-4 rounded-xl bg-[#1a130f] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309]">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
