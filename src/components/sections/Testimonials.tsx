import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/5 mb-8 select-none"
          >
            05
          </motion.div>

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Promise</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              You are not just running campaigns or creating content, you are building pride, connection,
              and enduring memories. At Adrishyam, we act as your creative conscience.
            </p>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-3xl"
              >
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic font-light">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="border-t border-border pt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-primary">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
