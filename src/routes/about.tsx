import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brands, company } from "@/data/catalog";
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company Profile | Concept Automation Technologies, Ahmedabad" },
      { name: "description", content: "Concept Automation Technologies, Ahmedabad — importer, exporter, trader and supplier of PLC, HMI, VFD and servo motion control systems from leading global brands." },
    ],
  }),
  component: About,
});

function About() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Banner */}
        <section className="bg-stone-950 py-12 sm:py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 animate-fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">About Concept Automation</span>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Company Profile & Capability
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-stone-300 leading-relaxed sm:text-base">
              Importer, exporter, stockist and supplier of premium factory automation products in Ahmedabad, Gujarat.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-up">
              <h2 className="font-display text-xl font-bold text-stone-900 sm:text-2xl">Who We Are</h2>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                Concept Automation Technologies is a premier importer, exporter, trader, and stockist of high-grade factory automation hardware. Under the leadership of <strong className="text-stone-900">{company.owner}</strong> ({company.role}), our company has grown to become a cornerstone in the global industrial control supply chain.
              </p>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                We specialize in PLCs, HMIs, VFDs, DC drives, servo systems, and sensors from: <strong className="text-stone-900">Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Fuji, Proface, Danfoss, and Pepperl+Fuchs</strong>.
              </p>
            </div>

            <div className="animate-fade-up stagger-1">
              <h2 className="font-display text-xl font-bold text-stone-900 sm:text-2xl">Our Infrastructure</h2>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                Located at Titanium Business Park in Makarba, Ahmedabad, our modern facility houses an extensive inventory of critical components. This enables fast turnaround times for manufacturing units across pharmaceutical, textile, packaging, machine tools, plastic, and food & beverage industries.
              </p>
            </div>

            <div className="animate-fade-up stagger-2">
              <h2 className="font-display text-xl font-bold text-stone-900 sm:text-2xl">Key Competitive Pillars</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Genuine OEM Certified", text: "Every controller, panel, and inverter is 100% genuine with factory seal." },
                  { title: "Part Number Matching", text: "Fast cross-reference for obsolete or legacy industrial automation parts." },
                  { title: "Technical Expertise", text: "In-house engineering for product selection and parameter setup." },
                  { title: "Global Export Network", text: "Seamless shipping across India, Middle East, Southeast Asia, and globally." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-stone-900">
                      <CheckCircle2 className="h-4 w-4 text-amber-600" /> {item.title}
                    </div>
                    <p className="mt-2 text-sm text-stone-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 animate-fade-up stagger-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
                Corporate Credentials
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  { dt: "Business Name", dd: company.name },
                  { dt: "GSTIN", dd: company.gst, mono: true, amber: true },
                  { dt: "Proprietor", dd: company.owner },
                  { dt: "Business Type", dd: "Importer, Exporter, Trader & Stockist" },
                  { dt: "Location", dd: company.address },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="text-stone-400 text-xs font-medium">{item.dt}</dt>
                    <dd className={`font-semibold mt-0.5 ${item.amber ? "text-amber-600 font-mono" : "text-stone-900"}`}>{item.dd}</dd>
                  </div>
                ))}
              </dl>

              <button
                onClick={() => setInquiryOpen(true)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-950 py-3 text-xs font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                <MessageSquare className="h-4 w-4" /> Request Quotation
              </button>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-950 p-6 text-white">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">OEM Brands Handled</h3>
              <div className="flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <span key={b} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-stone-300">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}
