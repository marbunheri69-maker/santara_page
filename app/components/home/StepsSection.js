"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { STEPS, ANIMATION_VARIANTS, SETUP_DETAILS } from '../../constants';

export default function StepsSection() {
  const [device, setDevice] = useState('android');

  return (
    <section id="setup" className="bg-[#12163E] text-white py-20 md:py-24 px-6 md:px-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container}
          className="text-center mb-12 md:mb-16">
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-3xl md:text-4xl font-bold tracking-tight">
            Cara Kerja <span className="text-[#A78BFA]">Santara</span>
          </motion.h2>
          <motion.div variants={ANIMATION_VARIANTS.item} className="w-16 md:w-20 h-1 bg-[#8B5CF6] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Tiga Langkah Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24">
          {STEPS.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 bg-[#1A1F4E] rounded-3xl border border-gray-800 group overflow-hidden">
              <span className="text-4xl md:text-5xl font-black text-white/5 absolute top-4 right-6 uppercase">
                {step.id}
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FBBF24]">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-xs md:text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* BAGIAN SETUP SPESIFIK OS */}
        <div className="bg-[#1A1F4E] rounded-[30px] md:rounded-[40px] p-6 md:p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Pilih Perangkat Kamu</h3>
            
            {/* Tombol Switcher Responsif */}
            <div className="inline-flex flex-col sm:flex-row bg-[#12163E] p-1.5 md:p-2 rounded-2xl border border-gray-800 w-full sm:w-auto">
              <button 
                onClick={() => setDevice('android')}
                className={`flex items-center justify-center space-x-3 px-6 md:px-8 py-3 rounded-xl font-bold text-xs md:text-sm transition-all mb-1 sm:mb-0 ${device === 'android' ? 'bg-[#8B5CF6] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                <span>🤖</span>
                <span>Android</span>
              </button>
              <button 
                onClick={() => setDevice('iphone')}
                className={`flex items-center justify-center space-x-3 px-6 md:px-8 py-3 rounded-xl font-bold text-xs md:text-sm transition-all ${device === 'iphone' ? 'bg-[#8B5CF6] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                <span>🍎</span>
                <span>iPhone / iOS</span>
              </button>
            </div>
          </div>

          {/* Konten Langkah Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={device}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {SETUP_DETAILS[device].map((item, idx) => (
                <div key={idx} className="bg-[#12163E] p-5 md:p-6 rounded-2xl border border-gray-800 relative flex flex-col items-start">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-[#8B5CF6]/20 text-[#A78BFA] rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs mb-4 shrink-0">
                    {item.step}
                  </div>
                  <p className="text-[11px] md:text-sm text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <p className="text-center text-gray-500 text-[10px] md:text-xs mt-10 italic px-4">
            *Langkah di atas adalah panduan umum. Detail lengkap tersedia dalam kartu instruksi di setiap pembelian.
          </p>
        </div>

      </div>
    </section>
  );
}