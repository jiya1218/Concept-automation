import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Headphones,
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
} from "lucide-react";
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

const heroSlides = [
  { title: "Rexroth A Bosch Company", subtitle: "Advanced motion control, hydraulics, and drive solutions from Bosch Rexroth.", cta: "Explore Rexroth" },
  { title: "Siemens SIMATIC Automation", subtitle: "S7-1200, S7-1500 PLCs, Comfort HMIs, and SINAMICS drives in stock.", cta: "Explore Siemens" },
  { title: "Mitsubishi Electric Solutions", subtitle: "MELSEC FX5U controllers, GOT2000 panels, and FREQROL drives.", cta: "Explore Mitsubishi" },
  { title: "Schneider & Allen Bradley", subtitle: "Modicon controllers, PanelView HMIs, and CompactLogix platforms.", cta: "Explore Catalog" },
];

const solutions = [
  { icon: Cpu, title: "PLC Controllers", desc: "Siemens S7-1200/1500, Mitsubishi FX5U, AB CompactLogix, Omron CP/CJ series", color: "bg-blue-50 text-[#0f2a4a]" },
  { icon: Settings, title: "VFD Drives", desc: "SINAMICS, FREQROL, PowerFlex, Delta MS/VFD-E, Schneider ATV series", color: "bg-amber-50 text-[#d97706]" },
  { icon: Package, title: "HMI Panels", desc: "SIMATIC Comfort, GOT2000, PanelView Plus, Proface GP-4000 series", color: "bg-emerald-50 text-emerald-700" },
  { icon: Globe, title: "Sensors & I/O", desc: "Pepperl+Fuchs proximity, photoelectric sensors, signal conditioners", color: "bg-slate-100 text-slate-800" },
];

const reviews = [
  { quote: "Supplied genuine Siemens S7-1200 CPUs and TP1200 HMIs within 24 hours during a critical plant breakdown. Exceptional service!", author: "Mr. R. K. Patel", role: "Pharma Machine OEM, Ahmedabad" },
  { quote: "We regularly source Mitsubishi FREQROL VFDs and GOT touch screens. Always original stock with complete warranty.", author: "Mr. Vikram Shah", role: "Packaging Systems, Vadodara" },
  { quote: "Fast response on hard-to-find Allen Bradley CompactLogix parts. Technical team verified the exact cross-reference.", author: "Mr. Amit Verma", role: "Automotive Ancillary Pvt Ltd, Pune" },
];

