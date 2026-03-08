import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer, StaggerItem, RevealLine } from "@/components/ui/motion";
import { motion } from "framer-motion";

interface EventGridItemProps {
  title: string;
  imageUrl: string;
  link: string;
}

const EventGridItem = ({ title, imageUrl, link }: EventGridItemProps) => {
  return (
    <Link to={link} className="group relative overflow-hidden rounded-xl block">
      <motion.div
        className="aspect-square"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

const events = [
  {
    title: "Firing",
    imageUrl: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&h=600&fit=crop",
    link: "/events",
  },
  {
    title: "Special Days",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=600&fit=crop",
    link: "/events",
  },
  {
    title: "Rank Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=600&fit=crop",
    link: "/events",
  },
  {
    title: "Camp Visit",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
    link: "/camps",
  },
];

const EventsGrid = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Our Events
          </h2>
          <RevealLine className="w-20 mx-auto" />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.12}>
          {events.map((event, index) => (
            <StaggerItem key={index}>
              <EventGridItem title={event.title} imageUrl={event.imageUrl} link={event.link} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EventsGrid;
