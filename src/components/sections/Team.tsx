import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Rama Lakshmi",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Poonam Soni",
    role: "Managing Director & Finance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Vejey Avatar",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Radha Preetam",
    role: "Growth & Strategy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Team = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Background Removed */}

      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Our Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Meet The Team</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              A collective of creative minds and strategic thinkers dedicated to pushing the boundaries of visual storytelling.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group relative h-[450px] w-full overflow-hidden rounded-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/70 font-medium mb-4">{member.role}</p>

                    {/* Social Icons - Reveal on Hover */}
                    <div className="flex items-center gap-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                      <a href={member.socials.linkedin} className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-sm">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.socials.twitter} className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-sm">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={member.socials.mail} className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-sm">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/20 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
