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
      {/* Top Ticker Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 border-b border-slate-800 text-slate-300 text-xs py-1.5 px-6 hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider text-[10px] bg-sky-100 dark:bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/30">
              <Zap className="h-3 w-3 animate-pulse text-amber-500" /> Express Dispatch
            </span>
            <span className="text-slate-300 dark:text-slate-400 text-[11px]">
              Fast Pan-India Supply: Siemens, Mitsubishi, Omron, P+F, AB & Delta
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-slate-300 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-cyan-600 dark:text-cyan-400" /> Makarba, Ahmedabad
            </span>
            <span className="flex items-center gap-1 font-mono">
              <ShieldCheck className="h-3 w-3 text-emerald-500" /> GST: {company.gst}
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header className="sticky top-0 z-40 glass-header shadow-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          {/* Official Logo Brand Identity */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies logo"
              className="h-11 w-11 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-800 shadow-md transition-transform group-hover:scale-105"
              width={44}
              height={44}
            />
            <div className="leading-tight">
              <span className="block font-display text-lg font-extrabold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                Concept Automation
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-400">
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
                  activeProps={{ className: "text-sky-600 dark:text-cyan-400 font-bold bg-sky-50 dark:bg-cyan-500/10 border-sky-200 dark:border-cyan-500/30" }}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-sky-600 dark:hover:text-cyan-400 border border-transparent"
                >
                  {item.label}
                  {item.label === "Products Catalog" && <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
                </Link>

                {/* Mega Menu */}
                {item.label === "Products Catalog" && (
                  <div className="invisible absolute -left-32 top-full grid w-[780px] grid-cols-3 gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50 mt-2">
                    <div className="col-span-3 border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> 21 Verified Product Categories
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {brands.slice(0, 6).map((b) => (
                          <Link
                            key={b}
                            to="/products"
                            search={{ q: b }}
                            className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:bg-sky-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-slate-950 transition-colors"
                          >
                            {b}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* PLCs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-600 dark:text-cyan-400 tracking-wider mb-2 border-b border-slate-100 dark:border-slate-800 pb-1">PLC Controllers</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-sky-50 dark:hover:bg-cyan-500/10 hover:text-sky-600 dark:hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-cyan-400" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* HMIs */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-600 dark:text-cyan-400 tracking-wider mb-2 border-b border-slate-100 dark:border-slate-800 pb-1">HMI Touch Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-sky-50 dark:hover:bg-cyan-500/10 hover:text-sky-600 dark:hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-cyan-400" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* VFDs & Sensors */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-black uppercase text-sky-600 dark:text-cyan-400 tracking-wider mb-2 border-b border-slate-100 dark:border-slate-800 pb-1">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-sky-50 dark:hover:bg-cyan-500/10 hover:text-sky-600 dark:hover:text-cyan-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-cyan-400" />
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
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition-all hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggle}
              aria-label="Toggle Light and Dark Mode"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition-all hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-slate-700" />
              )}
            </button>

            {/* Glowing Instant Quote CTA */}
            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="h-4 w-4" /> Get Free Quote
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {searchOpen && (
          <div className="border-b border-slate-200 dark:border-cyan-500/20 bg-white/95 dark:bg-slate-950/95 p-4 backdrop-blur-xl animate-in slide-in-from-top">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-2xl items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-sky-600 dark:text-cyan-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 199+ part numbers (e.g. S7-1200, GS2110, FR-CS84, Pepperl Fuchs)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 dark:border-cyan-500/30 bg-slate-50 dark:bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-sky-600 dark:bg-cyan-500 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white dark:text-slate-950 hover:bg-sky-500 dark:hover:bg-cyan-400 transition-colors"
              >
                Search Catalog
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 lg:hidden animate-in slide-in-from-top">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-cyan-500/10 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
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

      {/* Floating Actions */}
      <FloatingCornerActions />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
