import Layout from "@/components/Layout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CouncilMember {
  name: string;
  role: string;
  image?: string;
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
      ano: { name: "ANO Name", role: "ANO" },
      staff: [
        { name: "CTO Name", role: "CTO" },
        { name: "Instructor Name", role: "Drill Instructor" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO" },
        { name: "Cadet Name", role: "JUO" },
        { name: "Cadet Name", role: "JUO" },
        { name: "Cadet Name", role: "CQMS" },
        { name: "Cadet Name", role: "Sergeant" },
        { name: "Cadet Name", role: "Lance Corporal" },
        { name: "Cadet Name", role: "Corporal" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator" },
        { name: "Coordinator 2", role: "Coordinator" },
        { name: "Coordinator 3", role: "Coordinator" },
      ],
    },
    "2024": {
      ano: { name: "ANO Name", role: "ANO" },
      staff: [
        { name: "CTO Name", role: "CTO" },
        { name: "Instructor Name", role: "Drill Instructor" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO" },
        { name: "Cadet Name", role: "JUO" },
        { name: "Cadet Name", role: "JUO" },
        { name: "Cadet Name", role: "CQMS" },
        { name: "Cadet Name", role: "Sergeant" },
        { name: "Cadet Name", role: "Lance Corporal" },
        { name: "Cadet Name", role: "Corporal" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator" },
        { name: "Coordinator 2", role: "Coordinator" },
        { name: "Coordinator 3", role: "Coordinator" },
      ],
    },
    "2023": {
      ano: { name: "ANO Name", role: "ANO" },
      staff: [
        { name: "CTO Name", role: "CTO" },
        { name: "Instructor Name", role: "Drill Instructor" },
      ],
      rankHolders: [
        { name: "Cadet Name", role: "SUO" },
        { name: "Cadet Name", role: "JUO" },
        { name: "Cadet Name", role: "CQMS" },
        { name: "Cadet Name", role: "Sergeant" },
        { name: "Cadet Name", role: "Corporal" },
      ],
      coordinators: [
        { name: "Coordinator 1", role: "Coordinator" },
        { name: "Coordinator 2", role: "Coordinator" },
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

  const MemberCard = ({ member, size = "normal" }: { member: CouncilMember; size?: "large" | "normal" | "small" }) => {
    const sizeClasses = {
      large: "w-40 h-40",
      normal: "w-28 h-28",
      small: "w-24 h-24",
    };

    return (
      <div className="flex flex-col items-center gap-2">
        <div className={`${sizeClasses[size]} rounded-full bg-secondary overflow-hidden border-4 border-background shadow-lg`}>
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-2xl font-semibold">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{member.name}</p>
          <p className="font-bold text-foreground">{member.role}</p>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Main Content */}
      <section className="pt-28 pb-20 bg-secondary min-h-screen">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet the Councils
            </h1>
          </div>

          {/* Year Selector */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <button
              onClick={() => navigateYear("prev")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === 0}
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {year}
              </button>
            ))}
            
            <button
              onClick={() => navigateYear("next")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === years.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* ANO Section */}
          <div className="flex justify-center mb-12">
            <MemberCard member={currentData.ano} size="large" />
          </div>

          {/* Staff Section */}
          <div className="flex justify-center gap-24 md:gap-40 mb-16">
            {currentData.staff.map((member, index) => (
              <MemberCard key={index} member={member} size="normal" />
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Rank Holders Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-1 bg-primary" />
              <h2 className="text-2xl font-bold text-foreground">Rank Holders</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {currentData.rankHolders.map((member, index) => (
                <MemberCard key={index} member={member} size="normal" />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Coordinators Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-1 bg-primary" />
              <h2 className="text-2xl font-bold text-foreground">Coordinators</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {currentData.coordinators.map((member, index) => (
                <MemberCard key={index} member={member} size="normal" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wings;
