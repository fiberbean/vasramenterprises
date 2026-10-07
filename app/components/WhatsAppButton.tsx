"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919502259293";
  const message = "Hi VASRAM ENTERPRISES, I need a quote for security systems.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white w-7 h-7 md:w-8 md:h-8" />
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
    </a>
  );
}