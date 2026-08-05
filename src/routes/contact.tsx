import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, User, Building2, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categories, company } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Concept Automation Technologies, Ahmedabad" },
      {
        name: "description",
        content:
          "Contact Concept Automation Technologies in Ahmedabad for PLC, HMI, VFD and servo system inquiries. Call +91 80454 75169 or send your requirement.",
      },
      { property: "og:title", content: "Contact Us | Concept Automation Technologies" },
      {
        property: "og:description",
        content: "Send your automation requirement and get a quotation from our team.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Get In Touch</span>
            <h1 className="section-title mt-3 text-4xl sm:text-5xl">Contact Details</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Tell us your requirement — part number, brand or application — and we will revert with
              availability and a quotation.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { icon: Building2, label: "Company", value: `${company.name} (GST: ${company.gst})` },
              { icon: User, label: company.role, value: company.owner },
              { icon: Phone, label: "Mobile", value: company.phone, href: company.phoneHref },
              { icon: MapPin, label: "Address", value: company.address },
            ].map((row) => (
              <div key={row.label} className="card-surface flex gap-4 rounded-md p-6">
                <row.icon className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {row.label}
                  </div>
                  {row.href ? (
                    <a href={row.href} className="mt-1 block font-semibold hover:text-accent">
                      {row.value}
                    </a>
                  ) : (
                    <div className="mt-1 font-semibold leading-relaxed">{row.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-md p-8">
            <h2 className="section-title text-2xl">Tell Us Your Requirement</h2>
            {sent ? (
              <div className="mt-8 flex items-center gap-3 rounded-md border border-accent/40 bg-accent/10 p-6">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <p className="text-sm">
                  Thank you — your inquiry has been noted. Our team will contact you shortly. For
                  urgent needs, call {company.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="Mobile Number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Company" name="company" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Product Interest
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  >
                    <option>General inquiry</option>
                    {categories.map((c) => (
                      <option key={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Part number, quantity, application..."
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Send Inquiry
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

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
