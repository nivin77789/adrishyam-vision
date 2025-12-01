import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services does Adrishyam Vision offer?",
        answer: "We offer a comprehensive range of digital services including web development, UI/UX design, branding, 3D visualization, and digital marketing solutions tailored to elevate your business presence."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity and scope. A standard website typically takes 2-4 weeks, while more complex applications may take 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and performant long after launch."
    },
    {
        question: "What is your design process like?",
        answer: "Our process is collaborative and iterative. We start with discovery and strategy, move to wireframing and design, then development, and finally testing and launch, keeping you involved at every step."
    },
    {
        question: "Can you help with rebranding?",
        answer: "Absolutely. We specialize in creating cohesive brand identities that resonate with your target audience, from logo design to complete brand guidelines and visual systems."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/10 last:border-none"
        >
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                    {question}
                </span>
                <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-white text-black rotate-180" : "bg-white/5 text-white group-hover:bg-white/10"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-white/60 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Everything you need to know about our services and how we work.
                        </p>
                    </motion.div>

                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
