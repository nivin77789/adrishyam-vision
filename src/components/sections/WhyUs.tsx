import { motion, Variants } from "framer-motion";
import { Heart, Users, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Deep Alignment",
    description: "We understand your vision and can mirror that in every output.",
    subtitle: "With your DNA",
  },
  {
    icon: Users,
    title: "Simplification",
    description: "One reliable team, one long-term collaboration covering everything.",
  },
  {
    icon: TrendingUp,
    title: "Creative Continuity",
    description: "Each partnership builds visibility and impact cumulatively, not just in isolation.",
  },
  {
    icon: Award,
    title: "Measurable Impact",
    description: "We also measure ROI via engagement, reach, and feedback, allowing us to iterate and improve each cycle.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const WhyUs = () => {
  return (
    <section className="section-padding relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-8xl md:text-[12rem] font-bold text-white/5 mb-4 select-none leading-none"
          >
            07
          </motion.div>

          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              We are not an agency that simply delivers services. We become your creative partners from ideation
              to execution. We embed ourselves in your journey, ensuring every touchpoint is aligned, impactful,
              and unforgettable.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                className="why-card group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
                  {reason.subtitle && (
                    <p className="text-primary font-semibold mb-4">{reason.subtitle}</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 italic">
              "We are not just running campaigns or creating content, you are building pride, connection,
              and enduring memories. At Adrishyam, we act as your creative conscience, bringing clarity,
              consistency, and energy to every project."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
