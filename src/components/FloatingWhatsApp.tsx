import { motion } from "framer-motion";
import { business } from "../data/content";
import { WhatsAppIcon } from "./icons";

const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage
)}`;

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50 h-15 w-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_36px_-8px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <WhatsAppIcon size={27} className="relative" />
    </motion.a>
  );
}
