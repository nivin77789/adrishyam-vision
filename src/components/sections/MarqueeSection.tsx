import { motion } from "framer-motion";

const MarqueeRow = ({ text, direction = "left", speed = 20 }: { text: string, direction?: "left" | "right", speed?: number }) => {
    const content = Array(4).fill(text).join(" ");

    return (
        <div className="relative flex overflow-hidden whitespace-nowrap">
            <motion.div
                className="flex whitespace-nowrap"
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 px-4 uppercase tracking-tighter">
                    {content}
                </span>
            </motion.div>
        </div>
    );
};

export const MarqueeSection = () => {
    return (
        <section className="py-10 overflow-hidden">
            <div className="flex flex-col gap-0">
                <MarqueeRow
                    text="VISUAL STORYTELLING • CREATIVE STRATEGY • BRAND IDENTITY • "
                    direction="left"
                    speed={30}
                />
                <MarqueeRow
                    text="DIGITAL EXPERIENCES • MOTION GRAPHICS • CINEMATIC PRODUCTION • "
                    direction="right"
                    speed={30}
                />
            </div>
        </section>
    );
};
