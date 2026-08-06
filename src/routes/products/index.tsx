import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Filter, RefreshCw, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { categories, brands, allProducts } from "@/data/catalog";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Industrial Automation Products Catalog | Concept Automation Technologies" },
      {
        name: "description",
        content:
          "Browse Siemens S7 PLCs, Mitsubishi FREQROL VFDs, Omron CJ1W PLCs, Pepperl+Fuchs sensors and Allen Bradley controllers in stock at Makarba, Ahmedabad.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const searchParams = useSearch({ from: "/products/" }) as { q?: string; category?: string; brand?: string };
  const [search, setSearch] = useState(searchParams?.q || "");
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams?.category || "all");
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams?.brand || searchParams?.q || "all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Synced Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // 1. Search Query Match
      if (search.trim()) {
        const queryTokens = search.toLowerCase().trim().split(/\s+/);
        const searchTarget = `${p.name} ${p.brand} ${p.category} ${p.partNumber || ""} ${p.description || ""}`.toLowerCase();
        const matchesQuery = queryTokens.every((token) => searchTarget.includes(token));
        if (!matchesQuery) return false;
      }

      // 2. Category Filter Match
      if (selectedCategory !== "all") {
        if (p.category.toLowerCase() !== selectedCategory.toLowerCase() && p.type.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // 3. Brand Filter Match
      if (selectedBrand !== "all") {
        const selectedBrandLower = selectedBrand.toLowerCase();
        const productBrandLower = p.brand.toLowerCase();
        if (!productBrandLower.includes(selectedBrandLower) && !selectedBrandLower.includes(productBrandLower)) {
          return false;
        }
      }

      return true;
    });
  }, [search, selectedCategory, selectedBrand]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedBrand("all");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header />

      <main>
        {/* Page Header Banner */}
        <section className="bg-[#0F172A] text-white py-10 sm:py-14 border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">Inventory Catalog</span>
            <h1 className="mt-1 font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Industrial Hardware Catalog
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Verified stock of Siemens, Mitsubishi, Omron, Delta & Pepperl+Fuchs PLCs, HMIs, VFDs & sensors at Makarba, Ahmedabad.
            </p>
          </div>
        </section>

        {/* Catalog Main Content */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Top Control Bar: Search & Mobile Filter Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            
            {/* Search Input Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-sky-700" />
              <input
                type="text"
                placeholder="Search part number, brand, model or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none shadow-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Drawer Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold uppercase text-slate-800 border border-slate-300 shadow-sm"
              >
                <SlidersHorizontal className="h-4 w-4 text-sky-700" /> Filter Catalog
              </button>

              {/* Reset Filters Button */}
              {(search || selectedCategory !== "all" || selectedBrand !== "all") && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-200 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-300 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Reset
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            
            {/* Desktop Left Filter Sidebar */}
            <aside className="hidden lg:block lg:col-span-1 space-y-6">
              
              {/* Brands Filter */}
              <div className="industrial-card rounded-2xl p-5 bg-white">
                <h3 className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2">
                  Filter by Brand
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
                      selectedBrand === "all" ? "bg-sky-700 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    All Brands ({allProducts.length})
                  </button>
                  {brands.map((b) => {
                    const count = allProducts.filter((p) => p.brand.toLowerCase() === b.toLowerCase()).length;
                    return (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                          selectedBrand.toLowerCase() === b.toLowerCase()
                            ? "bg-sky-700 text-white font-bold"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span>{b}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          selectedBrand.toLowerCase() === b.toLowerCase() ? "bg-sky-800 text-white" : "bg-slate-100 text-slate-500"
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hardware Type Filter */}
              <div className="industrial-card rounded-2xl p-5 bg-white">
                <h3 className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2">
                  Hardware Type
                </h3>
                <div className="space-y-1">
                  {["all", "PLC", "HMI", "VFD", "Sensors"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedCategory(t)}
                      className={`w-full text-left rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                        selectedCategory === t ? "bg-sky-700 text-white font-bold" : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t === "all" ? "All Categories" : t}
                    </button>
                  ))}
                </div>
              </div>

            </aside>

            {/* Main Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-600">
                  Showing <strong className="text-slate-900 font-extrabold">{filteredProducts.length}</strong> Products
                </span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="industrial-card rounded-3xl p-12 text-center bg-white">
                  <p className="text-sm font-bold text-slate-700">No products match your search criteria.</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-700 px-5 py-2.5 text-xs font-bold text-white uppercase"
                  >
                    <RefreshCw className="h-4 w-4" /> Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div onClick={() => setMobileFilterOpen(false)} className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">Filter Products</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <X className="h-5 w-5 text-slate-700" />
                </button>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">Brands</span>
                <div className="space-y-1">
                  <button
                    onClick={() => { setSelectedBrand("all"); setMobileFilterOpen(false); }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold ${selectedBrand === "all" ? "bg-sky-700 text-white" : "bg-slate-50 text-slate-700"}`}
                  >
                    All Brands
                  </button>
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => { setSelectedBrand(b); setMobileFilterOpen(false); }}
                      className={`w-full text-left rounded-lg px-3 py-2 text-xs font-semibold ${selectedBrand.toLowerCase() === b.toLowerCase() ? "bg-sky-700 text-white font-bold" : "bg-slate-50 text-slate-700"}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">Hardware Type</span>
                <div className="space-y-1">
                  {["all", "PLC", "HMI", "VFD", "Sensors"].map((t) => (
                    <button
                      key={t}
                      onClick={() => { setSelectedCategory(t); setMobileFilterOpen(false); }}
                      className={`w-full text-left rounded-lg px-3 py-2 text-xs font-semibold uppercase ${selectedCategory === t ? "bg-sky-700 text-white font-bold" : "bg-slate-50 text-slate-700"}`}
                    >
                      {t === "all" ? "All Categories" : t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="mt-6 w-full rounded-xl bg-sky-700 py-3.5 font-display text-xs font-bold uppercase text-white"
            >
              Apply Filters ({filteredProducts.length} Results)
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
