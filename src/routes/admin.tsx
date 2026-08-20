import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { 
  Plus, Edit, Trash2, RotateCcw, Check, Search, LogOut, Lock, 
  Package, Layers, Eye, RefreshCw, X, AlertTriangle, LayoutDashboard,
  CheckCircle, ShieldAlert, SlidersHorizontal, Upload, FileImage
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { allProducts, brands as staticBrands, categories as staticCategories } from "@/data/catalog";
import { 
  getDbProducts, saveProductOverride, deleteProductOverride, 
  mergeProducts, ExtendedProduct, DbProduct, uploadProductImage,
  getGlobalSettings, saveGlobalSetting
} from "@/lib/products";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminPortal,
});

// Access credentials from environment variables or use fallback defaults
const ADMIN_USER = import.meta.env.VITE_ADMIN_USERNAME || "admin";
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || "concept@admin123";

const productTypesList = ["PLC", "HMI", "VFD", "Servo", "Sensor", "Power Supply", "Software"] as const;

function AdminPortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Check auth state on mount
  useEffect(() => {
    const auth = sessionStorage.getItem("concept_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoadingAuth(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem("concept_admin_auth", "true");
      setIsAuthenticated(true);
      toast.success("Logged in successfully!");
    } else {
      toast.error("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("concept_admin_auth");
    setIsAuthenticated(false);
    toast.success("Logged out successfully.");
  };

  if (isLoadingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f4ee]">
        <RefreshCw className="h-8 w-8 animate-spin text-[#b45309]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f4ee] px-4 py-12 sm:px-6 lg:px-8 font-sans">
        <div className="w-full max-w-md space-y-8 rounded-3xl border border-[#e7e5e4] bg-white p-8 sm:p-10 shadow-lg">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[#fbe5d6] p-3 text-[#b45309]">
              <Lock className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-[#1a130f]">
              Admin Portal
            </h2>
            <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Concept Automation Technologies
            </p>
            <div className="rounded-2xl bg-amber-50/50 border border-amber-200/60 p-3.5 text-left text-[11px] text-amber-900/90 font-medium">
              <span className="font-bold text-[#b45309]">Default Access:</span>
              <ul className="mt-1 space-y-0.5 list-disc list-inside">
                <li>Username: <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono text-[10px] font-bold text-amber-950">admin</code></li>
                <li>Password: <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono text-[10px] font-bold text-amber-950">concept@admin123</code></li>
              </ul>
            </div>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleLogin}>
            <div className="space-y-3.5 rounded-md">
              <div>
                <label className="text-xs font-bold text-[#1a130f] block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  className="w-full rounded-xl border border-[#e7e5e4] bg-white px-4 py-2.5 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none focus:ring-1 focus:ring-[#1a130f]/20 shadow-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[#1a130f] block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="e.g. concept@admin123"
                  className="w-full rounded-xl border border-[#e7e5e4] bg-white px-4 py-2.5 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none focus:ring-1 focus:ring-[#1a130f]/20 shadow-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-xl bg-[#1a130f] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:ring-offset-2 transition-all cursor-pointer shadow-md"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <DashboardView onLogout={handleLogout} />;
}

interface DashboardViewProps {
  onLogout: () => void;
}

function DashboardView({ onLogout }: DashboardViewProps) {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedStockFilter, setSelectedStockFilter] = useState("All");

  const { data: globalSettings = { show_stock_status: true } } = useQuery({
    queryKey: ["globalSettings"],
    queryFn: getGlobalSettings,
  });

  // Fetch db overrides
  const { data: dbProducts = [], isLoading: isFetching, refetch } = useQuery({
    queryKey: ["dbProducts"],
    queryFn: getDbProducts,
  });

  const mergedProducts = useMemo(() => {
    return mergeProducts(allProducts, dbProducts);
  }, [dbProducts]);

  // Metrics calculations
  const metrics = useMemo(() => {
    const total = mergedProducts.length;
    const inStock = mergedProducts.filter((p) => p.stock).length;
    const outOfStock = total - inStock;
    const customized = dbProducts.length;
    return { total, inStock, outOfStock, customized };
  }, [mergedProducts, dbProducts]);

  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null);
  
  // Fields state
  const [name, setName] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [brand, setBrand] = useState("Siemens");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("PLC");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [stock, setStock] = useState(true);
  const [stockCount, setStockCount] = useState(5);
  const [specifications, setSpecifications] = useState<{ label: string; value: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [selectedCustomFilter, setSelectedCustomFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedBrand, selectedStockFilter, selectedCustomFilter]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }

    setIsUploading(true);
    toast.loading("Uploading image to storage...", { id: "imageUpload" });

    const res = await uploadProductImage(file);
    setIsUploading(false);

    if (res.success && res.url) {
      setImageUrl(res.url);
      toast.success("Image uploaded successfully!", { id: "imageUpload" });
    } else {
      toast.error(`Upload failed: ${res.error}`, { id: "imageUpload" });
    }
  };

  // Inline Quick Stock Edits State (tracking changes by slug)
  const [inlineStockState, setInlineStockState] = useState<Record<string, { stock: boolean; stockCount: number }>>({});

  const handleNameChange = (val: string) => {
    setName(val);
    if (!editingProduct) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setSlug(generatedSlug);
    }
  };

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setName("");
    setPartNumber("");
    setBrand("Siemens");
    setCategory("");
    setType("PLC");
    setDescription("");
    setImageUrl("");
    setSlug("");
    setStock(true);
    setStockCount(5);
    setSpecifications([
      { label: "Warranty", value: "1 Year Official Warranty" },
      { label: "Dispatch", value: "Makarba, Ahmedabad, Gujarat" },
      { label: "Condition", value: "100% Brand New, Genuine OEM" }
    ]);
    setShowUrlInput(false);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (p: ExtendedProduct) => {
    setEditingProduct(p);
    setName(p.name);
    setPartNumber(p.partNumber || "");
    setBrand(p.brand || "Siemens");
    setCategory(p.category || "");
    setType(p.type || "PLC");
    setDescription(p.description || "");
    setImageUrl(p.image || "");
    setSlug(p.slug || "");
    setStock(p.stock);
    setStockCount(p.stockCount);
    setSpecifications(p.specifications || []);
    setShowUrlInput(false);
    setIsFormOpen(true);
  };

  const handleAddSpecField = () => {
    setSpecifications([...specifications, { label: "", value: "" }]);
  };

  const handleUpdateSpecField = (idx: number, key: "label" | "value", val: string) => {
    const updated = [...specifications];
    updated[idx][key] = val;
    setSpecifications(updated);
  };

  const handleRemoveSpecField = (idx: number) => {
    setSpecifications(specifications.filter((_, i) => i !== idx));
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !partNumber.trim() || !category.trim()) {
      toast.error("Please fill out Name, Part Number, and Category.");
      return;
    }

    const productSlug = editingProduct?.slug || (name.trim() + "-" + partNumber.trim())
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const cleanSpecs = specifications.filter((s) => s.label.trim() && s.value.trim());

    const dbPayload: Partial<DbProduct> = {
      name: name.trim(),
      part_number: partNumber.trim(),
      brand: brand,
      category: category.trim(),
      type: type,
      description: description.trim(),
      image: imageUrl.trim(),
      slug: productSlug,
      stock: stock,
      stock_count: stockCount,
      is_custom: editingProduct ? editingProduct.isCustom : true,
      specifications: cleanSpecs,
    };

    // If it's modifying a static product override, force is_custom false and map correct static ID
    if (editingProduct && !editingProduct.isCustom) {
      dbPayload.is_custom = false;
      dbPayload.id = editingProduct.id;
    }

    toast.loading("Saving product details...", { id: "saveProduct" });
    const res = await saveProductOverride(dbPayload);

    if (res.success) {
      toast.success(editingProduct ? "Product details updated!" : "Product added to catalog successfully!", { id: "saveProduct" });
      setIsFormOpen(false);
      queryClient.invalidateQueries({ queryKey: ["dbProducts"] });
    } else {
      toast.error(`Error saving details: ${res.error}`, { id: "saveProduct" });
    }
  };

  const handleDeleteRevert = async (p: ExtendedProduct) => {
    const isCustom = p.isCustom;
    const isDeleted = p.isDeleted;
    const msg = isCustom 
      ? `Are you sure you want to permanently delete "${p.name}"?`
      : isDeleted
        ? `Are you sure you want to restore "${p.name}" back onto the website?`
        : `Are you sure you want to revert "${p.name}" to default static values? (This will clear custom stock updates)`;
    
    if (!window.confirm(msg)) return;

    toast.loading("Processing request...", { id: "delProduct" });
    const res = await deleteProductOverride(p.slug);

    if (res.success) {
      const successMsg = isCustom 
        ? "Product deleted." 
        : isDeleted 
          ? "Product restored to website catalog." 
          : "Reverted to catalog defaults.";
      toast.success(successMsg, { id: "delProduct" });
      queryClient.invalidateQueries({ queryKey: ["dbProducts"] });
    } else {
      toast.error(`Action failed: ${res.error}`, { id: "delProduct" });
    }
  };

  const handleDeleteStatic = async (p: ExtendedProduct) => {
    if (!window.confirm(`Are you sure you want to remove "${p.name}" (Part: ${p.partNumber}) from the website catalog?`)) {
      return;
    }

    const dbPayload: Partial<DbProduct> = {
      name: p.name,
      part_number: p.partNumber || "",
      brand: p.brand || "",
      category: p.category || "",
      type: p.type || "",
      description: p.description || "",
      image: p.image || "",
      slug: p.slug,
      stock: p.stock,
      stock_count: p.stockCount,
      is_custom: false,
      is_deleted: true,
    };

    const dbMatch = dbProducts.find((dbp) => dbp.slug === p.slug);
    if (dbMatch) dbPayload.id = dbMatch.id;

    toast.loading("Removing product...", { id: `del-${p.slug}` });
    const res = await saveProductOverride(dbPayload);

    if (res.success) {
      toast.success("Product removed from website catalog.", { id: `del-${p.slug}` });
      queryClient.invalidateQueries({ queryKey: ["dbProducts"] });
    } else {
      toast.error(`Action failed: ${res.error}`, { id: `del-${p.slug}` });
    }
  };

  const handleInlineStockChange = (slug: string, key: "stock" | "stockCount", val: any) => {
    const existingInline = inlineStockState[slug] || {
      stock: mergedProducts.find(p => p.slug === slug)?.stock ?? true,
      stockCount: mergedProducts.find(p => p.slug === slug)?.stockCount ?? 5
    };

    const updated = {
      ...existingInline,
      [key]: val
    };

    // Auto set stock boolean if stock count becomes 0 or vice versa
    if (key === "stockCount") {
      updated.stock = val > 0;
    } else if (key === "stock") {
      updated.stockCount = val ? (updated.stockCount === 0 ? 5 : updated.stockCount) : 0;
    }

    setInlineStockState({
      ...inlineStockState,
      [slug]: updated
    });
  };

  const handleSaveInlineStock = async (p: ExtendedProduct) => {
    const inline = inlineStockState[p.slug];
    if (!inline) return;

    const dbPayload: Partial<DbProduct> = {
      name: p.name,
      part_number: p.partNumber || "",
      brand: p.brand || "Siemens",
      category: p.category || "",
      type: p.type || "PLC",
      description: p.description || "",
      image: p.image || "",
      slug: p.slug,
      stock: inline.stock,
      stock_count: inline.stockCount,
      is_custom: p.isCustom,
      specifications: p.specifications || []
    };

    if (!p.isCustom) {
      dbPayload.is_custom = false;
      // Fetch matching DB item ID if it was already modified before
      const dbMatch = dbProducts.find(dbp => dbp.slug === p.slug);
      if (dbMatch) dbPayload.id = dbMatch.id;
    }

    toast.loading("Saving stock...", { id: `inline-${p.slug}` });
    const res = await saveProductOverride(dbPayload);

    if (res.success) {
      toast.success("Stock details updated!", { id: `inline-${p.slug}` });
      // Clear inline changes state for this product
      const copy = { ...inlineStockState };
      delete copy[p.slug];
      setInlineStockState(copy);
      queryClient.invalidateQueries({ queryKey: ["dbProducts"] });
    } else {
      toast.error(`Error saving stock: ${res.error}`, { id: `inline-${p.slug}` });
    }
  };

  // Filter products list
  const filteredProductsList = useMemo(() => {
    return mergedProducts.filter((p) => {
      const matchBrand = selectedBrand === "All" || p.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchStock = selectedStockFilter === "All" 
        ? true 
        : selectedStockFilter === "InStock" ? p.stock : !p.stock;

      const isModifiedOrCustom = p.isCustom || dbProducts.some(dbp => dbp.slug === p.slug);
      const matchCustom = selectedCustomFilter === "All"
        ? true
        : isModifiedOrCustom;

      const name = p.name || "";
      const partNum = p.partNumber || "";
      const brand = p.brand || "";
      const cat = p.category || "";
      const ptype = p.type || "";
      
      const searchableText = `${name} ${partNum} ${brand} ${cat} ${ptype}`.toLowerCase();
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchSearch = searchQuery.trim() === "" || 
        searchableText.includes(cleanQuery) ||
        searchQuery.toLowerCase().trim().split(/\s+/).every(term => searchableText.includes(term));

      return matchBrand && matchStock && matchCustom && matchSearch;
    });
  }, [mergedProducts, selectedBrand, selectedStockFilter, selectedCustomFilter, searchQuery, dbProducts]);

  // Pagination Configuration
  const ITEMS_PER_PAGE = 15;
  const totalPages = Math.ceil(filteredProductsList.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProductsList.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProductsList, currentPage]);

  const getPageNumbers = () => {
    const range = [];
    const delta = 2;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }
    
    const pagesWithDots: (number | string)[] = [];
    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          pagesWithDots.push(l + 1);
        } else if (i - l > 2) {
          pagesWithDots.push("...");
        }
      }
      pagesWithDots.push(i);
      l = i;
    }
    return pagesWithDots;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] pb-16 font-sans">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Dashboard Title & Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#e7e5e4] pb-6 mb-8">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b45309] block">
              Control Panel
            </span>
            <h1 className="mt-1 font-display text-2xl font-extrabold text-[#1a130f] sm:text-3xl flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6 text-[#b45309]" /> Catalog Administration
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white border border-[#e7e5e4] px-3.5 py-2 shadow-sm h-[38px]">
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={globalSettings.show_stock_status}
                  onChange={async (e) => {
                    toast.loading("Updating stock visibility...", { id: "settingsToggle" });
                    const res = await saveGlobalSetting("show_stock_status", e.target.checked);
                    if (res.success) {
                      if (res.warning) {
                        toast.warning(
                          "Saved locally! Run the SQL scripts in your Supabase SQL Editor to make this setting active for all visitors.",
                          { id: "settingsToggle", duration: 8000 }
                        );
                      } else {
                        toast.success(
                          e.target.checked 
                            ? "Stock visibility enabled on website!" 
                            : "Stock visibility disabled on website!", 
                          { id: "settingsToggle" }
                        );
                      }
                      queryClient.invalidateQueries({ queryKey: ["globalSettings"] });
                    } else {
                      toast.error("Failed to update settings.", { id: "settingsToggle" });
                    }
                  }}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#b45309]"></div>
                <span className="ml-2 text-[10px] font-extrabold uppercase tracking-wider text-[#1a130f]">
                  Show Stock on Web
                </span>
              </label>
            </div>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#1a130f] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b45309] transition-all shadow-md cursor-pointer"
            >
              <Plus className="h-4 w-4 text-amber-400" /> Add Product
            </button>
            <button
              onClick={() => refetch()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e5e4] bg-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1a130f] hover:bg-stone-50 transition-all cursor-pointer shadow-sm"
              title="Refresh Products"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-red-700 hover:bg-red-100 transition-all cursor-pointer shadow-sm"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>

        {/* Dashboard Summary Metrics */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
          <div 
            onClick={() => {
              setSelectedStockFilter("All");
              setSelectedCustomFilter("All");
              toast.info("Showing all products in catalog.");
            }}
            className={`rounded-2xl border p-5 shadow-sm cursor-pointer select-none transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
              selectedStockFilter === "All" && selectedCustomFilter === "All"
                ? "border-[#b45309] bg-[#b45309]/5 ring-1 ring-[#b45309]/30"
                : "border-[#e7e5e4] bg-white hover:border-[#b45309]/50"
            }`}
          >
            <div className="flex items-center gap-3 text-slate-500 mb-2">
              <Package className="h-5 w-5 text-[#b45309]" />
              <span className="text-xs font-bold uppercase tracking-wider">Total Catalog</span>
            </div>
            <p className="text-3xl font-extrabold text-[#1a130f]">{metrics.total}</p>
            <p className="text-[10px] text-slate-400 font-semibold mt-1">Click to view all products</p>
          </div>

          <div 
            onClick={() => {
              setSelectedStockFilter("InStock");
              setSelectedCustomFilter("All");
              toast.info("Filtered by In Stock products.");
            }}
            className={`rounded-2xl border p-5 shadow-sm cursor-pointer select-none transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
              selectedStockFilter === "InStock"
                ? "border-emerald-500 bg-emerald-50/40 ring-1 ring-emerald-500/30"
                : "border-[#e7e5e4] bg-white hover:border-emerald-500/50"
            }`}
          >
            <div className="flex items-center gap-3 text-emerald-600 mb-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">In Stock</span>
            </div>
            <p className="text-3xl font-extrabold text-emerald-600">{metrics.inStock}</p>
            <p className="text-[10px] text-slate-400 font-semibold mt-1">Click to filter in stock</p>
          </div>

          <div 
            onClick={() => {
              setSelectedStockFilter("OutOfStock");
              setSelectedCustomFilter("All");
              toast.info("Filtered by Out of Stock products.");
            }}
            className={`rounded-2xl border p-5 shadow-sm cursor-pointer select-none transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
              selectedStockFilter === "OutOfStock"
                ? "border-rose-500 bg-rose-50/40 ring-1 ring-rose-500/30"
                : "border-[#e7e5e4] bg-white hover:border-rose-500/50"
            }`}
          >
            <div className="flex items-center gap-3 text-rose-600 mb-2">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Out of Stock</span>
            </div>
            <p className="text-3xl font-extrabold text-rose-600">{metrics.outOfStock}</p>
            <p className="text-[10px] text-slate-400 font-semibold mt-1">Click to filter out of stock</p>
          </div>

          <div 
            onClick={() => {
              setSelectedStockFilter("All");
              setSelectedCustomFilter("CustomOnly");
              toast.info("Filtered by custom added and modified products.");
            }}
            className={`rounded-2xl border p-5 shadow-sm cursor-pointer select-none transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
              selectedCustomFilter === "CustomOnly"
                ? "border-blue-500 bg-blue-50/40 ring-1 ring-blue-500/30"
                : "border-[#e7e5e4] bg-white hover:border-blue-500/50"
            }`}
          >
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Layers className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Custom / Overrides</span>
            </div>
            <p className="text-3xl font-extrabold text-blue-600">{metrics.customized}</p>
            <p className="text-[10px] text-slate-400 font-semibold mt-1">Click to filter overrides</p>
          </div>
        </div>

        {/* Dashboard Table Filters */}
        <div className="rounded-2xl border border-[#e7e5e4] bg-white p-4 mb-6 shadow-sm flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products by model, name, brand, part number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#e7e5e4] bg-white pl-10 pr-4 py-2.5 text-xs text-[#1a130f] font-semibold placeholder-slate-400 focus:border-[#1a130f] focus:outline-none focus:ring-1 focus:ring-[#1a130f]/20 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase text-slate-500">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-bold text-[#1a130f] focus:border-[#1a130f] focus:outline-none"
              >
                <option value="All">All Brands</option>
                {staticBrands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase text-slate-500">Stock:</span>
              <select
                value={selectedStockFilter}
                onChange={(e) => setSelectedStockFilter(e.target.value)}
                className="rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-bold text-[#1a130f] focus:border-[#1a130f] focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="InStock">In Stock</option>
                <option value="OutOfStock">Out of Stock</option>
              </select>
            </div>

            {searchQuery || selectedBrand !== "All" || selectedStockFilter !== "All" || selectedCustomFilter !== "All" ? (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBrand("All");
                  setSelectedStockFilter("All");
                  setSelectedCustomFilter("All");
                }}
                className="rounded-xl border border-[#e7e5e4] bg-stone-100 hover:bg-stone-200 px-3 py-2 text-xs font-bold text-[#1a130f] transition-all cursor-pointer"
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>

        {/* Products Management Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#e7e5e4] bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-xs hidden sm:table">
            <thead>
              <tr className="bg-stone-50 border-b border-[#e7e5e4] text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                <th className="p-4 w-16">Preview</th>
                <th className="p-4 w-28">Part Number</th>
                <th className="p-4">Product Details</th>
                <th className="p-4 w-32">Stock Status</th>
                <th className="p-4 w-24">In Stock Count</th>
                <th className="p-4 w-32 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e7e5e4]">
              {filteredProductsList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400 font-semibold">
                    No products found matching filters.
                  </td>
                </tr>
              ) : (
                paginatedProducts.map((p) => {
                  const inline = inlineStockState[p.slug];
                  const currentStock = inline !== undefined ? inline.stock : p.stock;
                  const currentCount = inline !== undefined ? inline.stockCount : p.stockCount;
                  const hasInlineChanges = inline !== undefined;

                  return (
                    <tr key={p.slug} className={`hover:bg-stone-50/50 transition-colors ${p.isDeleted ? "opacity-60 bg-red-50/30 line-through decoration-red-500/40" : ""}`}>
                      <td className="p-4">
                        <div className="h-16 w-16 overflow-hidden rounded-lg border border-stone-200 bg-white p-1 flex items-center justify-center shadow-sm">
                          <img
                            src={p.image || "/fallback-img.png"}
                            alt={p.name}
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://placehold.co/100x100/ffffff/1a130f?text=${p.brand}`;
                            }}
                          />
                        </div>
                      </td>
                      <td className="p-4 font-mono font-bold text-[#1a130f]">
                        {p.partNumber || "—"}
                      </td>
                      <td className="p-4 space-y-1">
                        <div className="font-bold text-[#1a130f] text-sm line-clamp-1 flex items-center gap-2">
                          {p.name}
                          {p.isDeleted && (
                            <span className="rounded bg-rose-100 border border-rose-200 px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-rose-700 tracking-wider line-clamp-1 no-underline">
                              Hidden from Web
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 no-underline">
                          <span className="rounded bg-stone-100 border border-stone-200 px-1.5 py-0.5 text-[9px] font-extrabold text-[#1a130f]">
                            {p.brand}
                          </span>
                          <span className="rounded bg-amber-50 border border-amber-200 px-1.5 py-0.5 text-[9px] font-extrabold text-[#b45309]">
                            {p.category}
                          </span>
                          {p.isCustom ? (
                            <span className="rounded bg-blue-50 border border-blue-200 px-1.5 py-0.5 text-[9px] font-bold text-blue-700">
                              Custom Added
                            </span>
                          ) : dbProducts.some(dbp => dbp.slug === p.slug) ? (
                            <span className={`rounded border px-1.5 py-0.5 text-[9px] font-bold ${
                              p.isDeleted
                                ? "bg-rose-50 border-rose-200 text-rose-700"
                                : "bg-amber-50 border-amber-200 text-amber-800"
                            }`}>
                              {p.isDeleted ? "Deleted Override" : "Modified Defaults"}
                            </span>
                          ) : (
                            <span className="rounded bg-slate-50 border border-slate-200 px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                              Static Catalog
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={currentStock}
                            onChange={(e) => handleInlineStockChange(p.slug, "stock", e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                          <span className={`ml-2 text-[10px] font-bold ${currentStock ? "text-emerald-700" : "text-slate-500"}`}>
                            {currentStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </label>
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          min="0"
                          value={currentCount}
                          onChange={(e) => handleInlineStockChange(p.slug, "stockCount", parseInt(e.target.value) || 0)}
                          className="w-16 rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs text-center font-bold text-[#1a130f]"
                        />
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {hasInlineChanges && (
                            <button
                              onClick={() => handleSaveInlineStock(p)}
                              className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                              title="Save Stock Edit"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                          )}
                          {!p.isDeleted && (
                            <button
                              onClick={() => handleOpenEdit(p)}
                              className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-slate-100 text-[#1a130f] hover:bg-slate-200 border border-stone-200 transition-colors"
                              title="Edit Details"
                            >
                              <Edit className="h-3.5 w-3.5" />
                            </button>
                          )}
                          {p.isCustom ? (
                            <button
                              onClick={() => handleDeleteRevert(p)}
                              className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
                              title="Delete Product"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          ) : (
                            <>
                              {!p.isDeleted && (
                                <button
                                  onClick={() => handleDeleteStatic(p)}
                                  className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
                                  title="Delete Product"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              )}
                              {dbProducts.some(dbp => dbp.slug === p.slug) && (
                                <button
                                  onClick={() => handleDeleteRevert(p)}
                                  className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
                                  title={p.isDeleted ? "Restore Product" : "Revert Stock/Details"}
                                >
                                  <RotateCcw className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          {/* Mobile Card List (Visible only on mobile/tablet) */}
          <div className="block sm:hidden divide-y divide-[#e7e5e4]">
            {filteredProductsList.length === 0 ? (
              <div className="p-8 text-center text-slate-400 font-semibold">
                No products found matching filters.
              </div>
            ) : (
              paginatedProducts.map((p) => {
                const inline = inlineStockState[p.slug];
                const currentStock = inline !== undefined ? inline.stock : p.stock;
                const currentCount = inline !== undefined ? inline.stockCount : p.stockCount;
                const hasInlineChanges = inline !== undefined;

                return (
                  <div key={p.slug} className={`p-4 bg-white space-y-3 ${p.isDeleted ? "opacity-60 bg-red-50/20 line-through decoration-red-500/20" : ""}`}>
                    <div className="flex gap-3">
                      {/* Image Preview */}
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-stone-200 bg-white p-1 flex items-center justify-center shadow-sm">
                        <img
                          src={p.image || "/fallback-img.png"}
                          alt={p.name}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/100x100/ffffff/1a130f?text=${p.brand}`;
                          }}
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono font-bold text-[10px] text-[#1a130f]">
                            {p.partNumber || "—"}
                          </span>
                          <span className="rounded bg-stone-100 border border-stone-200 px-1 py-0.2 text-[8px] font-extrabold text-[#1a130f]">
                            {p.brand}
                          </span>
                          {p.isCustom ? (
                            <span className="rounded bg-blue-50 border border-blue-200 px-1 py-0.2 text-[8px] font-bold text-blue-700">
                              Custom
                            </span>
                          ) : dbProducts.some(dbp => dbp.slug === p.slug) ? (
                            <span className={`rounded border px-1.5 py-0.5 text-[9px] font-bold ${
                              p.isDeleted
                                ? "bg-rose-50 border-rose-200 text-rose-700"
                                : "bg-amber-50 border-amber-200 text-amber-700"
                            }`}>
                              {p.isDeleted ? "Deleted" : "Modified"}
                            </span>
                          ) : null}
                        </div>
                        <h4 className="font-bold text-[#1a130f] text-xs line-clamp-2 mt-0.5 flex items-center gap-1.5">
                          {p.name}
                          {p.isDeleted && (
                            <span className="rounded bg-rose-100 border border-rose-200 px-1.5 py-0.5 text-[7px] font-extrabold text-rose-700 no-underline">
                              Hidden
                            </span>
                          )}
                        </h4>
                      </div>
                    </div>

                    {/* Stock Status Inline edit */}
                    <div className="flex items-center justify-between bg-[#faf9f6] p-2.5 rounded-xl border border-[#e7e5e4]/60 gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={currentStock}
                          onChange={(e) => handleInlineStockChange(p.slug, "stock", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500"></div>
                        <span className={`ml-1.5 text-[9px] font-bold ${currentStock ? "text-emerald-700" : "text-slate-500"}`}>
                          {currentStock ? "Stock" : "Out"}
                        </span>
                      </label>
                      
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold text-slate-500">Qty:</span>
                        <input
                          type="number"
                          min="0"
                          value={currentCount}
                          onChange={(e) => handleInlineStockChange(p.slug, "stockCount", parseInt(e.target.value) || 0)}
                          className="w-10 rounded-lg border border-stone-200 bg-white py-0.5 text-center text-xs font-bold text-[#1a130f]"
                        />
                      </div>

                      <div className="flex items-center gap-1">
                        {hasInlineChanges && (
                          <button
                            type="button"
                            onClick={() => handleSaveInlineStock(p)}
                            className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                        )}
                        {!p.isDeleted && (
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(p)}
                            className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-white text-[#1a130f] hover:bg-slate-100 border border-stone-200 transition-colors"
                          >
                            <Edit className="h-3 w-3" />
                          </button>
                        )}
                        {p.isCustom ? (
                          <button
                            type="button"
                            onClick={() => handleDeleteRevert(p)}
                            className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        ) : (
                          <>
                            {!p.isDeleted && (
                              <button
                                type="button"
                                onClick={() => handleDeleteStatic(p)}
                                className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            )}
                            {dbProducts.some(dbp => dbp.slug === p.slug) && (
                              <button
                                type="button"
                                onClick={() => handleDeleteRevert(p)}
                                className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
                              >
                                <RotateCcw className="h-3 w-3" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#e7e5e4] bg-[#faf9f6] px-4 py-3.5 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="relative inline-flex items-center rounded-xl border border-[#e7e5e4] bg-white px-4 py-2 text-xs font-bold text-[#1a130f] hover:bg-stone-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="relative ml-3 inline-flex items-center rounded-xl border border-[#e7e5e4] bg-white px-4 py-2 text-xs font-bold text-[#1a130f] hover:bg-stone-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Showing <span className="font-bold text-[#1a130f]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                    <span className="font-bold text-[#1a130f]">
                      {Math.min(currentPage * ITEMS_PER_PAGE, filteredProductsList.length)}
                    </span>{" "}
                    of <span className="font-bold text-[#1a130f]">{filteredProductsList.length}</span> products
                  </p>
                </div>
                <div>
                  <nav className="isolate inline-flex -space-x-px rounded-xl shadow-sm gap-1.5" aria-label="Pagination">
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className="relative inline-flex items-center rounded-lg border border-[#e7e5e4] bg-white px-2.5 py-1.5 text-xs font-bold text-[#1a130f] hover:bg-stone-50 disabled:opacity-50 cursor-pointer"
                    >
                      Previous
                    </button>
                    {getPageNumbers().map((page, idx) => {
                      if (page === "...") {
                        return (
                          <span
                            key={`dots-${idx}`}
                            className="relative inline-flex items-center px-2 py-1 text-xs font-bold text-slate-400 select-none"
                          >
                            ...
                          </span>
                        );
                      }
                      return (
                        <button
                          key={`page-${page}`}
                          type="button"
                          onClick={() => setCurrentPage(page as number)}
                          className={`relative inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold cursor-pointer transition-all ${
                            currentPage === page
                              ? "bg-[#1a130f] text-white shadow-sm"
                              : "bg-white text-[#1a130f] border border-[#e7e5e4] hover:bg-stone-50"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className="relative inline-flex items-center rounded-lg border border-[#e7e5e4] bg-white px-2.5 py-1.5 text-xs font-bold text-[#1a130f] hover:bg-stone-50 disabled:opacity-50 cursor-pointer"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Add / Edit Product Slide-over Sheet Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsFormOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col h-full">
              {/* Sheet Header */}
              <div className="bg-[#1a130f] text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    {editingProduct ? <Edit className="h-5 w-5 text-amber-400" /> : <Plus className="h-5 w-5 text-amber-400" />}
                    {editingProduct ? `Edit Details: ${editingProduct.partNumber}` : "Add New Product"}
                  </h2>
                  <p className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                    {editingProduct ? "Override database entry" : "Create dynamic catalog entry"}
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full p-1 bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sheet Form */}
              <form onSubmit={handleSaveProduct} className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Basic Section */}
                <div className="space-y-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#b45309] border-b border-stone-100 pb-1">
                    Basic Info
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        placeholder="e.g. Siemens SIMATIC S7-1200 CPU 1214C"
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        Part Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={partNumber}
                        onChange={(e) => setPartNumber(e.target.value)}
                        placeholder="e.g. 6ES7214-1AG40-0XB0"
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-mono text-[#1a130f] font-bold focus:border-[#1a130f] focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        Brand *
                      </label>
                      <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-bold text-[#1a130f] focus:border-[#1a130f] focus:outline-none shadow-sm"
                      >
                        {staticBrands.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                        <option value="Custom">Custom Brand...</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        Category *
                      </label>
                      <input
                        type="text"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="e.g. Siemens PLC or SENSORS"
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                        list="categories-list"
                      />
                      <datalist id="categories-list">
                        {staticCategories.map((c) => (
                          <option key={c.name} value={c.name} />
                        ))}
                      </datalist>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        Product Type *
                      </label>
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-bold text-[#1a130f] focus:border-[#1a130f] focus:outline-none shadow-sm"
                      >
                        {productTypesList.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                        In Stock Quantity
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={stockCount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          setStockCount(val);
                          setStock(val > 0);
                        }}
                        className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs font-bold text-[#1a130f] focus:border-[#1a130f] focus:outline-none shadow-sm"
                      />
                    </div>

                    <div className="flex items-center gap-2 h-9 pb-1">
                      <input
                        type="checkbox"
                        id="form-stock"
                        checked={stock}
                        onChange={(e) => {
                          setStock(e.target.checked);
                          if (!e.target.checked) setStockCount(0);
                          else if (stockCount === 0) setStockCount(5);
                        }}
                        className="rounded text-[#b45309] focus:ring-[#b45309]"
                      />
                      <label htmlFor="form-stock" className="text-xs font-bold text-[#1a130f]">
                        Is In Stock
                      </label>
                    </div>
                  </div>
                </div>

                {/* Presentation Section */}
                <div className="space-y-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#b45309] border-b border-stone-100 pb-1">
                    Details & Image
                  </h3>

                  <div>
                    <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter a descriptive overview of the product, including its features and common applications..."
                      className="w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#1a130f] block mb-1">
                      Product Image
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      {!showUrlInput ? (
                        <div className="flex-1 w-full">
                          <label className="flex flex-col items-center justify-center border border-dashed border-[#e7e5e4] rounded-xl py-6 bg-stone-50/50 hover:bg-stone-50 cursor-pointer transition-colors shadow-sm text-center">
                            <Upload className="h-5 w-5 text-slate-400 mb-1" />
                            <span className="text-xs text-[#1a130f] font-bold">Upload Image File</span>
                            <span className="text-[9px] text-slate-400 mt-0.5">PNG, JPG, JPEG, WEBP up to 5MB</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              disabled={isUploading}
                            />
                          </label>
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          placeholder="https://images.example.com/products/siemens.jpg"
                          className="flex-1 w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2.5 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                        />
                      )}

                      {imageUrl && (
                        <div className="relative h-20 w-20 shrink-0 border border-stone-200 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-sm">
                          <img
                            src={imageUrl}
                            alt="preview"
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=Error";
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setImageUrl("")}
                            className="absolute -top-1 -right-1 rounded-full p-1 bg-red-500 hover:bg-red-600 text-white transition-colors"
                            title="Remove Image"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setShowUrlInput(!showUrlInput)}
                        className="text-[10px] font-bold text-[#b45309] hover:underline"
                      >
                        {showUrlInput ? "← Upload image file instead" : "Or paste an image URL instead →"}
                      </button>
                      <p className="text-[9px] text-slate-400 font-semibold">
                        {imageUrl ? "✓ Image linked successfully." : "Placeholder will generate automatically if empty."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-1">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#b45309]">
                      Technical Specifications
                    </h3>
                    <button
                      type="button"
                      onClick={handleAddSpecField}
                      className="inline-flex items-center gap-1 rounded-lg bg-stone-100 hover:bg-[#b45309] hover:text-white px-2 py-1 text-[10px] font-extrabold text-[#1a130f] transition-all cursor-pointer border border-stone-200"
                    >
                      <Plus className="h-3 w-3" /> Add Spec Row
                    </button>
                  </div>

                  {specifications.length === 0 ? (
                    <p className="text-[10px] text-slate-400 font-semibold italic text-center py-2">
                      No technical specifications added. Click "Add Spec Row" above to specify parameters.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {specifications.map((spec, idx) => (
                        <div key={idx} className="flex gap-3 items-center">
                          <input
                            type="text"
                            required
                            value={spec.label}
                            onChange={(e) => handleUpdateSpecField(idx, "label", e.target.value)}
                            placeholder="Label (e.g. Supply Voltage)"
                            className="flex-1 rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                          />
                          <input
                            type="text"
                            required
                            value={spec.value}
                            onChange={(e) => handleUpdateSpecField(idx, "value", e.target.value)}
                            placeholder="Value (e.g. 24V DC)"
                            className="flex-1 rounded-xl border border-[#e7e5e4] bg-white px-3 py-2 text-xs text-[#1a130f] font-semibold focus:border-[#1a130f] focus:outline-none shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveSpecField(idx)}
                            className="rounded-lg p-2 text-rose-600 hover:bg-rose-50 border border-stone-200 transition-colors"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form Footer */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="rounded-xl border border-[#e7e5e4] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1a130f] hover:bg-stone-50 transition-all cursor-pointer shadow-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#1a130f] hover:bg-[#b45309] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md"
                  >
                    Save Product
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
