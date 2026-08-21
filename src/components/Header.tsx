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
      <header className={`sticky top-0 z-40 bg-[#f6f4ee]/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-[#e7e5e4]"}`}>
        {/* Top Info Bar — Deep Charcoal Espresso (#140d09) */}
        <div className="hidden bg-[#140d09] text-[#f6f4ee] md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
            <span className="opacity-90">GSTIN: <span className="font-mono text-[#b45309] font-bold">{company.gst}</span></span>
            <div className="flex items-center gap-6">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-[#b45309] transition-colors">
                <Phone className="h-3 w-3 text-[#b45309]" /> {company.phone}
              </a>
              <span className="opacity-30">|</span>
              <span className="opacity-90">{company.address}</span>
            </div>
          </div>
        </div>

        {/* Main Header Row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          {/* Left: Logo Name */}
          <div className="flex-1 flex justify-start min-w-0">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.jpg"
                alt="Concept Automation Technologies"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-contain border border-[#e7e5e4] p-0.5 bg-white shadow-sm"
                width={64}
                height={64}
              />
              <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-[#1a130f] hidden sm:block">
                Concept Automation <span className="text-[#b45309]">Technologies</span>
              </span>
            </Link>
          </div>

          {/* Center: Main Menu Items */}
          <nav className="hidden items-center justify-center gap-1 lg:flex shrink-0 lg:translate-x-10">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeProps={{ className: "!bg-[#1a130f] !text-white" }}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1a130f] transition-all hover:bg-[#f4f1eb] hover:text-[#b45309]"
                >
                  {item.label}
                  {item.label === "Products" && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {/* Mega Menu */}
                {item.label === "Products" && (
                  <div className="invisible absolute -left-28 top-full grid w-[680px] grid-cols-3 gap-5 rounded-2xl border border-[#e7e5e4] bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50 animate-fade-up">
                    <div className="col-span-3 border-b border-[#e7e5e4] pb-3 flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#b45309]">All Hardware Categories</span>
                      <Link to="/products" className="text-xs font-bold text-[#1a130f] hover:text-[#b45309] flex items-center gap-1">
                        View Full Catalog <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#6b5e54] mb-2">PLC Systems</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#1a130f] hover:bg-[#f4f1eb] hover:text-[#b45309] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b45309]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#6b5e54] mb-2">HMI Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#1a130f] hover:bg-[#f4f1eb] hover:text-[#b45309] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b45309]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#6b5e54] mb-2">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link key={c.slug} to="/products" search={{ q: c.name }}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#1a130f] hover:bg-[#f4f1eb] hover:text-[#b45309] transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b45309]" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search Icon and Get Quote */}
          <div className="flex-1 flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e7e5e4] text-[#1a130f] hover:bg-[#f4f1eb] hover:text-[#b45309] transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#1a130f] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-all shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#b45309]" /> Get Quick Quote
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e7e5e4] text-[#1a130f] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="border-t border-[#e7e5e4] bg-[#f4f1eb] p-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-xl items-center gap-2">
              <input
                type="text"
                autoFocus
                placeholder="Search part number (e.g. S7-1200, GS2110, FR-CS84)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#e7e5e4] bg-white px-4 py-2.5 text-sm text-[#1a130f] placeholder-[#6b5e54] focus:outline-none focus:ring-2 focus:ring-[#1a130f]/20 focus:border-[#1a130f]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-[#1a130f] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-colors"
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
          <div className="fixed inset-0 z-40 bg-[#140d09]/60 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-[#f6f4ee] shadow-2xl animate-slide-right flex flex-col">
            <div className="flex items-center justify-between border-b border-[#e7e5e4] px-6 py-4 bg-white">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#1a130f]">Menu</span>
              <button onClick={() => setOpen(false)} className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-[#f4f1eb]">
                <X className="h-5 w-5 text-[#1a130f]" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-sm font-bold uppercase text-[#1a130f] hover:bg-[#f4f1eb] hover:text-[#b45309] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-4 border-t border-[#e7e5e4]" />

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-[#1a130f] hover:bg-[#f4f1eb]"
              >
                <Phone className="h-4 w-4 text-[#b45309]" />
                Call {company.phone}
              </a>
            </nav>

            <div className="border-t border-[#e7e5e4] p-4 bg-white">
              <button
                onClick={() => { setOpen(false); setInquiryOpen(true); }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a130f] py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-colors shadow"
              >
                <MessageSquare className="h-4 w-4 text-[#b45309]" /> Request Quote
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
