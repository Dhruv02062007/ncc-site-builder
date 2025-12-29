import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Navrachana University", "Vasna-Bhayli Road", "Vadodara, Gujarat 391410", "India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 0265-2250123"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ncc@navrachana.edu.in", "ncc.unit@navrachana.edu.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Contact <span className="text-saffron">Us</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Have questions about NCC at Navrachana University? We'd love to hear from you. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-xl bg-sky-500 flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9599469574164!2d73.11476867530744!3d22.30489354236997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sNavrachana%20University!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Navrachana University Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1 block">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="mt-6 border-saffron/30 bg-saffron/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Looking to Enroll?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you're interested in joining NCC at Navrachana University, 
                    visit our enrollment page for detailed information.
                  </p>
                  <a
                    href="/enrollment"
                    className="text-saffron font-medium text-sm hover:underline"
                  >
                    View Enrollment Criteria →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
