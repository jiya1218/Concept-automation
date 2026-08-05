import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, User, Mail, Send, CheckCircle2, MessageSquare, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
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
      <footer className="mt-24 bg-slate-900 text-slate-200 dark:bg-slate-950 dark:text-slate-300 border-t border-slate-800 transition-colors">
        {/* Sleek Cyan/Blue Top Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600" />

        {/* Newsletter Banner */}
        <div className="border-b border-slate-800 bg-slate-950/60 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Subscribe for OEM Stock & Price Updates
              </h3>
              <p className="text-xs text-slate-400">
                Get monthly stock availability reports for Siemens, Mitsubishi, Omron, P+F & Allen Bradley.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
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
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 shrink-0 rounded-xl bg-cyan-500 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
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
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-display font-black text-slate-950 text-lg shadow-md">
                CAT
              </div>
              <span className="font-display text-base font-bold uppercase leading-tight text-white">
                Concept Automation
                <br />
                Technologies
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Importer, exporter, trader and supplier of factory automation products — PLC, HMI, VFD, DC drives, servo systems and industrial sensors in Ahmedabad.
            </p>
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5 font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> GST: {company.gst}
            </p>
            
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => setInquiryOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Direct Inquiry
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation%20team,%20I%20need%20a%20price%20quotation.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-cyan-500/60" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-cyan-500/60" /> Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-cyan-500/60" /> Complete Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-cyan-500/60" /> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Hardware */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Popular Hardware
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              {POPULAR_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to="/products"
                    search={{ q: cat.query }}
                    className="hover:text-cyan-400 transition-colors block text-[11px]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: OEM Brands & Headquarters */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              OEM Brands
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  to="/products"
                  search={{ q: brand }}
                  className="rounded-lg bg-slate-800/80 px-2 py-1 text-[11px] text-slate-300 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>

            <h3 className="mt-6 font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Headquarters
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-400 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Titanium+Business+Park+Makarba+Ahmedabad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 leading-snug transition-colors flex items-center gap-1"
                >
                  <span>Makarba, Ahmedabad</span>
                  <ExternalLink className="h-2.5 w-2.5 text-slate-500" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-cyan-400 font-mono text-[11px]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                <a href={`mailto:${company.email}`} className="hover:text-cyan-400 font-mono text-[11px]">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-slate-400">
                <User className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                <span>{company.proprietor}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Concept Automation Technologies. All rights reserved.</p>
        </div>
      </footer>

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
