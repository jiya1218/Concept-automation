import { useState, useEffect } from "react";
import { Mail, Phone, MessageCircle, MessageSquare, ArrowUp, X, Send, CheckCircle2, User, HelpCircle } from "lucide-react";
import { company } from "@/data/catalog";
import { submitContactForm } from "@/lib/supabase";
import { toast } from "sonner";
import { InquiryModal } from "./InquiryModal";

export function FloatingCornerActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatSubmitted, setChatSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAssistantSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    setChatLoading(true);
    const res = await submitContactForm({
      name: "Assistant Visitor",
      email: "chat@conceptautotech.com",
      phone: company.phoneRaw,
      subject: "Support Assistant Chat Message",
      message: chatMessage,
    });
    setChatLoading(false);

    if (res.success) {
      setChatSubmitted(true);
      toast.success("Message sent to customer desk!", { description: "An automation engineer will assist you shortly." });
      setChatMessage("");
    }
  };

  return (
    <>
      {/* 1. Left Edge Fixed Quick Action Bar (Naksh Style) */}
      <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2 flex flex-col gap-2 p-2 sm:p-3">
        {/* Email Quick Action */}
        <button
          onClick={() => setInquiryModalOpen(true)}
          title="Send Email Inquiry"
          className="group relative flex h-11 w-11 items-center justify-center rounded-r-lg bg-blue-600 text-white shadow-lg transition-all hover:w-36 hover:bg-blue-700"
        >
          <Mail className="h-5 w-5 shrink-0" />
          <span className="ml-2 hidden text-xs font-bold uppercase tracking-wider group-hover:inline">Email Us</span>
        </button>

        {/* Phone Quick Call */}
        <a
          href={`tel:${company.phoneRaw}`}
          title="Call Customer Desk"
          className="group relative flex h-11 w-11 items-center justify-center rounded-r-lg bg-lime-600 text-white shadow-lg transition-all hover:w-36 hover:bg-lime-700"
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span className="ml-2 hidden text-xs font-bold uppercase tracking-wider group-hover:inline">Call Us</span>
        </a>

        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Concept%20Automation,%20I%20need%20assistance%20with:`}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Support"
          className="group relative flex h-11 w-11 items-center justify-center rounded-r-lg bg-emerald-500 text-white shadow-lg transition-all hover:w-36 hover:bg-emerald-600"
        >
          <MessageCircle className="h-5 w-5 shrink-0" />
          <span className="ml-2 hidden text-xs font-bold uppercase tracking-wider group-hover:inline">WhatsApp</span>
        </a>
      </div>

      {/* 2. Bottom Right Floating Customer Support Assistant Widget (Naksh Style) */}
      <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-transform hover:scale-110"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}

        {/* Customer Support Assistant Window */}
        {assistantOpen && (
          <div className="relative w-80 sm:w-96 rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="bg-ink p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-sm">
                  CA
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-ink" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide">Automation Assistant</h4>
                  <p className="text-[10px] text-white/70">Concept Automation Desk · Online</p>
                </div>
              </div>
              <button
                onClick={() => setAssistantOpen(false)}
                className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              <div className="rounded-lg bg-secondary p-3 text-xs text-foreground leading-relaxed">
                👋 Hello! Welcome to <strong>Concept Automation Technologies</strong>.
                <br />
                We are your trusted supplier for Siemens, Mitsubishi, Omron, Delta & Allen Bradley automation. How can we assist you today?
              </div>

              <div className="rounded-lg border border-border p-3 space-y-1.5 text-xs bg-card">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  <a href={`tel:${company.phoneRaw}`} className="hover:text-accent font-mono">{company.phone}</a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 text-accent" />
                  <a href={`mailto:${company.email}`} className="hover:text-accent font-mono">{company.email}</a>
                </div>
              </div>

              {/* Quick Action Buttons inside Assistant */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    setAssistantOpen(false);
                    setInquiryModalOpen(true);
                  }}
                  className="rounded border border-accent/40 bg-accent/10 px-2.5 py-1.5 text-[11px] font-bold text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  Request Quotation
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-center"
                >
                  WhatsApp Support
                </a>
              </div>

              {/* Chat Input */}
              {chatSubmitted ? (
                <div className="flex items-center gap-2 rounded bg-emerald-500/10 p-2.5 text-xs text-emerald-600 font-semibold border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4" /> Message received. We will respond shortly!
                </div>
              ) : (
                <form onSubmit={handleAssistantSend} className="flex gap-2 pt-2 border-t border-border">
                  <input
                    type="text"
                    placeholder="Type part code or query..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="w-full rounded border border-input bg-background px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    disabled={chatLoading}
                    className="rounded bg-accent px-3 py-1.5 text-accent-foreground hover:bg-accent/90"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Floating Assistant Trigger Bubble */}
        <button
          onClick={() => setAssistantOpen((v) => !v)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform hover:scale-110 focus:outline-none"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-extrabold text-white border-2 border-background shadow">
            1
          </span>
        </button>
      </div>

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </>
  );
}
