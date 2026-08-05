import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, company, allProducts } from "@/data/catalog";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concept Automation Technologies | PLC, HMI & VFD Supplier" },
      {
        name: "description",
        content:
          "Importer, exporter, trader and supplier of factory automation hardware — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad.",
      },
    ],
  }),
  component: Index,
});

// Naksh 1:1 Hero Carousel Slides
const heroSlides = [
  {
    title: "Rexroth A Bosch Company",
    subtitle: "Driving industrial excellence with advanced motion control, hydraulics, and drive solutions from Bosch Rexroth.",
    cta: "Explore Rexroth",
    bgClass: "from-blue-950 via-slate-900 to-ink",
  },
  {
    title: "Siemens SIMATIC Industrial Automation",
    subtitle: "High-performance S7-1200, S7-1500 PLCs, Comfort HMIs, and SINAMICS frequency drives in stock.",
    cta: "Explore Siemens",
    bgClass: "from-slate-950 via-teal-950 to-ink",
  },
  {
    title: "Mitsubishi Electric Automation Solutions",
    subtitle: "MELSEC FX5U controllers, GOT2000 touch screens, and FREQROL AC motor drives for maximum uptime.",
    cta: "Explore Mitsubishi",
    bgClass: "from-slate-950 via-red-950 to-ink",
  },
  {
    title: "Schneider & Allen Bradley Automation",
    subtitle: "Modicon controllers, PanelView HMIs, and CompactLogix 5380 safety automation platforms.",
    cta: "Explore Catalog",
    bgClass: "from-slate-950 via-indigo-950 to-ink",
  },
];

// Naksh 1:1 Network Stats (6 Counter Cards)
const networkStats = [
  { label: "Connected OEM", value: "842+" },
  { label: "Connected Traders", value: "6,452+" },
  { label: "Connected Panel Builders", value: "2,145+" },
  { label: "Connected End Users", value: "1,796+" },
  { label: "Connected Solution Providers", value: "710+" },
  { label: "Connected System Integrators", value: "539+" },
];

// Naksh 1:1 Serving Key Industries
const keyIndustries = [
  {
    id: "pharma",
    title: "Pharma Industry",
    desc: "Cleanroom automation, batch processing data logging, 21 CFR Part 11 compliance, and precision tablet pressing PLC panels.",
    image: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg",
  },
  {
    id: "textile",
    title: "Textile & Packaging Industries",
    desc: "High-speed multi-axis motion synchronization, tension control VFD inverters, and automatic wrapping SCADA interfaces.",
    image: "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg",
  },
  {
    id: "automotive",
    title: "Automotive Manufacturing",
    desc: "Robotic welding line racks, assembly line PLC controllers, safety light curtains, and industrial Ethernet fieldbus IO.",
    image: "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg",
  },
  {
    id: "plastic",
    title: "Plastic & Paper Industries",
    desc: "Extruder vector drives, precise melt temperature PID control modules, and heavy-duty shaft encoders.",
    image: "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg",
  },
  {
    id: "machine",
    title: "Machine & Plant Engineering",
    desc: "Turnkey electrical control panel manufacturing, customized PLC program suites, and HMI touch screen development.",
    image: "https://cpimg.tistatic.com/09377030/b/4/GS2110-WTBD-N-Mitsubishi-HMI-10-inch.jpg",
  },
];

// Naksh Testimonials Review Cards
const reviews = [
  {
    quote: "Concept Automation supplied us genuine Siemens S7-1200 CPUs and TP1200 HMIs within 24 hours during a critical plant breakdown. Exceptional service!",
    author: "Mr. R. K. Patel",
    company: "Pharma Machine OEM, Ahmedabad",
    stars: 5,
  },
  {
    quote: "We regularly source Mitsubishi FREQROL VFDs and GOT touch screens from Mr. Gaurang. Always original stock with complete warranty.",
    author: "Mr. Vikram Shah",
    company: "Packaging Systems India, Vadodara",
    stars: 5,
  },
  {
    quote: "Fast response on hard-to-find Allen Bradley CompactLogix parts. Their technical team verified the exact cross-reference for our line.",
    author: "Mr. Amit Verma",
    company: "Automotive Ancillary Pvt Ltd, Pune",
    stars: 5,
  },
];

