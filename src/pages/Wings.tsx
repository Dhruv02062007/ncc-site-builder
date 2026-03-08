import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CouncilMember {
  name: string;
  role: string;
  image?: string;
  details?: string;
}

interface YearCouncil {
  ano: CouncilMember;
  staff: CouncilMember[];
  rankHolders: CouncilMember[];
  coordinators: CouncilMember[];
}

const Wings = () => {
  const years = ["2025", "2024", "2023"];
  const [selectedYear, setSelectedYear] = useState("2024");

  const councilData: Record<string, YearCouncil> = {
    "2025": {
      ano: { name: "Dr. XYZ", role: "ANO", details: "Associate NCC Officer - Leading the unit with dedication" },
      staff: [
        { name: "CTO Name", role: "CTO", details: "Care Taker Officer" },
        { name: "Instructor Name", role: "Drill Instructor", details: "Physical Training Expert" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO", details: "Senior Under Officer - Highest cadet rank" },
        { name: "Cadet Name", role: "JUO", details: "Junior Under Officer" },
        { name: "Cadet Name", role: "JUO", details: "Junior Under Officer" },
        { name: "Cadet Name", role: "CQMS", details: "Company Quarter Master Sergeant" },
        { name: "Cadet Name", role: "Sergeant", details: "Squad Leader" },
        { name: "Cadet Name", role: "Lance Corporal", details: "Assistant Squad Leader" },
        { name: "Cadet Name", role: "Corporal", details: "Section Commander" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator", details: "Event Management" },
        { name: "Coordinator 2", role: "Coordinator", details: "Documentation" },
        { name: "Coordinator 3", role: "Coordinator", details: "Logistics" },
      ],
    },
    "2024": {
      ano: { name: "Dr. ABC", role: "ANO", details: "Associate NCC Officer - Leading the unit with dedication" },
      staff: [
        { name: "CTO Name", role: "CTO", details: "Care Taker Officer" },
        { name: "Instructor Name", role: "Drill Instructor", details: "Physical Training Expert" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO", details: "Senior Under Officer - Highest cadet rank" },
        { name: "Cadet Name", role: "JUO", details: "Junior Under Officer" },
        { name: "Cadet Name", role: "JUO", details: "Junior Under Officer" },
        { name: "Cadet Name", role: "CQMS", details: "Company Quarter Master Sergeant" },
        { name: "Cadet Name", role: "Sergeant", details: "Squad Leader" },
        { name: "Cadet Name", role: "Lance Corporal", details: "Assistant Squad Leader" },
        { name: "Cadet Name", role: "Corporal", details: "Section Commander" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator", details: "Event Management" },
        { name: "Coordinator 2", role: "Coordinator", details: "Documentation" },
        { name: "Coordinator 3", role: "Coordinator", details: "Logistics" },
      ],
    },
    "2023": {
      ano: { name: "Dr. PQR", role: "ANO", details: "Associate NCC Officer - Leading the unit with dedication" },
      staff: [
        { name: "CTO Name", role: "CTO", details: "Care Taker Officer" },
        { name: "Instructor Name", role: "Drill Instructor", details: "Physical Training Expert" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO", details: "Senior Under Officer - Highest cadet rank" },
        { name: "Cadet Name", role: "JUO", details: "Junior Under Officer" },
        { name: "Cadet Name", role: "CQMS", details: "Company Quarter Master Sergeant" },
        { name: "Cadet Name", role: "Sergeant", details: "Squad Leader" },
        { name: "Cadet Name", role: "Corporal", details: "Section Commander" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator", details: "Event Management" },
        { name: "Coordinator 2", role: "Coordinator", details: "Documentation" },
      ],
    },
  };

  const currentData = councilData[selectedYear];

  const navigateYear = (direction: "prev" | "next") => {
    const currentIndex = years.indexOf(selectedYear);
    if (direction === "prev" && currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1]);
    } else if (direction === "next" && currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1]);
    }
  };

  const MemberCard = ({ member, size = "normal", index = 0 }: { member: CouncilMember; size?: "large" | "normal" | "small"; index?: number }) => {
    const sizeClasses = {
      large: "w-40 h-40",
      normal: "w-28 h-28",
      small: "w-24 h-24",
    };

    return (
      <motion.div
        className="flex flex-col items-center gap-2 group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className={`${sizeClasses[size]} rounded-full bg-secondary overflow-hidden border-4 border-gold/20 shadow-lg relative`}
          whileHover={{ scale: 1.1, boxShadow: "0 0 0 3px hsl(43 72% 52% / 0.4), 0 10px 30px rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.3 }}
        >
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <span className="text-primary text-2xl font-bold">
                {member.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/90 flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-primary-foreground text-xs text-center font-medium">
              {member.details || member.role}
            </p>
          </motion.div>
        </motion.div>
        <div className="text-center">
          <motion.p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {member.name}
          </motion.p>
          <motion.p className="font-bold text-gold text-sm">
            {member.role}
          </motion.p>
        </div>
      </motion.div>
    );
  };

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-secondary min-h-screen">
        <div className="container mx-auto px-4">
          {/* Title */}
          <ScrollReveal className="text-center mb-12">
            <div className="w-16 h-1 bg-gold mx-auto mb-4 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet the Councils
            </h1>
          </ScrollReveal>

          {/* Year Selector */}
          <ScrollReveal delay={0.1} className="flex items-center justify-center gap-2 mb-16">
            <motion.button
              onClick={() => navigateYear("prev")}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>

            {years.map((year) => (
              <motion.button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                  selectedYear === year
                    ? "btn-glossy-navy"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {year}
              </motion.button>
            ))}

            <motion.button
              onClick={() => navigateYear("next")}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === years.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </ScrollReveal>

          {/* ANO Section */}
          <div className="flex justify-center mb-12">
            <MemberCard member={currentData.ano} size="large" />
          </div>

          {/* Staff Section */}
          <div className="flex justify-center gap-24 md:gap-40 mb-16">
            {currentData.staff.map((member, index) => (
              <MemberCard key={index} member={member} size="normal" index={index} />
            ))}
          </div>

          {/* Divider */}
          <ScrollReveal>
            <div className="border-t border-gold/20 my-12" />
          </ScrollReveal>

          {/* Rank Holders */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-1 bg-gold rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">Rank Holders</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {currentData.rankHolders.map((member, index) => (
                <MemberCard key={index} member={member} size="normal" index={index} />
              ))}
            </div>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal>
            <div className="border-t border-gold/20 my-12" />
          </ScrollReveal>

          {/* Coordinators */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-1 bg-gold rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">Coordinators</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {currentData.coordinators.map((member, index) => (
                <MemberCard key={index} member={member} size="normal" index={index} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Wings;
