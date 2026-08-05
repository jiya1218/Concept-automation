import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://muiimtqkxhlexhcmayqq.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11aWltdHFreGhsZXhoY21heXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDAxNTIsImV4cCI6MjEwMTQ3NjE1Mn0.jf3KBMtBgPKTN4xH_JSlsDnjdw_lXRxAErd4DLvwBac";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  product_name?: string;
  part_number?: string;
  quantity?: number;
  location?: string;
  message?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
};

/**
 * Submit quote/product inquiry to Supabase inquiries table
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
      console.warn("Supabase inquiry error (falling back):", error.message);
      return { success: true, offline: true, data: [payload] };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Failed to submit inquiry:", err);
    return { success: true, offline: true, data: [payload] };
  }
}

/**
 * Submit contact form to Supabase contact_submissions table
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
      console.warn("Supabase contact error (falling back):", error.message);
      return { success: true, offline: true, data: [payload] };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Failed to submit contact form:", err);
    return { success: true, offline: true, data: [payload] };
  }
}

/**
 * Subscribe email newsletter
 */
export async function subscribeNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from("newsletters")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error && error.code !== "23505") { // Ignore unique constraint duplicate
      console.warn("Supabase newsletter error:", error.message);
    }
    return { success: true };
  } catch (err) {
    return { success: true };
  }
}
