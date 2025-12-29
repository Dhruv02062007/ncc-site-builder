import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Anchor, Plane, ChevronRight, Star } from "lucide-react";

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

  const wings = [
    {
      name: "Army Wing",
      icon: Shield,
      color: "olive",
      bgColor: "bg-olive",
      borderColor: "border-olive",
      textColor: "text-olive",
      description: "The largest wing of NCC, the Army Wing provides ground-based military training to cadets, preparing them for leadership roles both in armed forces and civilian life.",
      training: [
        "Drill and parade",
        "Weapon training (handling and firing)",
        "Map reading and navigation",
        "Field craft and tactics",
        "First aid and medical training",
        "Obstacle course training",
        "Rock climbing and rappelling",
        "Adventure activities",
      ],
      camps: ["Annual Training Camp (ATC)", "Combined Annual Training Camp (CATC)", "Thal Sainik Camp", "Republic Day Camp (RDC)"],
    },
    {
      name: "Naval Wing",
      icon: Anchor,
      color: "primary",
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
      description: "The Naval Wing of NCC provides sea-based training to cadets, exposing them to naval operations and maritime activities.",
      training: [
        "Boat pulling and sailing",
        "Swimming and diving",
        "Naval tactics and signals",
        "Ship modeling",
        "Seamanship training",
        "Navigation and chartwork",
        "Coastal camping",
        "Water safety and survival",
      ],
      camps: ["Naval Attachment Camp", "Sea Training Camp", "Sailing Regatta", "Republic Day Camp (RDC)"],
    },
    {
      name: "Air Wing",
      icon: Plane,
      color: "sky-600",
      bgColor: "bg-sky-600",
      borderColor: "border-sky-500",
      textColor: "text-sky-600",
      description: "The Air Wing introduces cadets to aviation and air force activities, inspiring them towards aerospace and defense sectors.",
      training: [
        "Aeromodelling",
        "Gliding and flying",
        "Air Force familiarization",
        "Microlite flying",
        "Parasailing",
        "Aircraft recognition",
        "Basic aviation theory",
        "Drone operations",
      ],
      camps: ["Air Wing Attachment Camp", "Vayu Sainik Camp", "Flying and Gliding Camp", "Republic Day Camp (RDC)"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            NCC <span className="text-saffron">Wings</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            NCC is a tri-services organization with three distinct wings - Army, Navy, 
            and Air Force - each providing specialized training to cadets.
          </p>
        </div>
      </section>

      {/* Wings Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {wings.map((wing, wingIndex) => (
              <div
                key={wing.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  wingIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={wingIndex % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-14 w-14 rounded-xl ${wing.bgColor} flex items-center justify-center`}>
                      <wing.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{wing.name}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{wing.description}</p>

                  <div className="mb-6">
                    <h3 className={`font-semibold ${wing.textColor} mb-3`}>Training Activities:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {wing.training.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className={`h-4 w-4 ${wing.textColor}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-semibold ${wing.textColor} mb-3`}>Major Camps:</h3>
                    <div className="flex flex-wrap gap-2">
                      {wing.camps.map((camp) => (
                        <span
                          key={camp}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${wing.bgColor} text-white`}
                        >
                          {camp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className={`${wing.borderColor}/30 overflow-hidden ${wingIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`h-48 ${wing.bgColor} flex items-center justify-center`}>
                    <wing.icon className="h-24 w-24 text-white/30" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Uniform Color</h4>
                        <p className="text-muted-foreground text-sm">
                          {wing.name === "Army Wing" && "Olive Green / Khaki"}
                          {wing.name === "Naval Wing" && "White / Navy Blue"}
                          {wing.name === "Air Wing" && "Light Blue"}
                        </p>
                      </div>
                      <div className={`h-10 w-10 rounded-full ${wing.bgColor}`} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Army Rank Structure */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Army Wing <span className="text-olive">Rank Structure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC cadets progress through various ranks based on their performance, 
              leadership qualities, and participation in activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-olive/30 hidden md:block" />

              <div className="space-y-4">
                {armyRanks.map((item, index) => (
                  <div
                    key={item.rank}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
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
                          <div className="text-olive font-bold text-lg">
                            {index + 1}
                          </div>
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Join a Wing?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Learn about enrollment criteria and start your NCC journey today.
          </p>
          <a
            href="/enrollment"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron/90 text-saffron-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Enrollment Criteria
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Wings;
