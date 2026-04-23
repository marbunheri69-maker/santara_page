"use client";
import { motion } from 'framer-motion';
import { CORE_VALUES, USER_BENEFITS, ANIMATION_VARIANTS } from '../../constants';

export default function ValueSection() {
  const allValues = [...(CORE_VALUES || []), ...(USER_BENEFITS || [])];

  return (
    <section id="manfaat" className="bg-[#12163E] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* JUDUL UTAMA */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter"
          >
            Nilai dan Manfaat 
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-3">
              Santara
            </span>
          </motion.h2>

          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto rounded-full" />
        </div>

        {/* GRID KARTU */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          variants={ANIMATION_VARIANTS} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {allValues.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={ANIMATION_VARIANTS?.item}
              className="bg-[#1A1F4E] border border-gray-800 rounded-2xl sm:rounded-[32px] p-5 sm:p-6 lg:p-8 flex flex-col items-center text-center shadow-2xl transition-all hover:border-[#8B5CF6]/50 hover:scale-[1.05] group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-5 sm:mb-6 bg-[#12163E] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-[#A78BFA] font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}