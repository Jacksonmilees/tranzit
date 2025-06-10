import Download from "@/components/Download";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <Pricing />
      <Download />
      <Footer />
    </div>
  );
}
