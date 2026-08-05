import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { categories, company, hotProducts, popularProducts } from "@/data/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | Concept Automation Technologies" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} | Concept Automation Technologies`;
    return {
      meta: [
        { title },
        { name: "description", content: category.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: category.blurb },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const related = [...popularProducts, ...hotProducts].filter(
    (p) => p.category === category.name,
  );
  const fallback = [...popularProducts].slice(0, 4);
  const items = related.length ? related : fallback;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-surface py-14">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
            <span className="eyebrow mt-6 block">{category.brand}</span>
            <h1 className="section-title mt-2 text-4xl sm:text-5xl">{category.name}</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div className="card-surface rounded-md bg-surface p-8">
            <img
              src={category.image}
              alt={category.name}
              width={640}
              height={480}
              className="mx-auto h-80 w-full object-contain"
            />
          </div>
          <div>
            <h2 className="section-title text-2xl">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{category.blurb}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We supply genuine {category.brand} {category.type} hardware along with matching
              accessories, cables and programming support. Share your part number and we will
              confirm availability, lead time and pricing.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Genuine, brand-new stock",
                "Cross-reference for obsolete part numbers",
                "Technical selection assistance",
                "Pan-India dispatch and export supply",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent-foreground"
              >
                Send Inquiry
              </Link>
              <a
                href={company.phoneHref}
                className="rounded-md border border-border px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] hover:border-accent hover:text-accent"
              >
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="eyebrow">Related</span>
            <h2 className="section-title mt-3 text-3xl">You May Also Need</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
