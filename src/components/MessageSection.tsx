interface MessageCardProps {
  name: string;
  role: string;
  message: string;
  imageUrl: string;
  reversed?: boolean;
}

const MessageCard = ({ name, role, message, imageUrl, reversed }: MessageCardProps) => {
  return (
    <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border shadow-lg">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`flex-1 text-center ${reversed ? "md:text-right" : "md:text-left"}`}>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-accent font-medium mb-4">{role}</p>
        <p className="text-muted-foreground leading-relaxed italic">
          "{message}"
        </p>
      </div>
    </div>
  );
};

const MessageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Message
          </h2>
          <div className="section-divider" />
        </div>

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
