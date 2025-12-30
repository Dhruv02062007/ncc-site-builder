import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tent, MapPin, Calendar, Users, Award, Mountain } from "lucide-react";

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
      <section className="pt-28 pb-16 bg-gradient-to-b from-olive to-olive/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-olive-foreground mb-4 animate-fade-in">
            NCC <span className="text-saffron">Camps</span>
          </h1>
          <p className="text-olive-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            NCC camps provide hands-on training, adventure activities, and leadership 
            development opportunities for cadets throughout the year.
          </p>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Types of <span className="text-olive">NCC Camps</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC offers various camps throughout the year, each designed to enhance 
              specific skills and qualities in cadets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campTypes.map((camp, index) => (
              <Card 
                key={camp.title} 
                className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-olive/30 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                      <camp.icon className="h-6 w-6 text-olive group-hover:text-olive-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-sm text-olive font-medium">{camp.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{camp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{camp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {camp.activities.slice(0, 3).map((activity) => (
                      <span 
                        key={activity} 
                        className="px-2 py-1 bg-olive/10 text-olive text-xs rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                    {camp.activities.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{camp.activities.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Camps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upcoming <span className="text-primary">Camps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingCamps.map((camp, index) => (
              <Card 
                key={camp.name} 
                className="bg-background animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      camp.status === "Registration Open" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-saffron/20 text-saffron"
                    }`}>
                      {camp.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{camp.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{camp.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{camp.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-border rounded-xl p-12">
            <Tent className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Camp Gallery & Reports</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Photos and reports from past camps will be added here. 
              Check back for updates!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Camps;
