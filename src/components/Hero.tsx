import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { RocketAnimation } from "./RocketAnimation";

interface HeroProps {
  onViewWork: () => void;
}

export function Hero({ onViewWork }: HeroProps) {
  const [isRocketFlying, setIsRocketFlying] = useState(false);

  const handleViewWork = () => {
    setIsRocketFlying(true);
    // Delay the scroll to sync with rocket animation
    setTimeout(() => {
      onViewWork();
    }, 300);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <RocketAnimation 
        isActive={isRocketFlying} 
        onComplete={() => setIsRocketFlying(false)} 
      />
      
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37]">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight"
            >
              Amritanshu
              <br />
              <span className="text-[#D4AF37]">Barpanda</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[#9a9a9a] mb-8 max-w-xl leading-relaxed"
            >
              Aspiring AI Engineer focused on deep learning, NLP, and computer vision. I aim to make AI accessible and improve everyday human life through practical, meaningful applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleViewWork}
                className="group relative px-8 py-4 bg-[#D4AF37] text-[#121212] rounded-sm overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#C0A062]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-white/15 text-[#EAEAEA] rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Stats/Info */}
          <div className="md:col-span-5 space-y-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-1 h-16 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                <div>
                  <div className="text-4xl text-[#D4AF37] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#9a9a9a]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#9a9a9a] uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}