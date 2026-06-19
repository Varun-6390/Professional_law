import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingServices from "../components/TrendingServices";
import About from "../components/About";
import Clients from "../components/Clients";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import PopupModal from "../components/PopupModal";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <TrendingServices />
        <About />
        <Clients />
        <WhyUs />
        <Testimonials />
        <PopupModal />
      </main>
      <Footer />
    </div>
  );
}
