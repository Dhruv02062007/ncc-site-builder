import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" },
    { icon: Facebook, label: "Facebook", href: "#", color: "bg-blue-600" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "bg-blue-700" },
    { icon: Youtube, label: "YouTube", href: "#", color: "bg-red-600" },
  ];

  return (
    <Layout>
      {/* Main Content */}
      <section className="pt-28 pb-20 bg-secondary min-h-screen">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have questions about NCC at Navrachana University? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`bg-secondary border-border ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`bg-secondary border-border ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`bg-secondary border-border ${errors.subject ? 'border-destructive' : ''}`}
                    />
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`bg-secondary border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right Column - Contact Info, Map & Social */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground text-sm">
                          Navrachana University<br />
                          Vasna-Bhayli Road<br />
                          Vadodara, Gujarat 391410<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground text-sm">
                          +91 98765 43210<br />
                          +91 0265-2250123
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">
                          ncc@navrachana.edu.in<br />
                          ncc.unit@navrachana.edu.in
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Follow Us</h2>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`h-12 w-12 rounded-full ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-md`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 text-white" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-card border-border shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 pb-4">
                    <h2 className="text-xl font-bold text-foreground">Our Location</h2>
                    <p className="text-muted-foreground text-sm mt-1">Find us on the map</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9599469574164!2d73.11476867530744!3d22.30489354236997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sNavrachana%20University!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Navrachana University Location"
                  />
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
