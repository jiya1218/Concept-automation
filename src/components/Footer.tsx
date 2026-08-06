import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, User, Mail, Send, CheckCircle2, MessageSquare, ExternalLink, ArrowRight } from "lucide-react";
import { company, brands } from "@/data/catalog";
import { subscribeNewsletter } from "@/lib/supabase";
import { toast } from "sonner";
import { InquiryModal } from "./InquiryModal";

const POPULAR_CATEGORIES = [
  { name: "Siemens PLC", query: "Siemens PLC" },
  { name: "Siemens VFD", query: "Siemens VFD" },
  { name: "Siemens HMI", query: "Siemens HMI" },
  { name: "Omron PLC", query: "Omron PLC" },
  { name: "Mitsubishi PLC", query: "Mitsubishi" },
  { name: "Pepperl+Fuchs Sensors", query: "Pepperl+Fuchs" },
  { name: "Allen Bradley Controllers", query: "Allen Bradley" },
  { name: "Delta VFD", query: "Delta VFD" },
  { name: "Schneider HMI & VFD", query: "Schneider" },
];

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
    toast.success("Subscribed successfully!", {
      description: "You will receive stock updates & official price drops.",
    });
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
                Subscribe for OEM Stock & Price Updates
              </h3>
              <p className="text-xs text-white/70">
                Get monthly stock availability reports for Siemens, Mitsubishi, Omron, P+F & Allen Bradley.
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

        {/* Footer Navigation Columns */}
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-accent flex items-center justify-center font-display font-black text-accent-foreground text-lg">
                CAT
              </div>
              <span className="font-display text-base font-bold uppercase leading-tight text-white">
                Concept Automation
                <br />
                Technologies
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/75">
              Importer, exporter, trader and supplier of factory automation products — PLC, HMI, VFD, DC drives, servo systems and industrial sensors in Ahmedabad.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-accent font-semibold">GST: {company.gst}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setInquiryOpen(true)}
                className="inline-flex items-center gap-2 rounded bg-accent/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent border border-accent/40 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Direct Inquiry
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation%20team,%20I%20need%20a%20price%20quotation.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded bg-emerald-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-white/80">
              <li>
                <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-accent/60" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-accent/60" /> Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-accent/60" /> Complete Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-accent/60" /> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Categories */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Popular Hardware
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-white/80">
              {POPULAR_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to="/products"
                    search={{ q: cat.query }}
                    className="hover:text-accent transition-colors block text-[11px]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Core Brands & Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              OEM Brands
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  to="/products"
                  search={{ q: brand }}
                  className="rounded bg-white/10 px-2 py-1 text-[11px] text-white/90 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>

            <h3 className="mt-6 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Headquarters
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Titanium+Business+Park+Makarba+Ahmedabad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent leading-snug transition-colors flex items-center gap-1"
                >
                  <span>Makarba, Ahmedabad</span>
                  <ExternalLink className="h-2.5 w-2.5 text-white/40" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-accent font-mono text-[11px]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-accent font-mono text-[11px]">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-white/60">
                <User className="h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{company.proprietor}</span>
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
