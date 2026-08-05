import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Building, Warehouse, Globe2, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brands, company } from "@/data/catalog";
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company Profile | Concept Automation Technologies, Ahmedabad" },
      {
        name: "description",
        content:
          "Concept Automation Technologies, Ahmedabad — importer, exporter, trader and supplier of PLC, HMI, VFD and servo motion control systems from leading global brands.",
      },
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
        <section className="border-b border-border bg-ink text-ink-foreground py-14">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">About Concept Automation</span>
            <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Company Profile & Capability
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/80 leading-relaxed">
              Importer, exporter, stockist and supplier of premium factory automation products in Ahmedabad, Gujarat.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                Who We Are
              </h2>
              <p className="mt-4 leading-relaxed text-xs text-muted-foreground">
                Concept Automation Technologies is a premier importer, exporter, trader, and stockist of high-grade factory automation hardware. Under the leadership of <strong className="text-foreground">{company.owner}</strong> ({company.role}), our company has grown to become a cornerstone in the global industrial control supply chain.
              </p>
              <p className="mt-3 leading-relaxed text-xs text-muted-foreground">
                We specialize in supplying programmable logic controllers (PLCs), human-machine interfaces (HMIs), variable frequency drives (VFDs), DC drives, servo positioning systems, and industrial sensors from the world's most trusted OEMs: <strong className="text-foreground">Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Fuji, Proface, Danfoss, and Pepperl+Fuchs</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                Our Infrastructure & Warehouse
              </h2>
              <p className="mt-4 leading-relaxed text-xs text-muted-foreground">
                Located at Titanium Business Park in Makarba, Ahmedabad, our modern facility houses a extensive inventory of critical components. This enables us to maintain fast turnaround times, fulfilling urgent breakdown requirements for manufacturing units across pharmaceutical, textile, packaging, machine tools, plastic, and food & beverage industries.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                Key Competitive Pillars
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Genuine OEM Certified", text: "Every controller, panel, and inverter is 100% genuine with factory seal." },
                  { title: "Part Number Matching", text: "Fast cross-reference for obsolete or legacy industrial automation part numbers." },
                  { title: "Technical Expertise", text: "In-house engineering guidance for product selection and parameter setup." },
                  { title: "Global Export Network", text: "Seamless shipping across India, Middle East, Southeast Asia, and globally." },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 font-display text-sm font-bold uppercase text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {item.title}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Info Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-foreground border-b border-border pb-3">
                Corporate Credentials
              </h3>
              <dl className="mt-4 space-y-3 text-xs">
                <div>
                  <dt className="text-muted-foreground font-semibold">Business Name</dt>
                  <dd className="font-bold text-foreground mt-0.5">{company.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-semibold">GSTIN Registration</dt>
                  <dd className="font-mono font-bold text-accent mt-0.5">{company.gst}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-semibold">Proprietor</dt>
                  <dd className="font-bold text-foreground mt-0.5">{company.owner}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-semibold">Business Type</dt>
                  <dd className="font-medium text-foreground mt-0.5">Importer, Exporter, Trader & Stockist</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-semibold">Location</dt>
                  <dd className="font-medium text-foreground mt-0.5">{company.address}</dd>
                </div>
              </dl>

              <button
                onClick={() => setInquiryOpen(true)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-accent px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
              >
                <MessageSquare className="h-4 w-4" /> Request Quotation
              </button>
            </div>

            <div className="rounded-xl border border-border bg-ink p-6 text-white">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                OEM Brands Handled
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <span key={b} className="rounded bg-white/10 px-2.5 py-1 text-xs font-semibold">
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
