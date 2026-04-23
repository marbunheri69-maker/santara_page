"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { NFC_PRODUCTS, SANTARA_EVENTS, ANIMATION_VARIANTS } from '../../constants';

// Komponen Popup Detail Produk dengan Galeri Swipe
const ProductDetailModal = ({ product, onClose }) => {
  const [index, setIndex] = useState(0);

  if (!product) return null;

  // Pastikan kita punya array images, jika tidak gunakan image tunggal sebagai fallback
  const images = product.images || [product.image];

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleOrderClick = () => {
    const phoneNumber = "6282144603278"; 
    const message = `Halo Lumora Creation, saya tertarik memesan produk: ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}>
      
      <motion.div 
        initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
        className="bg-[#1A1F4E] border border-gray-800 rounded-[40px] p-6 md:p-12 max-w-6xl w-full flex flex-col md:flex-row gap-10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white z-50 bg-[#12163E] p-2 rounded-full border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* BAGIAN KIRI: Galeri Gambar */}
        <div className="md:w-1/2 relative group">
          <div className="bg-[#12163E] rounded-[30px] border border-gray-800 p-4 aspect-square flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image src={images[index]} alt={product.name} fill className="object-contain drop-shadow-2xl p-4" />
              </motion.div>
            </AnimatePresence>

            {/* Navigasi Gambar */}
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
                   <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
                   <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${index === i ? 'w-8 bg-[#8B5CF6]' : 'w-2 bg-gray-700'}`} 
              />
            ))}
          </div>
        </div>

        {/* BAGIAN KANAN: Detail Info */}
        <div className="md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-[#A78BFA] uppercase tracking-[0.3em] text-[10px] font-bold mb-4">{product.type}</span>
          <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">{product.name}</h3>
          <p className="text-gray-400 leading-relaxed mb-10 text-sm">
            Optimalkan kualitas istirahatmu dengan teknologi NFC Santara. Stiker ini secara otomatis mengatur perangkatmu ke mode tidur yang ideal, mematikan distraksi, dan menciptakan suasana tenang hanya dengan satu sentuhan.
          </p>
          <div className="flex items-center justify-between mb-10">
            <p className="text-4xl font-black text-[#FBBF24]">{product.price}</p>
          </div>
          <button 
            onClick={handleOrderClick}
            className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] hover:scale-[1.02] shadow-2xl transition-all uppercase">
            Pesan via WhatsApp
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Komponen Kartu Produk (Tetap sama, menggunakan images[0])
const ProductCard = ({ product, onShowDetail }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayImage = product.images ? product.images[0] : product.image;

  return (
    <motion.div 
      variants={ANIMATION_VARIANTS.item}
      className="bg-[#1A1F4E] rounded-[35px] border border-gray-800 shadow-2xl flex flex-col group h-full overflow-hidden">
      <div 
        className="relative aspect-square cursor-pointer overflow-hidden flex justify-center items-center p-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onShowDetail(product)}>
        <Image src={displayImage} alt={product.name} fill className="object-contain p-14 transition-transform duration-700 ease-in-out group-hover:scale-110" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} className="absolute inset-0 bg-[#12163E]/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white/10 p-4 rounded-full mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
             </svg>
          </div>
          <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">Lihat Detail Produk</p>
        </motion.div>
      </div>
      <div className="p-8 border-t border-gray-900 bg-[#1A1F4E] text-center mt-auto">
        <h4 className="text-white font-bold text-lg mb-6 tracking-tight">{product.name}</h4>
        <button onClick={() => onShowDetail(product)} className="w-full py-3.5 rounded-xl border border-gray-700 text-gray-400 text-[10px] font-bold tracking-widest hover:bg-[#8B5CF6] hover:text-white transition-all uppercase">
          Tanya Produk Ini
        </button>
      </div>
    </motion.div>
  );
};

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('katalog');

  return (
    <section id="produk" className="bg-[#12163E] py-32 px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container} className="mb-16">
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-5xl font-extrabold text-white tracking-tighter mb-6">
            Katalog 
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-3">
               Santara
            </span>
          </motion.h2>
          <motion.div variants={ANIMATION_VARIANTS.item} className="w-24 h-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto rounded-full mb-12" />

          {/* TAB SWITCHER */}
          <motion.div variants={ANIMATION_VARIANTS.item} className="inline-flex bg-[#1A1F4E] p-2 rounded-2xl border border-gray-800 mb-12">
            <button 
              onClick={() => setActiveTab('katalog')}
              className={`px-8 py-3 rounded-xl font-bold text-[10px] tracking-widest transition-all uppercase ${activeTab === 'katalog' ? 'bg-[#8B5CF6] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
              Produk
            </button>
            <button 
              onClick={() => setActiveTab('event')}
              className={`px-8 py-3 rounded-xl font-bold text-[10px] tracking-widest transition-all uppercase ${activeTab === 'event' ? 'bg-[#FBBF24] text-black shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
              Event
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'katalog' ? (
            <motion.div 
              key="katalog" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {NFC_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} onShowDetail={setSelectedProduct} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="event" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {SANTARA_EVENTS.map((event) => (
                <div key={event.id} className="bg-[#1A1F4E] p-10 rounded-[35px] border border-gray-800 relative overflow-hidden group">
                  <span className="absolute top-6 right-8 bg-[#8B5CF6]/20 text-[#A78BFA] px-4 py-1 rounded-full text-[10px] font-bold uppercase">{event.status}</span>
                  <p className="text-[#FBBF24] font-bold text-xs mb-2 uppercase tracking-widest">{event.date}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
    </section>
  );
}