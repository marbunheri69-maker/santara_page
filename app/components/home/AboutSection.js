"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ANIMATION_VARIANTS } from '../../constants';

export default function AboutSection() {
  // Data tambahan agar kode lebih rapi dan mudah diubah
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
    <section id="tentang" className="bg-[#12163E] text-white py-32 px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATION_VARIANTS.container}
          className="md:w-1/2">
          
          <motion.h2 variants={ANIMATION_VARIANTS.item} className="text-5xl font-extrabold mb-8 tracking-tighter">
            Tentang 
            {/* Teks SANTARA dengan gradasi Biru ke Ungu */}
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-3">
              SANTARA
            </span>
          </motion.h2>
          
          <motion.p variants={ANIMATION_VARIANTS.item} className="text-gray-400 text-lg leading-relaxed mb-10">
            SANTARA adalah platform sleep-tech yang menggunakan stiker NFC sebagai pemicu ritual tidur otomatis. Berikut adalah manfaat utama yang akan kamu dapatkan:
          </motion.p>
          
          {/* Bagian Manfaat Baru */}
          <motion.div variants={ANIMATION_VARIANTS.item} className="grid grid-cols-1 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#1A1F4E] p-5 rounded-2xl border border-gray-800 hover:border-[#8B5CF6]/40 transition-colors shadow-lg group">
                {/* Ikon dengan warna aksen yang serasi */}
                <span className="text-3xl bg-[#12163E] text-[#A78BFA] p-3 rounded-xl transition-colors group-hover:bg-[#8B5CF6]/10">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-bold text-[#A78BFA] text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          className="md:w-1/2 flex justify-center sticky top-20">
          <div className="relative p-10 bg-[#1A1F4E] rounded-[40px] border border-gray-800 shadow-3xl overflow-hidden group">
              {/* Efek Glow di belakang logo */}
              <div className="absolute inset-0 bg-[#8B5CF6]/5 blur-3xl group-hover:bg-[#8B5CF6]/10 transition-colors" />
              <Image 
                src="/LogoUtama.png" 
                alt="Logo Santara" 
                width={350} 
                height={350} 
                className="relative z-10 drop-shadow-2xl"
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
}