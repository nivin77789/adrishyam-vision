import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };
  
  const name = "ADRISHYAM";
  
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <div className="relative z-10 text-center px-6">
            {/* Animated logo letters */}
            <div className="flex justify-center items-center mb-12">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-primary inline-block"
                  style={{
                    textShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12"
            >
              Creative Partners in Excellence
            </motion.p>
            
            {/* Progress bar container */}
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative"
              >
                {/* Progress bar background */}
                <div className="h-2 bg-border rounded-full overflow-hidden relative">
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Progress fill */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                
                {/* Progress percentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 text-center"
                >
                  <span className="text-2xl font-bold text-gradient-primary">
                    {Math.round(progress)}%
                  </span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Spinning circle decoration */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/20 rounded-full -z-10"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-accent/20 rounded-full -z-10"
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
