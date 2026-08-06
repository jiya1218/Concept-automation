import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Shield } from "lucide-react";
import { submitInquiry, type InquiryPayload } from "@/lib/supabase";
import { toast } from "sonner";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  partNumber?: string;
}

export function InquiryModal({ isOpen, onClose, productName = "", partNumber = "" }: InquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("6669");
  const [userCaptcha, setUserCaptcha] = useState("");

  const [formData, setFormData] = useState<InquiryPayload>({
    name: "", email: "", phone: "", company: "",
    product_name: productName, part_number: partNumber,
    quantity: 1, location: "", message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setCaptchaCode(Math.floor(1000 + Math.random() * 9000).toString());
      setUserCaptcha("");
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in Name, Email, and Phone.");
      return;
    }
    if (userCaptcha !== captchaCode) {
      toast.error("Invalid Captcha!", { description: `Enter: ${captchaCode}` });
      return;
    }
    setLoading(true);
    const res = await submitInquiry({
      ...formData,
      product_name: formData.product_name || productName || "General Inquiry",
      part_number: formData.part_number || partNumber || "",
    });
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      toast.success("Inquiry Submitted!", { description: "We'll contact you shortly." });
    } else {
      toast.error("Failed. Call us directly at +91 80454 75169.");
    }
  };

  const inputClass = "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-stone-950 px-6 py-4 text-white flex items-center justify-between">
          <h2 className="font-display text-base font-bold">Get Your Free Quote</h2>
          <button onClick={onClose} className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
              <h3 className="mt-3 text-lg font-bold font-display text-stone-900">Quotation Request Received!</h3>
              <p className="mt-2 text-sm text-stone-500">
                Thank you, <strong className="text-stone-900">{formData.name}</strong>. We'll email/call you shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-5 w-full rounded-xl bg-stone-950 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" required placeholder="Your Name *" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />

              <input type="text" placeholder="Company Name" value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="email" required placeholder="Email *" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                <input type="text" placeholder="City / Location" value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })} className={inputClass} />
              </div>

              <input type="tel" required placeholder="Phone / WhatsApp *" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />

              <textarea rows={3} placeholder="Your requirement (part number, quantity, brand)..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`} />

              {/* Captcha */}
              <div className="flex items-center gap-3">
                <input type="text" required placeholder="Enter Captcha *" value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)} className={inputClass} />
                <div className="flex h-10 w-28 shrink-0 items-center justify-center rounded-xl bg-stone-950 font-mono text-base font-bold tracking-widest text-white select-none">
                  {captchaCode}
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-stone-950 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors disabled:opacity-50">
                {loading ? "Submitting..." : <><Send className="h-4 w-4" /> Submit Inquiry</>}
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-stone-400">
                <Shield className="h-3.5 w-3.5 text-amber-500" />
                <span>Your information is secure and never shared</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
