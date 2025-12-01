import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { MarqueeRow } from "./MarqueeSection";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/about" },
    { name: "Our Team", href: "/about" },
  ],
  resources: [
    { name: "Our Promise", href: "/work" },
    { name: "Contact Us", href: "/contact" },
    { name: "Recent Works", href: "/work" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "X (Twitter)", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border w-full overflow-hidden">
      <div className="py-8 border-b border-border/10 mb-8">
        <MarqueeRow
          text="VISUAL STORYTELLING • CREATIVE STRATEGY • BRAND IDENTITY • DIGITAL EXPERIENCES • "
          direction="left"
          speed={40}
        />
        <MarqueeRow
          text="MOTION GRAPHICS • CINEMATIC PRODUCTION • WEB DEVELOPMENT • UI/UX DESIGN • "
          direction="right"
          speed={30}
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Adrishyam Media</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              True strength is not in sight but in the courage to see beyond the light.
              We are your creative partners from ideation to execution.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © Adrishyam Media copyright 2025
          </p>
          <p className="text-muted-foreground text-sm">
            Designed and Developed by Nivin Mathew S
          </p>
        </div>
      </div>
    </footer>
  );
};
