import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import nccLogo from "@/assets/ncc-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About NCC", path: "/about" },
    { label: "Wings", path: "/wings" },
    { label: "Contact", path: "/contact" },
  ];

  const resources = [
    { label: "Enrollment", path: "/enrollment" },
    { label: "Camps & Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
    { label: "Achievements", path: "/achievements" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={nccLogo} alt="NCC Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg">NCC</h3>
                <p className="text-primary-foreground/70 text-xs">Unity and Discipline</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              The National Cadet Corps is a youth development organization that trains young 
              cadets in military, community development, and nation-building activities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-saffron transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-saffron transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Navrachana University, Vadodara, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-saffron shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-saffron transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-saffron shrink-0" />
                <a href="mailto:ncc@navrachana.edu.in" className="text-primary-foreground/80 hover:text-saffron transition-colors">
                  ncc@navrachana.edu.in
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-primary-foreground/70">
            <p>© {currentYear} NCC Navrachana University. All rights reserved.</p>
            <p>Unity and Discipline</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
