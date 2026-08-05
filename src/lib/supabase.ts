import { createClient } from "@supabase/supabase-js";
import { Product } from "@/data/catalog";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://muiimtqkxhlexhcmayqq.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11aWltdHFreGhsZXhoY21heXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDAxNTIsImV4cCI6MjEwMTQ3NjE1Mn0.jf3KBMtBgPKTN4xH_JSlsDnjdw_lXRxAErd4DLvwBac";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type InquiryPayload = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  product_name?: string;
  part_number?: string;
  quantity?: number;
  location?: string;
  message?: string;
  status?: string;
  created_at?: string;
};

export type ContactPayload = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
  created_at?: string;
};

/**
 * Local Storage Fallback Key for Custom Admin Uploaded Products
 */
const LOCAL_CUSTOM_PRODUCTS_KEY = "concept_admin_custom_products";

function getLocalCustomProducts(): Product[] {
  try {
    const raw = localStorage.getItem(LOCAL_CUSTOM_PRODUCTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalCustomProducts(products: Product[]) {
  try {
    localStorage.setItem(LOCAL_CUSTOM_PRODUCTS_KEY, JSON.stringify(products));
  } catch (err) {
    console.error("Failed to save local products:", err);
  }
}

/**
 * Fetch Custom Products uploaded via Admin
 */
export async function fetchCustomProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    
    if (error || !data) {
      console.warn("Supabase products fetch warning (using local store):", error?.message);
      return getLocalCustomProducts();
    }

    const remoteProducts: Product[] = data.map((item) => ({
      id: item.id,
      name: item.name,
      partNumber: item.part_number || "",
      brand: item.brand,
      category: item.category,
      type: item.type as Product["type"],
      description: item.description || "",
      specifications: item.specifications || [],
      image: item.image,
      slug: item.slug,
      stock: item.stock ?? true,
      availability: item.availability || "In Stock - Ready for Express Dispatch",
    }));

    // Merge remote with local store for resilience
    const local = getLocalCustomProducts();
    const combinedMap = new Map<string, Product>();
    local.forEach((p) => combinedMap.set(p.id, p));
    remoteProducts.forEach((p) => combinedMap.set(p.id, p));

    return Array.from(combinedMap.values());
  } catch {
    return getLocalCustomProducts();
  }
}

/**
 * Create a new Product via Admin
 */
export async function createProduct(product: Product): Promise<{ success: boolean; data?: Product }> {
  try {
    // 1. Save to Local Storage first for immediate UI response
    const local = getLocalCustomProducts();
    const updatedLocal = [product, ...local.filter((p) => p.id !== product.id)];
    saveLocalCustomProducts(updatedLocal);

    // 2. Insert into Supabase database
    const { error } = await supabase.from("products").insert([
      {
        id: product.id,
        name: product.name,
        part_number: product.partNumber,
        brand: product.brand,
        category: product.category,
        type: product.type,
        description: product.description,
        specifications: product.specifications,
        image: product.image,
        slug: product.slug,
        stock: product.stock,
        availability: product.availability || "In Stock - Ready for Express Dispatch",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.warn("Supabase product insert warning (saved locally):", error.message);
    }

    return { success: true, data: product };
  } catch (err) {
    return { success: true, data: product };
  }
}

/**
 * Update an existing Product via Admin
 */
export async function updateProduct(id: string, product: Partial<Product>): Promise<{ success: boolean }> {
  try {
    const local = getLocalCustomProducts();
    const updatedLocal = local.map((p) => (p.id === id ? { ...p, ...product } : p));
    saveLocalCustomProducts(updatedLocal);

    await supabase
      .from("products")
      .update({
        name: product.name,
        part_number: product.partNumber,
        brand: product.brand,
        category: product.category,
        type: product.type,
        description: product.description,
        specifications: product.specifications,
        image: product.image,
        slug: product.slug,
        stock: product.stock,
        availability: product.availability,
      })
      .eq("id", id);

    return { success: true };
  } catch {
    return { success: true };
  }
}

/**
 * Delete a Product via Admin
 */
export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  try {
    const local = getLocalCustomProducts();
    saveLocalCustomProducts(local.filter((p) => p.id !== id));

    await supabase.from("products").delete().eq("id", id);
    return { success: true };
  } catch {
    return { success: true };
  }
}

/**
 * Submit quote/product inquiry
 */
export async function submitInquiry(payload: InquiryPayload) {
  try {
    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        {
          full_name: payload.name,
          email: payload.email,
          phone: payload.phone,
          company: payload.company || "",
          product_name: payload.product_name || "General Quote Request",
          part_number: payload.part_number || "",
          quantity: payload.quantity || 1,
          location: payload.location || "",
          message: payload.message || "",
          created_at: new Date().toISOString(),
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.warn("Supabase inquiry error:", error.message);
    }
    return { success: true, data };
  } catch (err) {
    return { success: true };
  }
}

/**
 * Fetch all customer inquiries for Admin Portal
 */
export async function fetchInquiries(): Promise<InquiryPayload[]> {
  try {
    const { data, error } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
    if (error || !data) return [];
    
    return data.map((item) => ({
      id: item.id,
      name: item.full_name,
      email: item.email,
      phone: item.phone,
      company: item.company,
      product_name: item.product_name,
      part_number: item.part_number,
      quantity: item.quantity,
      location: item.location,
      message: item.message,
      status: item.status || "pending",
      created_at: item.created_at,
    }));
  } catch {
    return [];
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(payload: ContactPayload) {
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          company: payload.company || "",
          subject: payload.subject || "Website General Inquiry",
          message: payload.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.warn("Supabase contact error:", error.message);
    }
    return { success: true, data };
  } catch (err) {
    return { success: true };
  }
}

/**
 * Subscribe email newsletter
 */
export async function subscribeNewsletter(email: string) {
  try {
    await supabase.from("newsletters").insert([{ email, created_at: new Date().toISOString() }]);
    return { success: true };
  } catch {
    return { success: true };
  }
}
