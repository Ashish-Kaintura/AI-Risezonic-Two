// File: src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import AiSolutions from "./pages/AiSolutions";
// import OurProjects from "./pages/OurProjects";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import WhatsAppSticky from "./components/WhatsAppSticky";
import PopupForm from "./components/PopupForm";
import BlogDetail from "./pages/BlogDetail";
import PainpointForm from "./pages/PainpointForm";
import NotFoundPage from "./pages/404Page";
import ComingSoonPage from "./pages/ComingSoonPage";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-solution-and-product" element={<AiSolutions />} />
          {/* <Route path="/our-porjects" element={<OurProjects />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/painpoint" element={<PainpointForm />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/book-demo" element={<ComingSoonPage />} />
        </Routes>
      </main>
      <WhatsAppSticky />
      <PopupForm />
      <Footer />
    </div>
  );
};

export default App;
