import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
      
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <SectionWrapper>
      <section ref={sectionRef} className="section-padding relative">
        <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8 about-text"
          >
            01
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 about-text">
            About Us
          </h2>
          
          <p className="text-xl md:text-2xl text-primary mb-8 about-text">
            We are not an agency, we are your creative partners.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 about-text">
            At Adrishyam Media, we go beyond delivering services. From film production to digital design, 
            photography, and brand promotion — every touchpoint is aligned, impactful, and unforgettable.
          </p>
          
          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="stat-item relative group">
              <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">25+</div>
                <p className="text-muted-foreground">
                  Years of creative & cinematic expertise
                </p>
              </div>
            </div>
            
            <div className="stat-item relative group">
              <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">100+</div>
                <p className="text-muted-foreground">
                  Successful brand & corporate projects delivered
                </p>
              </div>
            </div>
            
            <div className="stat-item relative group">
              <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">500+</div>
                <p className="text-muted-foreground">
                  Events, campaigns & stories captured with impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};
