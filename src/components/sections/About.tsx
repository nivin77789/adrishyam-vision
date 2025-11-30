import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";

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

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

export const About = () => {
  return (
    <SectionWrapper>
      <section className="section-padding relative">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Section number */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-8xl md:text-9xl font-bold text-primary/10 mb-8 select-none"
            >
              01
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                About Us
              </motion.h2>

              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-primary mb-8">
                We are not an agency, we are your creative partners.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
                At Adrishyam Media, we go beyond delivering services. From film production to digital design,
                photography, and brand promotion — every touchpoint is aligned, impactful, and unforgettable.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={statsVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">25+</div>
                  <p className="text-muted-foreground">
                    Years of creative & cinematic expertise
                  </p>
                </div>
              </motion.div>

              <motion.div variants={statsVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">100+</div>
                  <p className="text-muted-foreground">
                    Successful brand & corporate projects delivered
                  </p>
                </div>
              </motion.div>

              <motion.div variants={statsVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">500+</div>
                  <p className="text-muted-foreground">
                    Events, campaigns & stories captured with impact
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
