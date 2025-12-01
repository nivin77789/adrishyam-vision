import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Birthday Video",
    subtitle: "10th Birthday Celebration",
    category: "Event Videography",
    image: "/images/showcase-birthday.png",
  },
  {
    title: "PT Freedom Run 2025",
    subtitle: "Event videography",
    category: "Corporate Event",
    image: "/images/showcase-corporate.png",
  },
  {
    title: "Something Something",
    subtitle: "Video Song",
    category: "Music Video",
    image: "/images/showcase-music.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export const Showcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-8xl md:text-[12rem] font-bold text-white/5 mb-4 select-none leading-none"
          >
            08
          </motion.div>

          <div className="mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            >
              SELECTED WORKS
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              Explore our latest projects, from cinematic brand films to impactful digital campaigns,
              and see how we transform ideas into compelling visual stories.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card group relative cursor-pointer"
                variants={itemVariants}
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium tracking-wide uppercase border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 font-light">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
