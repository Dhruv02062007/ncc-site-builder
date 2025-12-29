import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Flag, Award, BookOpen, Music, Heart } from "lucide-react";

const About = () => {
  const nccPledge = `We the cadets of the National Cadet Corps,
Do solemnly pledge that we shall always uphold the unity of India.
We resolve to be disciplined and responsible citizens of our nation.
We shall undertake positive community service in the spirit of selflessness and concern for our fellow beings.`;

  const history = [
    { year: "1666", event: "Origins in Germany as youth military training" },
    { year: "1917", event: "University Corps formed in India under British rule" },
    { year: "1948", event: "NCC established under the NCC Act of India" },
    { year: "1949", event: "Girls Division of NCC added" },
    { year: "1950", event: "Naval Wing (NCC) established" },
    { year: "1952", event: "Air Wing of NCC established" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            About <span className="text-saffron">NCC</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            The National Cadet Corps - India's largest uniformed youth organization 
            dedicated to developing character and leadership in young citizens.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
                Our History
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-6">
                The Journey of NCC
              </h2>
              <p className="text-muted-foreground mb-4">
                The National Cadet Corps (NCC) is a Tri-Services Organization comprising 
                the Army, Navy and Air Force, engaged in grooming the youth of the country 
                into disciplined and patriotic citizens.
              </p>
              <p className="text-muted-foreground mb-4">
                The NCC in India was formed on 16th April 1948 under the National Cadet 
                Corps Act of 1948. It was raised on the recommendations of the H. N. Kunzru 
                Committee in 1946.
              </p>
              <p className="text-muted-foreground">
                The original motto of NCC was "Unity and Discipline" which continues to 
                guide cadets in their journey of personal and national development.
              </p>
            </div>

            <div className="space-y-4">
              {history.map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-4 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aim and Motto Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Aim</h3>
                <p className="text-muted-foreground text-sm">
                  To develop character, comradeship, discipline, leadership, secular outlook, 
                  spirit of adventure, and ideals of selfless service amongst the youth of 
                  the country.
                </p>
              </CardContent>
            </Card>

            <Card className="border-saffron/20 hover:border-saffron/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-saffron/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-saffron" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Motto</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Unity and Discipline"
                </p>
                <p className="text-muted-foreground text-sm">
                  This motto emphasizes the importance of staying united as a nation while 
                  maintaining discipline in all aspects of life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Core Values</h3>
                <p className="text-muted-foreground text-sm">
                  Character building, leadership development, national integration, 
                  spirit of adventure, and commitment to selfless service to the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pledge, Flag, Song Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              NCC <span className="text-primary">Essentials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pledge, flag, and song form the spiritual backbone of NCC, 
              instilling a sense of duty and patriotism in every cadet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* NCC Pledge */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-saffron" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-saffron/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-saffron" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">NCC Pledge</h3>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed italic">
                    "{nccPledge}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NCC Flag */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">NCC Flag</h3>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <div className="flex justify-center gap-1 mb-3">
                    <div className="w-8 h-20 bg-red-600 rounded-l" />
                    <div className="w-8 h-20 bg-primary" />
                    <div className="w-8 h-20 bg-sky-500 rounded-r" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  The NCC flag has three colors in equal proportion - <strong>Red</strong> (Army), 
                  <strong> Dark Blue</strong> (Navy), and <strong>Light Blue</strong> (Air Force). 
                  It symbolizes the tri-service nature of the organization.
                </p>
              </CardContent>
            </Card>

            {/* NCC Song */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-accent" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Music className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">NCC Song</h3>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "Hum Sab Bhartiya Hain<br />
                    Hum Sab Bhartiya Hain<br />
                    Apni Manzil Ek Hai<br />
                    Ha Ha Ha Ek Hai<br />
                    Ho Ho Ho Ek Hai..."
                  </p>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  The NCC Song emphasizes national unity and the shared goal of all 
                  cadets to serve and protect the nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Interested in Joining NCC?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Learn about the different wings and find out which one suits you best.
          </p>
          <a
            href="/wings"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron/90 text-saffron-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore NCC Wings
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
