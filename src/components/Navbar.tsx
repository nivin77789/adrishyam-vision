import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Services", icon: Briefcase, path: "/services" },
    { name: "Work", icon: Star, path: "/work" },
    { name: "Contact", icon: Mail, path: "/contact" },
];

export const Navbar = () => {
    const location = useLocation();
    const [active, setActive] = useState("Home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        const activeItem = navItems.find(item => item.path === currentPath);
        if (activeItem) {
            setActive(activeItem.name);
        } else if (currentPath === "/") {
            setActive("Home");
        }
    }, [location]);

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
                className="fixed top-6 left-6 z-50 mix-blend-difference"
            >
                <Link to="/">
                    <img src="/logo.png" alt="Adrishyam Vision" className="h-12 w-auto object-contain" />
                </Link>
            </motion.div>

            {/* Desktop Floating Dock */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-black/20 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group",
                            active === item.name
                                ? "text-black"
                                : "text-white/70 hover:text-white"
                        )}
                    >
                        {active === item.name && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <item.icon className={cn("w-4 h-4 transition-transform duration-300 group-hover:scale-110", active === item.name ? "scale-105" : "")} />
                        <span className="relative z-10">{item.name}</span>
                    </Link>
                ))}
            </motion.div>

            {/* Mobile Bottom Bar */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
            >
                <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                                "flex flex-col items-center gap-1 transition-colors relative",
                                active === item.name ? "text-white" : "text-white/50"
                            )}
                        >
                            <div className={cn(
                                "p-2 rounded-xl transition-all duration-300",
                                active === item.name ? "bg-white/20 scale-110" : "bg-transparent"
                            )}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            {active === item.name && (
                                <motion.div
                                    layoutId="mobileActiveDot"
                                    className="absolute -bottom-2 w-1 h-1 bg-white rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </>
    );
};
