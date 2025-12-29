import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Flag, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Character Building",
      description: "Develop strong moral values, integrity, and sense of duty towards the nation.",
    },
    {
      icon: Target,
      title: "Leadership Training",
      description: "Learn to lead with confidence through practical exercises and camps.",
    },
    {
      icon: Flag,
      title: "National Service",
      description: "Contribute to nation-building through community development activities.",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Build lasting friendships and learn the importance of teamwork.",
    },
  ];

  return (
    <Layout>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Join <span className="text-primary">NCC?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
              The National Cadet Corps provides a unique platform for young students 
              to develop into responsible citizens and future leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Largest Youth Organization in the World
              </h2>
              <p className="text-muted-foreground mb-4">
                The National Cadet Corps (NCC) is the Indian military cadet corps with its 
                headquarters in New Delhi. It is open to school and college students on 
                voluntary basis as a Tri-Services Organization.
              </p>
              <p className="text-muted-foreground mb-6">
                NCC was established in 1948 under the NCC Act and has grown to become one 
                of the largest uniformed youth organizations in the world, with a strength 
                of over 13 lakh cadets.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 group">
                <Link to="/about">
                  Learn More About NCC
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <div className="text-4xl font-bold mb-2">1948</div>
                <div className="text-primary-foreground/80 text-sm">Year Established</div>
              </div>
              <div className="bg-accent rounded-xl p-6 text-accent-foreground">
                <div className="text-4xl font-bold mb-2">13L+</div>
                <div className="text-accent-foreground/80 text-sm">Cadets Nationwide</div>
              </div>
              <div className="bg-saffron rounded-xl p-6 text-saffron-foreground">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-saffron-foreground/80 text-sm">Wings (Army, Navy, Air)</div>
              </div>
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <div className="text-4xl font-bold mb-2">17</div>
                <div className="text-primary-foreground/80 text-sm">Directorates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wings Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three <span className="text-primary">Wings</span> of NCC
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC is a tri-service organization comprising Army, Navy, and Air Force wings, 
              each providing specialized training to cadets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-olive/30 hover:border-olive">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-br from-olive to-olive/80 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-olive-foreground group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2">Army Wing</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ground-based military training including drill, weapon handling, 
                    map reading, and field craft.
                  </p>
                  <Link 
                    to="/wings" 
                    className="text-olive font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/30 hover:border-primary">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <svg className="h-16 w-16 text-primary-foreground group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2">Naval Wing</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Sea-based training including sailing, boat pulling, swimming, 
                    and naval tactics.
                  </p>
                  <Link 
                    to="/wings" 
                    className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-sky-500/30 hover:border-sky-500">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-br from-sky-600 to-sky-500 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2">Air Wing</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Aviation training including aeromodelling, flying, gliding, 
                    and air force related activities.
                  </p>
                  <Link 
                    to="/wings" 
                    className="text-sky-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join the NCC at Navrachana University and become part of India's largest 
            uniformed youth organization. Develop your potential and serve the nation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-saffron hover:bg-saffron/90 text-saffron-foreground font-semibold px-8"
            >
              <Link to="/enrollment">Enroll Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
