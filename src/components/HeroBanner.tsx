import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";

const HeroBanner = () => {
  return (
    <section className="pt-20 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              National Cadet Corps
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Navrachana University
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              [Battalion Details]
            </p>
            <p className="text-muted-foreground">
              [Group Details]
            </p>
          </div>

          {/* Right Side - Logos */}
          <div className="flex items-center gap-6">
            <img
              src={navrachanaLogo}
              alt="Navrachana University Logo"
              className="h-20 md:h-28 w-auto"
            />
            <img
              src={nccLogo}
              alt="NCC Logo"
              className="h-20 md:h-28 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="text-center py-8">
        <div className="w-16 h-0.5 bg-foreground/30 mx-auto mb-4" />
        <h2 className="font-heading text-4xl md:text-5xl font-light text-muted-foreground tracking-wide">
          Welcome
        </h2>
      </div>
    </section>
  );
};

export default HeroBanner;
