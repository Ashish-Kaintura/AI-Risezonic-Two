import React, { useState, useEffect } from "react";
import { useFormModal } from "../context/FormModalContext";

const initialFormState = {
  name: "",
  email: "",
  industry: "",
  teamSize: "",
  painPoints: [],
  painPointsOther: "",
  aiFeatures: [],
  aiFeaturesOther: "",
  goals: "",
  file: null,
  agreeCall: false,
};

const painPointOptions = [
  "Manual processes causing delays",
  "Difficulty in handling large data volumes",
  "Lack of predictive analytics / forecasting",
  "Customer support response time too slow",
  "Poor decision-making due to outdated reporting",
  "Difficulty integrating multiple systems",
  "Limited personalization for users/students/customers",
  "Rising operational costs",
  "Lack of real-time insights",
];

const aiFeaturesOptions = [
  "AI Chatbots (Customer/Student Support)",
  "Predictive Analytics (Sales/Student Dropout Forecasting)",
  "Automated Reporting/Dashboards",
  "Image/Video Analysis (CCTV, Robotics, Quality Control)",
  "Generative AI Content Creation (for marketing, education, HR)",
  "IoT Integration (Smart Devices, Sensors)",
  "Process Automation (HR, Finance, Operations)",
];

export default function MultiStepForm() {
  const { isModalOpen, closeModal } = useFormModal();
  const [formData, setFormData] = useState(initialFormState);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isModalOpen) {
      setFormData(initialFormState);
      setStep(1);
      setErrors({});
    }
  }, [isModalOpen]);

  const validateStep = () => {
    const errs = {};
    if (step === 1) {
      if (!formData.name) errs.name = "Name is required";
      if (!formData.email) {
        errs.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errs.email = "Invalid email";
      }
    }
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      setErrors({});
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    closeModal();
    setFormData(initialFormState);
    setStep(1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name === "agreeCall") {
        setFormData({ ...formData, [name]: checked });
      } else {
        const list = formData[name] || [];
        setFormData({
          ...formData,
          [name]: checked
            ? [...list, value]
            : list.filter((item) => item !== value),
        });
      }
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const closeOnBackdrop = (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div
      id="modalBackdrop"
      onClick={closeOnBackdrop}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Rise with AI - Step {step}</h2>
          <button type="button" onClick={closeModal} className="text-2xl">
            &times;
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Industry Type</option>
              <option>Education</option>
              <option>Retail</option>
              <option>Healthcare</option>
              <option>Manufacturing</option>
              <option>Banking</option>
              <option>Others</option>
            </select>

            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Approx. Team Size</option>
              <option>1–50</option>
              <option>51–200</option>
              <option>201–500</option>
              <option>500+</option>
            </select>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-2 font-semibold">Current System Pain Points</p>
            <div className="grid grid-cols-2 gap-2">
              {painPointOptions.map((point) => (
                <label key={point} className="flex gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="painPoints"
                    value={point}
                    checked={formData.painPoints.includes(point)}
                    onChange={handleChange}
                  />
                  {point}
                </label>
              ))}
            </div>
            <input
              type="text"
              name="painPointsOther"
              placeholder="Others (optional)"
              value={formData.painPointsOther}
              onChange={handleChange}
              className="w-full mt-2 border px-3 py-2 rounded"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mb-2 font-semibold">AI Features You're Interested In</p>
            <div className="grid grid-cols-2 gap-2">
              {aiFeaturesOptions.map((feature) => (
                <label key={feature} className="flex gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="aiFeatures"
                    value={feature}
                    checked={formData.aiFeatures.includes(feature)}
                    onChange={handleChange}
                  />
                  {feature}
                </label>
              ))}
            </div>
            <input
              type="text"
              name="aiFeaturesOther"
              placeholder="Other AI needs (optional)"
              value={formData.aiFeaturesOther}
              onChange={handleChange}
              className="w-full mt-2 border px-3 py-2 rounded"
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              placeholder="Business goals with AI (e.g., reduce cost, improve efficiency)"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full"
            />
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="agreeCall"
                checked={formData.agreeCall}
                onChange={handleChange}
              />
              I’m open to a free AI Readiness Call with RiseZonic Experts.
            </label>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Back
            </button>
          ) : (
            <span></span>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Submit & Get AI Solution Preview
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
