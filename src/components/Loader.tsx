import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onLoadingComplete, 800); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <div className="relative overflow-hidden mb-4">
            <motion.div className="flex gap-1 md:gap-2">
              {["A", "D", "R", "I", "S", "H", "Y", "A", "M"].map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="text-5xl md:text-8xl font-black text-white tracking-tighter"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="text-sm md:text-xl font-medium text-white/60 tracking-[0.5em] uppercase"
            >
              Media Production
            </motion.span>
          </div>

          <motion.div
            variants={lineVariants}
            className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
