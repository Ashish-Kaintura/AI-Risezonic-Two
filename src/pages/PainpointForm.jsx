import React, { useState } from "react";
import {
  FaThumbtack,
  FaCheckCircle,
  FaIndustry,
  FaRegCommentDots,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";
import video1 from "../video/WhatsApp Video 2025-07-07 at 4.55.37 PM.mp4";
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (number) =>
  /^\+?\d{7,15}$/.test(number.replace(/\s+/g, ""));

const PainpointForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    industry: "",
    message: "",
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.industry) newErrors.industry = "Industry is required.";
    if (!formData.message || formData.message.length < 10)
      newErrors.message =
        "Please describe your problem or goal (min 10 chars).";
    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Name is required.";
    if (!formData.email || !validateEmail(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.number || !validatePhone(formData.number))
      newErrors.number = "Valid phone number is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Send form via EmailJS
    emailjs
      .sendForm(
        "your_service_id", // replace with your actual service ID
        "your_template_id", // replace with your actual template ID
        formRef.current,
        "your_public_key" // replace with your public EmailJS key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS after the component mounts
  }, []);

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white shadow-lg rounded-xl max-w-xl mx-auto  border border-green-200  sm:mt-48 mt-20 mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center justify-center gap-2">
          <FaCheckCircle className="inline text-green-500" size={28} />
          We Got Your Point!
        </h2>
        <p className="text-gray-700">
          Thank you for sharing your thoughts. We’ll send you a draft tailored
          to your needs shortly.
        </p>
      </div>
    );
  }
  return (
    <section
      className="pt-32 pb-12 relative"
      style={{ backgroundColor: "#fdfdfd" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <source src={video1} type="video/mp4" />
        {/* Fallback image if video not supported */}
        Your browser does not support the video tag.
      </video>
      {/* Overlay to dim video for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10"></div>

      <div
        className="relative z-20 max-w-2xl mx-auto p-6 mt-12 bg-white shadow-xl rounded-2xl border border-gray-200"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/ai-chip-circuit-board-technology-background-cpu-processor-tech-bg-computer-microchip_3482-14990.jpg?semt=ais_hybrid&w=740')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "1.5rem",

        }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-500 flex items-center justify-center gap-2">
          <FaThumbtack className="inline text-blue-700" size={36} />
          Painpoint Your Need
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Tell us exactly what you need in your industry — and we’ll draft a
          custom AI solution for you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          {/* Step 1 */}
          <div>
            <p className="text-lg font-semibold mb-1 flex items-center gap-2">
              <FaIndustry className="inline text-blue-500" /> Choose Your
              Industry
            </p>
            <select
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
              className={`w-full border px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                errors.industry ? "border-red-400" : ""
              }`}
            >
              <option value="">-- Select Industry --</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Real Estate">Real Estate</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Finance">Finance</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Hospitality">Hospitality</option>
            </select>
            {errors.industry && (
              <span className="text-red-500 text-sm">{errors.industry}</span>
            )}
          </div>

          {/* Step 2 */}
          <div>
            <p className="text-lg font-semibold mb-1 flex items-center gap-2">
              <FaRegCommentDots className="inline text-blue-500" /> Describe
              Your Problem or Goal
            </p>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Write about your pain points, goals, or what you expect from AI..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full border px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                errors.message ? "border-red-400" : ""
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Step 3 */}
          <div>
            <p className="text-lg font-semibold mb-1 flex items-center gap-2">
              <FaUser className="inline text-blue-500" /> Your Contact Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    errors.name ? "border-red-400" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm absolute left-0 -bottom-5">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    errors.email ? "border-red-400" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm absolute left-0 -bottom-5">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="relative sm:col-span-2">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full border pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    errors.number ? "border-red-400" : ""
                  }`}
                />
                {errors.number && (
                  <span className="text-red-500 text-sm absolute left-0 -bottom-5">
                    {errors.number}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-pink-700 transition duration-200 flex items-center justify-center gap-2"
          >
            <FaThumbtack className="inline" />
            Submit Your Painpoint
          </button>
        </form>
      </div>
    </section>
  );
};

export default PainpointForm;
