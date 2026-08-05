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
    name: "",
    email: "",
    phone: "",
    company: "",
    product_name: productName,
    part_number: partNumber,
    quantity: 1,
    location: "",
    message: "",
  });

  // Generate dynamic 4-digit captcha on open
  useEffect(() => {
    if (isOpen) {
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setCaptchaCode(code);
      setUserCaptcha("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in your Name, Email, and Phone number.");
      return;
    }

    if (userCaptcha !== captchaCode) {
      toast.error("Invalid Captcha Code!", { description: `Please enter the 4-digit code: ${captchaCode}` });
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
      toast.success("Inquiry Submitted Successfully!", {
        description: "Our engineering team in Makarba, Ahmedabad will email/call you shortly.",
      });
    } else {
      toast.error("Submission failed. Please call us directly at +91 80454 75169.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all">
        {/* Exact Naksh Blue Header Strip */}
        <div className="bg-primary px-6 py-4 text-white flex items-center justify-between">
          <h2 className="font-display text-lg font-bold uppercase tracking-wider">
            Get Your Free Quote
          </h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-white/80 hover:bg-white/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500 animate-bounce" />
              <h3 className="mt-4 text-xl font-bold font-display uppercase tracking-wide text-foreground">
                Quotation Request Received!
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Thank you, <strong className="text-foreground">{formData.name}</strong>. Your requirement has been logged in our system.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="City / Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirement (part number, quantity, brand)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Exact Naksh Captcha Verification Row */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  required
                  placeholder="Enter Captcha *"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="w-full rounded-lg border border-input bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="flex h-10 w-28 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-base font-extrabold tracking-widest text-primary-foreground shadow select-none">
                  {captchaCode}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg bg-card-foreground px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-background hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Submitting..." : <><Send className="h-4 w-4" /> Submit Your Inquiry</>}
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-amber-500" />
                <span>Your information is secure and will never be shared</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
