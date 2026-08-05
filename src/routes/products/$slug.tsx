import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Globe, MessageSquare, Phone, Send, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, categories, company } from "@/data/catalog";
import { submitInquiry } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = allProducts.find(
      (p) => p.slug === params.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.slug
    );
    const category = categories.find((c) => c.slug === params.slug);

    if (!product && !category) throw notFound();

    return { product, category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product Not Found | Concept Automation Technologies" }],
      };
    }
    const { product, category } = loaderData;
    const name = product ? product.name : category!.name;
    const desc = product ? product.description : category!.blurb;
    return {
      meta: [
        { title: `${name} | Concept Automation Technologies` },
        { name: "description", content: desc },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product, category } = Route.useLoaderData();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const title = product ? product.name : category!.name;
  const brand = product ? product.brand : category!.brand;
  const image = product ? product.image : category!.image;
  const partNumber = product ? product.partNumber : "";
  const description = product ? product.description : category!.blurb;
  const availability = product ? product.availability : "In Stock";
  const warranty = product ? product.warranty : "1 Year OEM Warranty";
  const origin = product ? product.origin : "Germany / Japan";
  const specs = product?.specifications || [
    { label: "Category", value: category?.name || "Automation Hardware" },
    { label: "Brand", value: category?.brand || brand || "Genuine OEM" },
    { label: "Location", value: "Makarba, Ahmedabad, Gujarat" },
    { label: "Warranty", value: "1 Year Official Warranty" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: 1,
    location: "",
    message: "",
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in your Name, Email, and Phone number.");
      return;
    }

    setLoading(true);
    const res = await submitInquiry({
      ...formData,
      product_name: title,
      part_number: partNumber,
    });
    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      toast.success("Inquiry Submitted Successfully!", {
        description: "Our engineering team will send you an official quotation shortly.",
      });
    }
  };

  const related = allProducts.filter((p) => p.brand === brand && p.name !== title).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb Header */}
        <section className="border-b border-border bg-card py-6">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Catalog
            </Link>
            <span className="text-xs text-muted-foreground font-semibold">
              Category: <span className="text-accent">{brand}</span>
            </span>
          </div>
        </section>

        {/* Product Details & Specs */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Preview & Key Badges */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white p-8 dark:bg-black/20 shadow-md">
                <span className="absolute left-4 top-4 z-10 rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {brand}
                </span>
                <span className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Check className="h-3.5 w-3.5" /> {availability}
                </span>
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Trust Cards */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <ShieldCheck className="mx-auto h-5 w-5 text-accent" />
                  <div className="mt-1 text-[11px] font-bold text-foreground">{warranty}</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <Globe className="mx-auto h-5 w-5 text-accent" />
                  <div className="mt-1 text-[11px] font-bold text-foreground">Origin: {origin}</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <Truck className="mx-auto h-5 w-5 text-accent" />
                  <div className="mt-1 text-[11px] font-bold text-foreground">Express Dispatch</div>
                </div>
              </div>
            </div>

            {/* Overview, Technical Specs & Inquiry Form */}
            <div>
              <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">{brand} Industrial Automation</span>
              <h1 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>

              {partNumber && (
                <div className="mt-2 text-sm font-mono text-muted-foreground">
                  OEM Part Number: <strong className="text-accent">{partNumber}</strong>
                </div>
              )}

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-3 border-b border-border pb-2">
                  Technical Specifications
                </h3>
                <div className="overflow-hidden rounded-lg border border-border bg-card">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      {specs.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-background/40" : "bg-card"}>
                          <td className="px-4 py-2.5 font-semibold text-muted-foreground border-r border-border/50 w-1/3">
                            {item.label}
                          </td>
                          <td className="px-4 py-2.5 font-medium text-foreground">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inline Quotation Form */}
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  Get Official Price & Delivery Quotation
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Direct response from Concept Automation Technologies sales desk.
                </p>

                {submitted ? (
                  <div className="mt-4 rounded-lg bg-emerald-500/10 p-4 text-center border border-emerald-500/20">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-500" />
                    <div className="mt-2 text-sm font-bold text-foreground">Quotation Request Received!</div>
                    <p className="text-xs text-muted-foreground">We will email and call you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="mt-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                      <input
                        type="number"
                        min={1}
                        placeholder="Quantity Required"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                        className="rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Delivery City / Additional Notes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded bg-accent px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : <><Send className="h-3.5 w-3.5" /> Submit Official Inquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="border-t border-border bg-surface py-12">
            <div className="mx-auto max-w-7xl px-6">
              <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs">Similar Automation Parts</span>
              <h2 className="mt-1 font-display text-2xl font-bold uppercase text-foreground">
                More {brand} Stock Items
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
