import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search, SlidersHorizontal, X, Check } from "lucide-react";
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync URL search param
  useEffect(() => {
    if (searchParams.q) setSearchQuery(searchParams.q);
  }, [searchParams.q]);

  // Lock body when mobile filter is open
  useEffect(() => {
    document.body.style.overflow = mobileFilterOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileFilterOpen]);

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

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 block mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            placeholder="Model, brand, part no..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-stone-200 bg-white pl-10 pr-3 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>
      </div>

      {/* Type */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 block mb-2">Product Type</label>
        <div className="flex flex-wrap gap-1.5">
          {productTypes.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedType === t
                  ? "bg-stone-950 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 block mb-2">Brand</label>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedBrand("All")}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              selectedBrand === "All" ? "bg-amber-50 text-amber-700" : "text-stone-600 hover:bg-stone-50"
            }`}
          >
            <span>All Brands</span>
            <span className="text-[11px] text-stone-400">{allProducts.length}</span>
          </button>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                selectedBrand === b ? "bg-amber-50 text-amber-700" : "text-stone-600 hover:bg-stone-50"
              }`}
            >
              <span className="flex items-center gap-2">
                {selectedBrand === b && <Check className="h-3 w-3 text-amber-600" />}
                {b}
              </span>
              <span className="text-[11px] text-stone-400">{brandCounts[b] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      {(selectedBrand !== "All" || selectedType !== "All" || searchQuery) && (
        <button
          onClick={resetFilters}
          className="w-full rounded-xl border border-stone-200 py-2 text-xs font-semibold text-stone-500 hover:bg-stone-50 transition-colors"
        >
          Reset All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page header */}
        <div className="border-b border-stone-200 bg-stone-950 py-10 sm:py-14 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center animate-fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">Complete Catalog</span>
            <h1 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
              Industrial Automation Products
            </h1>
            <p className="mt-2 text-sm text-stone-300 max-w-lg mx-auto">
              {allProducts.length}+ genuine OEM products from {brands.length} global manufacturers. Ready for dispatch.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-900 mb-4">Filter Products</h3>
                <FilterContent />
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Mobile filter toggle + result count */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-stone-500">
                  <span className="font-bold text-stone-900">{filteredProducts.length}</span> products found
                </p>
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 shadow-sm"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                </button>
              </div>

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center shadow-sm">
                  <p className="text-stone-500 text-sm">No products match your filters.</p>
                  <button onClick={resetFilters} className="mt-3 text-xs font-semibold text-amber-600 hover:text-amber-700">
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile filter bottom sheet */}
      {mobileFilterOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] rounded-t-2xl bg-white shadow-2xl animate-fade-up overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-100 bg-white px-6 py-4 rounded-t-2xl">
              <h3 className="font-display text-sm font-bold text-stone-900">Filter Products</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-stone-100">
                <X className="h-4 w-4 text-stone-500" />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
            <div className="sticky bottom-0 border-t border-stone-100 bg-white p-4">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full rounded-xl bg-stone-950 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}

      <Footer />
      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
