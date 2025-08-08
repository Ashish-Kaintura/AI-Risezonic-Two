// src/components/MultiStepForm.jsx
import React, { useState, useEffect, Fragment } from "react";
import { useFormModal } from "../context/FormModalContext";

const initialFormData = {
  name: "",
  email: "",
  industry: "",
  teamSize: "",
  painPoints: [],
  painPointsOther: "",
  aiFeatures: [],
  aiFeaturesOther: "",
  aiGoals: "",
  documents: null,
  agreeToCall: false,
};

const painPointsOptions = [
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

const MultiStepForm = () => {
  const { isModalOpen, closeModal } = useFormModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [documentPreview, setDocumentPreview] = useState(null);

  useEffect(() => {
    if (!isModalOpen) {
      setFormData(initialFormData);
      setStep(1);
      setErrors({});
      setDocumentPreview(null);
    }
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name === "agreeToCall") {
        setFormData((prev) => ({ ...prev, agreeToCall: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: prev[name].includes(value)
            ? prev[name].filter((v) => v !== value)
            : [...prev[name], value],
        }));
      }
    } else if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, documents: file }));
      if (file) {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (ev) => setDocumentPreview(ev.target.result);
          reader.readAsDataURL(file);
        } else if (file.type === "application/pdf") {
          setDocumentPreview(URL.createObjectURL(file));
        } else {
          setDocumentPreview(null);
        }
      } else {
        setDocumentPreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email || !validateEmail(formData.email))
        newErrors.email = "Valid email is required";
      if (!formData.industry) newErrors.industry = "Industry is required";
      if (!formData.teamSize) newErrors.teamSize = "Team size is required";
    } else if (step === 4) {
      if (!formData.aiGoals) newErrors.aiGoals = "Goal is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };
  const prev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    // Submit logic here (API call etc.)
    closeModal();
    alert("Thank you! Your response has been recorded.");
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        className="bg-white max-w-2xl w-full rounded-lg shadow-xl p-6 relative overflow-y-auto max-h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/Pop%20up%20background.jpg")',
        }}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={closeModal}
        >
          ×
        </button>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-bold text-center uppercase text-blue-600">
            Rise with AI
          </h2>

          {step === 1 && (
            <>
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label>Industry Type</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Select --</option>
                  <option>Education</option>
                  <option>Retail</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                  <option>Banking</option>
                  <option>Others</option>
                </select>
                {errors.industry && (
                  <p className="text-red-500">{errors.industry}</p>
                )}
              </div>
              <div>
                <label>Approx. Team Size</label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Select --</option>
                  <option>1–50</option>
                  <option>51–200</option>
                  <option>201–500</option>
                  <option>500+</option>
                </select>
                {errors.teamSize && (
                  <p className="text-red-500">{errors.teamSize}</p>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <label className="block font-medium">
                What are the challenges with your current system?
              </label>
              {painPointsOptions.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    name="painPoints"
                    value={option}
                    checked={formData.painPoints.includes(option)}
                    onChange={handleChange}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
              <input
                name="painPointsOther"
                placeholder="Other challenges"
                value={formData.painPointsOther}
                onChange={handleChange}
                className="w-full border px-3 py-2 mt-2 rounded"
              />
            </>
          )}

          {step === 3 && (
            <>
              <label className="block font-medium">
                AI Features You’re Interested In
              </label>
              {aiFeaturesOptions.map((feature) => (
                <label key={feature} className="block">
                  <input
                    type="checkbox"
                    name="aiFeatures"
                    value={feature}
                    checked={formData.aiFeatures.includes(feature)}
                    onChange={handleChange}
                  />
                  <span className="ml-2">{feature}</span>
                </label>
              ))}
              <input
                name="aiFeaturesOther"
                placeholder="Other AI features"
                value={formData.aiFeaturesOther}
                onChange={handleChange}
                className="w-full border px-3 py-2 mt-2 rounded"
              />
            </>
          )}

          {step === 4 && (
            <Fragment>
              <label>What would you like to achieve with AI?</label>
              <input
                name="aiGoals"
                value={formData.aiGoals}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.aiGoals && (
                <p className="text-red-500">{errors.aiGoals}</p>
              )}
              <label className="block mt-4">Upload Documents (optional)</label>
              <input
                type="file"
                name="documents"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
              {documentPreview && (
                <div style={{ marginTop: "0.7rem" }}>
                  {documentPreview.startsWith("data:image") ? (
                    <img
                      src={documentPreview}
                      alt="Resume Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: 180,
                        borderRadius: 8,
                      }}
                    />
                  ) : (
                    <iframe
                      src={documentPreview}
                      title="Resume PDF Preview"
                      style={{
                        width: "100%",
                        height: 180,
                        borderRadius: 8,
                        border: "1px solid #e2e8f0",
                      }}
                    />
                  )}
                </div>
              )}
            </Fragment>
          )}

          {step === 5 && (
            <label className="block">
              <input
                type="checkbox"
                name="agreeToCall"
                checked={formData.agreeToCall}
                onChange={handleChange}
                required
              />
              <span className="ml-2">
                I’m open to a free AI Readiness Call with AI Risezonic Experts.
              </span>
            </label>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back
              </button>
            )}
            {step < 5 && (
              <button
                type="button"
                onClick={next}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            )}
            {step === 5 && (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit & Get AI Solution Preview
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
