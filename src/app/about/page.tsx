import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
