import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { categories, company } from "@/data/catalog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Company Profile" },
  { to: "/products", label: "Our Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <span className="opacity-80">GST : {company.gst}</span>
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
                activeProps={{ className: "text-accent" }}
                className="flex items-center gap-1 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              >
                {item.label}
                {item.label === "Our Products" && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.label === "Our Products" && (
                <div className="invisible absolute left-0 top-full grid w-[520px] grid-cols-2 gap-1 rounded-md border border-border bg-popover p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/products/$slug"
                      params={{ slug: c.slug }}
                      className="rounded px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            onClick={toggle}
            aria-label="Toggle colour theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 font-display text-sm font-semibold uppercase tracking-wider hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="accent-bar h-0.5 w-full" />
    </header>
  );
}
