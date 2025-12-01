import { motion } from "framer-motion";
import { ArrowRight, Play, Video, Camera, Film, Clapperboard, Mic, Aperture, Music, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Video, top: "10%", left: "5%", delay: 0 },
  { Icon: Camera, top: "20%", right: "10%", delay: 1 },
  { Icon: Film, bottom: "15%", left: "15%", delay: 2 },
  { Icon: Clapperboard, top: "40%", left: "45%", delay: 0.5 },
  { Icon: Mic, bottom: "30%", right: "20%", delay: 1.5 },
  { Icon: Aperture, top: "15%", left: "80%", delay: 2.5 },
  { Icon: Music, bottom: "10%", right: "40%", delay: 1 },
  { Icon: ImageIcon, top: "60%", left: "10%", delay: 3 },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:160px_160px] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black)] -z-10" />

      {/* Floating Media Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {floatingIcons.map(({ Icon, top, left, right, bottom, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10"
            style={{ top, left, right, bottom }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              opacity: { duration: 1, delay },
              scale: { duration: 1, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
            }}
          >
            <Icon size={index % 2 === 0 ? 64 : 48} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="lg:col-span-7 max-w-4xl">
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
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-7 text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link to="/work">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/5 rounded-full px-8 py-7 text-lg font-medium group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  View Showreel
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Element Removed */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};
