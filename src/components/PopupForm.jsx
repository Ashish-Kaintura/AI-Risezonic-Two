import { useEffect, useState } from "react";
import { useFormPopup } from "../context/FormContext";

const validateName = (name) =>
  name.trim().length > 0 && name.trim().length <= 35;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone) =>
  /^\+?\d{10,15}$/.test(phone.replace(/\s+/g, ""));

const PopupForm = () => {
  const { isOpen, openForm, closeForm } = useFormPopup();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("popup_shown")) {
        sessionStorage.setItem("popup_shown", "true");
        openForm();
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [openForm]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!validateName(fields.name)) {
      newErrors.name = "Name must be 1-35 characters";
    }
    if (!fields.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(fields.email))
      newErrors.email = "Invalid email address";
    if (!fields.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(fields.phone))
      newErrors.phone = "Invalid phone number";
    if (!fields.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted!");
    closeForm();
    setFields({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-fade-in border border-blue-100">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-3xl transition"
          onClick={closeForm}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://i.postimg.cc/qqtCN8Gg/Whats-App-Image-2025-06-27-at-3-38-13-PM-removebg-preview.png"
            alt="Brand Logo"
            className="w-20 h-20 mb-2 rounded-full object-contain bg-white bg-center shadow-lg border-2 border-blue-200"
            style={{ objectFit: "contain" }}
          />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1 text-center tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-gray-500 text-sm text-center mb-2">
            We’d love to hear from you! Fill out the form below and we’ll get in
            touch.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              maxLength={35}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-400" : "border-gray-200"
              } focus:ring-2 focus:ring-blue-400 outline-none transition`}
              required
              autoFocus
              value={fields.name}
              onChange={handleChange}
            />
            <div className="flex justify-between text-xs mt-1">
              {errors.name ? (
                <p className="text-red-500">{errors.name}</p>
              ) : (
                <span className="text-gray-400">{fields.name.length}/35</span>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-400" : "border-gray-200"
              } focus:ring-2 focus:ring-blue-400 outline-none transition`}
              required
              value={fields.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Number"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? "border-red-400" : "border-gray-300"
              } focus:ring-blue-500`}
              required
              value={fields.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-400" : "border-gray-200"
              } focus:ring-2 focus:ring-blue-400 outline-none transition resize-none`}
              required
              value={fields.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
