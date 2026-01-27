import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Users, Target, Shield, Crosshair } from "lucide-react";

const Achievements = () => {
  const trainingModules = [
    {
      title: "Cadet Selection",
      icon: Users,
      description: "Rigorous selection process to identify dedicated and disciplined cadets for the NCC program.",
      details: "Physical fitness test, interview, and aptitude assessment",
    },
    {
      title: "Drill & Ceremonial",
      icon: Shield,
      description: "Professional drill training including foot drill, arms drill, and ceremonial parade procedures.",
      details: "Squad formations, march past, and rifle drill techniques",
    },
    {
      title: "Weapon Training",
      icon: Crosshair,
      description: "Safe handling and firing of .22 rifles with proper safety protocols and marksmanship training.",
      details: "Range discipline, target practice, and shooting competitions",
    },
    {
      title: "Obstacle Course",
      icon: Target,
      description: "Adventure activities and obstacle training to build physical endurance and mental toughness.",
      details: "Rope climbing, wall scaling, and endurance challenges",
    },
  ];

  const examInfo = [
    {
      title: "B Certificate",
      description: "Second year examination covering drill, weapon training, map reading, and field craft.",
      duration: "After 2 years of NCC",
    },
    {
      title: "C Certificate",
      description: "Final certification with advanced training in leadership, tactics, and specialized skills.",
      duration: "After 3 years of NCC",
    },
  ];

  const stats = [
    { label: "Training Hours", value: "200+", icon: Award },
    { label: "Camps Attended", value: "50+", icon: Users },
    { label: "Certified Cadets", value: "100+", icon: Trophy },
    { label: "Adventure Activities", value: "25+", icon: Star },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-16 h-1 bg-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Training & Development
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to develop leadership, discipline, 
              and character in our cadets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center group cursor-pointer overflow-hidden relative">
                    <CardContent className="p-6">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </CardContent>
                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-1 bg-primary" />
              <h2 className="text-3xl font-bold text-foreground">Training Modules</h2>
              <div className="w-8 h-1 bg-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive training curriculum covers all aspects of NCC training.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module, index) => (
              <ScrollReveal key={module.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="bg-primary w-2 shrink-0 group-hover:w-3 transition-all" />
                        <div className="p-6 flex-1 relative">
                          <div className="flex items-start gap-4 mb-3">
                            <motion.div 
                              className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                              whileHover={{ rotate: 5 }}
                            >
                              <module.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl text-foreground mb-2">{module.title}</h3>
                              <p className="text-muted-foreground text-sm">{module.description}</p>
                            </div>
                          </div>
                          
                          {/* Hidden details on hover */}
                          <motion.div 
                            className="overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            whileHover={{ height: "auto", opacity: 1 }}
                          >
                            <div className="pt-3 border-t border-border mt-3">
                              <p className="text-sm text-primary font-medium">{module.details}</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-1 bg-primary" />
              <h2 className="text-3xl font-bold text-foreground">About Exams</h2>
              <div className="w-8 h-1 bg-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC certification examinations to validate cadet training and competency.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {examInfo.map((exam, index) => (
              <ScrollReveal key={exam.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center h-full group cursor-pointer overflow-hidden relative">
                    <CardContent className="p-8">
                      <motion.div 
                        className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Medal className="h-10 w-10 text-primary-foreground" />
                      </motion.div>
                      <h3 className="font-bold text-2xl text-foreground mb-3">{exam.title}</h3>
                      <p className="text-muted-foreground mb-4">{exam.description}</p>
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {exam.duration}
                      </span>
                    </CardContent>
                    
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="border-2 border-dashed border-border rounded-xl p-12 bg-background">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Join?</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Experience comprehensive military training, adventure activities, 
                and character development with NCC Navrachana University.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
