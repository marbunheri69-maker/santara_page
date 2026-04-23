"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { STEPS, ANIMATION_VARIANTS, SETUP_DETAILS } from '../../constants';

export default function StepsSection() {
  const [device, setDevice] = useState('android'); // Default ke android

  return (
    <section id="setup" className="bg-[#12163E] text-white py-24 px-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Cara Kerja Umum */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container}
          className="text-center mb-16">
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-4xl font-bold tracking-tight">
            Cara Kerja <span className="text-[#A78BFA]">Santara</span>
          </motion.h2>
          <motion.div variants={ANIMATION_VARIANTS.item} className="w-20 h-1 bg-[#8B5CF6] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Tiga Langkah Utama */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {STEPS.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 bg-[#1A1F4E] rounded-3xl border border-gray-800 group">
              <span className="text-5xl font-black text-white/5 absolute top-4 right-6 uppercase">
                {step.id}
              </span>
              <h3 className="text-xl font-bold mb-4 text-[#FBBF24]">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* BAGIAN SETUP SPESIFIK OS */}
        <div className="bg-[#1A1F4E] rounded-[40px] p-8 md:p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-6">Pilih Perangkat Kamu</h3>
            
            {/* Tombol Switcher */}
            <div className="inline-flex bg-[#12163E] p-2 rounded-2xl border border-gray-800">
              <button 
                onClick={() => setDevice('android')}
                className={`flex items-center space-x-3 px-8 py-3 rounded-xl font-bold text-sm transition-all ${device === 'android' ? 'bg-[#8B5CF6] text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                <span>🤖</span>
                <span>Android</span>
              </button>
              <button 
                onClick={() => setDevice('iphone')}
                className={`flex items-center space-x-3 px-8 py-3 rounded-xl font-bold text-sm transition-all ${device === 'iphone' ? 'bg-[#8B5CF6] text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                <span>🍎</span>
                <span>iPhone / iOS</span>
              </button>
            </div>
          </div>

          {/* Konten Langkah Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={device}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SETUP_DETAILS[device].map((item, idx) => (
                <div key={idx} className="bg-[#12163E] p-6 rounded-2xl border border-gray-800 relative">
                  <div className="w-8 h-8 bg-[#8B5CF6]/20 text-[#A78BFA] rounded-full flex items-center justify-center font-bold text-xs mb-4">
                    {item.step}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <p className="text-center text-gray-500 text-xs mt-12 italic">
            *Langkah di atas adalah panduan umum. Detail lengkap tersedia dalam kartu instruksi di setiap pembelian.
          </p>
        </div>

      </div>
    </section>
  );
}