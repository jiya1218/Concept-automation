import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Sun, Moon, ChevronDown, MessageSquare, Search, Zap, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { useTheme } from "@/lib/theme";
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
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/products", search: { q: searchQuery } as any });
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Cyber Ticker Bar */}
      <div className="bg-slate-950 border-b border-cyan-500/20 text-slate-300 text-xs py-1.5 px-6 hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-wider text-[10px] bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
              <Zap className="h-3 w-3 animate-pulse" /> Express Dispatch
            </span>
            <span className="text-slate-400 text-[11px]">
              Fast Pan-India Supply: Siemens, Mitsubishi, Omron, P+F, AB & Delta
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-cyan-400" /> Makarba, Ahmedabad
            </span>
            <span className="flex items-center gap-1 text-slate-300 font-mono">
              <ShieldCheck className="h-3 w-3 text-emerald-400" /> GST: {company.gst}
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header className="sticky top-0 z-40 glass-header border-b border-slate-800/80 shadow-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          {/* Logo Brand Identity */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 font-display font-black text-slate-950 text-xl shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
              CAT
              <span className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="leading-tight">
              <span className="block font-display text-lg font-extrabold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Concept Automation
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400/90">
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
                  activeProps={{ className: "text-cyan-400 font-bold bg-cyan-500/10 border-cyan-500/30" }}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider text-slate-200 transition-all hover:bg-slate-800/60 hover:text-cyan-400 border border-transparent"
                >
                  {item.label}
                  {item.label === "Products Catalog" && <ChevronDown className="h-3.5 w-3.5 text-cyan-400/70" />}
                </Link>

                {/* Cyber Dropdown Mega Menu */}
                {item.label === "Products Catalog" && (
                  <div className="invisible absolute -left-32 top-full grid w-[780px] grid-cols-3 gap-5 rounded-2xl border border-cyan-500/30 bg-slate-950/95 p-6 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50 mt-2">
                    <div className="col-span-3 border-b border-slate-800 pb-3 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> 21 Verified Product Categories
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {brands.slice(0, 6).map((b) => (
                          <Link
                            key={b}
                            to="/products"
                            search={{ q: b }}
                            className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-bold text-slate-300 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                          >
                            {b}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* PLCs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">PLC Controllers</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* HMIs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">HMI Touch Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* VFDs & Sensors */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Triggers */}
          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-slate-200 border border-slate-700/60 transition-all hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/40"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Glowing Instant Quote CTA */}
            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="h-4 w-4" /> Get Free Quote
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200 border border-slate-700 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {searchOpen && (
          <div className="border-b border-cyan-500/20 bg-slate-950/95 p-4 backdrop-blur-xl animate-in slide-in-from-top">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-2xl items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-cyan-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 199+ part numbers (e.g. S7-1200, GS2110, FR-CS84, Pepperl Fuchs)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-cyan-500/30 bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Search Catalog
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-b border-slate-800 bg-slate-950 p-5 lg:hidden animate-in slide-in-from-top">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  setInquiryOpen(true);
                }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-lg"
              >
                <MessageSquare className="h-4 w-4" /> Get Free Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Left Edge Quick Actions */}
      <FloatingCornerActions />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
