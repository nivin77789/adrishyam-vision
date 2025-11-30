import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/30 rounded-full blur-sm"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {children}
    </div>
  );
};