function Index() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ name: "", part: "" });
  const [reviewIndex, setReviewIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[slideIndex];
  const featuredProducts = useMemo(() => allProducts.slice(0, 4), []);

  const openQuote = (name = "", part = "") => {
    setModalProduct({ name, part });
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* ═══════════════════════════════════════════════════════ */}
        {/* HERO SECTION — MB Finishing Tech Palette              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white min-h-[85vh] flex items-center border-b border-slate-200">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="" className="h-full w-full object-cover opacity-[0.05] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50/70 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-[#d97706] uppercase shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#d97706] animate-pulse" />
                Trusted Industrial Automation Partner
              </span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold leading-[1.05] tracking-tight text-[#0f2a4a] max-w-4xl animate-slide-left">
              {slide.title}
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-up stagger-1 sm:text-xl font-normal">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up stagger-2">
              <button
                onClick={() => openQuote(slide.title, "")}
                className="group rounded-xl bg-[#0f2a4a] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#0a1e36] transition-all flex items-center gap-2"
              >
                {slide.cta} <ArrowRight className="h-4 w-4 text-[#d97706] transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => openQuote("General Inquiry", "")}
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0f2a4a] hover:border-[#0f2a4a] hover:bg-slate-50 transition-all shadow-sm"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f2a4a] hover:text-[#d97706] transition-colors ml-2"
              >
                <Phone className="h-4 w-4 text-[#d97706]" /> {company.phone}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === slideIndex ? "w-10 bg-[#d97706]" : "w-3 bg-slate-300 hover:bg-slate-400"}`} />
              ))}
            </div>

            {/* Brand Cloud */}
            <div className="mt-12 border-t border-slate-200 pt-6 animate-fade-up stagger-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-4">Official Partners & Brands We Stock</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {brands.map((b) => (
                  <Link key={b} to="/products" search={{ q: b }}
                    className="text-xs font-bold uppercase tracking-wider text-[#0f2a4a] hover:text-[#d97706] transition-colors cursor-pointer">
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SOLUTIONS BENTO GRID — Steel Navy & Amber Accent       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl animate-fade-up">
              <span className="eyebrow">WHAT WE SUPPLY</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#0f2a4a] leading-tight sm:text-4xl">
                Complete Automation Hardware Ecosystem
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed sm:text-base">
                From PLC controllers to VFD drives, HMI panels to proximity sensors — sourced directly from global OEMs.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 animate-fade-up stagger-2">
              {/* Giant Steel Navy Highlight Card */}
              <div className="lg:row-span-2 rounded-2xl bg-[#0a1e36] p-8 text-white flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <ShieldCheck className="h-6 w-6 text-[#d97706]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase leading-snug">
                    1,500+ Genuine Parts<br />Ready for Dispatch
                  </h3>
                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    100% original OEM inventory with factory seal, official warranty, and fast breakdown dispatch service.
                  </p>
                </div>
                <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-white font-display">24-48<span className="text-[#d97706]">HR</span></div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Fast Dispatch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-display">PAN-INDIA</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">+ Global Export</div>
                  </div>
                </div>
              </div>

              {/* Solution Cards */}
              {solutions.map((sol) => (
                <div key={sol.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-[#d97706] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onClick={() => navigate({ to: "/products" })}>
                  <div className={`h-10 w-10 rounded-lg ${sol.color} flex items-center justify-center mb-4`}>
                    <sol.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#0f2a4a] uppercase">{sol.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#d97706] group-hover:gap-2 transition-all">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ABOUT US SECTION                                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3 animate-fade-up">
                <span className="eyebrow">ABOUT US</span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-[#0f2a4a] leading-tight sm:text-4xl">
                  Concept Automation Technologies
                </h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Located in Ahmedabad, India, we are a leading supplier of Siemens, Mitsubishi, Omron, Delta & Allen Bradley automation products. We offer PLCs, AC Drives, Servo Systems, HMIs, and SCADA systems tailored for maximum performance.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Genuine 100% Original OEM", desc: "Factory direct quality guarantee" },
                    { title: "Technical Cross-Reference", desc: "Fast part number identification" },
                    { title: "Custom Panel Solutions", desc: "Retrofit & panel development" },
                    { title: "PAN-India Logistics", desc: "Express delivery to manufacturing sites" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#d97706] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#0f2a4a] uppercase">{item.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/about" className="rounded-xl bg-[#0f2a4a] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0a1e36] transition-colors flex items-center gap-2 shadow-sm">
                    Read Company Profile <ArrowRight className="h-4 w-4 text-[#d97706]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 animate-slide-right stagger-2">
                <div className="rounded-2xl bg-[#0a1e36] p-6 shadow-xl text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d97706]">Operational Facility</span>
                    <span className="text-[10px] font-bold uppercase text-emerald-400">Makarba, Ahmedabad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Siemens VFD", part: "6SL3120-1TE21", name: "SINAMICS S120", img: "https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg" },
                      { label: "Siemens PLC", part: "6ED1052-1FB08", name: "LOGO! 8 CPU", img: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg" },
                    ].map((p) => (
                      <div key={p.part} className="rounded-xl bg-white p-3 text-center">
                        <div className="h-28 flex items-center justify-center p-2">
                          <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="h-full w-full object-contain" />
                        </div>
                        <div className="text-xs font-bold text-[#0f2a4a] uppercase mt-1">{p.name}</div>
                        <div className="text-[9px] text-slate-400 font-mono">{p.part}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FEATURED PRODUCTS                                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 animate-fade-up">
              <div>
                <span className="eyebrow">INVENTORY CATALOG</span>
                <h2 className="mt-1 font-display text-3xl font-extrabold text-[#0f2a4a]">
                  Featured Products & Parts
                </h2>
              </div>
              <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f2a4a] hover:text-[#d97706] transition-colors">
                View All {allProducts.length}+ Products <ArrowRight className="h-3.5 w-3.5 text-[#d97706]" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up stagger-2">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TESTIMONIAL CAROUSEL                                   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-2 animate-fade-up">
                <span className="eyebrow">TESTIMONIALS</span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-[#0f2a4a] leading-tight">
                  Client Feedback & Reviews
                </h2>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Trusted by pharma, packaging, and automotive engineers across India.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0f2a4a] hover:bg-slate-100 transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                    className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0f2a4a] hover:bg-slate-100 transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-400 ml-2">{reviewIndex + 1} / {reviews.length}</span>
                </div>
              </div>

              <div className="lg:col-span-3 animate-scale-in" key={reviewIndex}>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 relative">
                  <div className="flex text-[#d97706] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                    "{reviews[reviewIndex].quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="font-display text-sm font-bold uppercase text-[#0f2a4a]">{reviews[reviewIndex].author}</div>
                    <div className="text-xs text-[#d97706] font-semibold">{reviews[reviewIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* CALL TO ACTION BANNER — Steel Navy & Gold              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-[#0a1e36] py-20 text-white border-t border-slate-800">
          <div className="mx-auto max-w-4xl px-4 text-center animate-fade-up">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97706]">
              Factory Breakdown or Project Inquiry?
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Get Instant Part Quotation & Engineering Support
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openQuote("General Inquiry", "")}
                className="rounded-xl bg-[#d97706] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b45309] transition-all">
                Request Instant Quote
              </button>
              <a href={`tel:${company.phoneRaw}`}
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all">
                Call {company.phone}
              </a>
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
