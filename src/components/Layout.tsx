import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { PageTransition } from "@/components/ui/motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
