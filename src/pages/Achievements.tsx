import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star, Award, Users, Target } from "lucide-react";

const Achievements = () => {
  const majorAchievements = [
    {
      title: "Republic Day Camp Selection",
      year: "2024",
      icon: Award,
      description: "5 cadets selected for the prestigious Republic Day Camp in New Delhi.",
      color: "bg-saffron",
    },
    {
      title: "Thal Sainik Camp",
      year: "2023",
      icon: Target,
      description: "3 cadets represented Gujarat Directorate at the national level camp.",
      color: "bg-primary",
    },
    {
      title: "Best NCC Unit Award",
      year: "2023",
      icon: Trophy,
      description: "Recognized as the Best NCC Unit among universities in Gujarat.",
      color: "bg-olive",
    },
    {
      title: "Blood Donation Excellence",
      year: "2024",
      icon: Medal,
      description: "Collected 500+ units of blood through various donation drives.",
      color: "bg-red-500",
    },
  ];

  const individualAchievements = [
    {
      name: "Cadet Name",
      achievement: "Selected for RDC 2024",
      category: "Camp Selection",
    },
    {
      name: "Cadet Name",
      achievement: "Gold Medal in Shooting",
      category: "Sports",
    },
    {
      name: "Cadet Name",
      achievement: "Best Cadet Award",
      category: "Recognition",
    },
    {
      name: "Cadet Name",
      achievement: "State Level Drill Competition - 1st Place",
      category: "Drill",
    },
  ];

  const stats = [
    { label: "RDC Selections", value: "15+", icon: Award },
    { label: "Camp Participations", value: "200+", icon: Users },
    { label: "Awards Won", value: "50+", icon: Trophy },
    { label: "Community Events", value: "100+", icon: Star },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-saffron to-saffron/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-saffron-foreground mb-4 animate-fade-in">
            Our <span className="text-primary">Achievements</span>
          </h1>
          <p className="text-saffron-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Celebrating the accomplishments and excellence of Navrachana University 
            NCC Unit and its dedicated cadets.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-saffron mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Major <span className="text-saffron">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting our unit's most significant accomplishments over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorAchievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className={`${achievement.color} w-2 shrink-0`} />
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`h-12 w-12 rounded-xl ${achievement.color}/10 flex items-center justify-center`}>
                          <achievement.icon className={`h-6 w-6 ${achievement.color === 'bg-saffron' ? 'text-saffron' : achievement.color === 'bg-primary' ? 'text-primary' : achievement.color === 'bg-olive' ? 'text-olive' : 'text-red-500'}`} />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">{achievement.year}</span>
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Individual <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognizing the outstanding achievements of our cadets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualAchievements.map((item, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-olive mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-xs font-medium text-saffron bg-saffron/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-foreground mt-3 mb-1">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for more content */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-border rounded-xl p-12 bg-background">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">More Achievements Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This section will be updated with more achievements, certificates, 
              and individual recognitions. Check back for updates!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
