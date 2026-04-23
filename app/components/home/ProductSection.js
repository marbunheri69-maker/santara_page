"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NFC_PRODUCTS, SANTARA_EVENTS, ANIMATION_VARIANTS } from '../../constants';

// Komponen Popup Detail Produk
const ProductDetailModal = ({ product, onClose }) => {
  const [index, setIndex] = useState(0);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!product) return null;
  const images = product.images || [product.image];

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[150] flex items-center justify-center p-4"
      onClick={onClose}>
      
      <motion.div 
        initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
        className="bg-[#1A1F4E] border border-gray-800 rounded-[30px] md:rounded-[40px] p-6 md:p-12 max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-8 md:gap-10 relative"
        onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white z-50 bg-[#12163E] p-2 rounded-full border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* GALERI GAMBAR */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#12163E] rounded-[25px] border border-gray-800 p-4 aspect-square flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
                <Image src={images[index]} alt={product.name} fill className="object-contain p-2 md:p-4" />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button onClick={prevImage} className="pointer-events-auto bg-white/5 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
                   <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextImage} className="pointer-events-auto bg-white/5 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
                   <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* INFO DETAIL */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-[#A78BFA] uppercase tracking-[0.2em] text-[8px] md:text-[10px] font-bold mb-2">{product.type}</span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{product.name}</h3>
          <p className="text-gray-400 leading-relaxed mb-6 text-xs md:text-sm">
            Optimalkan kualitas istirahatmu dengan teknologi NFC Santara. Stiker ini secara otomatis mengatur perangkatmu ke mode tidur yang ideal.
          </p>
          <p className="text-3xl md:text-4xl font-black text-[#FBBF24] mb-8">{product.price}</p>
          <button 
            onClick={() => window.open(`https://wa.me/6282144603278?text=Halo Santara, saya tertarik: ${product.name}`, '_blank')}
            className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white py-4 md:py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase">
            Pesan via WhatsApp
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Komponen Kartu Produk
const ProductCard = ({ product, onShowDetail }) => {
  const displayImage = product.images ? product.images[0] : product.image;
  return (
    <motion.div variants={ANIMATION_VARIANTS.item} className="bg-[#1A1F4E] rounded-[30px] md:rounded-[35px] border border-gray-800 shadow-2xl flex flex-col h-full overflow-hidden group">
      <div className="relative aspect-square cursor-pointer flex justify-center items-center p-8 md:p-12" onClick={() => onShowDetail(product)}>
        <Image src={displayImage} alt={product.name} fill className="object-contain p-10 md:p-14 transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 md:p-8 border-t border-gray-900 bg-[#1A1F4E] text-center mt-auto">
        <h4 className="text-white font-bold text-base md:text-lg mb-4 tracking-tight">{product.name}</h4>
        <button onClick={() => onShowDetail(product)} className="w-full py-3 rounded-xl border border-gray-700 text-gray-400 text-[9px] md:text-[10px] font-bold tracking-widest hover:bg-[#8B5CF6] hover:text-white transition-all uppercase">
          Lihat Detail
        </button>
      </div>
    </motion.div>
  );
};

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('katalog');

  return (
    <section id="produk" className="bg-[#12163E] py-20 md:py-32 px-6 md:px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container} className="mb-10 md:mb-16">
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-4">
            Produk dari <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-2">Santara</span>
          </motion.h2>
          <motion.div variants={ANIMATION_VARIANTS.item} className="w-16 md:w-24 h-1 bg-[#8B5CF6] mx-auto rounded-full mb-8 md:mb-12" />

          {/* TAB SWITCHER */}
          <div className="inline-flex bg-[#1A1F4E] p-1.5 rounded-xl border border-gray-800">
            {['katalog', 'event'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 md:px-8 py-2.5 rounded-lg font-bold text-[9px] md:text-[10px] tracking-widest transition-all uppercase ${activeTab === tab ? (tab === 'katalog' ? 'bg-[#8B5CF6]' : 'bg-[#FBBF24] text-black') : 'text-gray-500'}`}>
                {tab === 'katalog' ? 'Produk' : 'Event'}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className={`grid gap-6 md:gap-12 ${activeTab === 'katalog' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {activeTab === 'katalog' ? 
              NFC_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} onShowDetail={setSelectedProduct} />) :
              SANTARA_EVENTS.map((e) => (
                <div key={e.id} className="bg-[#1A1F4E] p-8 md:p-10 rounded-[30px] border border-gray-800 text-left relative overflow-hidden group">
                  <span className="absolute top-4 right-4 bg-[#8B5CF6]/20 text-[#A78BFA] px-3 py-1 rounded-full text-[8px] font-bold uppercase">{e.status}</span>
                  <p className="text-[#FBBF24] font-bold text-[10px] mb-2 uppercase">{e.date}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{e.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))
            }
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
    </section>
  );
}