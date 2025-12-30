import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ClipboardList, 
  FileText, 
  UserCheck, 
  Calendar,
  Award,
  ArrowRight
} from "lucide-react";

const Enrollment = () => {
  const eligibilityCriteria = [
    "Must be a bonafide student of Navrachana University",
    "Age: 17-26 years at the time of enrollment",
    "Minimum height: 157 cm for males, 152 cm for females",
    "Should be medically fit (medical certificate required)",
    "Should not be a member of any other uniformed organization",
    "Good moral character with no criminal record",
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out the NCC enrollment application form available at the NCC office or download from university portal.",
      icon: FileText,
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit required documents including ID proof, age certificate, and passport-size photographs.",
      icon: ClipboardList,
    },
    {
      step: 3,
      title: "Medical Examination",
      description: "Undergo a medical fitness test conducted by authorized medical officers.",
      icon: UserCheck,
    },
    {
      step: 4,
      title: "Selection & Enrollment",
      description: "Upon successful verification, receive your enrollment confirmation and uniform.",
      icon: CheckCircle,
    },
  ];

  const certificates = [
    {
      name: "Certificate 'C'",
      duration: "3 Years",
      eligibility: "Senior Division Cadets (Degree/PG students)",
      benefits: [
        "Preference in government jobs",
        "Bonus marks in competitive exams",
        "Direct entry to Officer Training Academy",
        "Reservation in paramilitary forces",
      ],
      color: "bg-saffron",
    },
    {
      name: "Certificate 'B'",
      duration: "2 Years",
      eligibility: "Senior Division Cadets",
      benefits: [
        "Foundation for 'C' Certificate",
        "Preference in certain recruitments",
        "Leadership skill recognition",
      ],
      color: "bg-olive",
    },
    {
      name: "Certificate 'A'",
      duration: "1 Year",
      eligibility: "Junior Division Cadets (+2 level)",
      benefits: [
        "Entry point for NCC",
        "Basic military training certificate",
        "Foundation for higher certificates",
      ],
      color: "bg-primary",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Enrollment <span className="text-saffron">Criteria</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Join the NCC at Navrachana University and embark on a journey of 
            discipline, leadership, and national service.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Eligibility <span className="text-primary">Criteria</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                To enroll in the NCC at Navrachana University, candidates must meet 
                the following eligibility requirements:
              </p>
              <div className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-olive shrink-0 mt-0.5" />
                    <span className="text-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-olive/5 border-olive/20">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-olive mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Enrollment Period
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enrollment for NCC typically opens at the beginning of each academic year 
                  (July-August). Watch for announcements on the university notice board.
                </p>
                <p className="text-sm text-olive font-medium">
                  Contact the NCC office for current enrollment status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enrollment <span className="text-saffron">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your NCC enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentSteps.map((item, index) => (
              <Card 
                key={item.step} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-saffron text-saffron-foreground flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NCC Certificates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              NCC <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCC offers three levels of certificates, each providing valuable benefits 
              for your career and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${cert.color} p-4 text-center`}>
                  <Award className="h-10 w-10 text-white mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  <p className="text-white/80 text-sm">{cert.duration}</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Eligibility: </span>
                    {cert.eligibility}
                  </p>
                  <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-olive shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Join NCC?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            For more information about enrollment or any queries, 
            please contact our NCC office or reach out to us.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-saffron hover:bg-saffron/90 text-saffron-foreground font-semibold px-8 group"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Enrollment;
