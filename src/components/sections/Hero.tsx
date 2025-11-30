import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background -z-20" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-white/30" />
            <span className="text-sm font-medium tracking-[0.2em] text-white/80 uppercase">
              Creative Production Studio
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
            <motion.div
              className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              WE ARE
            </motion.div>
            <motion.div
              className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 pb-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              ADRISHYAM
            </motion.div>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting visual experiences that transcend the ordinary.
            We blend art and technology to tell stories that matter.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-7 text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="ghost" size="lg" className="text-white hover:bg-white/5 rounded-full px-8 py-7 text-lg font-medium group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              View Showreel
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
