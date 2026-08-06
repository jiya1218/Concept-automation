import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, User, Building2, CheckCircle2, Mail, Send, MessageSquare, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/catalog";
import { submitContactForm } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Concept Automation Technologies, Ahmedabad" },
      {
        name: "description",
        content:
          "Contact Concept Automation Technologies in Ahmedabad for PLC, HMI, VFD and servo system inquiries. Call +91 80454 75169 or send your requirement.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    subject: "Industrial Automation Inquiry",
    message: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in your Name, Phone Number, and Requirement Message.");
      return;
    }

    setLoading(true);
    const res = await submitContactForm({
      name: formData.name,
      email: formData.email || "no-email@conceptautotech.com",
      phone: formData.phone,
      company: formData.companyName,
      subject: formData.subject,
      message: formData.message,
    });
    setLoading(false);

    if (res.success) {
      setSent(true);
      toast.success("Contact Message Sent to Supabase!", {
        description: "Our team in Makarba, Ahmedabad will call you back shortly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Contact Banner */}
        <section className="border-b border-border bg-ink text-ink-foreground py-14">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">Direct Support & Inquiries</span>
            <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Contact Concept Automation
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/80 leading-relaxed">
              Send us your exact part number or technical specification requirement. Our sales desk in Makarba, Ahmedabad responds promptly with stock availability and quotations.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Company Details */}
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Building2 className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-display text-base font-bold uppercase text-foreground">{company.name}</h3>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">GSTIN: {company.gst}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-4 text-xs">
                <li className="flex items-start gap-3">
                  <User className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">{company.owner}</div>
                    <div className="text-muted-foreground">{company.role}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-muted-foreground uppercase text-[10px] tracking-wider font-bold">Direct Phone / WhatsApp</div>
                    <a href={`tel:${company.phoneRaw}`} className="font-bold font-mono text-sm text-foreground hover:text-accent">
                      {company.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-muted-foreground uppercase text-[10px] tracking-wider font-bold">Sales Email</div>
                    <a href={`mailto:${company.email}`} className="font-bold font-mono text-foreground hover:text-accent">
                      {company.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-muted-foreground uppercase text-[10px] tracking-wider font-bold">Registered Office & Warehouse</div>
                    <div className="font-medium text-foreground leading-relaxed mt-0.5">{company.address}</div>
                    <a
                      href={company.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:underline"
                    >
                      View Location on Google Maps <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fast WhatsApp Box */}
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-700 dark:text-emerald-300">
              <div className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider">
                <MessageSquare className="h-4 w-4 text-emerald-500" /> WhatsApp Technical Desk
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Need urgent part availability during breakdown? Message our technical team directly.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation,%20I%20need%20a%20quotation%20for:`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-emerald-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form Connected to Supabase */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold uppercase text-foreground">
              Send Your Inquiry & Part List
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill out the form below to receive a formal quotation directly in your inbox or WhatsApp.
            </p>

            {sent ? (
              <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-8 text-center animate-in fade-in">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">Message Received!</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Thank you <strong className="text-foreground">{formData.name}</strong>. Your inquiry has been logged in our system. An automation engineer will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: "", phone: "", email: "", companyName: "", subject: "Industrial Automation Inquiry", message: "" });
                  }}
                  className="mt-6 rounded-md bg-accent px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Company / Business Name</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Quotation for Siemens S7-1200 CPU or Mitsubishi VFD"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Detailed Requirement / Part List *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="List the exact part numbers, model codes, quantities or technical specifications you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                  {loading ? "Submitting..." : <><Send className="h-4 w-4" /> Send Message to Sales Team</>}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
