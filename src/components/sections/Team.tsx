import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Rama Lakshmi",
    role: "Managing Director",
  },
  {
    name: "Poonam Soni",
    role: "Managing Director & Finance Management",
  },
  {
    name: "Vejey Avatar",
    role: "Creative Director",
  },
  {
    name: "Radha Preetam",
    role: "Growth & Strategy",
  },
];

export const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="section-padding relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8"
          >
            06
          </motion.div>
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Our team of experienced professionals brings a diverse range of skills and a shared passion 
              for creating impactful visual stories and brand experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="team-card group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-bold text-primary/30">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
