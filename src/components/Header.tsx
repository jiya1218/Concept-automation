import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, MessageSquare, Search, Zap, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { categories, company, brands } from "@/data/catalog";
import { InquiryModal } from "./InquiryModal";
import { FloatingCornerActions } from "./FloatingCornerActions";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products Catalog" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/products", search: { q: searchQuery } as any });
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Deep Steel Navy Top Ticker Bar (MB Finishing Tech Inspired) */}
      <div className="bg-[#0B132B] text-slate-200 text-xs py-2 px-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="inline-flex items-center gap-1 text-sky-400 font-bold uppercase tracking-wider text-[10px] bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30 shrink-0">
              <Zap className="h-3 w-3 animate-pulse text-amber-400" /> Express Dispatch
            </span>
            <span className="truncate text-slate-300 text-[11px] font-medium">
              Siemens, Mitsubishi, Omron, P+F, AB & Delta Supply — Makarba, Ahmedabad
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[11px] text-slate-300 shrink-0">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-sky-400" /> Makarba, Ahmedabad
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> GST: {company.gst}
            </span>
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-1.5 text-white hover:text-sky-400 font-bold font-mono transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 glass-header shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
          
          {/* Logo Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies logo"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain bg-white p-1 border border-slate-200 shadow-md transition-transform group-hover:scale-105"
              width={56}
              height={56}
            />
            <div className="leading-tight">
              <span className="block font-display text-base sm:text-xl font-extrabold uppercase tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                Concept Automation
              </span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeProps={{ className: "text-sky-700 font-bold bg-sky-50 border-sky-200" }}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:bg-slate-100 hover:text-sky-700 border border-transparent"
                >
                  {item.label}
                  {item.label === "Products Catalog" && <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.label === "Products Catalog" && (
                  <div className="invisible absolute -left-32 top-full grid w-[760px] grid-cols-3 gap-5 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50 mt-2">
                    <div className="col-span-3 border-b border-slate-100 pb-3 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                        21 Verified Product Categories
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {brands.slice(0, 6).map((b) => (
                          <Link
                            key={b}
                            to="/products"
                            search={{ q: b }}
                            className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 hover:bg-sky-600 hover:text-white transition-colors"
                          >
                            {b}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* PLCs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-700 tracking-wider mb-2 border-b border-slate-100 pb-1">PLC Controllers</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* HMIs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-700 tracking-wider mb-2 border-b border-slate-100 pb-1">HMI Touch Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* VFDs & Sensors */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-700 tracking-wider mb-2 border-b border-slate-100 pb-1">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 transition-all hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Instant Quote Button */}
            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-800 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="h-4 w-4" /> Get Free Quote
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-200 lg:hidden focus:outline-none"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Quick Search Input Bar */}
        {searchOpen && (
          <div className="border-b border-slate-200 bg-white p-4 animate-in slide-in-from-top">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-2xl items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-sky-700" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search model number, part number or brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-sky-700 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* PERFECT MOBILE NAVIGATION DRAWER (TOUCH-FRIENDLY & FULLY RESPONSIVE)       */}
      {/* ========================================================================= */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in"
          />

          {/* Mobile Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-right overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-lg object-contain bg-white border border-slate-200" />
                  <span className="font-display text-sm font-extrabold uppercase text-slate-900">
                    Concept Automation
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1.5">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "bg-sky-50 text-sky-700 font-bold border-sky-200" }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 border border-transparent"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </nav>

              {/* Brand Quick Links */}
              <div className="mt-8">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-sky-700 mb-3">
                  Featured Brands
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {brands.slice(0, 7).map((b) => (
                    <Link
                      key={b}
                      to="/products"
                      search={{ q: b }}
                      onClick={() => setOpen(false)}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-sky-600 hover:text-white"
                    >
                      {b}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer Action Buttons */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setOpen(false);
                  setInquiryOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-700 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-md"
              >
                <MessageSquare className="h-4 w-4" /> Get Free Quote
              </button>

              <a
                href={`tel:${company.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-900 py-3.5 font-display text-xs font-bold uppercase border border-slate-200"
              >
                <Phone className="h-4 w-4 text-amber-600" /> Call Sales: {company.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      <FloatingCornerActions />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
