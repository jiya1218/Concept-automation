import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/catalog";
import { submitInquiry } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Location | Concept Automation Technologies, Ahmedabad" },
      {
        name: "description",
        content:
          "Visit or contact Concept Automation Technologies in Titanium Business Park, Makarba, Ahmedabad. Phone: +91 98980 12345, Email: info@conceptautotech.com.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    part: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in your Name, Email, and Phone number.");
      return;
    }

    setLoading(true);
    const res = await submitInquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      product_name: form.part ? `Contact Form Inquiry for Part: ${form.part}` : "General Contact Form Inquiry",
      part_number: form.part,
      message: form.message,
    });
    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      toast.success("Contact Message Sent!", {
        description: "Our engineering desk in Makarba, Ahmedabad will contact you shortly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header />

      <main>
        {/* Banner */}
        <section className="border-b border-slate-800 bg-[#0F172A] text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">Headquarters & Sales Desk</span>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Contact & Location
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Connect directly with our sales & engineering team at Titanium Business Park, Makarba, Ahmedabad.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="industrial-card rounded-2xl p-6 bg-white shadow-sm space-y-5">
                <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  Direct Contact Channels
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 uppercase">Headquarters Address</span>
                      <p className="mt-0.5 text-slate-600 leading-snug">{company.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 uppercase">Sales & Inquiry Phone</span>
                      <a href={`tel:${company.phoneRaw}`} className="mt-0.5 block font-mono font-bold text-sky-700 hover:underline">
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 uppercase">Work Email</span>
                      <a href={`mailto:${company.email}`} className="mt-0.5 block font-mono font-bold text-sky-700 hover:underline">
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 uppercase">Operating Hours</span>
                      <p className="mt-0.5 text-slate-600">{company.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation%20team,%20I%20need%20a%20price%20quotation.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold uppercase text-white hover:bg-emerald-700 shadow-sm"
                  >
                    WhatsApp Sales Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="industrial-card rounded-3xl p-6 sm:p-8 bg-white shadow-md">
                <h2 className="font-display text-lg font-bold uppercase text-slate-900 mb-1">
                  Send Price & Availability Request
                </h2>
                <p className="text-xs text-slate-600 mb-6">Fill in your requirements below for an official quotation.</p>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 mb-2" />
                    <h3 className="text-base font-bold text-slate-900">Message Submitted!</h3>
                    <p className="mt-1 text-xs text-slate-600">We will respond to your email/phone shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mr. Rajesh Patel"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98980 12345"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
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
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Company / Firm Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Sun Pharma Systems"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Required Part Number / Hardware Model</label>
                      <input
                        type="text"
                        placeholder="e.g. 6ES7214-1AG40-0XB0, GT2508-VTBD..."
                        value={form.part}
                        onChange={(e) => setForm({ ...form, part: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Message / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Specify required quantity, location, or urgency..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-sky-700 hover:bg-sky-800 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all disabled:opacity-50"
                    >
                      {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
