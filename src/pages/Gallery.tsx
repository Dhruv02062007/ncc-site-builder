import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image, FolderOpen, Plus } from "lucide-react";

const Gallery = () => {
  const categories = [
    {
      title: "Republic Day Celebrations",
      count: 0,
      placeholder: true,
    },
    {
      title: "Annual Training Camps",
      count: 0,
      placeholder: true,
    },
    {
      title: "Independence Day",
      count: 0,
      placeholder: true,
    },
    {
      title: "NCC Day Celebrations",
      count: 0,
      placeholder: true,
    },
    {
      title: "Adventure Activities",
      count: 0,
      placeholder: true,
    },
    {
      title: "Community Service",
      count: 0,
      placeholder: true,
    },
    {
      title: "Drill & Parade",
      count: 0,
      placeholder: true,
    },
    {
      title: "Award Ceremonies",
      count: 0,
      placeholder: true,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Photo <span className="text-saffron">Gallery</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Explore moments captured during NCC activities, camps, events, and 
            celebrations at Navrachana University.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Photos are organized by events and activities. Click on a category to view images.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.title} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    {category.placeholder ? (
                      <div className="text-center p-4">
                        <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                        <p className="text-muted-foreground text-sm">Photos coming soon</p>
                      </div>
                    ) : (
                      <Image className="h-12 w-12 text-muted-foreground" />
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} photos
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Placeholder Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Featured Moments
            </h2>
            <p className="text-muted-foreground">
              Highlights from our NCC journey
            </p>
          </div>

          {/* Placeholder Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item} 
                className="aspect-square bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Photo {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-border rounded-xl p-12">
            <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Gallery In Progress</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We're organizing and uploading photos from various NCC events and activities. 
              This gallery will soon be filled with memorable moments from our unit's journey. 
              Check back soon for updates!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
