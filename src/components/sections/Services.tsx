import { motion } from "framer-motion";
import { Film, Camera, Palette, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Film,
    title: "Film Production",
    description: "We create compelling advertisements and short films with cinematic quality storytelling and high-end production values.",
  },
  {
    icon: Camera,
    title: "Events Photography",
    description: "From weddings to corporate events, we capture every moment with artistic precision and journalistic clarity.",
  },
  {
    icon: Palette,
    title: "Digital Design",
    description: "Logo design, website design, banner ads and brand campaigns that speak your brand language with strategic impact.",
  },
  {
    icon: Users,
    title: "Celebrity Management",
    description: "Expert casting services and celebrity management for campaigns, events, and brand collaborations.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <SectionWrapper>
      <section ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8"
          >
            03
          </motion.div>
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Services</h2>
            <p className="text-xl md:text-2xl text-primary">What We Do</p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
            At Adrishyam Media, we provide end-to-end creative and digital solutions that help brands grow, 
            connect, and inspire audiences across platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-3xl" />
                <div className="relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};
