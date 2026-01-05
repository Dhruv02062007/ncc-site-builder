import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Training", path: "/wings" },
    { label: "Enrollment", path: "/enrollment" },
  ];

  const resources = [
    { label: "Camps", path: "/camps" },
    { label: "Achievements", path: "/achievements" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={nccLogo} alt="NCC Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-heading font-semibold text-lg">NCC</h3>
                <p className="text-primary-foreground/70 text-xs">Navrachana University</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              The National Cadet Corps at Navrachana University aims to develop 
              character, discipline, leadership, and a spirit of service among young citizens.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">
                  Navrachana University, Vadodara, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">ncc@navrachana.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={navrachanaLogo} alt="Navrachana University" className="h-8 w-auto" />
            <span className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} NCC Navrachana University. All rights reserved.
            </span>
          </div>
          <p className="text-xs text-primary-foreground/60 italic">
            "Unity and Discipline"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
