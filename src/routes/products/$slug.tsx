import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Globe, MessageSquare, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, categories, company } from "@/data/catalog";
import { submitInquiry } from "@/lib/supabase";
import { toast } from "sonner";
import { getProxiedImageUrl, getFallbackImageUrl, getSvgDataUrl } from "@/lib/imageHelper";

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
    if (!loaderData) return { meta: [{ title: "Product Not Found | Concept Automation Technologies" }] };
    const { product, category } = loaderData;
    const name = product ? product.name : (category?.name || "Product Detail");
    const desc = product ? product.description : (category ? `${category.name} supplied by Concept Automation Technologies.` : "Industrial Automation Parts Supplier");
    return { meta: [{ title: `${name} | Concept Automation Technologies` }, { name: "description", content: desc }] };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product, category } = Route.useLoaderData();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const title = product ? product.name : (category?.name || "Product Detail");
  const brand = product ? product.brand : (category?.brand || "OEM Hardware");
  const partNumber = product ? product.partNumber : "";
  const rawImage = product?.image || "";

  const getImageSrc = () => {
    if (errorCount === 0) return getProxiedImageUrl(rawImage);
    if (errorCount === 1) return getFallbackImageUrl(brand, product?.type || category?.type);
    return getSvgDataUrl(title, brand);
  };

  const description = product ? product.description : (category ? `${category.name} supplied by Concept Automation Technologies Makarba, Ahmedabad.` : "Original OEM factory automation hardware.");
  const specs = product?.specifications || [
    { label: "Category", value: category?.name || "Automation Hardware" },
    { label: "Brand", value: brand },
    { label: "Dispatch", value: "Makarba, Ahmedabad, Gujarat" },
    { label: "Warranty", value: "1 Year Official Warranty" },
  ];

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", quantity: 1, location: "", message: "",
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in Name, Email, and Phone.");
      return;
    }
    setLoading(true);
    const res = await submitInquiry({ ...formData, product_name: title, part_number: partNumber });
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      toast.success("Inquiry Submitted!", { description: "We'll send you an official quotation shortly." });
    }
  };

  const related = allProducts.filter((p) => p.brand.toLowerCase() === brand.toLowerCase() && p.name !== title).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-stone-200 bg-stone-50 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-amber-600 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Catalog
            </Link>
            <span className="text-xs text-stone-400">
              Brand: <span className="text-stone-700 font-semibold">{brand}</span>
            </span>
          </div>
        </div>

        {/* Product Detail */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Image */}
            <div className="animate-fade-up">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 flex items-center justify-center shadow-sm">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-stone-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {brand}
                </span>
                <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  <Check className="h-3 w-3" /> In Stock
                </span>
                <img
                  src={getImageSrc()}
                  alt={title}
                  referrerPolicy="no-referrer"
                  onError={() => setErrorCount((prev) => prev + 1)}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Trust badges */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, label: "12 Month Warranty" },
                  { icon: Globe, label: "Germany / Japan" },
                  { icon: Truck, label: "Express Dispatch" },
                ].map((b) => (
                  <div key={b.label} className="rounded-xl border border-stone-200 bg-white p-3 text-center shadow-sm">
                    <b.icon className="mx-auto h-4 w-4 text-amber-600 mb-1" />
                    <div className="text-[10px] font-semibold text-stone-700">{b.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info + Form */}
            <div className="space-y-5 animate-fade-up stagger-2">
              <div>
                <span className="eyebrow">{brand} Industrial Automation</span>
                <h1 className="mt-2 font-display text-2xl font-extrabold text-stone-900 sm:text-3xl">{title}</h1>
                {partNumber && (
                  <div className="mt-1 text-sm font-mono text-stone-400">
                    Part: <strong className="text-amber-600">{partNumber}</strong>
                  </div>
                )}
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">{description}</p>
              </div>

              {/* Specs */}
              <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
                <div className="bg-stone-50 px-5 py-3 border-b border-stone-200 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500">
                  Technical Specifications
                </div>
                <table className="w-full text-left text-sm">
                  <tbody>
                    {specs.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-stone-50/50" : "bg-white"}>
                        <td className="px-5 py-2.5 text-stone-500 border-b border-stone-100 w-1/3 font-medium">{item.label}</td>
                        <td className="px-5 py-2.5 font-semibold text-stone-900 border-b border-stone-100">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quote Form */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/30 p-5 sm:p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-stone-900 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-amber-600" /> Get Official Price Quote
                </h3>
                <p className="mt-1 text-xs text-stone-500 mb-4">Direct response from our sales desk.</p>

                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 p-4 text-center border border-emerald-200 text-emerald-800 text-sm font-semibold">
                    <CheckCircle2 className="mx-auto h-5 w-5 mb-1 text-emerald-600" />
                    Quote request submitted for {title}! We'll contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input type="text" required placeholder="Your Name *" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
                      <input type="tel" required placeholder="Phone / WhatsApp *" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input type="email" required placeholder="Work Email *" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
                      <input type="number" min={1} placeholder="Quantity" value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                        className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full rounded-xl bg-stone-950 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors disabled:opacity-50">
                      {loading ? "Submitting..." : "Submit Price Quote Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14 border-t border-stone-200 pt-10">
              <span className="eyebrow">More {brand} Stock</span>
              <h2 className="mt-1 font-display text-xl font-bold text-stone-900 sm:text-2xl mb-6">Related {brand} Products</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (<ProductCard key={p.id} product={p} />))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
