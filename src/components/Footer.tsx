import { Link } from "@tanstack/react-router";
import { Phone, MapPin, User } from "lucide-react";
import { categories, company } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="accent-bar h-1 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Concept Automation Technologies logo"
              className="h-12 w-12 rounded-sm object-contain"
              width={48}
              height={48}
            />
            <span className="font-display text-lg font-bold uppercase leading-tight">
              Concept Automation
              <br />
              Technologies
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-75">
            Importer, exporter, trader and supplier of factory automation products — PLC, HMI,
            VFD, DC drives, servo and motion control systems.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest opacity-60">GST: {company.gst}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                Company Profile
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-accent">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Product Range
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm opacity-80 sm:grid-cols-2">
            {categories.slice(0, 12).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  className="hover:text-accent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-3">
              <User className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {company.owner} ({company.role})
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={company.phoneHref} className="hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {company.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs opacity-60">
          &copy; {new Date().getFullYear()} Concept Automation Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
