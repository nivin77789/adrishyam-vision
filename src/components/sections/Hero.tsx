import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene3D } from "../Scene3D";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5");
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background -z-20" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="text-primary font-semibold">Adrishyam Media</span>
          </div>
        </motion.div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">We are</span>
          <span className="block text-gradient-primary">Adrishyam Media</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          True strength is not in sight but in the courage to see beyond the light. 
          <br className="hidden md:block" />
          We are your creative partners from ideation to execution.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full glow-primary transition-all"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 rounded-full transition-all"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
