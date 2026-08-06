import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Warehouse,
  Headphones,
  Cpu,
  MonitorSmartphone,
  Gauge,
  Radar,
  Search,
  CheckCircle2,
  Zap,
  MessageSquare,
  Award,
  Globe2,
  Building,
  ChevronLeft,
  ChevronRight,
  Star,
  User,
  Quote,
  Sparkles,
  Layers,
  Flame,
} from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, company, allProducts } from "@/data/catalog";
import { InquiryModal } from "@/components/InquiryModal";
import { submitInquiry } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concept Automation Technologies | Siemens, Mitsubishi, Omron, P+F & AB Stock" },
      {
        name: "description",
        content:
          "Importer, exporter, trader and supplier of factory automation hardware — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad.",
      },
    ],
  }),
  component: Index,
});

const heroSlides = [
  {
    tag: "Bosch Rexroth Partner",
    title: "Bosch Rexroth Industrial Drives & Motion Control",
    subtitle: "Advanced hydraulic servo valves, IndraDrive VFD inverters, and high-torque compact motors in stock for express dispatch.",
    cta: "Explore Rexroth Range",
    brandQuery: "Bosch",
  },
  {
    tag: "Siemens SIMATIC Core",
    title: "Siemens SIMATIC S7-1500 & Comfort Panels",
    subtitle: "Original 100% genuine S7-1200, S7-1500 CPUs, ET200SP I/O racks, and SINAMICS V20/G120 VFD drives in Ahmedabad stock.",
    cta: "Explore Siemens Catalog",
    brandQuery: "Siemens",
  },
  {
    tag: "Mitsubishi Electric",
    title: "Mitsubishi MELSEC FX5U & GOT2000 HMI",
    subtitle: "High-speed compact controllers, GOT2000 multi-touch screens, and FREQROL D700/E700 AC motor drives for maximum uptime.",
    cta: "Explore Mitsubishi Catalog",
    brandQuery: "Mitsubishi",
  },
  {
    tag: "Allen Bradley & Omron",
    title: "Allen Bradley ControlLogix & Omron CJ1W PLC",
    subtitle: "CompactLogix 5380 safety automation platforms, Omron CP1L controllers, and Pepperl+Fuchs ultrasonic sensors.",
    cta: "Explore All OEM Brands",
    brandQuery: "Omron",
  },
];

const networkStats = [
  { label: "Connected OEM Suppliers", value: "842+" },
  { label: "Connected Industrial Traders", value: "6,452+" },
  { label: "Panel Builders & OEMs", value: "2,145+" },
  { label: "Manufacturing End Users", value: "1,796+" },
  { label: "Automation Solution Providers", value: "710+" },
  { label: "Certified System Integrators", value: "539+" },
];

