import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import MessageSection from "@/components/MessageSection";
import EventsGrid from "@/components/EventsGrid";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <HeroCarousel />
      <AboutSection />
      <MessageSection />
      <EventsGrid />
    </Layout>
  );
};

export default Index;
