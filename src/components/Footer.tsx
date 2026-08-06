import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Send, CheckCircle2, MessageSquare, ExternalLink, ArrowRight } from "lucide-react";
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
    toast.success("Subscribed!", { description: "You'll receive stock updates & price drops." });
  };

  return (
    <>
      <footer className="bg-[#140d09] text-[#f6f4ee] border-t border-white/10">
        {/* Accent Bar — MB Ochre Warm Gold */}
        <div className="h-1.5 w-full bg-[#b45309]" />

        {/* Newsletter */}
        <div className="border-b border-white/10 bg-[#1a130f]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Subscribe for OEM Stock & Price Updates
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Monthly reports for Siemens, Mitsubishi, Omron, P+F & Allen Bradley.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-4 w-4" /> Subscribed!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex w-full max-w-md items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b45309]"
                />
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#b45309] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d97706] transition-colors"
                >
                  <Send className="h-3.5 w-3.5" /> Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Concept Automation"
                className="h-12 w-12 rounded-lg object-contain bg-white p-1 border border-white/20"
                width={48}
                height={48}
              />
              <span className="font-display text-lg font-bold uppercase leading-tight text-white">
                Concept Automation<br />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Technologies</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Importer, exporter, trader and supplier of factory automation products — PLC, HMI, VFD, DC drives, servo systems and industrial sensors in Ahmedabad.
            </p>
            <p className="text-xs uppercase tracking-widest text-[#b45309] font-bold font-mono">GSTIN: {company.gst}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setInquiryOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:bg-[#b45309] hover:border-[#b45309] transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Direct Inquiry
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation%20team,%20I%20need%20a%20price%20quotation.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#b45309] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Company Profile" },
                { to: "/products", label: "Complete Catalog" },
                { to: "/contact", label: "Contact & Location" },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="flex items-center gap-2 hover:text-[#b45309] transition-colors">
                    <ArrowRight className="h-3 w-3 text-[#b45309]" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#b45309] mb-4">
              Popular Hardware
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {POPULAR_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link to="/products" search={{ q: cat.query }}
                    className="hover:text-[#b45309] transition-colors block text-[11px]">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#b45309] mb-3">
              OEM Brands
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs mb-6">
              {brands.map((brand) => (
                <Link key={brand} to="/products" search={{ q: brand }}
                  className="rounded bg-white/10 px-2 py-1 text-[11px] font-semibold text-slate-200 hover:bg-[#b45309] hover:text-white transition-all">
                  {brand}
                </Link>
              ))}
            </div>

            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#b45309] mb-3">
              Headquarters
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#b45309] mt-0.5" />
                <a href="https://maps.google.com/?q=Titanium+Business+Park+Makarba+Ahmedabad" target="_blank" rel="noreferrer"
                  className="hover:text-[#b45309] flex items-center gap-1 transition-colors">
                  Makarba, Ahmedabad <ExternalLink className="h-2.5 w-2.5 text-slate-500" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#b45309]" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-[#b45309] font-mono text-[11px]">{company.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#b45309]" />
                <a href={`mailto:${company.email}`} className="hover:text-[#b45309] text-[11px]">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/40 py-4 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Concept Automation Technologies. All rights reserved.</p>
        </div>
      </footer>

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
