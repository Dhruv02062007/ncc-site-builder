import Layout from "@/components/Layout";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  date: string;
  title: string;
  description: string;
  images: string[];
}

interface YearEvents {
  [key: string]: Event[];
}

const eventsData: YearEvents = {
  "2025": [
    {
      date: "21st June",
      title: "International Day of Yoga",
      description: "We have registered to organize Yoga Sangam as part of the International Day of Yoga 2025 (#IDY2025). Yoga Sangam is the central initiative of this year's celebration – a nationwide, synchronized yet distributed mass yoga demonstration based on the Common Yoga Protocol (CYP). It aims to unite participants across more than 1,00,000 locations throughout India on 21st June 2025. On this occasion, our NCC cadets demonstrated commendable enthusiasm by participating in yoga sessions from wherever they were. Their commitment reflects the discipline and dedication towards health, wellness, and the values that NCC stands for.",
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "17th June",
      title: "Motivational Session",
      description: "An inspiring motivational session was conducted for NCC cadets featuring distinguished speakers who shared their experiences and insights on leadership, discipline, and nation-building.",
      images: ["https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop"],
    },
    {
      date: "26th May to 4th June",
      title: "Combined Annual Training Camp",
      description: "The Combined Annual Training Camp (CATC) was organized where cadets underwent rigorous training including drill, weapon training, map reading, and various adventure activities. The camp strengthened camaraderie among cadets from different institutions.",
      images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=400&fit=crop"],
    },
    {
      date: "26th January",
      title: "Republic Day Celebration",
      description: "NCC cadets participated in the Republic Day celebrations with great enthusiasm. The event included flag hoisting ceremony, parade, and cultural programs showcasing the spirit of patriotism and national unity.",
      images: ["https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=400&fit=crop"],
    },
  ],
  "2024": [
    {
      date: "26th November",
      title: "NCC Day Celebration",
      description: "Celebrated NCC Day with various activities including parade, cultural performances, and felicitation of outstanding cadets. The day commemorated the formation of NCC and its contributions to nation-building.",
      images: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop"],
    },
    {
      date: "15th August",
      title: "Independence Day Celebration",
      description: "Grand celebration of Independence Day with flag hoisting, patriotic songs, and a march past by NCC cadets. The event instilled a sense of pride and responsibility towards the nation.",
      images: ["https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=400&fit=crop"],
    },
    {
      date: "21st June",
      title: "International Day of Yoga",
      description: "Cadets participated in yoga sessions to promote health and wellness. The event emphasized the importance of physical fitness and mental well-being in the life of a cadet.",
      images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"],
    },
    {
      date: "2nd October",
      title: "Swachh Bharat Abhiyan",
      description: "Cleanliness drive conducted in and around the university campus as part of the Swachh Bharat initiative. Cadets actively participated in cleaning public spaces and spreading awareness about hygiene.",
      images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"],
    },
  ],
};

const years = Object.keys(eventsData).sort((a, b) => parseInt(b) - parseInt(a));

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-12">
      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10 hidden md:block shadow-md" />

      <FadeIn delay={index * 0.1} direction={isLeft ? "left" : "right"}>
        <div
          className={`flex flex-col md:flex-row items-stretch gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Spacer for timeline alignment */}
          <div className="hidden md:block md:w-1/2" />

          {/* Content Card */}
          <motion.div
            className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="premium-card gold-glow-hover rounded-md overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-gold text-gold-foreground px-3 py-1 rounded-sm text-xs font-bold tracking-wide">
                  {event.date}
                </span>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-tight">
                  {event.title}
                </h3>
                <motion.p
                  className="text-muted-foreground text-sm leading-relaxed"
                  animate={{ height: isHovered ? "auto" : "3.75rem" }}
                  style={{ overflow: "hidden" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {event.description}
                </motion.p>
                <Link
                  to="/gallery"
                  className="inline-block mt-3 text-gold text-sm font-semibold hover:underline transition-colors"
                >
                  View Gallery →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  );
};

const Events = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handlePrevYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex < years.length - 1) setSelectedYear(years[currentIndex + 1]);
  };

  const handleNextYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex > 0) setSelectedYear(years[currentIndex - 1]);
  };

  const currentEvents = eventsData[selectedYear] || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <SlideUp>
            <div className="w-16 h-1 bg-gold mx-auto mb-4 rounded-full" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
              Our Events
            </h1>
          </SlideUp>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-4">
              <motion.button
                onClick={handlePrevYear}
                className="p-2 rounded-md hover:bg-muted transition-all duration-300"
                disabled={years.indexOf(selectedYear) === years.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              </motion.button>
              <div className="flex items-center gap-2">
                {years.map((year) => (
                  <motion.button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
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
              </div>
              <motion.button
                onClick={handleNextYear}
                className="p-2 rounded-md hover:bg-muted transition-all duration-300"
                disabled={years.indexOf(selectedYear) === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-12 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold via-border to-border h-full hidden md:block" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentEvents.map((event, index) => (
                    <EventCard key={`${selectedYear}-${index}`} event={event} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {currentEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No events found for {selectedYear}.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
