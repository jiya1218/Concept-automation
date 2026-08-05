import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Globe, MessageSquare, Phone, Send, Check, Sparkles, Award } from "lucide-react";
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
    if (!loaderData) {
      return {
        meta: [{ title: "Product Not Found | Concept Automation Technologies" }],
      };
    }
    const { product, category } = loaderData;
    const name = product ? product.name : (category?.name || "Product Detail");
    const desc = product ? product.description : (category ? `${category.name} supplied by Concept Automation Technologies Makarba, Ahmedabad.` : "Industrial Automation Parts Supplier");
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
  const [errorCount, setErrorCount] = useState(0);

  const title = product ? product.name : (category?.name || "Product Detail");
  const brand = product ? product.brand : (category?.brand || "OEM Hardware");
  const partNumber = product ? product.partNumber : "";
  const rawImage = product?.image || "";
  
  const getImageSrc = () => {
    if (errorCount === 0) {
      return getProxiedImageUrl(rawImage);
    }
    if (errorCount === 1) {
      return getFallbackImageUrl(brand, product?.type || category?.type);
    }
    return getSvgDataUrl(title, brand);
  };
  const description = product ? product.description : (category ? `${category.name} supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch.` : "Original OEM factory automation hardware.");
  const availability = product?.stock !== false ? "In Stock - Ready to Dispatch" : "Available on Order";
  const warranty = "12 Months Official Warranty";
  const origin = "Germany / Japan";
  const specs = product?.specifications || [
    { label: "Category", value: category?.name || "Automation Hardware" },
    { label: "Brand", value: category?.brand || brand || "Genuine OEM" },
    { label: "Dispatch Location", value: "Makarba, Ahmedabad, Gujarat" },
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
        description: "Our engineering desk in Makarba, Ahmedabad will send you an official quotation shortly.",
      });
    }
  };

  const related = allProducts.filter((p) => p.brand.toLowerCase() === brand.toLowerCase() && p.name !== title).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100">
      <Header />

      <main>
        {/* Breadcrumb Bar */}
        <section className="border-b border-slate-800 bg-slate-950 py-4">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Products Catalog
            </Link>
            <span className="text-xs text-slate-400 font-semibold">
              Manufacturer: <span className="text-white font-bold">{brand}</span>
            </span>
          </div>
        </section>

        {/* Product Details Workspace */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left: Product Image Box */}
            <div>
              <div className="glass-card relative aspect-square overflow-hidden rounded-3xl p-8 border border-slate-800 flex items-center justify-center bg-slate-900/90 shadow-2xl">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/40">
                  {brand}
                </span>
                <span className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/40">
                  <Check className="h-3.5 w-3.5" /> {availability}
                </span>

                <img
                  src={getImageSrc()}
                  alt={title}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setErrorCount((prev) => prev + 1);
                  }}
                  className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
                  <ShieldCheck className="mx-auto h-5 w-5 text-cyan-400 mb-1" />
                  <div className="text-[11px] font-bold text-slate-200">{warranty}</div>
                </div>
                <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
                  <Globe className="mx-auto h-5 w-5 text-cyan-400 mb-1" />
                  <div className="text-[11px] font-bold text-slate-200">Origin: {origin}</div>
                </div>
                <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
                  <Truck className="mx-auto h-5 w-5 text-emerald-400 mb-1" />
                  <div className="text-[11px] font-bold text-slate-200">Express Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Inquiry Form */}
            <div className="space-y-6">
              <div>
                <span className="eyebrow">{brand} Industrial Automation</span>
                <h1 className="mt-2 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                  {title}
                </h1>

                {partNumber && (
                  <div className="mt-2 text-sm font-mono text-slate-400">
                    OEM Part Number: <strong className="text-cyan-400">{partNumber}</strong>
                  </div>
                )}

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
                <div className="bg-slate-900/80 px-5 py-3 border-b border-slate-800 font-display text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" /> Technical Specifications
                </div>
                <table className="w-full text-left text-xs">
                  <tbody>
                    {specs.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/80"}>
                        <td className="px-5 py-3 font-semibold text-slate-400 border-b border-slate-800/40 w-1/3">
                          {item.label}
                        </td>
                        <td className="px-5 py-3 font-bold text-white border-b border-slate-800/40">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Embedded Price Quote Form */}
              <div className="glass-card rounded-2xl p-6 border border-orange-500/30">
                <h3 className="font-display text-base font-bold uppercase text-white flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-orange-400" /> Get Official Price & Delivery Quote
                </h3>
                <p className="mt-1 text-xs text-slate-400 mb-4">Direct response from Concept Automation Technologies sales desk.</p>

                {submitted ? (
                  <div className="rounded-xl bg-emerald-500/20 p-4 text-center border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="mx-auto h-6 w-6 mb-1" />
                    Quote request submitted for {title}! We will email/call you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="email"
                        required
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                      <input
                        type="number"
                        min={1}
                        placeholder="Quantity Required"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-display text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all disabled:opacity-50"
                    >
                      {loading ? "Submitting Inquiry..." : "Submit Price Quote Request"}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* Related Brand Products */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-slate-800 pt-12">
              <span className="eyebrow text-xs">More {brand} Stock</span>
              <h2 className="mt-1 font-display text-2xl font-bold uppercase text-white mb-6">
                Related {brand} Products
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
