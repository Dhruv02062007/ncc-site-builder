import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About NCC", path: "/about" },
  { label: "Wings", path: "/wings" },
  { label: "Enrollment Criteria", path: "/enrollment" },
  { label: "Events", path: "/events" },
  { label: "Camps", path: "/camps" },
  { label: "Achievements", path: "/achievements" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo - NCC */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src={nccLogo}
              alt="NCC Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground font-bold text-sm leading-tight">
                National Cadet Corps
              </h1>
              <p className="text-primary-foreground/80 text-[10px]">Unity and Discipline</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? "bg-saffron text-saffron-foreground"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Logo - Navrachana */}
          <Link to="/" className="hidden md:flex items-center gap-2 group flex-shrink-0">
            <div className="text-right hidden sm:block">
              <h2 className="text-primary-foreground font-semibold text-xs leading-tight">
                Navrachana University
              </h2>
              <p className="text-primary-foreground/80 text-[10px]">NCC Unit</p>
            </div>
            <img
              src={navrachanaLogo}
              alt="Navrachana University Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-saffron text-saffron-foreground"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Mobile Navrachana Logo */}
            <div className="mt-4 pt-4 border-t border-primary-foreground/20 flex items-center justify-center gap-3">
              <img
                src={navrachanaLogo}
                alt="Navrachana University Logo"
                className="h-12 w-auto"
              />
              <span className="text-primary-foreground/80 text-sm">
                Navrachana University NCC Unit
              </span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
