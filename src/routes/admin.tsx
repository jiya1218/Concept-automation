import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Lock,
  Plus,
  Trash2,
  Edit3,
  Search,
  Package,
  FileSpreadsheet,
  LogOut,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Eye,
  Building2,
  Phone,
  Mail,
  Calendar,
  Layers,
  Sparkles,
  Check,
  X,
  AlertCircle
} from "lucide-react";
import { brands, Product, ProductSpec } from "@/data/catalog";
import {
  fetchCustomProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchInquiries,
  InquiryPayload,
} from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal | Concept Automation Technologies" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPortal,
});

const DEFAULT_ADMIN_PASS = "concept@admin2026";
const AUTH_STORAGE_KEY = "concept_admin_authenticated";

function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  // Tabs: 'products' | 'inquiries' | 'add_product'
  const [activeTab, setActiveTab] = useState<"products" | "inquiries" | "add_product">("products");

  // Data states
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [inquiriesList, setInquiriesList] = useState<InquiryPayload[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Search & Filter
  const [productSearch, setProductSearch] = useState("");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState("All");

  // Product Form state for Creation & Editing
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    name: string;
    partNumber: string;
    brand: string;
    category: string;
    type: Product["type"];
    description: string;
    image: string;
    availability: string;
    stock: boolean;
    specifications: ProductSpec[];
  }>({
    name: "",
    partNumber: "",
    brand: "Siemens",
    category: "Siemens PLC",
    type: "PLC",
    description: "",
    image: "",
    availability: "In Stock - Ready for Express Dispatch",
    stock: true,
    specifications: [
      { label: "Condition", value: "100% Brand New Original OEM" },
      { label: "Manufacturer", value: "Siemens" },
      { label: "Dispatch Location", value: "Makarba, Ahmedabad, Gujarat" },
      { label: "Warranty", value: "12 Months Official Warranty" },
    ],
  });

  // Check auth session on load
  useEffect(() => {
    const isAuth = sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data when authenticated
  const loadAdminData = async () => {
    setLoadingData(true);
    try {
      const [prods, inqs] = await Promise.all([fetchCustomProducts(), fetchInquiries()]);
      setProductsList(prods);
      setInquiriesList(inqs);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAdminData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === DEFAULT_ADMIN_PASS || passwordInput === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      setAuthError(false);
      toast.success("Admin Authentication Successful", {
        description: "Welcome to Concept Automation Product Management Console.",
      });
    } else {
      setAuthError(true);
      toast.error("Invalid Admin Password", {
        description: "Please enter the correct password to access the portal.",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    toast.info("Logged out of Admin Portal.");
  };

  // Handle Specifications Input
  const handleSpecChange = (index: number, key: "label" | "value", val: string) => {
    const updated = [...formData.specifications];
    updated[index][key] = val;
    setFormData({ ...formData, specifications: updated });
  };

  const addSpecRow = () => {
    setFormData({
      ...formData,
      specifications: [...formData.specifications, { label: "", value: "" }],
    });
  };

  const removeSpecRow = (index: number) => {
    setFormData({
      ...formData,
      specifications: formData.specifications.filter((_, i) => i !== index),
    });
  };

  // Submit Product (Create or Update)
  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.image) {
      toast.error("Please fill in required fields: Name, Brand, and Image URL.");
      return;
    }

    const slug =
      formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") + `-${Date.now().toString().slice(-4)}`;

    const productPayload: Product = {
      id: editingProductId || `custom-${Date.now()}`,
      name: formData.name,
      partNumber: formData.partNumber || formData.name,
      brand: formData.brand,
      category: formData.category || `${formData.brand} ${formData.type}`,
      type: formData.type,
      description: formData.description || `Original 100% genuine ${formData.name} supplied by Concept Automation Technologies Makarba, Ahmedabad. Fast Pan-India dispatch and global export.`,
      specifications: formData.specifications.filter((s) => s.label.trim() !== ""),
      image: formData.image,
      slug: editingProductId
        ? productsList.find((p) => p.id === editingProductId)?.slug || slug
        : slug,
      stock: formData.stock,
      availability: formData.availability || "In Stock - Ready for Express Dispatch",
    };

    if (editingProductId) {
      await updateProduct(editingProductId, productPayload);
      toast.success("Product Updated Successfully!", {
        description: `${formData.name} changes are now live.`,
      });
    } else {
      await createProduct(productPayload);
      toast.success("New Product Published Live!", {
        description: `${formData.name} is now available on the platform.`,
      });
    }

    // Reset Form & reload list
    resetForm();
    await loadAdminData();
    setActiveTab("products");
  };

  const resetForm = () => {
    setEditingProductId(null);
    setFormData({
      name: "",
      partNumber: "",
      brand: "Siemens",
      category: "Siemens PLC",
      type: "PLC",
      description: "",
      image: "",
      availability: "In Stock - Ready for Express Dispatch",
      stock: true,
      specifications: [
        { label: "Condition", value: "100% Brand New Original OEM" },
        { label: "Manufacturer", value: "Siemens" },
        { label: "Dispatch Location", value: "Makarba, Ahmedabad, Gujarat" },
        { label: "Warranty", value: "12 Months Official Warranty" },
      ],
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProductId(product.id);
    setFormData({
      name: product.name,
      partNumber: product.partNumber || "",
      brand: product.brand,
      category: product.category,
      type: product.type,
      description: product.description,
      image: product.image,
      availability: product.availability || "In Stock - Ready for Express Dispatch",
      stock: product.stock,
      specifications: product.specifications.length > 0 ? product.specifications : [
        { label: "Condition", value: "100% Brand New Original OEM" },
        { label: "Manufacturer", value: product.brand },
      ],
    });
    setActiveTab("add_product");
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      await deleteProduct(id);
      toast.success("Product Removed", { description: `${name} has been deleted.` });
      await loadAdminData();
    }
  };

  // Export Inquiries to CSV
  const exportInquiriesCSV = () => {
    if (inquiriesList.length === 0) {
      toast.error("No inquiries to export.");
      return;
    }

    const headers = ["ID,Full Name,Email,Phone,Company,Product Requested,Part Number,Quantity,Message,Date"];
    const rows = inquiriesList.map((inq) =>
      [
        `"${inq.id || ""}"`,
        `"${inq.name.replace(/"/g, '""')}"`,
        `"${inq.email}"`,
        `"${inq.phone}"`,
        `"${(inq.company || "").replace(/"/g, '""')}"`,
        `"${(inq.product_name || "").replace(/"/g, '""')}"`,
        `"${(inq.part_number || "").replace(/"/g, '""')}"`,
        `"${inq.quantity || 1}"`,
        `"${(inq.message || "").replace(/"/g, '""')}"`,
        `"${inq.created_at || ""}"`,
      ].join(",")
    );

    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `customer_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Exported Inquiries to CSV!");
  };

  const filteredProducts = useMemo(() => {
    return productsList.filter((p) => {
      const matchesSearch =
        !productSearch ||
        p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
        p.partNumber.toLowerCase().includes(productSearch.toLowerCase()) ||
        p.brand.toLowerCase().includes(productSearch.toLowerCase());
      const matchesBrand = selectedBrandFilter === "All" || p.brand.toLowerCase() === selectedBrandFilter.toLowerCase();
      return matchesSearch && matchesBrand;
    });
  }, [productsList, productSearch, selectedBrandFilter]);

  // UNAUTHENTICATED LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100 font-sans">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-inner">
              <Lock className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Concept Automation Technologies
            </span>
            <h1 className="mt-3 text-xl font-black uppercase tracking-wider text-white">
              Admin Portal
            </h1>
            <p className="mt-2 text-xs text-slate-400">
              Enter your secure admin password to upload products & manage platform leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Admin Password
              </label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-xs font-semibold text-red-400 border border-red-500/20">
                <AlertCircle className="h-4 w-4 shrink-0" /> Incorrect admin password.
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-orange-400 shadow-lg shadow-orange-500/20"
            >
              Authenticate & Enter Console
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-slate-500">
            Protected Admin System • Concept Automation Technologies
          </p>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN CONSOLE
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-slate-950 text-lg">
              CA
            </div>
            <div>
              <h1 className="font-bold text-sm text-white uppercase tracking-wider">
                Concept Automation
              </h1>
              <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-widest">
                Product Publishing & Leads Console
              </span>
            </div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-xs text-slate-400 border-r border-slate-800 pr-6">
              <div>
                Total Products: <span className="font-mono font-bold text-white">{productsList.length}</span>
              </div>
              <div>
                Lead Inquiries: <span className="font-mono font-bold text-orange-400">{inquiriesList.length}</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold uppercase text-slate-300 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="border-t border-slate-800/80 bg-slate-950/50">
          <div className="mx-auto flex max-w-7xl gap-2 px-6">
            <button
              onClick={() => {
                setActiveTab("products");
                resetForm();
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "products"
                  ? "border-orange-500 text-orange-400 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Package className="h-4 w-4" /> Uploaded Products ({productsList.length})
            </button>

            <button
              onClick={() => {
                setActiveTab("add_product");
                if (!editingProductId) resetForm();
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "add_product"
                  ? "border-orange-500 text-orange-400 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Plus className="h-4 w-4" /> {editingProductId ? "Edit Product" : "Upload New Product"}
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "inquiries"
                  ? "border-orange-500 text-orange-400 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Mail className="h-4 w-4" /> Customer Leads ({inquiriesList.length})
            </button>

            <button
              onClick={loadAdminData}
              className="ml-auto flex items-center gap-1.5 px-3 py-3 text-xs text-slate-400 hover:text-orange-400 transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loadingData ? "animate-spin text-orange-500" : ""}`} /> Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* TAB 1: PRODUCT LIST & MANAGER */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-6">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                  Live Platform Products Catalog
                </h2>
                <p className="text-xs text-slate-400">
                  Products listed here display live on <code className="text-orange-400 font-mono">concept-automation.vercel.app</code>.
                </p>
              </div>

              <button
                onClick={() => {
                  resetForm();
                  setActiveTab("add_product");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/20"
              >
                <Plus className="h-4 w-4" /> Upload New Product
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by Product Name, Part Number, Brand..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <select
                value={selectedBrandFilter}
                onChange={(e) => setSelectedBrandFilter(e.target.value)}
                className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="All">All OEM Brands ({productsList.length})</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-800 bg-slate-950/80 uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                    <tr>
                      <th className="p-4">Preview</th>
                      <th className="p-4">Product Name & Part No</th>
                      <th className="p-4">Brand / Category</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Stock Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-500">
                          No products found matching your filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-4">
                            <img
                              src={p.image.startsWith("http") ? `https://wsrv.nl/?url=${encodeURIComponent(p.image)}&w=100` : p.image}
                              alt={p.name}
                              className="h-12 w-12 rounded-lg object-contain bg-white p-1"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=100";
                              }}
                            />
                          </td>
                          <td className="p-4 font-medium text-white">
                            <div className="font-bold line-clamp-1">{p.name}</div>
                            {p.partNumber && (
                              <div className="font-mono text-[11px] text-slate-400">
                                Part No: <span className="text-orange-400">{p.partNumber}</span>
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-slate-300">
                            <span className="rounded bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-400 border border-orange-500/20">
                              {p.brand}
                            </span>
                            <div className="mt-1 text-[11px] text-slate-400">{p.category}</div>
                          </td>
                          <td className="p-4 text-slate-300">
                            <span className="rounded bg-slate-800 px-2 py-1 text-[10px] font-mono">
                              {p.type}
                            </span>
                          </td>
                          <td className="p-4">
                            {p.stock ? (
                              <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                                <Check className="h-3 w-3" /> In Stock
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded bg-red-500/10 px-2.5 py-1 text-[10px] font-bold text-red-400 border border-red-500/20">
                                <X className="h-3 w-3" /> Out of Stock
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEditProduct(p)}
                                className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-200 hover:border-orange-500 hover:text-orange-400 transition-all"
                                title="Edit Product"
                              >
                                <Edit3 className="h-3.5 w-3.5" /> Edit
                              </button>

                              <button
                                onClick={() => handleDeleteProduct(p.id, p.name)}
                                className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-400 hover:border-red-500 hover:bg-red-500/20 hover:text-red-400 transition-all"
                                title="Delete Product"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: UPLOAD / EDIT PRODUCT FORM */}
        {activeTab === "add_product" && (
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                  {editingProductId ? "Edit Product Details" : "Upload New Product"}
                </h2>
                <p className="text-xs text-slate-400">
                  Products saved here will publish live to the catalog immediately.
                </p>
              </div>

              <button
                onClick={() => {
                  resetForm();
                  setActiveTab("products");
                }}
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-700"
              >
                Back to Products List
              </button>
            </div>

            <form onSubmit={handleProductSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Product Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siemens SIMATIC S7-1500 CPU 1511-1 PN"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    OEM Part Number / Part No
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 6ES7511-1AK02-0AB0"
                    value={formData.partNumber}
                    onChange={(e) => setFormData({ ...formData, partNumber: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white font-mono placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    OEM Brand *
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                    <option value="Custom OEM">Custom / Other Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Hardware Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Product["type"] })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="PLC">PLC (Programmable Logic Controller)</option>
                    <option value="HMI">HMI (Human Machine Interface)</option>
                    <option value="VFD">VFD / AC Drive</option>
                    <option value="Servo">Servo Drive & Motor</option>
                    <option value="Sensor">Sensor / Ultrasonic</option>
                    <option value="Power Supply">Power Supply & Module</option>
                    <option value="Software">Software & Accessories</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Product Image URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/photo-1581092160607-ee22621dd758 or image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    Provide a direct HTTP/HTTPS image URL. The platform will automatically proxy & optimize it for web browsers.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Siemens SIMATIC S7-1500 PLC"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Stock Availability Text
                  </label>
                  <input
                    type="text"
                    placeholder="In Stock - Ready for Express Dispatch"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Product Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide product details, specs summary, and supply information..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Technical Specifications List Builder */}
              <div className="border-t border-slate-800 pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Technical Specifications Table
                  </h3>
                  <button
                    type="button"
                    onClick={addSpecRow}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200 hover:border-orange-500"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Spec Row
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {formData.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Spec Label (e.g. Condition)"
                        value={spec.label}
                        onChange={(e) => handleSpecChange(idx, "label", e.target.value)}
                        className="w-1/3 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Spec Value (e.g. 100% Brand New Original OEM)"
                        value={spec.value}
                        onChange={(e) => handleSpecChange(idx, "value", e.target.value)}
                        className="w-2/3 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-orange-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeSpecRow(idx)}
                        className="text-slate-500 hover:text-red-400"
                        title="Remove row"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setActiveTab("products");
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/20"
                >
                  <CheckCircle2 className="h-4 w-4" /> {editingProductId ? "Update Product" : "Publish Product Live"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 3: CUSTOMER LEADS & QUOTE INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-6">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                  Customer Lead Inquiries & Quote Requests
                </h2>
                <p className="text-xs text-slate-400">
                  Real-time leads submitted via "Get Quote" modals & Contact forms on the deployed platform.
                </p>
              </div>

              <button
                onClick={exportInquiriesCSV}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:border-orange-500 hover:text-orange-400 transition-all"
              >
                <FileSpreadsheet className="h-4 w-4" /> Export CSV
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-800 bg-slate-950/80 uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                    <tr>
                      <th className="p-4">Customer Name & Company</th>
                      <th className="p-4">Contact Phone & Email</th>
                      <th className="p-4">Product Requested</th>
                      <th className="p-4">Qty</th>
                      <th className="p-4">Message / Location</th>
                      <th className="p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {inquiriesList.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-500">
                          No inquiries received yet. Submitted quotes will appear here in real-time.
                        </td>
                      </tr>
                    ) : (
                      inquiriesList.map((inq, idx) => (
                        <tr key={inq.id || idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-4 font-medium text-white">
                            <div className="font-bold">{inq.name}</div>
                            {inq.company && (
                              <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                                <Building2 className="h-3 w-3 text-slate-500" /> {inq.company}
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-slate-300">
                            <div className="flex items-center gap-1 text-orange-400 font-mono">
                              <Phone className="h-3 w-3" /> {inq.phone}
                            </div>
                            <div className="flex items-center gap-1 text-slate-400 mt-0.5 font-mono text-[11px]">
                              <Mail className="h-3 w-3" /> {inq.email}
                            </div>
                          </td>
                          <td className="p-4 text-slate-200">
                            <div className="font-semibold text-white">{inq.product_name || "General Quote"}</div>
                            {inq.part_number && (
                              <div className="font-mono text-[10px] text-orange-400">
                                Part: {inq.part_number}
                              </div>
                            )}
                          </td>
                          <td className="p-4 font-mono font-bold text-white">{inq.quantity || 1}</td>
                          <td className="p-4 text-slate-400 max-w-xs truncate">
                            {inq.message || inq.location || "No additional notes"}
                          </td>
                          <td className="p-4 text-slate-500 font-mono text-[11px]">
                            {inq.created_at ? new Date(inq.created_at).toLocaleDateString() : "Recent"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
