import React, { useState, useEffect } from "react";

const bgimag =
  "https://www.okoone.com/wp-content/uploads/2024/11/Marketing-Growth-207.jpg";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = (fieldValues = form) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required.";
    if ("email" in fieldValues)
      temp.email = fieldValues.email
        ? validateEmail(fieldValues.email)
          ? ""
          : "Email is not valid."
        : "Email is required.";
    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Subject is required.";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "Message is required.";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validate({ [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validate({ [name]: form[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setTouched({});
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-white via-blue-50 to-white py-10"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 font-heading tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you. Fill out the form and we’ll get back to
            you soon!
          </p>
        </div>
        <div
          className="rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row bg-white/90 backdrop-blur-md"
          style={{
            backgroundImage: `url(${bgimag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: 500,
          }}
        >
          <div className="flex-1 bg-gradient-to-br from-white/60 to-white/60 p-10 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Our Offices
              </h2>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-semibold text-gray-800">Delhi</span>
                </div>
                <p className="text-gray-800 text-sm">
                  RZ11/D, Upper Ground Floor Opposite Palam Metro Station Gate
                  No 3, Palam Dwarka Road, Delhi, 110045
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="font-semibold text-gray-800">Gurugram</span>
                </div>
                <p className="text-gray-800 text-sm">
                  Awfis, 07th Floor, Gate No 3 & 4, Ambience Island DLF Phase 3,
                  NH-8, Gurugram, Haryana 122002
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9A2.5 2.5 0 0115.5 17h-11A2.5 2.5 0 012 14.5v-9z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 6l7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-gray-800 text-sm">
                  info@risezonic.com
                </span>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Coffee or Chai?{" "}
                <span className="text-primary">It's on us!</span>
              </h3>
              <p className="text-gray-800 text-sm">
                Have questions, feedback, or just want to say hello? Reach out
                using the form!
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white/90 p-10 flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-6"
              noValidate
              autoComplete="off"
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Contact Us
              </h2>
              {submitted && (
                <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded text-center mb-2 animate-fade-in">
                  Message sent! We'll get back to you soon.
                </div>
              )}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  maxLength={35}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Your Name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.name && touched.name
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-300 focus:ring-primary/30"
                  }`}
                />
                 <div className="flex justify-between text-xs mt-1">
              {errors.name ? (
                <p className="text-red-500">{errors.name}</p>
              ) : (
                <span className="text-gray-400">{form.name.length}/35</span>
              )}
            </div>
                {/* {errors.name && touched.name && (
                  <span className="text-xs text-red-500">{errors.name}</span>
                )} */}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="you@email.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.email && touched.email
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-300 focus:ring-primary/30"
                  }`}
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-red-500">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Subject"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.subject && touched.subject
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-300 focus:ring-primary/30"
                  }`}
                />
                {errors.subject && touched.subject && (
                  <span className="text-xs text-red-500">{errors.subject}</span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Type your message..."
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                    errors.message && touched.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-300 focus:ring-primary/30"
                  }`}
                ></textarea>
                {errors.message && touched.message && (
                  <span className="text-xs text-red-500">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-600 hover:to-pink-700 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                disabled={submitted}
              >
                {submitted ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Animation for fade-in */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
