"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TEAM_MEMBERS, ANIMATION_VARIANTS } from '../../constants'; 

const TeamCard = ({ member }) => (
  <motion.div 
    variants={ANIMATION_VARIANTS.item}
    className="bg-[#1A1F4E] rounded-2xl sm:rounded-[35px] border border-gray-800 p-5 sm:p-6 lg:p-8 flex flex-col items-center text-center group hover:shadow-2xl hover:border-[#8B5CF6]/50 transition-all duration-300"
  >
    {/* Avatar Container */}
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-6 group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[#12163E] rounded-full overflow-hidden border border-gray-700 shadow-inner">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
          unoptimized 
        />
      </div>

      <div className="absolute inset-0 rounded-full border-2 border-[#A78BFA]/10 group-hover:border-[#A78BFA]/40 transition-colors" />
    </div>

    {/* Info */}
    <h3 className="text-white font-bold text-base sm:text-lg mb-1 leading-tight tracking-tight">
      {member.name}
    </h3>
    
    <p className="text-[#FBBF24] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">
      {member.role}
    </p>
    
    <p className="text-gray-400 text-sm sm:text-base italic font-medium leading-relaxed">
      "{member.tagline}"
    </p>
  </motion.div>
);

export default function TeamSection() {
  return (
    <section id="tim" className="bg-[#12163E] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-6"
          >
            Tim 
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent ml-3">
              Santara
            </span> 
            <span className="ml-2">Creation</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto rounded-full"
          />
        </div>

        {/* Grid Tim */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8"
        >
          {TEAM_MEMBERS && TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}