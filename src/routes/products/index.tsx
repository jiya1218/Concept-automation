import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, MessageSquare, Check, Layers, Sparkles, RefreshCw, Zap } from "lucide-react";
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

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedBrand("All");
    setSelectedType("All");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main>
        {/* Header Cyber Banner */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-sky-50 via-white to-slate-50 dark:from-slate-950 dark:via-[#0B0F19] dark:to-[#080C14] py-16">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 text-sky-800 dark:bg-cyan-500/10 dark:text-cyan-400 px-4 py-1.5 text-xs font-bold border border-sky-200 dark:border-cyan-500/30">
                <Sparkles className="h-3.5 w-3.5" /> 199+ Genuine OEM Part Numbers In Stock
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Industrial Automation Catalog
              </h1>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Explore 100% genuine Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Fuji, Proface & Danfoss controllers, touch panels, inverters & sensors.
              </p>

              {/* Instant Search Control Bar */}
              <div className="mt-8 flex w-full max-w-2xl items-center gap-2 rounded-2xl bg-white dark:bg-slate-900/90 p-2 border border-slate-300 dark:border-cyan-500/30 shadow-lg backdrop-blur-xl">
                <Search className="ml-3 h-5 w-5 text-sky-600 dark:text-cyan-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search model number, part number, or brand (e.g. S7-1200, GS2110, FR-CS84)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-2 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Catalog Workspace */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Filter Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-sky-600 dark:text-cyan-400" /> Filter Catalog
                  </span>
                  {(selectedBrand !== "All" || selectedType !== "All" || searchQuery) && (
                    <button
                      onClick={resetFilters}
                      className="text-[11px] font-bold text-sky-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <RefreshCw className="h-3 w-3" /> Reset
                    </button>
                  )}
                </div>

                {/* Hardware Type Filter */}
                <div className="space-y-3 mb-6">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-sky-700 dark:text-cyan-400">
                    Product Type
                  </label>
                  <div className="space-y-1.5">
                    {productTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                          selectedType === type
                            ? "bg-sky-100 dark:bg-cyan-500/20 text-sky-800 dark:text-cyan-400 border border-sky-300 dark:border-cyan-500/40"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{type}</span>
                        <span className="text-[10px] font-mono opacity-60">
                          {type === "All"
                            ? allProducts.length
                            : allProducts.filter((p) => p.type === type).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-sky-700 dark:text-cyan-400">
                    OEM Manufacturer
                  </label>
                  <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
                    <button
                      onClick={() => setSelectedBrand("All")}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                        selectedBrand === "All"
                          ? "bg-sky-100 dark:bg-cyan-500/20 text-sky-800 dark:text-cyan-400 border border-sky-300 dark:border-cyan-500/40"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <span>All Brands</span>
                      <span className="text-[10px] font-mono opacity-60">{allProducts.length}</span>
                    </button>
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                          selectedBrand === b
                            ? "bg-sky-100 dark:bg-cyan-500/20 text-sky-800 dark:text-cyan-400 border border-sky-300 dark:border-cyan-500/40"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{b}</span>
                        <span className="text-[10px] font-mono opacity-60">{brandCounts[b] || 0}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Quote Banner Card */}
              <div className="glass-card rounded-2xl p-6 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-slate-900 text-center relative overflow-hidden">
                <Zap className="mx-auto h-8 w-8 text-orange-500 mb-2" />
                <h3 className="font-display text-sm font-bold uppercase text-slate-900 dark:text-white">Need Custom Model Bulk Pricing?</h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">Submit your parts list directly to our Makarba, Ahmedabad sales desk.</p>
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="mt-4 w-full rounded-xl bg-orange-500 py-2.5 font-display text-xs font-bold uppercase text-white hover:bg-orange-600 transition-colors shadow-md"
                >
                  Request Bulk Quote
                </button>
              </div>
            </aside>

            {/* Catalog Grid Area */}
            <main className="lg:col-span-9 space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-900/60 px-6 py-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Showing <span className="text-sky-600 dark:text-cyan-400 font-mono text-sm">{filteredProducts.length}</span> Products
                  {selectedBrand !== "All" && <span> for <span className="text-slate-900 dark:text-white">{selectedBrand}</span></span>}
                  {selectedType !== "All" && <span> in <span className="text-slate-900 dark:text-white">{selectedType}</span></span>}
                </span>

                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-cyan-400 hover:underline"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> Can't find model? Ask Us
                </button>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="glass-card rounded-3xl p-16 text-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <Layers className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-600 mb-4" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white uppercase">No exact matches found</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    We maintain offline stock for 500+ additional part numbers in Makarba, Ahmedabad. Submit an inquiry for quick availability.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={resetFilters}
                      className="rounded-xl bg-slate-100 dark:bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      Reset Search Filters
                    </button>
                    <button
                      onClick={() => setInquiryModalOpen(true)}
                      className="rounded-xl bg-sky-600 dark:bg-cyan-500 px-5 py-2.5 font-display text-xs font-bold uppercase text-white dark:text-slate-950"
                    >
                      Inquire Custom Model
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </main>

          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
