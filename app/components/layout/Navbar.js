"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6282144603278";
    const message = "Halo Santara, saya ingin memesan produk.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#12163E]/95 backdrop-blur-md text-white p-4 flex justify-between items-center px-6 md:px-10 border-b border-gray-800 sticky top-0 z-[100]">
      
      {/* Logo */}
      <div className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
        SANTARA
      </div>

      {/* Desktop Menu - Tersembunyi di HP */}
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

      {/* Bagian Kanan: Tombol WA + Menu Mobile */}
      <div className="flex items-center gap-4">
        <button 
          onClick={handleWhatsAppClick}
          className="hidden sm:block bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] px-5 py-2.5 rounded-full text-[10px] tracking-widest font-black hover:scale-105 shadow-lg shadow-[#8B5CF6]/30 transition-all uppercase"
        >
          Pesan Sekarang
        </button>

        {/* Hamburger Icon - Muncul hanya di HP */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#1A1F4E] border-b border-gray-800 flex flex-col p-6 md:hidden z-40"
          >
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="py-4 text-gray-300 border-b border-gray-800/50 hover:text-[#A78BFA] uppercase tracking-widest text-xs font-bold"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleWhatsAppClick}
              className="mt-6 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] w-full py-4 rounded-xl text-[10px] tracking-widest font-black uppercase"
            >
              Pesan via WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}