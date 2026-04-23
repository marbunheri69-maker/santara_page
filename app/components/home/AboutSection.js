"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ANIMATION_VARIANTS } from '../../constants';

export default function AboutSection() {
  const benefits = [
    {
      icon: "⏰",
      title: "Mengurangi Kebiasaan Begadang",
      desc: "Membantu pengguna berhenti dari kebiasaan scrolling tanpa sadar di malam hari."
    },
    {
      icon: "💤",
      title: "Meningkatkan Kualitas Tidur",
      desc: "Menciptakan kondisi yang lebih ideal agar pengguna dapat tidur lebih cepat dan nyenyak."
    },
    {
      icon: "🌿",
      title: "Membangun Rutinitas Sehat",
      desc: "Mendorong terbentuknya kebiasaan tidur yang konsisten setiap hari."
    },
    {
      icon: "📱",
      title: "Mengurangi Distraksi Digital",
      desc: "Mengontrol notifikasi dan penggunaan smartphone sebelum tidur."
    }
  ];

  return (
    <section id="tentang" className="bg-[#12163E] text-white py-20 md:py-32 px-6 md:px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Bagian Teks & Manfaat */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container}
          className="w-full md:w-1/2 order-2 md:order-1">
          
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 tracking-tighter text-center md:text-left">
            Tentang 
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-2 md:ml-3">
              SANTARA
            </span>
          </motion.h2>
          
          <motion.p variants={ANIMATION_VARIANTS.item} className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-center md:text-left">
            SANTARA adalah platform sleep-tech yang menggunakan stiker NFC sebagai pemicu ritual tidur otomatis. Berikut adalah manfaat utama yang akan kamu dapatkan:
          </motion.p>
          
          {/* List Manfaat */}
          <motion.div variants={ANIMATION_VARIANTS.item} className="grid grid-cols-1 gap-4 md:gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#1A1F4E] p-5 rounded-2xl border border-gray-800 hover:border-[#8B5CF6]/40 transition-colors shadow-lg group">
                <span className="text-2xl md:text-3xl bg-[#12163E] text-[#A78BFA] p-3 rounded-xl transition-colors group-hover:bg-[#8B5CF6]/10 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-bold text-[#A78BFA] text-base md:text-lg mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Bagian Gambar Logo */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 md:sticky md:top-32">
          <div className="relative p-6 md:p-10 bg-[#1A1F4E] rounded-[30px] md:rounded-[40px] border border-gray-800 shadow-3xl overflow-hidden group w-full max-w-[300px] md:max-w-full">
              <div className="absolute inset-0 bg-[#8B5CF6]/5 blur-3xl group-hover:bg-[#8B5CF6]/10 transition-colors" />
              <Image 
                src="/LogoUtama.png" 
                alt="Logo Santara" 
                width={350} 
                height={350} 
                className="relative z-10 drop-shadow-2xl mx-auto"
              />
          </div>
        </motion.div>

      </div>
    </section>
  );
}