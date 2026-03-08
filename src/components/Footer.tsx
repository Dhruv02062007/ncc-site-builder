import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { motion } from "framer-motion";
import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Training", path: "/achievements" },
    { label: "Enrollment", path: "/enrollment" },
  ];

  const resources = [
    { label: "Camps", path: "/camps" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.08}>
          {/* About Column */}
          <StaggerItem className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={nccLogo} alt="NCC Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-heading font-bold text-lg">NCC</h3>
                <p className="text-gold text-xs font-medium">Navrachana University</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              The National Cadet Corps at Navrachana University aims to develop
              character, discipline, leadership, and a spirit of service among young citizens.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-heading font-bold text-base mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Resources */}
          <StaggerItem>
            <h4 className="font-heading font-bold text-base mb-4 text-gold">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-heading font-bold text-base mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold/70" />
                <span className="text-primary-foreground/70">Navrachana University, Vadodara, Gujarat</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold/70" />
                <span className="text-primary-foreground/70">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold/70" />
                <span className="text-primary-foreground/70">ncc@navrachana.edu.in</span>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={navrachanaLogo} alt="Navrachana University" className="h-8 w-auto" />
            <span className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} NCC Navrachana University. All rights reserved.
            </span>
          </div>
          <p className="text-xs text-gold/60 italic font-medium tracking-wide">"Unity and Discipline"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
