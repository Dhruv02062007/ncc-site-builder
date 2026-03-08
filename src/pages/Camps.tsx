import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tent, MapPin, Calendar, Users, Award, Mountain } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

const Camps = () => {
  const campTypes = [
    {
      title: "Annual Training Camp (ATC)",
      icon: Tent,
      duration: "10-12 Days",
      description: "Comprehensive training covering drill, weapon training, map reading, and physical fitness. A foundational camp for all NCC cadets.",
      activities: ["Drill Practice", "Weapon Training", "Physical Training", "Map Reading", "First Aid"],
    },
    {
      title: "Combined Annual Training Camp (CATC)",
      icon: Users,
      duration: "10-12 Days",
      description: "Joint training camp bringing together cadets from multiple institutions for collaborative learning and team building.",
      activities: ["Group Activities", "Inter-Unit Competitions", "Leadership Exercises", "Cultural Programs"],
    },
    {
      title: "Thal Sainik Camp (TSC)",
      icon: Award,
      duration: "12 Days",
      description: "Prestigious national-level camp for Army Wing cadets, featuring rigorous training and competitions.",
      activities: ["Obstacle Course", "Firing", "Line Area", "Health & Hygiene", "Cultural Competition"],
    },
    {
      title: "Republic Day Camp (RDC)",
      icon: Award,
      duration: "30 Days",
      description: "The most prestigious NCC camp held in Delhi. Selected cadets participate in the Republic Day Parade.",
      activities: ["Parade Practice", "PM Rally", "Cultural Activities", "Sightseeing", "National Integration"],
    },
    {
      title: "Adventure Camps",
      icon: Mountain,
      duration: "7-14 Days",
      description: "Camps focused on adventure activities like trekking, rock climbing, and water sports.",
      activities: ["Trekking", "Rock Climbing", "Rappelling", "Camping", "Survival Training"],
    },
    {
      title: "Special National Integration Camps",
      icon: MapPin,
      duration: "10-12 Days",
      description: "Camps organized in different parts of India to promote national integration among cadets.",
      activities: ["Cultural Exchange", "Local Visits", "Community Service", "Inter-State Bonding"],
    },
  ];

  const upcomingCamps = [
    {
      name: "Annual Training Camp 2025",
      location: "Gujarat NCC Training Camp",
      date: "March 2025",
      status: "Registration Open",
    },
    {
      name: "Adventure Camp - Himalayan Trek",
      location: "Uttarakhand",
      date: "May 2025",
      status: "Coming Soon",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 tracking-tight">
              NCC <span className="text-gradient">Camps</span>
            </h1>
          </SlideUp>
          <FadeIn delay={0.15}>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              NCC camps provide hands-on training, adventure activities, and leadership
              development opportunities for cadets throughout the year.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
              Types of NCC Camps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC offers various camps throughout the year, each designed to enhance
              specific skills and qualities in cadets.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {campTypes.map((camp) => (
              <StaggerItem key={camp.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <Card className="premium-card gold-glow-hover h-full group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <camp.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                        </motion.div>
                        <span className="text-sm text-gold font-bold">{camp.duration}</span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2 tracking-tight">{camp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{camp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {camp.activities.slice(0, 3).map((activity) => (
                          <span key={activity} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-sm font-medium">
                            {activity}
                          </span>
                        ))}
                        {camp.activities.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-sm">
                            +{camp.activities.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Upcoming Camps */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
              Upcoming Camps
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
            {upcomingCamps.map((camp) => (
              <StaggerItem key={camp.name}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="premium-card gold-glow-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-sm text-xs font-bold ${
                          camp.status === "Registration Open"
                            ? "bg-accent/10 text-accent"
                            : "bg-gold/10 text-gold"
                        }`}>
                          {camp.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{camp.date}</span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2 tracking-tight">{camp.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-gold" />
                        <span className="text-sm">{camp.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-16 bg-background">
        <FadeIn className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-gold/30 rounded-md p-12">
            <Tent className="h-12 w-12 text-gold/50 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Camp Gallery & Reports</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Photos and reports from past camps will be added here. Check back for updates!
            </p>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Camps;
