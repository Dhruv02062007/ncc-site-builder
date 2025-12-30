import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Republic Day Parade Practice",
      date: "January 15, 2025",
      time: "6:00 AM - 9:00 AM",
      location: "University Ground",
      description: "Intensive parade practice sessions for Republic Day celebrations.",
      participants: "All Cadets",
    },
    {
      title: "Independence Day Celebration",
      date: "August 15, 2025",
      time: "7:00 AM - 11:00 AM",
      location: "University Campus",
      description: "Flag hoisting ceremony and cultural programs.",
      participants: "All Cadets",
    },
    {
      title: "Blood Donation Camp",
      date: "February 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "University Auditorium",
      description: "Annual blood donation drive in collaboration with Red Cross.",
      participants: "Volunteers",
    },
  ];

  const pastEvents = [
    {
      title: "NCC Day Celebration",
      date: "November 26, 2024",
      description: "Celebrated NCC Day with various activities and performances.",
    },
    {
      title: "Swachh Bharat Abhiyan",
      date: "October 2, 2024",
      description: "Cleanliness drive conducted in and around the university campus.",
    },
    {
      title: "Tree Plantation Drive",
      date: "July 15, 2024",
      description: "Planted 500+ saplings as part of environmental conservation efforts.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            NCC <span className="text-saffron">Events</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Stay updated with all the events, celebrations, and activities organized 
            by the NCC Unit at Navrachana University.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars for these upcoming NCC events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.title} 
                className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-saffron mb-4">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Past <span className="text-olive">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of events and activities successfully conducted by our NCC unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title} 
                className="bg-background animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-olive mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for more events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-border rounded-xl p-12">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">More Events Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This section will be updated with more events and detailed event information. 
              Check back regularly for updates!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
