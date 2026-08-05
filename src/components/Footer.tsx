import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, User, Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { categories, company, brands } from "@/data/catalog";
import { subscribeNewsletter } from "@/lib/supabase";
import { toast } from "sonner";
import { InquiryModal } from "./InquiryModal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    await subscribeNewsletter(email);
    setSubscribed(true);
    toast.success("Subscribed!", { description: "You will receive price drops and new product alerts." });
  };

  return (
    <>
      <footer className="mt-24 bg-ink text-ink-foreground border-t border-border">
        <div className="accent-bar h-1 w-full bg-accent" />

        {/* Newsletter Banner */}
        <div className="border-b border-white/10 bg-white/5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Subscribe for Stock & Price Updates
              </h3>
              <p className="text-xs text-white/70">
                Get monthly availability reports for Siemens, Mitsubishi, Omron & Allen Bradley stock.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-md bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-4 w-4" /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex w-full max-w-md items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 shrink-0 rounded-md bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
                >
                  <Send className="h-3.5 w-3.5" /> Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Concept Automation Technologies logo"
                className="h-12 w-12 rounded-sm object-contain bg-white p-1"
                width={48}
                height={48}
              />
              <span className="font-display text-lg font-bold uppercase leading-tight text-white">
                Concept Automation
                <br />
                Technologies
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/75">
              Importer, exporter, trader and supplier of factory automation products — PLC, HMI, VFD, DC drives, servo systems and industrial sensors in Ahmedabad.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-accent font-semibold">GST: {company.gst}</p>
            <button
              onClick={() => setInquiryOpen(true)}
              className="mt-4 inline-flex items-center gap-2 rounded bg-accent/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent border border-accent/40 hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Direct Inquiry
            </button>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-white/80">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Complete Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Core OEM Brands
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-white/80">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  to="/products"
                  className="rounded bg-white/10 px-2 py-1 text-[11px] hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Headquarters
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-accent font-mono">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-accent font-mono">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <User className="h-4 w-4 shrink-0 text-accent" />
                <span>{company.owner} ({company.role})</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/40 py-4 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Concept Automation Technologies. All rights reserved.</p>
        </div>
      </footer>

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