const keyIndustries = [
  {
    id: "pharma",
    title: "Pharma & Life Sciences",
    desc: "Cleanroom automation, batch processing data logging, 21 CFR Part 11 compliance, and precision tablet pressing PLC panels.",
    badge: "21 CFR Compliant",
  },
  {
    id: "textile",
    title: "Textile & Packaging",
    desc: "High-speed multi-axis motion synchronization, tension control VFD inverters, and automatic wrapping SCADA interfaces.",
    badge: "High Speed Motion",
  },
  {
    id: "automotive",
    title: "Automotive Manufacturing",
    desc: "Robotic welding line racks, assembly line PLC controllers, safety light curtains, and industrial Ethernet fieldbus IO.",
    badge: "Robotic Racks",
  },
  {
    id: "plastic",
    title: "Plastics & Extrusion",
    desc: "Extruder vector drives, precise melt temperature PID control modules, and heavy-duty optical shaft encoders.",
    badge: "PID Control",
  },
  {
    id: "machine",
    title: "Machine & Plant Building",
    desc: "Turnkey electrical control panel manufacturing, customized PLC program suites, and HMI touch screen development.",
    badge: "Turnkey Panels",
  },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    company: "Sun Pharma Systems Ltd",
    role: "Automation Lead",
    comment: "Concept Automation Technologies delivered 12 units of Siemens SIMATIC S7-1500 CPUs within 24 hours to our plant in Sanand. 100% original OEM stock with official warranty.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    company: "Apex Textile Machinery",
    role: "Chief Engineer",
    comment: "Outstanding inventory of Mitsubishi FREQROL VFDs and GOT2000 HMIs. Their technical guidance on parameter setup saved us 3 days of downtime.",
    rating: 5,
  },
  {
    name: "Anand Sharma",
    company: "Gujarat Plastics Pvt Ltd",
    role: "Plant Manager",
    comment: "Best supplier in Makarba, Ahmedabad for Pepperl+Fuchs ultrasonic sensors and Omron CJ1W PLCs. Best prices and immediate GST invoices.",
    rating: 5,
  },
];

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState("");

  // Hero Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Quick Quote Form State
  const [quickForm, setQuickForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    part: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone || !quickForm.email) {
      toast.error("Please provide your Name, Email, and Phone number.");
      return;
    }

    setFormLoading(true);
    const res = await submitInquiry({
      name: quickForm.name,
      email: quickForm.email,
      phone: quickForm.phone,
      company: quickForm.company,
      product_name: quickForm.part ? `Quote for Part: ${quickForm.part}` : "General Homepage Inquiry",
      part_number: quickForm.part,
      message: quickForm.message,
    });
    setFormLoading(false);

    if (res.success) {
      setFormSubmitted(true);
      toast.success("Quote Request Sent!", {
        description: "Our engineering desk in Makarba, Ahmedabad will contact you with official pricing.",
      });
    }
  };

  // Filtered Showcase Products (1 Clean Row of 4 Products)
  const featuredProducts = useMemo(() => {
    if (activeTab === "All") return allProducts.slice(0, 4);
    return allProducts.filter((p) => p.type.toLowerCase() === activeTab.toLowerCase()).slice(0, 4);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* MB FINISHING TECH INSPIRED DEEP INDUSTRIAL HERO SECTION                   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0B132B] text-white py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 border border-sky-400/30 px-4 py-1.5 text-xs font-extrabold text-sky-300">
                  <Sparkles className="h-3.5 w-3.5 animate-spin text-sky-400" />
                  <span>{heroSlides[currentSlide].tag}</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                  {heroSlides[currentSlide].title.split(" ")[0]}{" "}
                  <span className="text-sky-400">
                    {heroSlides[currentSlide].title.split(" ").slice(1, 3).join(" ")}
                  </span>{" "}
                  {heroSlides[currentSlide].title.split(" ").slice(3).join(" ")}
                </h1>

                <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* Hero Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <Link
                    to="/products"
                    search={{ q: heroSlides[currentSlide].brandQuery }}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                  >
                    {heroSlides[currentSlide].cta} <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white border border-slate-700 transition-all shadow-md"
                  >
                    <MessageSquare className="h-4 w-4 text-sky-400" /> Request Instant Quote
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex items-center gap-3 pt-6">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentSlide === idx ? "w-10 bg-sky-400 shadow-md shadow-sky-400/50" : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    0{currentSlide + 1} / 0{heroSlides.length}
                  </span>
                </div>
              </div>

              {/* Hero Right Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl p-4 sm:p-6 border border-slate-700/80 bg-slate-900/90 shadow-2xl">
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-950 border border-slate-800">
                    <img
                      src={heroImage}
                      alt="Industrial Automation Hardware"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      width={600}
                      height={450}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-950/95 p-4 border border-sky-500/30 backdrop-blur-xl shadow-lg">
                      <div className="flex items-center justify-between text-xs font-bold text-sky-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                          Ready Stock in Ahmedabad
                        </span>
                        <span className="text-slate-400 font-mono">199+ Part Numbers</span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-300">
                        Siemens, Mitsubishi, Omron, Allen Bradley, Pepperl+Fuchs & Delta.
                      </p>
                    </div>
                  </div>

                  {/* Feature Badges Row */}
                  <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-xl bg-slate-950 p-3 text-center border border-slate-800">
                      <ShieldCheck className="mx-auto h-5 w-5 text-sky-400 mb-1" />
                      <span className="block text-[10px] sm:text-[11px] font-bold text-slate-200">100% OEM</span>
                      <span className="block text-[9px] text-slate-400">Genuine Guarantee</span>
                    </div>
                    <div className="rounded-xl bg-slate-950 p-3 text-center border border-slate-800">
                      <Truck className="mx-auto h-5 w-5 text-sky-400 mb-1" />
                      <span className="block text-[10px] sm:text-[11px] font-bold text-slate-200">Pan-India</span>
                      <span className="block text-[9px] text-slate-400">Express Delivery</span>
                    </div>
                    <div className="rounded-xl bg-slate-950 p-3 text-center border border-slate-800">
                      <Award className="mx-auto h-5 w-5 text-amber-400 mb-1" />
                      <span className="block text-[10px] sm:text-[11px] font-bold text-slate-200">12 Months</span>
                      <span className="block text-[9px] text-slate-400">Official Warranty</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* OEM Brands Bar - Prominent & Enlarged */}
          <div className="mt-16 border-t border-slate-800 bg-[#0B132B] py-8 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <span className="block text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-sky-400 mb-6">
                Core Stocked Industrial Brands
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {brands.map((b) => (
                  <Link
                    key={b}
                    to="/products"
                    search={{ q: b }}
                    className="flex items-center gap-2.5 rounded-xl px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-100 hover:text-sky-400 hover:scale-105 transition-all bg-slate-900 border border-slate-800 shadow-md hover:border-sky-500"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-pulse" />
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* TABBED HARDWARE SHOWCASE & FEATURED CATALOG GRID (1 CLEAN ROW)             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="eyebrow">Inventory Catalog</span>
                <h2 className="mt-2 section-title text-2xl sm:text-4xl text-slate-900">
                  Featured Industrial Hardware
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                  In-stock Siemens, Mitsubishi, Omron, Delta & Pepperl+Fuchs controllers, HMIs, VFDs & industrial sensors.
                </p>
              </div>

              {/* Hardware Type Tabs Filter */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 rounded-xl bg-white p-1.5 border border-slate-200 shadow-sm">
                {["All", "PLC", "HMI", "VFD", "Sensors"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? "bg-sky-700 text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid (1 Clean Row of 4 Cards) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-800 px-8 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02]"
              >
                View Full 199+ Product Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* NETWORK & TRUST COUNTERS                                                   */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="eyebrow">Pan-India Network</span>
              <h2 className="mt-2 section-title text-2xl sm:text-4xl text-slate-900">
                Trusted Automation Supply Ecosystem
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Directly supplying factory automation products from Makarba, Ahmedabad to 10,000+ panel builders, OEMs & manufacturing plants.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {networkStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="industrial-card group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-slate-50/60 hover:border-sky-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-sky-700 tracking-tight">
                      {stat.value}
                    </span>
                    <Building className="h-6 w-6 text-slate-400 group-hover:text-sky-700 transition-colors" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900">{stat.label}</h3>
                  <p className="mt-1 text-xs text-slate-500">Verified buyers & official trading channels across India.</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* INDUSTRIES SERVED INTERACTIVE SECTION                                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Industry Solutions</span>
              <h2 className="mt-2 section-title text-2xl sm:text-4xl text-slate-900">
                Serving Key Manufacturing Sectors
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              {/* Tabs Column */}
              <div className="lg:col-span-5 space-y-2.5">
                {keyIndustries.map((ind, idx) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(idx)}
                    className={`w-full text-left rounded-xl p-4 sm:p-5 transition-all border ${
                      selectedIndustry === idx
                        ? "bg-white border-sky-500 shadow-md text-slate-900"
                        : "bg-white/60 border-slate-200 text-slate-600 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm sm:text-base font-bold uppercase">{ind.title}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded border border-sky-200">
                        {ind.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail Card Column */}
              <div className="lg:col-span-7">
                <div className="industrial-card rounded-3xl p-6 sm:p-8 bg-white relative overflow-hidden shadow-lg">
                  <span className="eyebrow text-xs">Sector Overview</span>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold uppercase text-slate-900">
                    {keyIndustries[selectedIndustry].title}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {keyIndustries[selectedIndustry].desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-sky-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Ready Stock & Engineering Support
                    </span>

                    <button
                      onClick={() => setInquiryModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-800 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                    >
                      Inquire Sector Products <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* CUSTOMER REVIEWS & TESTIMONIALS                                            */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Client Feedback</span>
              <h2 className="mt-2 section-title text-2xl sm:text-4xl text-slate-900">
                What Industry Leaders Say
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, idx) => (
                <div key={idx} className="industrial-card rounded-2xl p-6 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic mb-6">"{t.comment}"</p>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{t.name}</span>
                      <span className="block text-[10px] text-sky-700 font-semibold">{t.role} — {t.company}</span>
                    </div>
                    <User className="h-7 w-7 rounded-full bg-slate-200 p-1.5 text-slate-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* DIRECT QUOTE FORM SECTION                                                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="industrial-card rounded-3xl p-6 sm:p-10 bg-white shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="eyebrow">Direct Sales Desk</span>
                <h2 className="mt-2 section-title text-2xl sm:text-3xl text-slate-900">
                  Request Official Price & Delivery Quote
                </h2>
                <p className="mt-2 text-xs text-slate-600">
                  Get instant availability and pricing directly from Concept Automation Technologies in Makarba, Ahmedabad.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">Quote Request Received!</h3>
                  <p className="mt-2 text-xs text-slate-600">
                    Our sales desk will email/call you with official pricing and dispatch details shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 rounded-xl bg-emerald-600 text-white px-6 py-2.5 font-display text-xs font-bold uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mr. Rajesh Patel"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98980 12345"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@company.com"
                        value={quickForm.email}
                        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Part Number / Required Model</label>
                      <input
                        type="text"
                        placeholder="e.g. 6ES7214-1AG40-0XB0, FR-CS84..."
                        value={quickForm.part}
                        onChange={(e) => setQuickForm({ ...quickForm, part: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify required quantity, location, or urgency..."
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full rounded-xl bg-sky-700 hover:bg-sky-800 py-4 font-display text-sm font-extrabold uppercase tracking-wider text-white shadow-md hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                  >
                    {formLoading ? "Sending Quote Request..." : "Submit Quote Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={inquiryProduct}
      />
    </div>
  );
}
