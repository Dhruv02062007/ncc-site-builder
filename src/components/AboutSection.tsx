import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  reversed?: boolean;
}

const AboutCard = ({ title, description, imageUrl, linkUrl, linkText, reversed }: AboutCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
      <div className={`space-y-4 ${reversed ? "md:order-2" : ""}`}>
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button asChild variant="outline" className="group">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
      <div className={`${reversed ? "md:order-1" : ""}`}>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-20">
          <AboutCard
            title="Our College"
            description="Navrachana University, established in 2009, is a leading private university in Vadodara, Gujarat. The university offers a unique holistic ecosystem for education with interactive learning, flexible academic structure, and cutting-edge research. This environment empowers students and faculty to transform their dreams into reality."
            imageUrl="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
            linkUrl="https://www.nuv.ac.in/"
            linkText="Navigate to Website"
          />

          <AboutCard
            title="NCC in Navrachana University"
            description="The National Cadet Corps (NCC) unit at Navrachana University aims to instill the values of discipline, leadership, and patriotism in students, complementing the university's mission of holistic development. Through NCC, cadets gain essential life skills, leadership qualities, and a sense of responsibility toward the nation. The program offers opportunities for students to participate in various camps, drills, and social service activities."
            imageUrl="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop"
            linkUrl="https://indiancc.mygov.in/"
            linkText="Navigate to Website"
            reversed
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
