import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Zap,
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowUpRight,
  Globe,
  Package,
  Settings,
  Cpu,
  Search,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-automation.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { brands, company, allProducts } from "@/data/catalog";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concept Automation Technologies | PLC, HMI & VFD Supplier" },
      { name: "description", content: "Importer, exporter, trader and supplier of factory automation hardware — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad." },
    ],
  }),
  component: Index,
});

const heroBrandTabs = [
  {
    id: "siemens",
    name: "Siemens",
    badge: "100% Genuine SIMATIC",
    title: "SIMATIC S7-1200 / S7-1500 & SINAMICS Drives",
    desc: "In-stock Siemens CPUs, Comfort HMIs, and SINAMICS V20/G120/S120 frequency drives. Fast dispatch from Makarba, Ahmedabad warehouse.",
    highlightPart: "6ES7214-1AG40-0XB0",
    image: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg",
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    badge: "MELSEC Original Stock",
    title: "MELSEC FX5U & FREQROL VFD Solutions",
    desc: "High-performance FX5U PLCs, GOT2000 touch panels, and FREQROL-D700/E800 vector drives for maximum plant uptime.",
    highlightPart: "FX5U-32MT/ESS",
    image: "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg",
  },
  {
    id: "allenbradley",
    name: "Allen Bradley",
    badge: "Rockwell Authorized Trader",
    title: "CompactLogix 5380 & PanelView HMIs",
    desc: "CompactLogix controllers, PanelView 5000 graphic terminals, and PowerFlex 525 AC drives ready for immediate dispatch.",
    highlightPart: "5069-L306ER",
    image: "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg",
  },
  {
    id: "omron",
    name: "Omron & Delta",
    badge: "Factory Direct Hardware",
    title: "Omron Sysmac CP1E/CJ2 & Delta VFD-E",
    desc: "Complete stock of Omron micro PLCs, Delta MS300 vector inverters, and Pepperl+Fuchs inductive sensors.",
    highlightPart: "CP1E-N40DR-A",
    image: "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg",
  },
];

const networkStats = [
  { label: "Connected OEMs", value: "842+" },
  { label: "Connected Traders", value: "6,452+" },
  { label: "Panel Builders", value: "2,145+" },
  { label: "Connected End Users", value: "1,796+" },
  { label: "Solution Providers", value: "710+" },
  { label: "System Integrators", value: "539+" },
];

