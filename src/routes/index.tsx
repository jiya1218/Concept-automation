import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo, useRef } from "react";
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
  Play,
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
  { icon: Cpu, title: "PLC Controllers", desc: "Siemens S7-1200/1500, Mitsubishi FX5U, AB CompactLogix, Omron CP/CJ series", color: "bg-blue-50 text-blue-600" },
  { icon: Settings, title: "VFD Drives", desc: "SINAMICS, FREQROL, PowerFlex, Delta MS/VFD-E, Schneider ATV series", color: "bg-amber-50 text-amber-600" },
  { icon: Package, title: "HMI Panels", desc: "SIMATIC Comfort, GOT2000, PanelView Plus, Proface GP-4000 series", color: "bg-emerald-50 text-emerald-600" },
  { icon: Globe, title: "Sensors & I/O", desc: "Pepperl+Fuchs proximity, photoelectric sensors, signal conditioners", color: "bg-violet-50 text-violet-600" },
];

const reviews = [
  { quote: "Supplied genuine Siemens S7-1200 CPUs and TP1200 HMIs within 24 hours during a critical plant breakdown.", author: "Mr. R. K. Patel", role: "Pharma Machine OEM, Ahmedabad" },
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
        {/* SECTION 1: HERO — Stripe-inspired massive typography   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-stone-950 min-h-[90vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="h-full w-full object-cover opacity-[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900/95 to-stone-950" />
          </div>

          {/* Decorative grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            {/* Top badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-amber-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Trusted Industrial Automation Partner
              </span>
            </div>

            {/* Giant headline */}
            <h1 className="mt-8 font-display text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl animate-slide-left">
              {slide.title}
            </h1>

            <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-xl animate-fade-up stagger-1 sm:text-xl">
              {slide.subtitle}
            </p>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up stagger-2">
              <button
                onClick={() => openQuote(slide.title, "")}
                className="group rounded-2xl bg-amber-500 px-8 py-4 text-sm font-bold text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all flex items-center gap-2"
              >
                {slide.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => openQuote("General Inquiry", "")}
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 transition-colors ml-2"
              >
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </div>

            {/* Slide dots */}
            <div className="mt-12 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setSlideIndex(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === slideIndex ? "w-10 bg-amber-500" : "w-3 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>

            {/* Brand logos cloud — Stripe style */}
            <div className="mt-14 border-t border-white/10 pt-8 animate-fade-up stagger-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500 mb-5">Official Partners & Brands We Stock</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {brands.map((b) => (
                  <Link key={b} to="/products" search={{ q: b }}
                    className="text-sm font-bold text-stone-500 hover:text-amber-400 transition-colors cursor-pointer">
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 2: BENTO GRID — Solutions/Categories            */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl animate-fade-up">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">What We Supply</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-stone-900 leading-tight sm:text-4xl lg:text-5xl">
                Complete automation<br className="hidden sm:block" /> hardware ecosystem
              </h2>
              <p className="mt-4 text-base text-stone-500 leading-relaxed sm:text-lg">
                From PLC controllers to VFD drives, HMI panels to proximity sensors — everything your factory needs, sourced directly from global OEMs.
              </p>
            </div>

            {/* Bento Grid — asymmetric layout */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 animate-fade-up stagger-2">
              {/* Large card */}
              <div className="lg:row-span-2 rounded-3xl bg-stone-900 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                    <ShieldCheck className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                    1,500+ genuine parts<br />ready to dispatch
                  </h3>
                  <p className="mt-4 text-stone-400 leading-relaxed">
                    Every item in our inventory is 100% original OEM with factory seal, official warranty, and complete documentation. No knock-offs, no compromises.
                  </p>
                </div>
                <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-white font-display">24-48<span className="text-amber-400">hr</span></div>
                    <div className="text-xs text-stone-400 mt-0.5">Average Dispatch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-display">Pan-India</div>
                    <div className="text-xs text-stone-400 mt-0.5">+ Global Export</div>
                  </div>
                </div>
              </div>

              {/* Solution cards */}
              {solutions.map((sol) => (
                <div key={sol.title} className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onClick={() => navigate({ to: "/products" })}>
                  <div className={`h-11 w-11 rounded-xl ${sol.color} flex items-center justify-center mb-5`}>
                    <sol.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-stone-900">{sol.title}</h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">{sol.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-amber-600 group-hover:gap-2 transition-all">
                    Browse catalog <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 3: ABOUT — Split layout with floating card      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
              {/* Left: Text content (3 cols) */}
              <div className="lg:col-span-3 animate-fade-up">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">About Us</span>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-stone-900 leading-tight sm:text-4xl lg:text-5xl">
                  Industrial automation,<br className="hidden sm:block" />simplified.
                </h2>
                <p className="mt-6 text-base text-stone-500 leading-relaxed sm:text-lg max-w-xl">
                  {company.name} is Ahmedabad's premier supplier of Siemens, Mitsubishi, Omron, Delta & Allen Bradley automation products. We deliver PLCs, AC Drives, Servo Systems, HMIs, and SCADA solutions — engineered for maximum reliability.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Genuine OEM Stock", desc: "100% original with factory seal" },
                    { title: "Technical Assistance", desc: "Cross-reference & parameter support" },
                    { title: "Custom Panels", desc: "Retrofit & automation panel builds" },
                    { title: "Fast Turnaround", desc: "24-48 hour dispatch nationwide" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-stone-900">{item.title}</div>
                        <div className="text-xs text-stone-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/about" className="group rounded-2xl bg-stone-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors flex items-center gap-2">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="rounded-2xl border border-stone-200 px-7 py-3.5 text-sm font-semibold text-stone-700 hover:border-stone-400 transition-colors">
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Right: Floating product showcase (2 cols) */}
              <div className="lg:col-span-2 animate-slide-right stagger-2">
                <div className="relative">
                  {/* Decorative blur */}
                  <div className="absolute -inset-8 bg-amber-100/50 rounded-[2rem] blur-3xl" />

                  <div className="relative rounded-3xl bg-stone-950 p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Live Inventory</span>
                      </div>
                      <span className="rounded-full bg-amber-500/15 border border-amber-500/25 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-400">
                        OEM Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Siemens VFD", part: "6SL3120-1TE21", name: "SINAMICS S120", img: "https://cpimg.tistatic.com/09164988/b/4/Siemens-S120-Drive-6SL3120-1TE21-8AD0-S120-VFD.jpg" },
                        { label: "Siemens PLC", part: "6ED1052-1FB08", name: "LOGO! 8 CPU", img: "https://cpimg.tistatic.com/09164979/b/4/Siemens-Logo-6ED1052-1FB08-0BA1-PLC.jpg" },
                      ].map((p) => (
                        <div key={p.part} className="group rounded-2xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1">
                          <div className="h-28 sm:h-36 flex items-center justify-center p-2">
                            <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <div className="mt-2 text-center border-t border-stone-100 pt-2">
                            <div className="text-[11px] font-bold text-stone-900">{p.name}</div>
                            <div className="text-[9px] text-stone-400 font-mono">{p.part}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-white font-display">1,500+</div>
                        <div className="text-[9px] text-stone-500 uppercase tracking-wider">Parts</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-400 font-display">10+</div>
                        <div className="text-[9px] text-stone-500 uppercase tracking-wider">Brands</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white font-display">12 Mo</div>
                        <div className="text-[9px] text-stone-500 uppercase tracking-wider">Warranty</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 4: FEATURED PRODUCTS — Horizontal scroll         */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 sm:py-28 border-y border-stone-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 animate-fade-up">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">Inventory Catalog</span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">
                  Featured products
                </h2>
              </div>
              <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors shrink-0">
                View all {allProducts.length}+ products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        {/* SECTION 5: TESTIMONIALS — Oversized card carousel       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
              {/* Left label */}
              <div className="lg:col-span-2 animate-fade-up">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">Testimonials</span>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-stone-900 leading-tight sm:text-4xl">
                  Trusted by engineers across India
                </h2>
                <p className="mt-4 text-base text-stone-500 leading-relaxed">
                  From pharma OEMs to automotive plants — our clients trust us for genuine parts, fast delivery, and technical support.
                </p>

                {/* Nav arrows */}
                <div className="mt-8 flex items-center gap-3">
                  <button onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="h-11 w-11 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors">
                    <ChevronLeft className="h-5 w-5 text-stone-600" />
                  </button>
                  <button onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                    className="h-11 w-11 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors">
                    <ChevronRight className="h-5 w-5 text-stone-600" />
                  </button>
                  <span className="text-xs text-stone-400 ml-2">{reviewIndex + 1} / {reviews.length}</span>
                </div>
              </div>

              {/* Right: Active review card */}
              <div className="lg:col-span-3 animate-scale-in" key={reviewIndex}>
                <div className="rounded-3xl bg-stone-50 border border-stone-200 p-8 sm:p-10 relative">
                  <div className="absolute top-6 right-8 text-7xl font-display font-black text-stone-200/80 leading-none select-none">"</div>
                  <div className="flex text-amber-500 mb-5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-lg text-stone-700 leading-relaxed font-medium relative z-10 sm:text-xl">
                    "{reviews[reviewIndex].quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold text-sm">
                      {reviews[reviewIndex].author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-stone-900">{reviews[reviewIndex].author}</div>
                      <div className="text-sm text-amber-600">{reviews[reviewIndex].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 6: CTA — Full-width gradient                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-stone-950 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center animate-fade-up">
            <h2 className="font-display text-3xl font-extrabold text-white leading-tight sm:text-5xl">
              Ready to power your<br />next automation project?
            </h2>
            <p className="mt-5 text-lg text-stone-400 max-w-xl mx-auto">
              Get instant part pricing and engineering assistance from our technical sales desk in Ahmedabad.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button onClick={() => openQuote("General Inquiry", "")}
                className="group rounded-2xl bg-amber-500 px-10 py-4 text-sm font-bold text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all flex items-center gap-2">
                Get In Touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href={`tel:${company.phoneRaw}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-10 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm">
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
