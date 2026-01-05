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
  { label: "Council", path: "/achievements" },
  { label: "Training", path: "/wings" },
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
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-card"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo - NCC with text */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={nccLogo}
              alt="NCC Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-foreground font-heading font-semibold text-lg leading-tight">
                National Cadet Corps
              </h1>
              <p className="text-muted-foreground text-xs">राष्ट्रीय कैडेट कोर</p>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  location.pathname === item.path
                    ? "text-foreground after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-foreground after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section - Enrollment Button + University Logo */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium"
            >
              <Link to="/enrollment">Enrollment</Link>
            </Button>
            
            {/* University Logos */}
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
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/enrollment"
                className="mt-2 px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg text-center"
              >
                Enrollment
              </Link>
            </div>
            {/* Mobile Logos */}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-4">
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
