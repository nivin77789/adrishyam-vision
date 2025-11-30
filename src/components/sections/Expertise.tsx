import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Expertise = () => {
  return (
    <section className="section-padding relative bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-9xl font-bold text-primary/10 mb-8 select-none"
          >
            02
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              Our Expertise
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-primary mb-8">
              What We Do Best
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From cinematic storytelling to digital design, Adrishyam Media crafts every creative element
              with intention — ensuring impact, clarity, and unforgettable experiences.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
