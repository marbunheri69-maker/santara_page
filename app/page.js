import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ValueSection from './components/home/ValueSection';
import StepsSection from './components/home/StepsSection';
import ProductSection from './components/home/ProductSection';
import TeamSection from './components/home/TeamSection';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-[#12163E] min-h-screen selection:bg-[#8B5CF6]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <StepsSection /> 
      <ProductSection />
      <TeamSection />
    
      {/* Tambahkan StatsSection & ProductSection di sini nanti */}
      <Footer />
    </main>
  );
}