"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ANIMATION_VARIANTS } from '../../constants';

export default function HeroSection() {
  const scrollToProduct = () => {
    const productSection = document.getElementById('produk');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial="hidden" animate="visible" variants={ANIMATION_VARIANTS.container}
      className="bg-[#12163E] text-white py-16 md:py-24 px-6 md:px-10 flex flex-col md:flex-row items-center relative overflow-hidden min-h-[100vh] md:min-h-[90vh]">
      
      {/* Efek Glow Latar Belakang - Disesuaikan ukurannya agar tidak berat di HP */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#8B5CF6]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Bagian Teks */}
      <div className="w-full md:w-3/5 md:pr-10 z-10 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.p variants={ANIMATION_VARIANTS.item} className="text-[#A78BFA] mb-4 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold">
          Sleep Ritual System
        </motion.p>
        
        <motion.h1 variants={ANIMATION_VARIANTS.item} className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
            SANTARA
          </span>
          <br />
          <span className="text-gray-400 text-2xl md:text-5xl block mt-2">NFC-based sleep ritual system.</span>
        </motion.h1>

        <motion.p variants={ANIMATION_VARIANTS.item} className="text-gray-400 max-w-lg mb-10 leading-relaxed text-sm px-4 md:px-0">
          Solusi cerdas untuk membantu kamu beralih dari aktivitas digital ke waktu istirahat hanya dengan satu tap sederhana.
        </motion.p>
        
        <motion.button 
          onClick={scrollToProduct}
          variants={ANIMATION_VARIANTS.item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] px-10 py-4 rounded-full font-black text-[10px] tracking-[0.2em] shadow-xl shadow-[#8B5CF6]/30 uppercase">
          LIHAT PRODUK
        </motion.button>
      </div>

      {/* Bagian Visual Gambar */}
      <div className="w-full md:w-2/5 relative h-[400px] md:h-[500px] mt-16 md:mt-0 flex justify-center items-center">
        {/* Gambar Atas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-4 md:right-0 w-48 md:w-64 h-64 md:h-80 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl z-20">
          <Image src="/santaratidur.png" alt="Hero 1" fill className="object-cover" />
        </motion.div>
        
        {/* Gambar Bawah */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-4 left-4 md:left-0 w-48 md:w-64 h-64 md:h-80 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl z-10">
          <Image src="/santaraNFC.png" alt="Hero 2" fill className="object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
}