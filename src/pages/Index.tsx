import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedFruits from "@/components/FeaturedFruits";
import HowWeWork from "@/components/HowWeWork";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedFruits />
        <HowWeWork />
        <Trust />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
