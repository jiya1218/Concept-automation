import { createFileRoute, Link } from "@tanstack/react-router";
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
} from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, company, hotProducts, popularProducts } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concept Automation Technologies | PLC, HMI & VFD Supplier" },
      {
        name: "description",
        content:
          "Importer, exporter and supplier of factory automation products — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad.",
      },
      { property: "og:title", content: "Concept Automation Technologies | PLC, HMI & VFD Supplier" },
      {
        property: "og:description",
        content:
          "Importer, exporter and supplier of factory automation products — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad.",
      },
    ],
  }),
  component: Index,
});

const slides = [
  {
    eyebrow: "Welcome to Concept Automation Technologies",
    title: "Industrial Automation, Sourced Right",
    text: "Importer, exporter, trader and supplier of PLC, HMI, VFD, DC drives, servo and motion control systems of reputed global brands.",
    cta: { label: "Explore Products", to: "/products" as const },
  },
  {
    eyebrow: "Multi-brand stock",
    title: "Siemens · Mitsubishi · Allen Bradley",
    text: "Genuine controllers, panels and drives from the brands your line already runs on — matched to your part numbers.",
    cta: { label: "View Brands", to: "/products" as const },
  },
  {
    eyebrow: "Quick support",
    title: "Talk To An Automation Specialist",
    text: "Product selection, replacement cross-reference or an urgent breakdown requirement — our team responds fast.",
    cta: { label: "Contact Us", to: "/contact" as const },
  },
];

const capabilities = [
  { icon: Cpu, title: "PLC Systems", text: "Compact to modular controllers, CPUs, I/O and communication modules." },
  { icon: MonitorSmartphone, title: "HMI Panels", text: "Touch terminals from 4 to 15 inch with visualisation software support." },
  { icon: Gauge, title: "VFD & AC Drives", text: "Variable speed drives, DC drives and servo motion control packages." },
  { icon: Radar, title: "Sensors & Encoders", text: "Proximity, ultrasonic and photoelectric sensors plus shaft encoders." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Genuine Products", text: "Sourced from reputable manufacturers with quality that meets international standards." },
  { icon: Headphones, title: "After-Sale Service", text: "Effective post-sale support from a knowledgeable technical team." },
  { icon: Warehouse, title: "Capacious Warehouse", text: "Solid infrastructure and stock depth for faster turnaround." },
  { icon: Truck, title: "Global Supply", text: "Import, export and trade of automation goods across the supply chain." },
];

const industries = [
  "Pharmaceutical",
  "Textile & Packaging",
  "Automotive Manufacturing",
  "Plastic & Paper",
  "Machine & Plant Engineering",
  "Food & Beverage",
];

function Index() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active] ?? slides[0]!;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImage}
            alt="Industrial automation control panel with PLC, HMI and drives"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative mx-auto flex min-h-[540px] max-w-7xl flex-col justify-center px-6 py-24 text-ink-foreground">
            <div key={active} className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1 className="section-title mt-4 text-4xl sm:text-5xl lg:text-6xl">{slide.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed opacity-85 sm:text-lg">
                {slide.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={slide.cta.to}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  {slide.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </div>
            <div className="mt-12 flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1 w-12 rounded-full transition-colors ${
                    i === active ? "bg-accent" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand strip */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
            {brands.map((b) => (
              <span
                key={b}
                className="font-display text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="card-surface rounded-md p-6">
                <c.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="bg-surface py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="card-surface overflow-hidden rounded-md p-6">
              <div className="grid grid-cols-2 gap-4">
                {popularProducts.slice(0, 4).map((p) => (
                  <img
                    key={p.name}
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-square w-full rounded bg-background object-contain p-3"
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">About Us</span>
              <h2 className="section-title mt-3 text-3xl sm:text-4xl">
                Concept Automation Technologies
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Concept Automation Technologies is a prominent importer, exporter, trader and
                supplier of factory automation products like PLC (Programmable Logic Controller),
                HMI (Human Machine Interface), VFD / AC drives, DC drives, servo and motion control
                systems of various reputed brands such as Siemens, Mitsubishi, Proface, Danfoss,
                Omron, Allen Bradley, Fuji, Delta and Schneider.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We provide customized trade solutions for industrial automation goods. Our
                knowledgeable staff listens to what our customers need, provides expertise, and
                helps them choose the best system and product.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "20+", v: "Product Ranges" },
                  { k: "10+", v: "Global Brands" },
                  { k: "100%", v: "Genuine Supply" },
                ].map((s) => (
                  <div key={s.v} className="rounded-md border border-border bg-card p-4">
                    <div className="font-display text-3xl font-bold text-accent">{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent hover:underline"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Our Products</span>
              <h2 className="section-title mt-3 text-3xl sm:text-4xl">Complete Product Range</h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-[0.15em] hover:border-accent hover:text-accent"
            >
              View All Products
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </section>

        {/* Popular products */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Most Popular</span>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl">Popular Products</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {popularProducts.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <span className="eyebrow">Serving Key Industries</span>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">Where Our Products Run</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i, idx) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-md border border-border bg-card p-5"
              >
                <span className="font-display text-2xl font-bold text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-semibold uppercase tracking-wide">
                  {i}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="bg-ink py-20 text-ink-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Why Us</span>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl">Why Clients Choose Us</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((w) => (
                <div key={w.title} className="rounded-md border border-white/10 bg-white/5 p-6">
                  <w.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot products */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <span className="eyebrow">Hot Products</span>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">In Demand This Month</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-4">
          <div className="accent-bar rounded-md px-8 py-12 text-accent-foreground">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="section-title text-3xl">Tell Us Your Requirement</h2>
                <p className="mt-2 max-w-xl text-sm opacity-80">
                  Share your part number or application and we will revert with availability and a
                  quotation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-md bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-ink-foreground"
                >
                  Send Inquiry
                </Link>
                <a
                  href={company.phoneHref}
                  className="rounded-md border border-black/25 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em]"
                >
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
