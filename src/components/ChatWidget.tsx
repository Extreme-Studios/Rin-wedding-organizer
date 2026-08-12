import { FormEvent, useEffect, useRef, useState } from "react";
import { LoaderCircle, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { business } from "../data/content";

type ChatMessage = { role: "assistant" | "user"; text: string };

const DAILY_LIMIT = 12;
const storageKey = "rin-sahabat-rin-usage";

function usageAvailable() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return saved.date === today ? Math.max(0, DAILY_LIMIT - (saved.count || 0)) : DAILY_LIMIT;
  } catch {
    return DAILY_LIMIT;
  }
}

function consumeUsage() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const count = saved.date === today ? (saved.count || 0) + 1 : 1;
    localStorage.setItem(storageKey, JSON.stringify({ date: today, count }));
    return Math.max(0, DAILY_LIMIT - count);
  } catch {
    return 0;
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState(DAILY_LIMIT);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Halo, Kak! Aku Sahabat Rin. Mau tanya layanan, paket, atau persiapan acara? Ceritakan saja dengan santai ya." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Halo Kak Rin, saya ingin konsultasi.")}`;

  useEffect(() => {
    setRemaining(usageAvailable());
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    if (remaining <= 0) {
      setMessages((current) => [...current, { role: "assistant", text: "Batas chat hari ini sudah tercapai. Untuk lanjut konsultasi, silakan chat tim Rin via WhatsApp ya, Kak." }]);
      return;
    }

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", text: message }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Tidak dapat menghubungi Sahabat Rin.");
      setRemaining(consumeUsage());
      setMessages((current) => [...current, { role: "assistant", text: data.reply }]);
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Sahabat Rin sedang gangguan.";
      setMessages((current) => [...current, { role: "assistant", text: `${fallback} Untuk bantuan cepat, silakan chat tim Rin via WhatsApp.` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[55] flex flex-col items-end gap-3">
      {open && (
        <section aria-label="Sahabat Rin" className="w-[min(23rem,calc(100vw-2.5rem))] overflow-hidden rounded-[1.6rem] border border-champagne bg-white shadow-lift">
          <header className="flex items-center justify-between bg-gradient-to-r from-[#4a3f33] to-cocoa px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15"><Sparkles size={18} className="text-champagne" /></span>
              <div><h2 className="font-serif text-xl">Sahabat Rin</h2><p className="text-xs text-cream/75">Teman konsultasi pernikahanmu</p></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Tutup chat" className="rounded-full p-2 text-white/80 hover:bg-white/15 hover:text-white"><X size={19} /></button>
          </header>

          <div ref={scrollRef} className="h-80 space-y-3 overflow-y-auto bg-cream/50 p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "ml-8 rounded-2xl rounded-br-md bg-cocoa px-3.5 py-2.5 text-sm leading-relaxed text-white" : "mr-6 rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-cocoa shadow-sm"}>{message.text}</div>
            ))}
            {loading && <div className="mr-6 flex w-fit items-center gap-2 rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-sm text-taupe shadow-sm"><LoaderCircle size={15} className="animate-spin" /> Sedang mengetik...</div>}
          </div>

          <form onSubmit={sendMessage} className="border-t border-champagne/60 bg-white p-3">
            <div className="flex gap-2"><input value={input} onChange={(event) => setInput(event.target.value)} maxLength={800} placeholder="Contoh: ka mau makeup lamaran..." aria-label="Pesan untuk Sahabat AI" className="min-w-0 flex-1 rounded-xl border border-champagne bg-cream/50 px-3 py-2.5 text-sm outline-none transition focus:border-gold" /><button type="submit" disabled={loading || !input.trim()} aria-label="Kirim pesan" className="rounded-xl bg-gradient-to-r from-gold to-nude px-3 text-white disabled:cursor-not-allowed disabled:opacity-50"><Send size={17} /></button></div>
            <div className="mt-2 flex items-center justify-between gap-3 text-[0.65rem] text-taupe"><span>Untuk detail final, konfirmasi ke tim Rin ya.</span><a href={waLink} target="_blank" rel="noreferrer" className="shrink-0 text-gold-dark hover:underline">WhatsApp</a></div>
          </form>
        </section>
      )}

      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Buka Sahabat Rin" className="flex h-15 items-center gap-2 rounded-full bg-gradient-to-r from-[#4a3f33] to-cocoa px-5 text-sm font-medium text-white shadow-lift transition hover:-translate-y-0.5">
        {open ? <X size={20} /> : <MessageCircle size={20} />} <span>Sahabat Rin</span>
      </button>
    </div>
  );
}
