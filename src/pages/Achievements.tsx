import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Shield, 
  Target, 
  BookOpen, 
  Award, 
  Tent,
  Medal,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface TrainingModule {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const trainingModules: TrainingModule[] = [
  {
    id: "selection",
    title: "Cadets Selection",
    icon: Users,
    image: "https://images.unsplash.com/photo-1529390079861-591f54f9fe53?w=600&h=400&fit=crop",
    shortDescription: "The selection process for NCC cadets is designed to identify students who exhibit potential, discipline, and a willingness to serve.",
    fullDescription: "The process begins with a formal application where interested students register their names. This is followed by a screening process that includes a physical fitness test to assess endurance, strength, and overall physical capability. In some cases, basic drills or group activities are used to observe teamwork and responsiveness. Successful candidates are inducted into NCC, where they embark on a journey of discipline, leadership, and service through structured training programs and activities.",
  },
  {
    id: "drills",
    title: "Drills and Skills",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=600&h=400&fit=crop",
    shortDescription: "NCC drill and command training sessions are conducted with precision and dedication, following the highest standards of discipline.",
    fullDescription: "Under the guidance of experienced military instructors and senior cadets, cadets are trained in marching, saluting, and executing commands with synchronized movements. These drills enhance physical fitness, coordination, and attention to detail. Regular practice sessions ensure that cadets perfect their posture, timing, and responsiveness. This training not only instills discipline and teamwork but also builds confidence and leadership skills among cadets.",
  },
  {
    id: "obstacle",
    title: "Obstacle Course",
    icon: Target,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    shortDescription: "Obstacle training is an essential part of the NCC program, designed to improve physical fitness, teamwork, and problem-solving abilities.",
    fullDescription: "It typically involves navigating various physical challenges, such as climbing walls, crawling under ropes, balancing on beams, and other agility exercises. These obstacles are designed to test cadets' endurance, strength, and mental resilience. The training promotes discipline, perseverance, and teamwork as cadets often work together to overcome obstacles. It encourages cadets to push their limits, building resilience in the face of adversity.",
  },
  {
    id: "theory",
    title: "Theory Classes",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    shortDescription: "NCC theory classes, conducted by senior officials, play a pivotal role in the overall development of cadets.",
    fullDescription: "These sessions instill discipline, confidence, and a sense of responsibility, providing comprehensive knowledge on military and civilian topics beneficial for personal growth. The curriculum covers essential subjects such as National Integration and Awareness, Weapon Training, Map Reading and Navigation, First Aid and Health & Hygiene, and Environment Awareness and Conservation. The structured and disciplined environment helps shape cadets into responsible and informed citizens.",
  },
  {
    id: "rank",
    title: "Rank Ceremony",
    icon: Award,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    shortDescription: "The NCC ranks help foster discipline, leadership, and responsibility among cadets, reflecting the military structure.",
    fullDescription: "Senior ranks such as Senior Under Officer (SUO), Under Officer (UO), Company Quarter Master Sergeant (CQMS), and Sergeant play pivotal roles in managing and organizing cadet activities. These ranks ensure smooth coordination and leadership, enabling cadets to take on responsibilities beyond their peers. The ceremony recognizes and honors the accomplishments and roles of these ranked cadets.",
  },
  {
    id: "catc",
    title: "CATC Camp",
    icon: Tent,
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=600&h=400&fit=crop",
    shortDescription: "The Combined Annual Training Camp (CATC) is a comprehensive training program for intensive learning and skill-building.",
    fullDescription: "The camp typically lasts for 10 to 12 days and includes a mix of theory sessions, practical drills, and physical training. Cadets participate in activities like drill practice, weapon training, map reading, obstacle courses, and first aid demonstrations. The camp also emphasizes teamwork, leadership, and discipline through group activities, cultural programs, and competitive events. CATC helps cadets build confidence, develop essential military skills, and foster camaraderie.",
  },
];

const bCertFAQs = [
  {
    question: "Is the A Certificate necessary to obtain the B Certificate?",
    answer: "No, the A Certificate is not mandatory for obtaining the B Certificate. However, having an A Certificate can provide foundational knowledge and skills that help in B Certificate training.",
  },
  {
    question: "How many camps are required to qualify for the B Certificate?",
    answer: "Cadets must attend at least one camp, such as a Combined Annual Training Camp (CATC), to be eligible for the B Certificate.",
  },
  {
    question: "What are the eligibility criteria for the B Certificate?",
    answer: "To qualify for the B Certificate, a cadet must have attended a minimum of 75% of the total training parades and completed at least one year of NCC training.",
  },
  {
    question: "What subjects are covered in the B Certificate exam?",
    answer: "The exam covers subjects like Drill, Weapon Training, Map Reading, National Integration, First Aid, and Leadership.",
  },
];

const cCertFAQs = [
  {
    question: "What is the C Certificate examination?",
    answer: "The C Certificate is the highest certification in NCC, awarded after completing 3 years of training and passing the comprehensive examination.",
  },
  {
    question: "What are the benefits of C Certificate?",
    answer: "C Certificate holders get bonus marks in UPSC exams, direct entry to various defense services, and preference in government jobs.",
  },
  {
    question: "What is the camp requirement for C Certificate?",
    answer: "Cadets must attend at least two camps including one All India Camp like RDC, NIC, or National Integration Camp.",
  },
  {
    question: "What is the pass percentage required?",
    answer: "A minimum of 45% marks in each subject and 50% aggregate is required to pass the C Certificate examination.",
  },
];

const TrainingCard = ({ module, index }: { module: TrainingModule; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden h-full group cursor-pointer">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={module.image}
              alt={module.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon overlay */}
            <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-primary/90 flex items-center justify-center">
              <module.icon className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>

          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">{module.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {module.shortDescription}
            </p>

            {/* Expandable content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4 mb-4">
                    {module.fullDescription}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isExpanded ? "Show Less" : "Read More"}
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </motion.button>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollReveal>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Training at Navrachana
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to develop leadership, discipline, 
              and character in our cadets through structured military-style education.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Training Modules Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <TrainingCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Exams Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-1 bg-primary" />
              <h2 className="text-3xl font-bold text-foreground">About Exams</h2>
              <div className="w-8 h-1 bg-primary" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="b-cert" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="b-cert" className="text-base py-3">
                  <Medal className="h-4 w-4 mr-2" />
                  B-Certificate
                </TabsTrigger>
                <TabsTrigger value="c-cert" className="text-base py-3">
                  <Award className="h-4 w-4 mr-2" />
                  C-Certificate
                </TabsTrigger>
              </TabsList>

              <TabsContent value="b-cert">
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-primary/5 rounded-lg p-4 mb-6">
                      <p className="text-foreground font-medium">
                        'B' Certificate is awarded to SD/SW Cadets of schools/colleges after 
                        the completion of 2 years training course and passing 'B' Certificate 
                        examination conducted by NCC authorities.
                      </p>
                    </div>
                    <div className="space-y-0">
                      {bCertFAQs.map((faq, index) => (
                        <FAQItem 
                          key={index} 
                          question={faq.question} 
                          answer={faq.answer} 
                          index={index}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="c-cert">
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-primary/5 rounded-lg p-4 mb-6">
                      <p className="text-foreground font-medium">
                        'C' Certificate is the highest certification in NCC, awarded after 
                        completing 3 years of training and demonstrating exceptional 
                        leadership and military skills.
                      </p>
                    </div>
                    <div className="space-y-0">
                      {cCertFAQs.map((faq, index) => (
                        <FAQItem 
                          key={index} 
                          question={faq.question} 
                          answer={faq.answer} 
                          index={index}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mb-4"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Begin Your Training?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Join NCC Navrachana University and experience comprehensive military 
                  training, adventure activities, and character development.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
