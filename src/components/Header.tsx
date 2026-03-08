import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Training", path: "/achievements" },
  { label: "Council", path: "/wings" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-card"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={nccLogo}
              alt="NCC Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-foreground font-heading font-bold text-lg leading-tight">
                National Cadet Corps
              </h1>
              <p className="text-gold text-xs font-medium tracking-wide">राष्ट्रीय कैडेट कोर</p>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-md ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gold after:rounded-full"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-glossy-gold px-6 py-2.5 rounded-md text-sm inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
            
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <img
                src={navrachanaLogo}
                alt="Navrachana University Logo"
                className="h-10 w-auto"
              />
              <img
                src={nccLogo}
                alt="NCC Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in border-t border-border pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary border-l-2 border-gold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 btn-glossy-gold px-4 py-3 text-sm font-semibold rounded-md text-center"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-4">
              <img src={navrachanaLogo} alt="Navrachana University Logo" className="h-10 w-auto" />
              <img src={nccLogo} alt="NCC Logo" className="h-10 w-auto" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
