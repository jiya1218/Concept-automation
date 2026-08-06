import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, MessageSquare, Search, ArrowRight } from "lucide-react";
import { categories, company, brands } from "@/data/catalog";
import { InquiryModal } from "./InquiryModal";
import { FloatingCornerActions } from "./FloatingCornerActions";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Track scroll for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
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
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        {/* Top info bar */}
        <div className="hidden border-b border-stone-100 bg-stone-950 text-white md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] tracking-wide">
            <span className="opacity-80">GSTIN: {company.gst}</span>
            <div className="flex items-center gap-4">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="h-3 w-3" /> {company.phone}
              </a>
              <span className="opacity-50">|</span>
              <span className="opacity-80">{company.address}</span>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain"
              width={48}
              height={48}
            />
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-base font-bold tracking-tight text-stone-900 sm:text-lg">
                Concept Automation
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Technologies
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeProps={{ className: "!bg-stone-950 !text-white" }}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600 transition-all hover:bg-stone-100 hover:text-stone-900"
                >
                  {item.label}
                  {item.label === "Products" && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Products mega menu */}
                {item.label === "Products" && (
                  <div className="invisible absolute -left-32 top-full grid w-[680px] grid-cols-3 gap-5 rounded-2xl border border-stone-200 bg-white p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
                    <div className="col-span-3 border-b border-stone-100 pb-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-600">Product Categories</span>
                      <Link to="/products" className="text-[11px] font-semibold text-stone-500 hover:text-amber-600 flex items-center gap-1">
                        View All <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-2">PLC Controllers</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                          <span className="h-1 w-1 rounded-full bg-amber-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-2">HMI Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                          <span className="h-1 w-1 rounded-full bg-amber-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-2">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                          <span className="h-1 w-1 rounded-full bg-amber-500" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-stone-950 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-amber-600 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Get Quote
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-600 hover:bg-stone-100 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="border-t border-stone-100 bg-white p-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-xl items-center gap-2">
              <input
                type="text"
                autoFocus
                placeholder="Search by model number (e.g. S7-1200, GS2110, FR-CS84)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-stone-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-amber-600 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile drawer — full screen overlay */}
      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl animate-slide-right flex flex-col">
            <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
              <span className="font-display text-sm font-bold tracking-tight text-stone-900">Menu</span>
              <button onClick={() => setOpen(false)} className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-stone-100">
                <X className="h-5 w-5 text-stone-600" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 hover:text-amber-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-4 border-t border-stone-100" />

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                Call {company.phone}
              </a>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation%20team,%20I%20need%20a%20price%20quotation.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us
              </a>
            </nav>

            <div className="border-t border-stone-100 p-4">
              <button
                onClick={() => { setOpen(false); setInquiryOpen(true); }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-950 py-3.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                <MessageSquare className="h-4 w-4" /> Request a Quote
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
