import { FadeIn, RevealLine } from "@/components/ui/motion";
import { motion } from "framer-motion";

interface MessageCardProps {
  name: string;
  role: string;
  message: string;
  imageUrl: string;
  reversed?: boolean;
}

const MessageCard = ({ name, role, message, imageUrl, reversed }: MessageCardProps) => {
  return (
    <FadeIn direction={reversed ? "right" : "left"}>
      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
        <div className="flex-shrink-0">
          <motion.div
            className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl"
            whileHover={{ scale: 1.05, borderColor: "hsl(43 72% 52%)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className={`flex-1 text-center ${reversed ? "md:text-right" : "md:text-left"}`}>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-1 tracking-tight">{name}</h3>
          <p className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">{role}</p>
          <p className="text-muted-foreground leading-relaxed italic">"{message}"</p>
        </div>
      </div>
    </FadeIn>
  );
};

const MessageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Message
          </h2>
          <RevealLine className="w-20 mx-auto bg-gold" />
        </FadeIn>

        <div className="space-y-16 max-w-5xl mx-auto">
          <MessageCard
            name="[Director Name]"
            role="Director"
            message="At Navrachana University, we firmly believe in fostering a culture of excellence, discipline, and patriotism. The National Cadet Corps plays a pivotal role in shaping our students' leadership, responsibility, and commitment to national service. Through NCC, our cadets imbibe essential life skills and uphold the values that are critical for nation-building."
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          />
          <MessageCard
            name="[ANO Name]"
            role="Associate NCC Officer"
            message="As the Associate NCC Officer at Navrachana University, I am honored to be a part of this inspiring journey of discipline, resilience, and service. NCC plays a pivotal role in shaping young minds, instilling in them the core values of leadership, integrity, and dedication. Our cadets embody the spirit of 'Unity and Discipline' and actively contribute to both campus life and society."
            imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            reversed
          />
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
