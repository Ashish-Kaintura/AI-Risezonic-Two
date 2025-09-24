// File: src/App.jsx
import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppSticky from "./components/WhatsAppSticky";
import PopupForm from "./components/PopupForm";
import MultiStepForm from "./components/MultiStepForm";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const AiSolutions = lazy(() => import("./pages/AiSolutions"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFoundPage = lazy(() => import("./pages/404Page"));
const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));
const Programs = lazy(() => import("./pages/Programs"));
const ProgramDetail = lazy(() => import("./pages/ProgramDetail"));
const Bootcamp = lazy(() => import("./pages/Bootcamp"));
const BootcampDetail = lazy(() => import("./pages/BootcampDetails"));
const Faculty = lazy(() => import("./pages/Faculty"));
const FacultyDetail = lazy(() => import("./pages/FacultyDetail"));
const Workshops = lazy(() => import("./pages/Workshops"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Legalpolicy = lazy(() => import("./pages/Legalpolicy"));
const Career = lazy(() => import("./pages/Career"));
const FAQAIAgent = lazy(() => import("./pages/FAQAIAgent"));
const LearnWIthAiRisezonic = lazy(() => import("./pages/LearnWIthAiRisezonic")); // if needed
const PainpointForm = lazy(() => import("./pages/PainpointForm")); // if needed

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
      <main>
        {/* ✅ Wrap routes inside Suspense */}
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ai-solution-and-product" element={<AiSolutions />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/book-demo" element={<ComingSoonPage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path="/bootcamps" element={<Bootcamp />} />
            <Route path="/bootcamps/:id" element={<BootcampDetail />} />
            <Route path="/faculty-development" element={<Faculty />} />
            <Route
              path="/faculty-development/:id"
              element={<FacultyDetail />}
            />
            <Route path="/workshop" element={<Workshops />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/legal-policy" element={<Legalpolicy />} />
            <Route path="/faq" element={<FAQAIAgent />} />
          </Routes>
        </Suspense>
      </main>

      {/* Static Components (don’t lazy-load these) */}
      <WhatsAppSticky />
      <PopupForm />
      <MultiStepForm />
      <Footer />
    </div>
  );
};

export default App;
