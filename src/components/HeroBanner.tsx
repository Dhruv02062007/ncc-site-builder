import nccLogo from "@/assets/ncc-logo.webp";
import navrachanaLogo from "@/assets/navrachana-logo.webp";
import { FadeIn, RevealLine } from "@/components/ui/motion";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="pt-20 bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Text */}
          <FadeIn direction="left" className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-tight tracking-tight">
              National Cadet Corps
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold mt-2">
              Navrachana University
            </h2>
            <p className="text-primary-foreground/70 mt-3 text-lg">[Battalion Details]</p>
            <p className="text-primary-foreground/60">[Group Details]</p>
          </FadeIn>

          {/* Right Side - Logos */}
          <FadeIn direction="right" delay={0.2} className="flex items-center gap-6">
            <motion.img
              src={navrachanaLogo}
              alt="Navrachana University Logo"
              className="h-20 md:h-28 w-auto drop-shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.img
              src={nccLogo}
              alt="NCC Logo"
              className="h-20 md:h-28 w-auto drop-shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </FadeIn>
        </div>
      </div>

      {/* Welcome Text */}
      <FadeIn delay={0.3} className="text-center py-8">
        <RevealLine className="w-16 mx-auto mb-4 bg-gold/50 h-0.5" delay={0.4} />
        <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground/40 tracking-[0.3em] uppercase">
          Welcome
        </h2>
      </FadeIn>
    </section>
  );
};

export default HeroBanner;
