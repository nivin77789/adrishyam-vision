import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rama Lakshmi",
    role: "Managing Director",
    quote: "Together, we can transform every idea, every experience, and every brand touchpoint into a cohesive legacy.",
    rating: 5,
  },
  {
    name: "Vejey Avatar",
    role: "Creative Director",
    quote: "We bring clarity, consistency, and energy to every project, be it a film, a design, a campaign, or a story.",
    rating: 5,
  },
  {
    name: "Radha Preetam",
    role: "Growth & Strategy",
    quote: "We are not just running campaigns — we are building pride, connection, and enduring memories that inspire and last.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8"
          >
            05
          </motion.div>
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Promise</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              You are not just running campaigns or creating content, you are building pride, connection, 
              and enduring memories. At Adrishyam, we act as your creative conscience, bringing clarity, 
              consistency, and energy to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all h-full">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
