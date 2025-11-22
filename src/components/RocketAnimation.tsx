import { motion, AnimatePresence } from "motion/react";
import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

interface RocketAnimationProps {
  isActive: boolean;
  onComplete: () => void;
}

export function RocketAnimation({ isActive, onComplete }: RocketAnimationProps) {
  const [smokeParticles, setSmokeParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [particleId, setParticleId] = useState(0);
  const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 40 });
  const [pathPoints, setPathPoints] = useState<{ left: number; top: number }[]>([
    { left: 50, top: 40 },
    { left: 50, top: 50 },
    { left: 50, top: 60 },
    { left: 50, top: 70 },
    { left: 50, top: 80 },
  ]);

  // Generate random path points
  const generateRandomPath = () => {
    return [
      { left: 50, top: 40 }, // Start position (center-ish)
      { left: Math.random() * 60 + 20, top: Math.random() * 30 + 10 }, // Random top area
      { left: Math.random() * 60 + 20, top: Math.random() * 30 + 30 }, // Random middle
      { left: Math.random() * 40 + 30, top: Math.random() * 20 + 40 }, // Random lower middle
      { left: 50, top: 80 }, // End near projects section
    ];
  };

  useEffect(() => {
    if (isActive) {
      // Generate new random path for this animation
      const newPath = generateRandomPath();
      setPathPoints(newPath);
      
      // Reset rocket position to start
      setRocketPosition({ x: newPath[0].left, y: newPath[0].top });
      
      // Animate rocket position for smoke trail
      let currentPoint = 0;
      const pointDuration = 2500 / newPath.length;
      
      const positionInterval = setInterval(() => {
        if (currentPoint < newPath.length) {
          setRocketPosition({
            x: newPath[currentPoint].left,
            y: newPath[currentPoint].top,
          });
          currentPoint++;
        }
      }, pointDuration);

      // Generate smoke particles continuously during flight
      const smokeInterval = setInterval(() => {
        setParticleId((prev) => {
          const newId = prev + 1;
          setSmokeParticles((current) => {
            // Keep only recent particles
            const filtered = current.filter((p) => newId - p.id < 25);
            return [
              ...filtered,
              {
                id: newId,
                x: rocketPosition.x + (Math.random() - 0.5) * 4,
                y: rocketPosition.y + (Math.random() - 0.5) * 4,
              },
            ];
          });
          return newId;
        });
      }, 60);

      // Clean up after animation
      const timer = setTimeout(() => {
        clearInterval(smokeInterval);
        clearInterval(positionInterval);
        setSmokeParticles([]);
        setParticleId(0);
        onComplete();
      }, 2800);

      return () => {
        clearInterval(smokeInterval);
        clearInterval(positionInterval);
        clearTimeout(timer);
      };
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div 
          key="rocket-container"
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Smoke trail particles */}
          {smokeParticles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                opacity: 0.6,
                scale: 0.5,
              }}
              animate={{
                opacity: 0,
                scale: 2,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="absolute w-6 h-6 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                background:
                  particle.id % 2 === 0
                    ? "radial-gradient(circle, rgba(234,234,234,0.5) 0%, rgba(234,234,234,0) 70%)"
                    : "radial-gradient(circle, rgba(154,154,154,0.4) 0%, rgba(154,154,154,0) 70%)",
                filter: "blur(6px)",
              }}
            />
          ))}

          {/* Rocket with random flight path */}
          <motion.div
            key="rocket"
            initial={{
              left: `${pathPoints[0].left}%`,
              top: `${pathPoints[0].top}%`,
              scale: 0,
              rotate: 45,
              opacity: 1,
            }}
            animate={{
              left: pathPoints.map((p) => `${p.left}%`),
              top: pathPoints.map((p) => `${p.top}%`),
              scale: [0, 1, 1, 1, 1.2, 0],
              rotate: [45, -30, 90, 120, 180, 180],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.15, 0.4, 0.7, 0.95, 1],
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            {/* Rocket glow effect */}
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#D4AF37] rounded-full blur-lg opacity-50"
              style={{ width: "40px", height: "40px", left: "-8px", top: "-8px" }}
            />

            {/* Rocket icon */}
            <div className="relative bg-[#D4AF37] p-2 rounded-full shadow-lg">
              <Rocket className="w-5 h-5 text-[#121212]" />
            </div>

            {/* Flame/exhaust effect */}
            <motion.div
              animate={{
                scaleY: [1, 1.4, 1],
                scaleX: [1, 0.8, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-8"
              style={{
                transformOrigin: "center center",
                filter: "blur(3px)",
              }}
            >
              <div className="h-full w-full bg-gradient-to-b from-[#D4AF37] via-[#EAEAEA] to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}