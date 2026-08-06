import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageSquare, ShieldCheck, Award, Building, Warehouse } from "lucide-react";
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header />

      <main>
        {/* Banner */}
        <section className="border-b border-slate-800 bg-[#0F172A] text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">About Concept Automation</span>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Company Profile & Capability
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Importer, exporter, stockist and supplier of premium factory automation products in Ahmedabad, Gujarat.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-900">
                Who We Are
              </h2>
              <p className="mt-4 leading-relaxed text-xs sm:text-sm text-slate-600">
                Concept Automation Technologies is a premier importer, exporter, trader, and stockist of high-grade factory automation hardware. Under the leadership of <strong className="text-slate-900">{company.owner}</strong> ({company.role}), our company has grown to become a cornerstone in the global industrial control supply chain.
              </p>
              <p className="mt-3 leading-relaxed text-xs sm:text-sm text-slate-600">
                We specialize in supplying programmable logic controllers (PLCs), human-machine interfaces (HMIs), variable frequency drives (VFDs), DC drives, servo positioning systems, and industrial sensors from the world's most trusted OEMs: <strong className="text-slate-900">Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider, Fuji, Proface, Danfoss, and Pepperl+Fuchs</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-900">
                Our Infrastructure & Warehouse
              </h2>
              <p className="mt-4 leading-relaxed text-xs sm:text-sm text-slate-600">
                Located at Titanium Business Park in Makarba, Ahmedabad, our modern facility houses an extensive inventory of critical components. This enables us to maintain fast turnaround times, fulfilling urgent breakdown requirements for manufacturing units across pharmaceutical, textile, packaging, machine tools, plastic, and food & beverage industries.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-900">
                Key Competitive Pillars
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Genuine OEM Certified", text: "Every controller, panel, and inverter is 100% genuine with factory seal." },
                  { title: "Part Number Matching", text: "Fast cross-reference for obsolete or legacy industrial automation part numbers." },
                  { title: "Technical Expertise", text: "In-house engineering guidance for product selection and parameter setup." },
                  { title: "Global Export Network", text: "Seamless shipping across India, Middle East, Southeast Asia, and globally." },
                ].map((item) => (
                  <div key={item.title} className="industrial-card rounded-2xl p-5 bg-white">
                    <div className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase text-slate-900">
                      <CheckCircle2 className="h-4 w-4 text-sky-700" /> {item.title}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Info Sidebar */}
          <aside className="space-y-6">
            <div className="industrial-card rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                Corporate Credentials
              </h3>
              <dl className="mt-4 space-y-3 text-xs">
                <div>
                  <dt className="text-slate-500 font-semibold">Business Name</dt>
                  <dd className="font-bold text-slate-900 mt-0.5">{company.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-semibold">GSTIN Registration</dt>
                  <dd className="font-mono font-bold text-sky-700 mt-0.5">{company.gst}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-semibold">Proprietor</dt>
                  <dd className="font-bold text-slate-900 mt-0.5">{company.owner}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-semibold">Business Type</dt>
                  <dd className="font-medium text-slate-900 mt-0.5">Importer, Exporter, Trader & Stockist</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-semibold">Location</dt>
                  <dd className="font-medium text-slate-900 mt-0.5">{company.address}</dd>
                </div>
              </dl>

              <button
                onClick={() => setInquiryOpen(true)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 shadow-sm"
              >
                <MessageSquare className="h-4 w-4" /> Request Quotation
              </button>
            </div>

            <div className="rounded-2xl bg-[#0F172A] p-6 text-white border border-slate-800">
              <h3 className="font-display text-xs font-extrabold uppercase tracking-wider text-sky-400">
                OEM Brands Handled
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <span key={b} className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-200">
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