function Index() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(keyIndustries[0]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ name: "", part: "" });
  const navigate = useNavigate();

  // Auto rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[slideIndex];

  const filteredProducts = allProducts.filter((p) => {
    return selectedBrand === "All" || p.brand.toLowerCase() === selectedBrand.toLowerCase();
  });

  const openQuote = (name: string = "", part: string = "") => {
    setModalProduct({ name, part });
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Naksh 1:1 Hero Carousel Section with Fixed Uniform Height */}
        <section className={`relative overflow-hidden border-b border-border bg-gradient-to-r ${slide.bgClass} text-white min-h-[520px] lg:min-h-[580px] flex items-center py-16 lg:py-20 transition-all duration-700`}>
          <div className="absolute inset-0 z-0 opacity-20">
            <img src={heroImage} alt="Industrial Automation" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    <Zap className="h-3.5 w-3.5" /> Concept Automation Technologies
                  </span>

                  <div className="min-h-[120px] sm:min-h-[140px] flex items-center mt-3">
                    <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl leading-none text-white">
                      {slide.title}
                    </h1>
                  </div>

                  <p className="mt-2 text-base text-white/80 leading-relaxed max-w-2xl min-h-[50px] flex items-center">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openQuote(slide.title, "")}
                    className="rounded-lg bg-accent px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-lg hover:bg-accent/90 transition-all"
                  >
                    {slide.cta}
                  </button>
                  <button
                    onClick={() => openQuote("General Inquiry", "")}
                    className="rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>

              {/* Naksh Slide Counter & Controls */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between min-h-[380px]">
                <div className="font-mono text-5xl font-extrabold tracking-tighter text-white/90">
                  0{slideIndex + 1} <span className="text-xl text-white/40">/ 0{heroSlides.length}</span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Floating Support Card inside Hero */}
                <div className="mt-8 w-full rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent">Direct Sales Desk</div>
                  <a href={`tel:${company.phoneRaw}`} className="mt-1 block font-mono text-base font-bold text-white hover:text-accent">
                    📞 {company.phone}
                  </a>
                  <div className="mt-1 text-[11px] text-white/70">Makarba, Ahmedabad · Fast Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Brands Logo Strip (Naksh 1:1) */}
        <section className="border-b border-border bg-card py-10">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block text-center mb-6">
              Featured Brands & Partners
            </span>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
              {brands.map((b) => (
                <div
                  key={b}
                  onClick={() => {
                    setSelectedBrand(b);
                    navigate({ to: "/products" });
                  }}
                  className="card-surface flex h-20 items-center justify-center rounded-xl border border-border bg-background p-4 text-center cursor-pointer transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <span className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section (1:1 Naksh Technology Shape & Layout) */}
        <section className="py-20 bg-surface/50 dark:bg-background overflow-hidden border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Premium Dark Engineering Console Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a2540] via-[#091e3a] to-[#003b73] p-6 sm:p-8 shadow-2xl border border-blue-500/20 text-white">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* Header Status Bar */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                        Operational Inventory · Makarba, Ahmedabad
                      </span>
                    </div>
                    <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
                      100% Genuine OEM
                    </span>
                  </div>

                  {/* 2 Showcase Product Cards */}
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    {/* Product Card 1 */}
                    <div className="group rounded-2xl bg-white p-4 shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded bg-blue-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                          Siemens VFD
                        </span>
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <div className="h-44 sm:h-48 w-full flex items-center justify-center p-2">
                        <img
                          src="https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg"
                          alt="SINAMICS S120 Servo"
                          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 text-center pt-2 border-t border-gray-100">
                        <div className="font-display text-xs font-bold text-gray-900 uppercase">SINAMICS S120 Servo</div>
                        <div className="text-[10px] text-gray-500 font-mono">6SL3120-1TE21</div>
                      </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="group rounded-2xl bg-white p-4 shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded bg-orange-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                          Siemens PLC
                        </span>
                        <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
                      </div>
                      <div className="h-44 sm:h-48 w-full flex items-center justify-center p-2">
                        <img
                          src="https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg"
                          alt="SIMATIC LOGO! 8 CPU"
                          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 text-center pt-2 border-t border-gray-100">
                        <div className="font-display text-xs font-bold text-gray-900 uppercase">SIMATIC LOGO! 8 CPU</div>
                        <div className="text-[10px] text-gray-500 font-mono">6ED1052-1FB08</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technical Metrics Bar */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-white/15 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="font-display text-base font-extrabold text-white">1,500+</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/70">Parts Ready</div>
                    </div>
                    <div>
                      <div className="font-display text-base font-extrabold text-orange-400">24-48 HR</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/70">Dispatch</div>
                    </div>
                    <div>
                      <div className="font-display text-base font-extrabold text-white">PAN-INDIA</div>
                      <div className="text-[9px] uppercase tracking-wider text-white/70">Global Export</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Naksh Exact Typography & Arrow Lists */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0066b2] dark:text-accent">
                  ABOUT US
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091e3a] dark:text-white leading-tight font-display uppercase">
                  {company.name}
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Concept Automation Technologies, located in Ahmedabad, India, is a top supplier of Siemens, Mitsubishi, Omron, Delta & Allen Bradley automation products. We offer a wide range of solutions, including PLCs, AC Drives, Servo Systems, HMIs, SCADA systems, and IPCs. Our products boost efficiency and productivity while providing tailored solutions for maximum performance and reliability.
                </p>

                {/* Feature Checklist with Arrow Icons (Naksh 1:1) */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground">
                    <ArrowRight className="h-4 w-4 text-[#0066b2] dark:text-accent shrink-0" />
                    <span>Genuine 100% Original OEM Stock</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground">
                    <ArrowRight className="h-4 w-4 text-[#0066b2] dark:text-accent shrink-0" />
                    <span>Technical Selection & Cross-Reference Assistance</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground">
                    <ArrowRight className="h-4 w-4 text-[#0066b2] dark:text-accent shrink-0" />
                    <span>Custom Automation Panel & Retrofit Solutions</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#004b8d] hover:bg-[#003b73] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naksh 6-Card Network Stats (Connected Counter Strip) */}
        <section className="border-y border-border bg-surface py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {networkStats.map((st) => (
                <div key={st.label} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                  <div className="text-xs font-bold uppercase text-muted-foreground">{st.label}</div>
                  <div className="mt-2 font-display text-3xl font-extrabold text-foreground">{st.value}</div>
                  <div className="mt-1 text-[10px] font-semibold text-accent uppercase tracking-wider">Trust Our Services</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serving Key Industries Section (Naksh 1:1 Tabbed Layout) */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">OUR SERVICES</span>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
                Serving Key Industries
              </h2>
            </div>

            {/* Industry Selector Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {keyIndustries.map((ind) => (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind)}
                  className={`cursor-pointer rounded-2xl border p-5 text-center transition-all ${
                    activeIndustry.id === ind.id
                      ? "border-primary bg-primary text-primary-foreground shadow-xl scale-105"
                      : "border-border bg-card text-card-foreground hover:border-accent/40"
                  }`}
                >
                  <div className="font-display text-sm font-bold uppercase">{ind.title}</div>
                </div>
              ))}
            </div>

            {/* Selected Industry Detail Card */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Industry Solution</span>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase text-foreground">
                    {activeIndustry.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {activeIndustry.desc}
                  </p>
                  <button
                    onClick={() => openQuote(activeIndustry.title, "")}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
                  >
                    Inquire Solution <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    className="h-48 w-full object-contain rounded-xl bg-white p-4 border border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews & Testimonials Carousel */}
        <section className="py-16 bg-surface border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">Testimonials</span>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((rev, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-500 mb-3">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">"{rev.quote}"</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="font-display text-sm font-bold uppercase text-foreground">{rev.author}</div>
                    <div className="text-[11px] text-accent font-semibold">{rev.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner (Naksh 1:1) */}
        <section className="border-t border-border bg-ink py-16 text-ink-foreground">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Looking for reliable Automation Solutions?</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
              Get Instant Part Pricing & Engineering Assistance
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openQuote("General Inquiry", "")}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-lg hover:bg-accent/90 transition-all"
              >
                Get In Touch
              </button>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
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
