import Layout from "@/components/Layout";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      images: [
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "26th May to 4th June",
      title: "Combined Annual Training Camp",
      description: "The Combined Annual Training Camp (CATC) was organized where cadets underwent rigorous training including drill, weapon training, map reading, and various adventure activities. The camp strengthened camaraderie among cadets from different institutions.",
      images: [
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "26th January",
      title: "Republic Day Celebration",
      description: "NCC cadets participated in the Republic Day celebrations with great enthusiasm. The event included flag hoisting ceremony, parade, and cultural programs showcasing the spirit of patriotism and national unity.",
      images: [
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=400&fit=crop",
      ],
    },
  ],
  "2024": [
    {
      date: "26th November",
      title: "NCC Day Celebration",
      description: "Celebrated NCC Day with various activities including parade, cultural performances, and felicitation of outstanding cadets. The day commemorated the formation of NCC and its contributions to nation-building.",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "15th August",
      title: "Independence Day Celebration",
      description: "Grand celebration of Independence Day with flag hoisting, patriotic songs, and a march past by NCC cadets. The event instilled a sense of pride and responsibility towards the nation.",
      images: [
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "21st June",
      title: "International Day of Yoga",
      description: "Cadets participated in yoga sessions to promote health and wellness. The event emphasized the importance of physical fitness and mental well-being in the life of a cadet.",
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      ],
    },
    {
      date: "2nd October",
      title: "Swachh Bharat Abhiyan",
      description: "Cleanliness drive conducted in and around the university campus as part of the Swachh Bharat initiative. Cadets actively participated in cleaning public spaces and spreading awareness about hygiene.",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      ],
    },
  ],
};

const years = Object.keys(eventsData).sort((a, b) => parseInt(b) - parseInt(a));

const Events = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handlePrevYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1]);
    }
  };

  const handleNextYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1]);
    }
  };

  const currentEvents = eventsData[selectedYear] || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="section-divider mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Events
          </h1>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevYear}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === years.length - 1}
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <div className="flex items-center gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextYear}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              disabled={years.indexOf(selectedYear) === 0}
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-12 bg-secondary min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full hidden md:block" />

              {currentEvents.map((event, index) => (
                <div
                  key={`${selectedYear}-${index}`}
                  className={`relative mb-16 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Date Badge - Centered on timeline */}
                  <div className="flex justify-center mb-6">
                    <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium z-10">
                      {event.date}
                    </span>
                  </div>

                  {/* Content - Alternating layout */}
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Text Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-left md:pr-8" : "md:text-right md:pl-8"}`}>
                      <div className={`inline-block w-12 h-1 bg-primary mb-4 ${index % 2 === 0 ? "" : "md:ml-auto"}`} />
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link to="/gallery">View Gallery</Link>
                      </Button>
                    </div>

                    {/* Images */}
                    <div className="flex-1 flex justify-center">
                      {event.images.length === 1 ? (
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-card shadow-lg">
                          <img
                            src={event.images[0]}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                          {/* Multiple circular images in a cluster */}
                          <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-card shadow-lg z-10">
                            <img
                              src={event.images[0]}
                              alt={`${event.title} 1`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {event.images[1] && (
                            <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-card shadow-lg z-20">
                              <img
                                src={event.images[1]}
                                alt={`${event.title} 2`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.images[2] && (
                            <div className="absolute bottom-8 right-8 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-card shadow-lg z-30">
                              <img
                                src={event.images[2]}
                                alt={`${event.title} 3`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
