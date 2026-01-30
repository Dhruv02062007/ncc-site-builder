import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Info, 
  Target, 
  Quote, 
  Music, 
  BookOpen, 
  Flag, 
  Shirt,
  Award,
  History,
  ChevronRight
} from "lucide-react";

type SectionId = "about" | "aim" | "motto" | "song" | "pledge" | "flag" | "uniform" | "rank" | "history";

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "about", label: "About NCC", icon: Info },
  { id: "aim", label: "Aim of NCC", icon: Target },
  { id: "motto", label: "NCC Motto", icon: Quote },
  { id: "song", label: "NCC Song", icon: Music },
  { id: "pledge", label: "NCC Pledge", icon: BookOpen },
  { id: "flag", label: "NCC Flag", icon: Flag },
  { id: "uniform", label: "NCC Uniform", icon: Shirt },
  { id: "rank", label: "NCC Rank", icon: Award },
  { id: "history", label: "History of NCC", icon: History },
];

const contentData: Record<SectionId, { title: string; content: React.ReactNode }> = {
  about: {
    title: "About NCC",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          The National Cadet Corps (NCC) is a youth development movement. It has enormous potential 
          for nation-building. The NCC provides opportunities to the youth of the country for their 
          all-round development with a sense of Duty, Commitment, Dedication, Discipline, and Moral 
          Values so that they become able leaders and useful citizens.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The NCC provides exposure to the cadets in a wide range of activities, with a distinct 
          emphasis on Social Services, Discipline, and Adventure Training. The NCC is open to all 
          regular students of schools and colleges on a voluntary basis. The cadets have no liability 
          for active military service.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          NCC is a Tri-Services Organization comprising the Army, Navy and Air Force, engaged in 
          grooming the youth of the country into disciplined and patriotic citizens.
        </p>
      </div>
    ),
  },
  aim: {
    title: "Aim of NCC",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          The aim of NCC is to develop character, comradeship, discipline, leadership, secular outlook, 
          spirit of adventure, and ideals of selfless service amongst the youth of the country.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { title: "Character Building", desc: "Developing moral and ethical values in cadets" },
            { title: "Leadership", desc: "Training youth to become future leaders of the nation" },
            { title: "Discipline", desc: "Instilling a sense of discipline and time management" },
            { title: "National Integration", desc: "Promoting unity and integrity of the nation" },
            { title: "Spirit of Adventure", desc: "Encouraging adventure activities and outdoor skills" },
            { title: "Selfless Service", desc: "Developing ideals of community service" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 rounded-lg p-4"
            >
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  motto: {
    title: "NCC Motto",
    content: (
      <div className="space-y-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-primary mb-2">"Unity and Discipline"</h3>
          <p className="text-muted-foreground">एकता और अनुशासन</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The motto of NCC is "Unity and Discipline" which emphasizes on the need of unity among 
          the youth of the nation, irrespective of caste, creed, or religion, and the importance 
          of being disciplined in all aspects of life.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This motto inspires cadets to work together as a team, respecting diversity while 
          maintaining high standards of personal discipline and commitment to national service.
        </p>
      </div>
    ),
  },
  song: {
    title: "NCC Song",
    content: (
      <div className="space-y-6">
        <div className="bg-secondary/50 rounded-xl p-6">
          <div className="space-y-4 text-foreground font-medium italic">
            <p>हम सब भारतीय हैं, हम सब भारतीय हैं</p>
            <p>अपनी मंज़िल एक है, हाँ हाँ हाँ एक है, हो हो हो एक है</p>
            <p>हम सब भारतीय हैं...</p>
            <p className="pt-4">कश्मीर की धरती रानी है,</p>
            <p>सरहद पर जवानों की बानी है</p>
            <p>नंगे पाँव हिमालय डोले</p>
            <p>पर्वत चढ़कर आगे बोले</p>
            <p>हम सब भारतीय हैं...</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The NCC song "Hum Sab Bhartiya Hain" was written by Sudarshan Faakir and composed by 
          the renowned music director, Late Shri Madan Mohan. It emphasizes national unity and 
          the shared identity of all Indians as one.
        </p>
      </div>
    ),
  },
  pledge: {
    title: "NCC Pledge",
    content: (
      <div className="space-y-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <p className="text-foreground leading-relaxed italic">
            "We the cadets of the National Cadet Corps, do solemnly pledge that we shall always 
            uphold the unity of India. We resolve to be disciplined and responsible citizens of 
            our nation. We shall undertake positive community service in the spirit of selflessness 
            and concern for our fellow beings."
          </p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-6">
          <h4 className="font-semibold text-foreground mb-3">हिंदी में शपथ</h4>
          <p className="text-muted-foreground italic">
            "हम राष्ट्रीय कैडेट कोर के कैडेट, शपथ लेते हैं कि हम सदैव भारत की एकता बनाए रखेंगे। 
            हम अनुशासित एवं जिम्मेदार नागरिक बनने का संकल्प लेते हैं। हम निःस्वार्थ भाव से समाज 
            सेवा करेंगे और अपने साथियों के प्रति सहानुभूतिपूर्ण रहेंगे।"
          </p>
        </div>
      </div>
    ),
  },
  flag: {
    title: "NCC Flag",
    content: (
      <div className="space-y-6">
        <div className="flex justify-center py-8">
          <div className="flex shadow-lg rounded-lg overflow-hidden">
            <div className="w-20 h-32 bg-red-600" />
            <div className="w-20 h-32 bg-primary" />
            <div className="w-20 h-32 bg-sky-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-red-600 rounded mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Red</h4>
            <p className="text-sm text-muted-foreground">Represents the Army</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-primary rounded mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Dark Blue</h4>
            <p className="text-sm text-muted-foreground">Represents the Navy</p>
          </div>
          <div className="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-sky-400 rounded mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Light Blue</h4>
            <p className="text-sm text-muted-foreground">Represents the Air Force</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The NCC flag was adopted in 1954. The tri-colour flag with NCC crest in gold in the 
          middle was introduced symbolizing the tri-service nature of the organization.
        </p>
      </div>
    ),
  },
  uniform: {
    title: "NCC Uniform",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The NCC uniform instills a sense of pride, discipline, and belonging among cadets. 
          Different wings have distinct uniforms reflecting their service affiliation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              wing: "Army Wing", 
              color: "Khaki",
              details: "Khaki shirt and trousers with NCC badges and rank insignia"
            },
            { 
              wing: "Naval Wing", 
              color: "White",
              details: "White uniform with navy blue collar and NCC naval badges"
            },
            { 
              wing: "Air Wing", 
              color: "Light Blue",
              details: "Light blue shirt and dark blue trousers with Air Force badges"
            },
          ].map((item, index) => (
            <motion.div
              key={item.wing}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 rounded-lg p-5"
            >
              <h4 className="font-semibold text-foreground mb-2">{item.wing}</h4>
              <p className="text-sm text-primary font-medium mb-2">{item.color}</p>
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  rank: {
    title: "NCC Rank Structure",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The NCC rank structure helps foster discipline, leadership, and responsibility among 
          cadets, reflecting the military structure. Senior ranks play pivotal roles in managing 
          and organizing cadet activities.
        </p>
        <div className="space-y-3">
          {[
            { rank: "SUO", full: "Senior Under Officer", desc: "Highest rank for NCC cadets" },
            { rank: "JUO", full: "Junior Under Officer", desc: "Second highest cadet rank" },
            { rank: "CQMS", full: "Company Quartermaster Sergeant", desc: "Responsible for logistics" },
            { rank: "CSM", full: "Company Sergeant Major", desc: "Senior enlisted cadet rank" },
            { rank: "SGT", full: "Sergeant", desc: "Non-commissioned officer rank" },
            { rank: "CPL", full: "Corporal", desc: "Junior NCO rank" },
            { rank: "L/CPL", full: "Lance Corporal", desc: "Entry-level NCO rank" },
            { rank: "CDT", full: "Cadet", desc: "Basic rank for all NCC members" },
          ].map((item, index) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors"
            >
              <div className="w-16 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                <span className="font-bold text-primary text-sm">{item.rank}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{item.full}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  history: {
    title: "History of NCC",
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The National Cadet Corps came into existence on 16th April 1948 under the NCC Act 
          of Parliament. It was raised on the recommendations of the H.N. Kunzru Committee in 1946.
        </p>
        <div className="space-y-4">
          {[
            { year: "1666", event: "Origins in Germany - Student armies were raised by Frederick Wilhelm" },
            { year: "1917", event: "University Corps formed in India under the British during World War I" },
            { year: "1920", event: "University Training Corps (UTC) established by Indian Defence Act" },
            { year: "1942", event: "UTC was renamed as University Officers Training Corps (UOTC)" },
            { year: "1948", event: "NCC established under the National Cadet Corps Act of India on April 16th" },
            { year: "1949", event: "Girls Division of NCC added to include women cadets" },
            { year: "1950", event: "Naval Wing (NCC) was established" },
            { year: "1952", event: "Air Wing of NCC was established" },
            { year: "1963", event: "NCC training made compulsory after Indo-China conflict" },
            { year: "1968", event: "NCC reverted to voluntary status" },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 items-start"
            >
              <div className="w-16 h-8 bg-primary rounded flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
              </div>
              <p className="text-muted-foreground pt-1">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
};

const About = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About NCC
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-72 shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-2">
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                        whileHover={{ x: activeSection === item.id ? 0 : 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="font-medium text-sm">{item.label}</span>
                        {activeSection === item.id && (
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        )}
                      </motion.button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        {contentData[activeSection].title}
                      </h2>
                      {contentData[activeSection].content}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
