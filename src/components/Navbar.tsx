import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#about" },
    { name: "Services", icon: Briefcase, href: "#services" },
    { name: "Work", icon: Star, href: "#showcase" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="fixed top-6 left-6 z-50"
            >
                <img src="/logo.png" alt="Adrishyam Vision" className="h-12 w-auto object-contain" />
            </motion.div>

            {/* Desktop Floating Dock */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-primary/10"
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={cn(
                            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                            active === item.name
                                ? "text-primary-foreground"
                                : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        {active === item.name && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </motion.div>

            {/* Mobile Bottom Bar */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
            >
                <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/20">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActive(item.name)}
                            className={cn(
                                "flex flex-col items-center gap-1 transition-colors",
                                active === item.name ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            <div className={cn(
                                "p-2 rounded-xl transition-all",
                                active === item.name ? "bg-primary/20" : "bg-transparent"
                            )}>
                                <item.icon className="w-5 h-5" />
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </>
    );
};
