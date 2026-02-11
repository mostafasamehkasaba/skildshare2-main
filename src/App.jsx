import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Events from "./components/Events";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Offers />
        <Testimonials />
        <Blog />
        <Events />
        <Contact />
      </main>
      <Footer />

      <a className="to-top btn btn-primary btn-icon shadow-soft" href="#home" aria-label="Back to top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