const keyIndustries = [
  { id: "pharma", title: "Pharma Industry", desc: "Cleanroom automation, batch processing, 21 CFR Part 11 compliance, and precision tablet press PLC panels.", image: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg" },
  { id: "textile", title: "Textile & Packaging", desc: "High-speed multi-axis motion synchronization, tension control VFD inverters, and automatic wrapping SCADA.", image: "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg" },
  { id: "automotive", title: "Automotive Line", desc: "Robotic welding line racks, assembly line PLC controllers, safety light curtains, and industrial Ethernet fieldbus IO.", image: "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg" },
  { id: "plastic", title: "Plastic & Paper", desc: "Extruder vector drives, precise melt temperature PID control modules, and heavy-duty shaft encoders.", image: "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg" },
  { id: "machine", title: "Machine Engineering", desc: "Turnkey electrical control panel manufacturing, customized PLC program suites, and HMI touch screen development.", image: "https://cpimg.tistatic.com/09377030/b/4/GS2110-WTBD-N-Mitsubishi-HMI-10-inch.jpg" },
];

const reviews = [
  { quote: "Concept Automation supplied us genuine Siemens S7-1200 CPUs and TP1200 HMIs within 24 hours during a critical plant breakdown. Exceptional service!", author: "Mr. R. K. Patel", company: "Pharma Machine OEM, Ahmedabad", stars: 5 },
  { quote: "We regularly source Mitsubishi FREQROL VFDs and GOT touch screens from Mr. Gaurang. Always original stock with complete warranty.", author: "Mr. Vikram Shah", company: "Packaging Systems India, Vadodara", stars: 5 },
  { quote: "Fast response on hard-to-find Allen Bradley CompactLogix parts. Their technical team verified the exact cross-reference for our line.", author: "Mr. Amit Verma", company: "Automotive Ancillary Pvt Ltd, Pune", stars: 5 },
];

function Index() {
  const [activeBrandTab, setActiveBrandTab] = useState(heroBrandTabs[0]);
  const [activeIndustry, setActiveIndustry] = useState(keyIndustries[0]);
  const [catalogBrandFilter, setCatalogBrandFilter] = useState("All");
  const [heroSearch, setHeroSearch] = useState("");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ name: "", part: "" });
  const [reviewIndex, setReviewIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrandTab((prev) => {
        const currIndex = heroBrandTabs.findIndex((t) => t.id === prev.id);
        return heroBrandTabs[(currIndex + 1) % heroBrandTabs.length];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const previewProducts = useMemo(() => {
    if (catalogBrandFilter === "All") return allProducts.slice(0, 4);
    return allProducts.filter((p) => p.brand.toLowerCase() === catalogBrandFilter.toLowerCase()).slice(0, 4);
  }, [catalogBrandFilter]);

  const openQuote = (name = "", part = "") => {
    setModalProduct({ name, part });
    setInquiryModalOpen(true);
  };

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate({ to: "/products", search: { q: heroSearch } as any });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1a130f] font-sans selection:bg-[#b45309] selection:text-white pb-16 sm:pb-0">
      <Header />

      <main>
        {/* ═══════════════════════════════════════════════════════ */}
        {/* HERO SECTION — Animated Ambient Background & Sharp Text */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f1eb] via-[#f6f4ee] to-[#f6f4ee] pt-8 pb-14 sm:py-20 border-b border-[#e7e5e4]">
          {/* Animated Background Glowing Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#b45309]/10 rounded-full blur-3xl pointer-events-none animate-orb-1" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#0f2a4a]/5 rounded-full blur-3xl pointer-events-none animate-orb-2" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a130f05_1px,transparent_1px),linear-gradient(to_bottom,#1a130f05_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            {/* Top Bar Status */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#e7e5e4] pb-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1a130f]">
                  Makarba Warehouse Active · 1,500+ Original Parts Ready
                </span>
              </div>

              <form onSubmit={handleHeroSearchSubmit} className="flex items-center gap-2">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#334155]" />
                  <input
                    type="text"
                    placeholder="Search part code (e.g. S7-1200)..."
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    className="w-full sm:w-72 rounded-xl border border-[#e7e5e4] bg-white pl-9 pr-3 py-2 text-xs text-[#1a130f] font-semibold placeholder-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1a130f]/20 focus:border-[#1a130f] shadow-sm"
                  />
                </div>
                <button type="submit" className="rounded-xl bg-[#1a130f] px-4 py-2 text-xs font-bold text-white hover:bg-[#b45309] transition-colors shadow shrink-0">
                  Search
                </button>
              </form>
            </div>

            {/* Brand Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 mb-8 scrollbar-none">
              {heroBrandTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBrandTab(tab)}
                  className={`shrink-0 rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    activeBrandTab.id === tab.id
                      ? "bg-[#1a130f] text-white shadow-lg scale-105"
                      : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f4f1eb]"
                  }`}
                >
                  {tab.name} Automation
                </button>
              ))}
            </div>

            {/* Hero Main Content */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBrandTab.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#b45309]/30 bg-[#f4f1eb] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#b45309] shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-[#b45309]" /> {activeBrandTab.badge}
                    </span>

                    <h1 className="font-display text-3xl font-extrabold text-[#1a130f] sm:text-5xl leading-[1.1] tracking-tight">
                      {activeBrandTab.title}
                    </h1>

                    <p className="text-base text-[#334155] font-medium leading-relaxed max-w-xl sm:text-lg">
                      {activeBrandTab.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => openQuote(activeBrandTab.title, activeBrandTab.highlightPart)}
                    className="group rounded-xl bg-[#1a130f] px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#b45309] transition-all flex items-center gap-2"
                  >
                    Get Price Quote <ArrowRight className="h-4 w-4 text-amber-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="rounded-xl border border-[#e7e5e4] bg-white px-7 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-[#1a130f] hover:border-[#1a130f] hover:bg-[#f4f1eb] transition-all shadow-sm flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-[#b45309]" /> {company.phone}
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#e7e5e4]">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#1a130f]">
                    <ShieldCheck className="h-4 w-4 text-[#b45309] shrink-0" />
                    <span>100% Genuine OEM</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#1a130f]">
                    <Truck className="h-4 w-4 text-[#b45309] shrink-0" />
                    <span>24-48 Hr Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#1a130f]">
                    <Award className="h-4 w-4 text-[#b45309] shrink-0" />
                    <span>1 Year Warranty</span>
                  </div>
                </div>
              </div>

              {/* Showcase Card */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBrandTab.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-3xl bg-[#140d09] p-6 sm:p-8 shadow-2xl text-white border border-white/10"
                  >
                    <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                      <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#b45309]">
                        Verified Stock Item
                      </div>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-[10px] font-extrabold uppercase text-emerald-400">
                        In Stock
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-xl text-center">
                      <div className="h-44 sm:h-52 w-full flex items-center justify-center p-2">
                        <img
                          src={activeBrandTab.image}
                          alt={activeBrandTab.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#e7e5e4]">
                        <div className="font-display text-sm font-extrabold text-[#1a130f] uppercase">
                          {activeBrandTab.name} Hardware Module
                        </div>
                        <div className="text-xs font-mono font-bold text-[#b45309] mt-0.5">
                          PN: {activeBrandTab.highlightPart}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/15 text-xs text-slate-300 font-semibold">
                      <span>Dispatch: Makarba, Ahmedabad</span>
                      <button
                        onClick={() => openQuote(activeBrandTab.name, activeBrandTab.highlightPart)}
                        className="text-[#b45309] font-extrabold uppercase hover:underline flex items-center gap-1"
                      >
                        Inquire Now <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* INFINITE MARQUEE STRIP                                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="border-b border-[#e7e5e4] bg-[#140d09] py-4 overflow-hidden text-white">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...brands, ...brands, ...brands].map((b, idx) => (
              <div
                key={idx}
                onClick={() => navigate({ to: "/products", search: { q: b } as any })}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span className="h-2 w-2 rounded-full bg-[#b45309] group-hover:scale-125 transition-transform" />
                <span className="font-display text-sm font-extrabold uppercase tracking-widest text-[#f6f4ee] group-hover:text-white transition-colors">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* CATALOG PREVIEW (Sharp Contrast & Clean Spacing)        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 bg-[#f4f1eb] border-b border-[#e7e5e4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow">INVENTORY CATALOG</span>
                <h2 className="mt-1 font-display text-2xl sm:text-4xl font-extrabold text-[#1a130f]">
                  Explore Original Hardware
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#334155] font-medium">
                  Showing selected high-demand PLCs, HMIs, VFDs & Sensors.
                </p>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {["All", "Siemens", "Mitsubishi", "Omron", "Allen Bradley"].map((b) => (
                  <button
                    key={b}
                    onClick={() => setCatalogBrandFilter(b)}
                    className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold uppercase transition-all ${
                      catalogBrandFilter === b
                        ? "bg-[#1a130f] text-white shadow"
                        : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f6f4ee]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-4">
              {previewProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1a130f] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#b45309] transition-all shadow-lg hover:shadow-xl"
              >
                View Full {allProducts.length}+ Products Catalog <ArrowRight className="h-4 w-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SUPPLY NETWORK BENTO GRID                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-[#f6f4ee] relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#b45309]/10 rounded-full blur-3xl pointer-events-none animate-orb-2" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">SUPPLY INFRASTRUCTURE</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1a130f] sm:text-4xl">
                Connected Industrial Network
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#334155] font-medium">
                Supplying OEM hardware to over 10,000+ manufacturing ecosystem partners across India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6 mb-10">
              {networkStats.map((st, i) => (
                <motion.div
                  key={st.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl border border-[#e7e5e4] bg-white p-4 text-center shadow-sm hover:border-[#b45309] transition-all"
                >
                  <div className="text-[11px] font-extrabold uppercase text-[#334155]">{st.label}</div>
                  <div className="mt-1.5 font-display text-2xl sm:text-3xl font-extrabold text-[#1a130f]">{st.value}</div>
                  <div className="mt-1 text-[9px] font-extrabold text-[#b45309] uppercase tracking-wider">Verified Stock</div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8 rounded-3xl bg-[#140d09] p-7 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div>
                  <span className="rounded-full bg-[#b45309] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                    Direct Warehouse Hub
                  </span>
                  <h3 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold uppercase leading-tight">
                    Titanium Business Park · Makarba, Ahmedabad
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-medium">
                    Our central stockist facility maintains extensive inventories of Siemens S7-1200/S7-1500 CPUs, Mitsubishi FREQROL VFDs, Omron micro controllers, and Pepperl+Fuchs sensors for immediate emergency dispatch.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 font-semibold">
                  <span>Proprietor: <strong>{company.owner}</strong></span>
                  <button
                    onClick={() => openQuote("General Inquiry", "")}
                    className="rounded-xl bg-[#b45309] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d97706] transition-colors"
                  >
                    Contact Sales Desk
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                <div className="rounded-3xl border border-[#e7e5e4] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl bg-[#f4f1eb] flex items-center justify-center mb-3">
                    <ShieldCheck className="h-5 w-5 text-[#1a130f]" />
                  </div>
                  <h4 className="font-display text-base font-extrabold uppercase text-[#1a130f]">100% Genuine OEM Guarantee</h4>
                  <p className="mt-1.5 text-xs text-[#334155] font-medium leading-relaxed">
                    Every PLC, HMI, and drive includes official factory seal, serial number validation, and 12-month coverage.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#e7e5e4] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl bg-[#f4f1eb] flex items-center justify-center mb-3">
                    <Truck className="h-5 w-5 text-[#b45309]" />
                  </div>
                  <h4 className="font-display text-base font-extrabold uppercase text-[#1a130f]">Pan-India Breakdown Express</h4>
                  <p className="mt-1.5 text-xs text-[#334155] font-medium leading-relaxed">
                    Urgent 24-48 hour courier dispatch to manufacturing units across Gujarat, Maharashtra, South, and North India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SERVING KEY INDUSTRIES                                 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-[#f4f1eb] border-t border-[#e7e5e4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="eyebrow">ENGINEERED SOLUTIONS</span>
              <h2 className="mt-1 font-display text-2xl sm:text-4xl font-extrabold text-[#1a130f]">
                Serving Key Industries
              </h2>
            </div>

            <div className="flex overflow-x-auto gap-2 pb-2 mb-8 justify-start lg:justify-center scrollbar-none">
              {keyIndustries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind)}
                  className={`shrink-0 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeIndustry.id === ind.id
                      ? "bg-[#1a130f] text-white shadow-lg scale-105"
                      : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {ind.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#e7e5e4] bg-white p-6 sm:p-8 shadow-lg"
              >
                <div className="grid gap-6 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#b45309]">
                      Targeted Industry Hardware
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#1a130f]">
                      {activeIndustry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {activeIndustry.desc}
                    </p>
                    <button
                      onClick={() => openQuote(activeIndustry.title, "")}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#1a130f] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-colors"
                    >
                      Inquire Solution <ArrowRight className="h-4 w-4 text-amber-400" />
                    </button>
                  </div>
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src={activeIndustry.image}
                      alt={activeIndustry.title}
                      className="h-44 sm:h-56 w-full max-w-xs object-contain rounded-2xl bg-[#f6f4ee] p-4 border border-[#e7e5e4]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TESTIMONIALS                                           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-[#f6f4ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-2">
                <span className="eyebrow">CLIENT VERIFICATION</span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#1a130f]">
                  What Engineers Say
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                  Trusted by plant managers and OEM builders across Gujarat & India.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="h-10 w-10 rounded-xl border border-[#e7e5e4] bg-white flex items-center justify-center text-[#1a130f] hover:bg-[#f4f1eb] transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                    className="h-10 w-10 rounded-xl border border-[#e7e5e4] bg-white flex items-center justify-center text-[#1a130f] hover:bg-[#f4f1eb] transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="text-xs font-extrabold text-[#334155] ml-2">{reviewIndex + 1} / {reviews.length}</span>
                </div>
              </div>

              <div className="lg:col-span-3">
                <motion.div
                  key={reviewIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-[#e7e5e4] p-6 sm:p-10 shadow-sm"
                >
                  <div className="flex text-[#b45309] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic font-medium">
                    "{reviews[reviewIndex].quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#e7e5e4]">
                    <div className="font-display text-sm font-bold uppercase text-[#1a130f]">{reviews[reviewIndex].author}</div>
                    <div className="text-xs text-[#b45309] font-bold mt-0.5">{reviews[reviewIndex].company}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* REDESIGNED CTA CARD — Light Warm Sand Glass Card        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-[#f4f1eb] relative overflow-hidden border-t border-[#e7e5e4]">
          {/* Animated Background Glowing Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#b45309]/10 rounded-full blur-3xl pointer-events-none animate-orb-1" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-3xl border border-[#e7e5e4] bg-white p-8 sm:p-14 shadow-xl text-center relative overflow-hidden">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b45309]/30 bg-[#f4f1eb] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#b45309]">
                <Zap className="h-3.5 w-3.5 text-[#b45309]" /> Breakdown & Order Support Desk
              </span>

              <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a130f] leading-tight">
                Plant Breakdown or Urgent Automation Order?
              </h2>

              <p className="mt-4 text-xs sm:text-base text-[#334155] font-medium max-w-2xl mx-auto leading-relaxed">
                Contact our technical desk in Makarba, Ahmedabad for immediate stock verification and express 24-48 hour dispatch.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={() => openQuote("General Inquiry", "")}
                  className="w-full sm:w-auto rounded-xl bg-[#1a130f] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[#b45309] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 text-amber-400" /> Request Instant Quote
                </button>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="w-full sm:w-auto rounded-xl border border-[#e7e5e4] bg-[#f4f1eb] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#1a130f] hover:border-[#1a130f] hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4 text-[#b45309]" /> Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={modalProduct.name}
        partNumber={modalProduct.part}
      />
    </div>
  );
}
