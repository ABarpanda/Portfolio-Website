import { motion } from "motion/react";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Visible grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234, 234, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 234, 234, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Large gradient orbs - much more visible */}
      <div
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)'
        }}
      />
      
      <div
        className="absolute bottom-40 right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Floating geometric shapes - very visible */}
      <motion.div
        animate={{
          y: [-20, 20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 left-[15%] w-32 h-32 border-2 border-[#D4AF37]/40"
      />
      
      <motion.div
        animate={{
          y: [20, -20],
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-60 right-[20%] w-24 h-24 border-2 border-[#D4AF37]/30"
      />
      
      <motion.div
        animate={{
          y: [-15, 15],
          rotate: [0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-60 left-[25%] w-40 h-40 border-2 border-[#EAEAEA]/20"
      />

      {/* Visible corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-[#D4AF37]/40" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-[#D4AF37]/40" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-[#D4AF37]/40" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-[#D4AF37]/40" />
      
      {/* Pulsing circle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#D4AF37]/20 rounded-full"
      />
      
      {/* Vertical lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-[#EAEAEA]/20 to-transparent" />
      <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-[#EAEAEA]/20 to-transparent" />
    </div>
  );
}