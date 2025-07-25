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
// import Resources from "./pages/Resources";
import WhatsAppSticky from "./components/WhatsAppSticky";
import PopupForm from "./components/PopupForm";
import BlogDetail from "./pages/BlogDetail";
import PainpointForm from "./pages/PainpointForm";
import NotFoundPage from "./pages/404Page";
import ComingSoonPage from "./pages/ComingSoonPage";
import LearnWIthAiRisezonic from "./pages/LearnWIthAiRisezonic";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Bootcamp from "./pages/Bootcamp";
import BootcampDetail from "./pages/BootcampDetails";
import Faculty from "./pages/Faculty";
import FacultyDetail from "./pages/FacultyDetail";
import Workshops from "./pages/Workshops";
import MultiStepForm from "./components/MultiStepForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Legalpolicy from "./pages/Legalpolicy";
import Career from "./pages/Career";
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
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/painpoint" element={<PainpointForm />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/book-demo" element={<ComingSoonPage />} />
          <Route
            path="/learn-with-ai-risezonic"
            element={<LearnWIthAiRisezonic />}
          />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/bootcamps" element={<Bootcamp />} />
          <Route path="/bootcamps/:id" element={<BootcampDetail />} />
          <Route path="/faculty-development" element={<Faculty />} />
          <Route path="/faculty-development/:id" element={<FacultyDetail />} />
          <Route path="/workshop" element={<Workshops />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/career" element={<Career/>} />
          <Route path="/legal-policy" element={<Legalpolicy />} />
        </Routes>
      </main>
      <WhatsAppSticky />
      <PopupForm />
      <MultiStepForm />
      <Footer />
    </div>
  );
};

export default App;
