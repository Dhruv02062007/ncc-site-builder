import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image, FolderOpen, Plus } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, ScaleOnHover, RevealLine } from "@/components/ui/motion";
import { motion } from "framer-motion";

const Gallery = () => {
  const categories = [
    { title: "Republic Day Celebrations", count: 0, placeholder: true },
    { title: "Annual Training Camps", count: 0, placeholder: true },
    { title: "Independence Day", count: 0, placeholder: true },
    { title: "NCC Day Celebrations", count: 0, placeholder: true },
    { title: "Adventure Activities", count: 0, placeholder: true },
    { title: "Community Service", count: 0, placeholder: true },
    { title: "Drill & Parade", count: 0, placeholder: true },
    { title: "Award Ceremonies", count: 0, placeholder: true },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 tracking-tight">
              Photo <span className="text-saffron">Gallery</span>
            </h1>
          </SlideUp>
          <FadeIn delay={0.15}>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Explore moments captured during NCC activities, camps, events, and 
              celebrations at Navrachana University.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Photos are organized by events and activities. Click on a category to view images.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
            {categories.map((category) => (
              <StaggerItem key={category.title}>
                <ScaleOnHover>
                  <Card className="cursor-pointer group border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                        {category.placeholder ? (
                          <div className="text-center p-4">
                            <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors duration-300" />
                            <p className="text-muted-foreground text-sm">Photos coming soon</p>
                          </div>
                        ) : (
                          <Image className="h-12 w-12 text-muted-foreground" />
                        )}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.count} photos</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Featured Moments</h2>
            <p className="text-muted-foreground">Highlights from our NCC journey</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.05}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <StaggerItem key={item}>
                <motion.div
                  className="aspect-square bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-center">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Photo {item}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <FadeIn className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-border rounded-xl p-12">
            <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Gallery In Progress</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We're organizing and uploading photos from various NCC events and activities. 
              This gallery will soon be filled with memorable moments from our unit's journey. 
              Check back soon for updates!
            </p>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Gallery;
