import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".expertise-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="section-padding relative bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8 expertise-content"
          >
            02
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 expertise-content">
            Our Expertise
          </h2>
          
          <p className="text-xl md:text-2xl text-primary mb-8 expertise-content">
            What We Do Best
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed expertise-content">
            From cinematic storytelling to digital design, Adrishyam Media crafts every creative element 
            with intention — ensuring impact, clarity, and unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
