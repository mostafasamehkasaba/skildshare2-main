import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Article from "./components/Article";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const getArticleId = () => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("article");
  if (raw === null) return null;
  const id = Number.parseInt(raw, 10);
  if (Number.isNaN(id) || id < 0) return null;
  return id;
};

export default function App() {
  const [articleId, setArticleId] = useState(getArticleId());

  useEffect(() => {
    const handlePop = () => setArticleId(getArticleId());
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  if (articleId !== null) {
    return (
      <div className="app-bg">
        <Navbar />
        <main>
          <Article articleId={articleId} />
        </main>
        <Footer />
      </div>
    );
  }

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
