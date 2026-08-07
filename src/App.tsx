import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import InstagramFeed from "./components/InstagramFeed";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="bg-white text-cocoa overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BeforeAfter />
        <Packages />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
