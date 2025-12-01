import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
