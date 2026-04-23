"use client";
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  // Fungsi untuk handle klik WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282144603278"; // Nomor kamu sesuai data footer
    const message = "Halo Lumora Creation, saya ingin memesan produk Santara.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#12163E]/90 backdrop-blur-md text-white p-4 flex justify-between items-center px-10 border-b border-gray-800 sticky top-0 z-50">
      
      {/* Logo dengan Gradasi Biru ke Ungu */}
      <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
        SANTARA
      </div>

      {/* Menu Navigasi */}
      <div className="hidden md:flex space-x-8 text-sm text-gray-300">
        {NAV_LINKS.map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-[#A78BFA] transition-colors uppercase tracking-widest text-[10px] font-bold"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Tombol Pesan Sekarang dengan Fungsi WA */}
      <button 
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] px-6 py-2.5 rounded-full text-[10px] tracking-widest font-black hover:scale-105 shadow-lg shadow-[#8B5CF6]/30 transition-all uppercase"
      >
        Pesan Sekarang
      </button>
    </motion.nav>
  );
}