import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Sun, Moon, ChevronDown, MessageSquare, Search } from "lucide-react";
import { useTheme } from "@/lib/theme";
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
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="hidden bg-ink text-ink-foreground md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
            <span className="opacity-80">GSTIN: {company.gst}</span>
            <span className="opacity-80">{company.address}</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies logo"
              className="h-11 w-11 rounded-sm object-contain"
              width={44}
              height={44}
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold uppercase tracking-wide">
                Concept Automation
              </span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Technologies
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeProps={{ className: "text-accent font-bold" }}
                  className="flex items-center gap-1 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                  {item.label === "Products" && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.label === "Products" && (
                  <div className="invisible absolute -left-20 top-full grid w-[760px] grid-cols-3 gap-4 rounded-xl border border-border bg-popover p-5 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100 z-50">
                    <div className="col-span-3 border-b border-border/60 pb-3 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">All 21 Product Categories (v1 Catalog)</span>
                      <div className="flex flex-wrap gap-1">
                        {brands.map((b) => (
                          <Link
                            key={b}
                            to="/products"
                            className="rounded bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {b}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Column 1: PLCs */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-extrabold uppercase text-primary tracking-wider mb-1">PLC Controllers</div>
                      {categories.filter(c => c.type === 'PLC').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-semibold text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: HMIs */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-extrabold uppercase text-primary tracking-wider mb-1">HMI Touch Panels</div>
                      {categories.filter(c => c.type === 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-semibold text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* Column 3: VFDs, Sensors & Power Supplies */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-extrabold uppercase text-primary tracking-wider mb-1">VFD Drives & Sensors</div>
                      {categories.filter(c => c.type !== 'PLC' && c.type !== 'HMI').map((c) => (
                        <Link
                          key={c.slug}
                          to="/products"
                          search={{ q: c.name }}
                          className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-semibold text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            {/* Search Icon Button (Naksh Style) */}
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Start A Quick Quote CTA (Naksh Style) */}
            <button
              onClick={() => setInquiryOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-all hover:bg-primary/90"
            >
              <MessageSquare className="h-4 w-4" /> Start A Quick Quote
            </button>

            <button
              onClick={toggle}
              aria-label="Toggle colour theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Naksh Header Search Overlay */}
        {searchOpen && (
          <div className="border-b border-border bg-card p-4 animate-in slide-in-from-top">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-xl items-center gap-2">
              <input
                type="text"
                autoFocus
                placeholder="Type model number (e.g. S7-1200, GS2110, FR-CS84)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-b border-border bg-background p-4 lg:hidden animate-in slide-in-from-top">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-secondary hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  setInquiryOpen(true);
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground"
              >
                <MessageSquare className="h-4 w-4" /> Start A Quick Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Left Edge Buttons & Bottom Right Customer Support Assistant */}
      <FloatingCornerActions />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
