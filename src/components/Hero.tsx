import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm border border-saffron/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Award className="h-4 w-4 text-saffron" />
            <span className="text-primary-foreground text-sm font-medium">
              National Cadet Corps
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
            Unity and{" "}
            <span className="text-saffron">Discipline</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 animate-fade-in animation-delay-200">
            Navrachana University NCC Unit
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-300">
            Developing character, discipline, and leadership qualities in the youth of India 
            through a variety of training programs and activities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-saffron hover:bg-saffron/90 text-saffron-foreground font-semibold px-8 py-6 text-lg group"
            >
              <Link to="/enrollment">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              <Link to="/events">View Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Users className="h-8 w-8 text-saffron mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">150+</div>
              <div className="text-primary-foreground/70 text-sm">Active Cadets</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Award className="h-8 w-8 text-saffron mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">50+</div>
              <div className="text-primary-foreground/70 text-sm">Achievements</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Calendar className="h-8 w-8 text-saffron mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">20+</div>
              <div className="text-primary-foreground/70 text-sm">Annual Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
