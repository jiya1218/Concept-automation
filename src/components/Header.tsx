import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, MessageSquare, Search, ArrowRight } from "lucide-react";
import { categories, company, brands } from "@/data/catalog";
import { InquiryModal } from "./InquiryModal";
import { FloatingCornerActions } from "./FloatingCornerActions";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/products", search: { q: searchQuery } as any });
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-slate-200"}`}>
        {/* Top Info Bar — Deep Industrial Steel Navy */}
        <div className="hidden bg-[#0a1e36] text-white md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
            <span className="opacity-90">GSTIN: <span className="font-mono text-amber-400 font-bold">{company.gst}</span></span>
            <div className="flex items-center gap-6">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="h-3 w-3 text-amber-400" /> {company.phone}
              </a>
              <span className="opacity-40">|</span>
              <span className="opacity-90">{company.address}</span>
            </div>
          </div>
        </div>

        {/* Main Header Row */}
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3.5 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain border border-slate-200 p-0.5"
              width={48}
              height={48}
            />
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-base font-bold tracking-tight text-[#0f2a4a] sm:text-lg">
                Concept Automation
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#d97706]">
                Technologies
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeProps={{ className: "!bg-[#0f2a4a] !text-white" }}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f2a4a] transition-all hover:bg-slate-100 hover:text-[#d97706]"
                >
                  {item.label}
                  {item.label === "Products" && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {/* Mega Menu */}
                {item.label === "Products" && (
                  <div className="invisible absolute -left-28 top-full grid w-[680px] grid-cols-3 gap-5 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
                    <div className="col-span-3 border-b border-slate-100 pb-3 flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#d97706]">All Hardware Categories</span>
                      <Link to="/products" className="text-xs font-bold text-[#0f2a4a] hover:text-[#d97706] flex items-center gap-1">
                        View Full Catalog <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">PLC Systems</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0f2a4a] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">HMI Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0f2a4a] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0f2a4a] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#0f2a4a] hover:bg-slate-100 hover:text-[#d97706] transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#0f2a4a] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0a1e36] transition-all shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#d97706]" /> Get Quick Quote
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#0f2a4a] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="border-t border-slate-200 bg-slate-50 p-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-xl items-center gap-2">
              <input
                type="text"
                autoFocus
                placeholder="Search part number (e.g. S7-1200, GS2110, FR-CS84)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0f2a4a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f2a4a]/20 focus:border-[#0f2a4a]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-[#0f2a4a] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0a1e36] transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-[#0a1e36]/60 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl animate-slide-right flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#0f2a4a]">Menu</span>
              <button onClick={() => setOpen(false)} className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-slate-200">
                <X className="h-5 w-5 text-[#0f2a4a]" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-sm font-bold uppercase text-[#0f2a4a] hover:bg-slate-100 hover:text-[#d97706] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-4 border-t border-slate-200" />

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-[#0f2a4a] hover:bg-slate-100"
              >
                <Phone className="h-4 w-4 text-[#d97706]" />
                Call {company.phone}
              </a>
            </nav>

            <div className="border-t border-slate-200 p-4 bg-slate-50">
              <button
                onClick={() => { setOpen(false); setInquiryOpen(true); }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f2a4a] py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0a1e36] transition-colors shadow"
              >
                <MessageSquare className="h-4 w-4 text-[#d97706]" /> Request Quote
              </button>
            </div>
          </div>
        </>
      )}

      <FloatingCornerActions />
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
