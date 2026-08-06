import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Headphones,
  Search,
  CheckCircle2,
  Zap,
  MessageSquare,
  Award,
  Globe2,
  ChevronLeft,
  ChevronRight,
  Star,
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

const heroSlides = [
  {
    title: "Rexroth A Bosch Company",
    subtitle: "Advanced motion control, hydraulics, and drive solutions.",
    cta: "Explore Rexroth",
  },
  {
    title: "Siemens SIMATIC Automation",
    subtitle: "S7-1200, S7-1500 PLCs, Comfort HMIs, and SINAMICS drives in stock.",
    cta: "Explore Siemens",
  },
  {
    title: "Mitsubishi Electric Solutions",
    subtitle: "MELSEC FX5U controllers, GOT2000 panels, and FREQROL drives.",
    cta: "Explore Mitsubishi",
  },
  {
    title: "Schneider & Allen Bradley",
    subtitle: "Modicon controllers, PanelView HMIs, and CompactLogix platforms.",
    cta: "Explore Catalog",
  },
];

const keyIndustries = [
  { id: "pharma", title: "Pharma", desc: "Cleanroom automation, batch processing, 21 CFR Part 11 compliance.", image: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg" },
  { id: "textile", title: "Textile & Packaging", desc: "Multi-axis motion, tension control VFDs, wrapping SCADA.", image: "https://cpimg.tistatic.com/09377052/b/4/FR-CS84-295-60-MITSUBISHI-VFD.jpg" },
  { id: "automotive", title: "Automotive", desc: "Robotic welding, safety light curtains, industrial Ethernet IO.", image: "https://cpimg.tistatic.com/09377302/b/4/CompactLogix-5380.jpg" },
  { id: "plastic", title: "Plastic & Paper", desc: "Extruder drives, PID control modules, shaft encoders.", image: "https://cpimg.tistatic.com/09512948/b/4/PAPPERL-FUCHS-UC2000-30GM-IUR2-V15.jpg" },
  { id: "machine", title: "Machine & Plant", desc: "Turnkey control panels, PLC programming, HMI development.", image: "https://cpimg.tistatic.com/09377030/b/4/GS2110-WTBD-N-Mitsubishi-HMI-10-inch.jpg" },
];

const reviews = [
  { quote: "Supplied genuine Siemens S7-1200 CPUs and TP1200 HMIs within 24 hours during a critical plant breakdown. Exceptional!", author: "Mr. R. K. Patel", company: "Pharma Machine OEM, Ahmedabad", stars: 5 },
  { quote: "We regularly source Mitsubishi FREQROL VFDs and GOT touch screens. Always original stock with complete warranty.", author: "Mr. Vikram Shah", company: "Packaging Systems, Vadodara", stars: 5 },
  { quote: "Fast response on hard-to-find Allen Bradley CompactLogix parts. Technical team verified the exact cross-reference.", author: "Mr. Amit Verma", company: "Automotive Ancillary Pvt Ltd, Pune", stars: 5 },
];

const trustBadges = [
  { icon: ShieldCheck, label: "100% Genuine OEM", sub: "Certified products" },
  { icon: Truck, label: "24-48 Hr Dispatch", sub: "Pan-India delivery" },
  { icon: Award, label: "12 Month Warranty", sub: "Official coverage" },
  { icon: Headphones, label: "Expert Support", sub: "Technical assistance" },
];

function Index() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(keyIndustries[0]);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ name: "", part: "" });
  const navigate = useNavigate();

  // Auto rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[slideIndex];

  const featuredProducts = useMemo(() => allProducts.slice(0, 4), []);

  const openQuote = (name = "", part = "") => {
    setModalProduct({ name, part });
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ═══════════════════════════════════════ */}
        {/* HERO SECTION                            */}
        {/* ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-stone-950 text-white">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="" className="h-full w-full object-cover object-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left content */}
              <div className="lg:col-span-7 animate-slide-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-400">
                  <Zap className="h-3 w-3" /> Trusted Since 2015
                </span>

                <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-4 text-base text-stone-300 leading-relaxed max-w-lg sm:text-lg">
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openQuote(slide.title, "")}
                    className="rounded-xl bg-amber-600 px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition-all"
                  >
                    {slide.cta}
                  </button>
                  <button
                    onClick={() => openQuote("General Inquiry", "")}
                    className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    Get Free Quote
                  </button>
                </div>

                {/* Slide controls */}
                <div className="mt-8 flex items-center gap-3">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === slideIndex ? "w-8 bg-amber-500" : "w-4 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Sales desk card */}
              <div className="lg:col-span-5 animate-slide-right stagger-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">Direct Sales Desk</div>
                  <a href={`tel:${company.phoneRaw}`} className="mt-2 block text-xl font-bold text-white hover:text-amber-400 transition-colors font-display">
                    📞 {company.phone}
                  </a>
                  <p className="mt-1 text-sm text-stone-400">Makarba, Ahmedabad · Fast Dispatch</p>

                  <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                    <div>
                      <div className="text-lg font-bold text-white font-display">1,500+</div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-400">Parts Ready</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-amber-400 font-display">24-48 Hr</div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-400">Dispatch</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-display">Pan-India</div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-400">+ Export</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* TRUST BADGES                            */}
        {/* ═══════════════════════════════════════ */}
        <section className="border-b border-stone-200 bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustBadges.map((badge, i) => (
                <div key={badge.label} className={`flex items-center gap-3 animate-fade-up stagger-${i + 1}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">{badge.label}</div>
                    <div className="text-[11px] text-stone-500">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* FEATURED BRANDS                         */}
        {/* ═══════════════════════════════════════ */}
        <section className="border-b border-stone-200 bg-stone-50 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-6">
              Featured Brands & Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {brands.map((b) => (
                <Link
                  key={b}
                  to="/products"
                  search={{ q: b }}
                  className="rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-bold text-stone-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 transition-all"
                >
                  {b}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* ABOUT US                                */}
        {/* ═══════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left: Showcase */}
              <div className="animate-fade-up">
                <div className="relative overflow-hidden rounded-2xl bg-stone-950 p-6 sm:p-8 shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-semibold text-white/80">Live Inventory · Makarba, Ahmedabad</span>
                    </div>
                    <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      100% Genuine
                    </span>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { label: "Siemens VFD", part: "6SL3120-1TE21", name: "SINAMICS S120", img: "https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg" },
                      { label: "Siemens PLC", part: "6ED1052-1FB08", name: "LOGO! 8 CPU", img: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg" },
                    ].map((p) => (
                      <div key={p.part} className="group rounded-xl bg-white p-3 sm:p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <span className="inline-block rounded bg-stone-900 px-2 py-0.5 text-[9px] font-semibold uppercase text-white mb-2">{p.label}</span>
                        <div className="h-32 sm:h-40 flex items-center justify-center p-2">
                          <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="mt-2 text-center border-t border-stone-100 pt-2">
                          <div className="text-xs font-bold text-stone-900">{p.name}</div>
                          <div className="text-[10px] text-stone-400 font-mono">{p.part}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Text */}
              <div className="animate-fade-up stagger-2 space-y-4">
                <span className="eyebrow">About Us</span>
                <h2 className="font-display text-2xl font-extrabold text-stone-900 leading-tight sm:text-3xl lg:text-4xl">
                  {company.name}
                </h2>
                <p className="text-sm text-stone-500 leading-relaxed sm:text-base">
                  Located in Ahmedabad, India, we are a top supplier of Siemens, Mitsubishi, Omron, Delta & Allen Bradley automation products. We offer PLCs, AC Drives, Servo Systems, HMIs, SCADA systems, and IPCs — tailored for maximum performance and reliability.
                </p>

                <div className="space-y-2.5 pt-2">
                  {["Genuine 100% Original OEM Stock", "Technical Selection & Cross-Reference", "Custom Automation Panel & Retrofit"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-stone-950 px-7 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors mt-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* FEATURED PRODUCTS                       */}
        {/* ═══════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-10 animate-fade-up">
              <span className="eyebrow">Inventory Catalog</span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-stone-900 sm:text-3xl">
                Featured Industrial Hardware
              </h2>
              <p className="mt-2 text-sm text-stone-500 max-w-lg mx-auto">
                In-stock Siemens, Mitsubishi, Omron, Delta & Pepperl+Fuchs controllers, HMIs, VFDs & sensors.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up stagger-2">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-stone-950 px-8 py-3.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                View Complete {allProducts.length}+ Product Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* INDUSTRIES                              */}
        {/* ═══════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10 animate-fade-up">
              <span className="eyebrow">Our Services</span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-stone-900 sm:text-3xl">
                Serving Key Industries
              </h2>
            </div>

            {/* Industry tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 mb-8 animate-fade-up stagger-1 scrollbar-none">
              {keyIndustries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind)}
                  className={`shrink-0 rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeIndustry.id === ind.id
                      ? "bg-stone-950 text-white shadow-lg"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {ind.title}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm animate-scale-in">
              <div className="grid gap-6 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-600">Industry Solution</span>
                  <h3 className="mt-1 font-display text-xl font-bold text-stone-900 sm:text-2xl">{activeIndustry.title}</h3>
                  <p className="mt-3 text-sm text-stone-500 leading-relaxed">{activeIndustry.desc}</p>
                  <button
                    onClick={() => openQuote(activeIndustry.title, "")}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-stone-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-amber-600 transition-colors"
                  >
                    Inquire <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    referrerPolicy="no-referrer"
                    className="h-40 sm:h-48 w-full max-w-xs object-contain rounded-xl bg-stone-50 p-4 border border-stone-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* TESTIMONIALS                            */}
        {/* ═══════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10 animate-fade-up">
              <span className="eyebrow">Testimonials</span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-stone-900 sm:text-3xl">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up stagger-2">
              {reviews.map((rev, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div>
                    <div className="flex text-amber-500 mb-3">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed italic">"{rev.quote}"</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <div className="text-sm font-bold text-stone-900">{rev.author}</div>
                    <div className="text-xs text-amber-600 font-medium">{rev.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* CTA BANNER                              */}
        {/* ═══════════════════════════════════════ */}
        <section className="bg-stone-950 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">
              Looking for reliable Automation Solutions?
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-4xl">
              Get Instant Part Pricing & Engineering Assistance
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => openQuote("General Inquiry", "")}
                className="rounded-xl bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition-all"
              >
                Get In Touch
              </button>
              <a
                href={`tel:${company.phoneRaw}`}
                className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
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
