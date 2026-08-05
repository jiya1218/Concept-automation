import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brands, company } from "@/data/catalog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company Profile | Concept Automation Technologies" },
      {
        name: "description",
        content:
          "Concept Automation Technologies, Ahmedabad — importer, exporter, trader and supplier of PLC, HMI, VFD and servo motion control systems from leading global brands.",
      },
      { property: "og:title", content: "Company Profile | Concept Automation Technologies" },
      {
        property: "og:description",
        content:
          "Learn about our team, infrastructure and multi-brand factory automation supply capability.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Company Profile</span>
            <h1 className="section-title mt-3 text-4xl sm:text-5xl">About Our Company</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A trusted name in the factory automation supply chain, based in Ahmedabad, Gujarat.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="section-title text-2xl">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Concept Automation Technologies is a prominent importer, exporter, trader and
              supplier of factory automation products like PLC / Programmable Logic Controller,
              HMI / Human Machine Interface, VFD / AC drive, DC drive, servo and motion control
              systems of various reputed brands such as Siemens, Mitsubishi, Proface, Danfoss,
              Omron, Allen Bradley, Fuji, Delta and Schneider.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We provide customized trade solutions for industrial automation goods from reputable
              manufacturers. Our knowledgeable staff listens to what our customers need, provides
              expertise, and helps them choose the best system and product. Our goal is to be a key
              player in the worldwide engineering automation system supply chain, and we promise to
              provide contentment to all the clients that associate with us.
            </p>

            <h2 className="section-title mt-12 text-2xl">Our Team</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Because of the nature of our business, we have assembled a team of highly skilled and
              diligent professionals who make sure that every task we take on is completed well
              within the allocated time. They use the tools and technology that our company has to
              ensure that the quality of our products either satisfies or surpasses international
              standards.
            </p>

            <h2 className="section-title mt-12 text-2xl">Why Us?</h2>
            <ul className="mt-4 space-y-3">
              {["Effective after-sale services", "Solid infrastructure", "Capacious warehouse"].map(
                (w) => (
                  <li key={w} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    {w}
                  </li>
                ),
              )}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="card-surface rounded-md p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Business Details
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Nature of business</dt>
                  <dd className="font-medium">Importer, Exporter, Trader & Supplier</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">GST No.</dt>
                  <dd className="font-medium">{company.gst}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Proprietor</dt>
                  <dd className="font-medium">{company.owner}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium">{company.address}</dd>
                </div>
              </dl>
            </div>

            <div className="card-surface rounded-md p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Brands We Deal In
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent-foreground"
            >
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
