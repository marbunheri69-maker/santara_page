"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#12163E] text-white pt-24 pb-12 px-10 relative">
      
      {/* Garis Pembatas Atas dengan Efek Gradasi (Divider) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        
        {/* Kolom 1: Brand */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-black tracking-tighter">
            {/* Gradasi Biru ke Ungu pada teks SANTARA */}
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
              SANTARA
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Membantu mengakhiri hari dengan satu tap. 
            Solusi sederhana untuk berhenti dari distraksi digital dan membangun kebiasaan tidur yang lebih sehat.
          </p>
        </div>

        {/* Kolom 2: Menu */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">Menu</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
            <li className="hover:text-[#A78BFA] transition-colors cursor-pointer">Produk</li>
            <li className="hover:text-[#A78BFA] transition-colors cursor-pointer">Tentang</li>
            <li className="hover:text-[#A78BFA] transition-colors cursor-pointer">Manfaat</li>
            <li className="hover:text-[#A78BFA] transition-colors cursor-pointer italic">Set Up</li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">Hubungi Kami</h3>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3 group">
              <span className="text-[#A78BFA] bg-[#1A1F4E] p-2 rounded-lg group-hover:bg-[#8B5CF6]/20 transition-colors">📸</span> 
              @santara
            </li>
            <li className="flex items-center gap-3 group">
              <span className="text-[#A78BFA] bg-[#1A1F4E] p-2 rounded-lg group-hover:bg-[#8B5CF6]/20 transition-colors">📞</span> 
              +6281991618323
            </li>
            <li className="flex items-center gap-3 group">
              <span className="text-[#A78BFA] bg-[#1A1F4E] p-2 rounded-lg group-hover:bg-[#8B5CF6]/20 transition-colors">📍</span> 
              Jl. Tukad Badung, Denpasar
            </li>
          </ul>
        </div>
      </div>

      {/* Garis Bawah & Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-800/50 pt-8 flex flex-col items-center gap-4">
        <div className="flex gap-6 mb-2">
           <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse delay-75"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse delay-150"></div>
        </div>
        <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase text-center">
          © 2026 <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent font-bold">SANTARA</span>. Sleep Ritual System.
        </p>
      </div>
    </footer>
  );
}