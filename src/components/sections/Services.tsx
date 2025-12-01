import { motion } from "framer-motion";
import { Film, Camera, Palette, Users } from "lucide-react";
import { SectionWrapper } from "../SectionWrapper";

const services = [
  {
    icon: Film,
    title: "Film Production",
    description: "We create compelling advertisements and short films with cinematic quality storytelling and high-end production values.",
    image: "/images/service-film.png",
  },
  {
    icon: Camera,
    title: "Events Photography",
    description: "From weddings to corporate events, we capture every moment with artistic precision and journalistic clarity.",
    image: "/images/service-photography.png",
  },
  {
    icon: Palette,
    title: "Digital Design",
    description: "Logo design, website design, banner ads and brand campaigns that speak your brand language with strategic impact.",
    image: "/images/service-design.png",
  },
  {
    icon: Users,
    title: "Celebrity Management",
    description: "Expert casting services and celebrity management for campaigns, events, and brand collaborations.",
    image: "/images/service-celebrity.png",
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

export const Services = () => {
  return (
    <SectionWrapper>
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
              03
            </motion.div>

            <div className="mb-20">
              <motion.h2
                className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                WHAT WE DO
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                At Adrishyam Media, we provide end-to-end creative and digital solutions that help brands grow,
                connect, and inspire audiences across platforms.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card group relative overflow-hidden rounded-none"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                    />
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>

                  <div className="relative z-10 p-10 h-[400px] flex flex-col justify-end border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">{service.title}</h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                      <div className="overflow-hidden">
                        <p className="text-white/90 leading-relaxed text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
