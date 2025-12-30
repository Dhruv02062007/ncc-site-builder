import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Anchor, Plane, ChevronRight, Star, Users, Target, Award } from "lucide-react";

const Wings = () => {
  const armyRanks = [
    { rank: "Cadet", description: "Entry level rank for all new cadets" },
    { rank: "Lance Corporal", description: "First promotion rank" },
    { rank: "Corporal", description: "Junior NCO rank" },
    { rank: "Sergeant", description: "Non-commissioned officer" },
    { rank: "Company Sergeant Major (CSM)", description: "Senior NCO rank" },
    { rank: "Company Quartermaster Sergeant (CQMS)", description: "Senior NCO rank" },
    { rank: "Under Officer (UO)", description: "Highest cadet rank" },
    { rank: "Senior Under Officer (SUO)", description: "Highest cadet rank in unit" },
  ];

  const armyActivities = [
    "Drill and parade",
    "Weapon training (handling and firing)",
    "Map reading and navigation",
    "Field craft and tactics",
    "First aid and medical training",
    "Obstacle course training",
    "Rock climbing and rappelling",
    "Adventure activities",
    "Physical training",
    "Guard of Honour",
  ];

  const armyCamps = [
    "Annual Training Camp (ATC)",
    "Combined Annual Training Camp (CATC)",
    "Thal Sainik Camp",
    "Republic Day Camp (RDC)",
    "National Integration Camps",
    "Army Attachment Camps",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-olive to-olive/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-olive-foreground mb-4 animate-fade-in">
            NCC <span className="text-saffron">Wings</span>
          </h1>
          <p className="text-olive-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            NCC is a tri-services organization. Navrachana University proudly represents 
            the <strong>Army Wing</strong>, training cadets in ground-based military disciplines.
          </p>
        </div>
      </section>

      {/* Army Wing - Featured Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-olive/10 border border-olive/30 rounded-full px-4 py-2 mb-4">
              <Shield className="h-5 w-5 text-olive" />
              <span className="text-olive font-semibold">Our Wing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-olive">Army Wing</span> - Navrachana University
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The Army Wing is the largest wing of NCC, providing comprehensive ground-based 
              military training. Our unit at Navrachana University trains cadets to become 
              disciplined, confident leaders ready to serve the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-olive/5 border-olive/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-olive flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-olive-foreground" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">Ground Training</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive training in drill, weapon handling, map reading, and field craft.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-olive/5 border-olive/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-olive flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-olive-foreground" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">Leadership</h3>
                <p className="text-muted-foreground text-sm">
                  Develop command skills through practical exercises and responsibility.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-olive/5 border-olive/20">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-olive flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-olive-foreground" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">Adventure</h3>
                <p className="text-muted-foreground text-sm">
                  Rock climbing, trekking, obstacle courses, and outdoor survival skills.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Training Activities & Camps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-olive/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-olive" />
                  Training Activities
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {armyActivities.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-olive" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-olive/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-olive" />
                  Major Camps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {armyCamps.map((camp) => (
                    <span key={camp} className="px-3 py-2 rounded-lg text-sm font-medium bg-olive text-olive-foreground">
                      {camp}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Cadets participate in various camps throughout the year, gaining hands-on 
                  experience and competing at state and national levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Army Rank Structure */}
      <section className="py-16 bg-olive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Army Wing <span className="text-olive">Rank Structure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC cadets progress through various ranks based on performance, 
              leadership qualities, and participation in activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-olive/30 hidden md:block" />
              <div className="space-y-4">
                {armyRanks.map((item, index) => (
                  <div key={item.rank} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="h-12 w-12 rounded-full bg-olive flex items-center justify-center shrink-0 z-10">
                      <Star className="h-5 w-5 text-olive-foreground" />
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{item.rank}</h4>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <div className="text-olive font-bold text-lg">{index + 1}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Wings - Brief Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Other NCC <span className="text-primary">Wings</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              While Navrachana University represents the Army Wing, NCC also has Naval and Air Wings 
              in other institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/20 opacity-80">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Anchor className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Naval Wing</h3>
                    <span className="text-xs text-muted-foreground">Sea-based Training</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Provides training in sailing, boat pulling, swimming, naval tactics, and 
                  seamanship. Cadets participate in Naval attachment camps and sea training.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-500/20 opacity-80">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Air Wing</h3>
                    <span className="text-xs text-muted-foreground">Aviation Training</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Focuses on aeromodelling, gliding, flying, and air force familiarization. 
                  Cadets learn basic aviation theory and participate in air-related activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-olive">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-olive-foreground mb-4">
            Join the Army Wing at Navrachana
          </h2>
          <p className="text-olive-foreground/80 max-w-xl mx-auto mb-6">
            Learn about enrollment criteria and start your NCC journey today.
          </p>
          <a href="/enrollment" className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron/90 text-saffron-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
            Enrollment Criteria
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Wings;
