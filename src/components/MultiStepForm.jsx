// src/components/MultiStepForm.jsx
import React, { useState, useEffect } from "react";
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

  // Reset form on modal close
  useEffect(() => {
    if (!isModalOpen) {
      setFormData(initialFormData);
      setStep(1);
      setErrors({});
    }
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name === "agreeToCall") {
        setFormData({ ...formData, agreeToCall: checked });
      } else {
        const updated = formData[name].includes(value)
          ? formData[name].filter((v) => v !== value)
          : [...formData[name], value];
        setFormData({ ...formData, [name]: updated });
      }
    } else if (type === "file") {
      setFormData({ ...formData, documents: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email.toLowerCase());

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

    console.log("Form Submitted:", formData);
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
            'url("https://i.postimg.cc/G240JhgX/Pop-up-background.jpg")',
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
            <>
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
              <input type="file" name="documents" onChange={handleChange} />
            </>
          )}

          {step === 5 && (
            <>
              <label className="block">
                <input
                  type="checkbox"
                  name="agreeToCall"
                  checked={formData.agreeToCall}
                  onChange={handleChange}
                />
                <span className="ml-2">
                  I’m open to a free AI Readiness Call with AI Risezonic
                  Experts.
                </span>
              </label>
            </>
          )}

          {/* Navigation Buttons */}
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
// import React, { useState } from "react";
// import { useFormModal } from "../context/FormModalContext";

// const MultiStepForm = () => {
//   const { isModalOpen, closeModal } = useFormModal();

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     industry: "",
//     teamSize: "",
//     painPoints: [],
//     painPointOther: "",
//     aiFeatures: [],
//     aiFeatureOther: "",
//     goal: "",
//     documents: null,
//     agreeToCall: false,
//   });

//   const painPointOptions = [
//     "Manual processes causing delays",
//     "Difficulty in handling large data volumes",
//     "Lack of predictive analytics / forecasting",
//     "Customer support response time too slow",
//     "Poor decision-making due to outdated reporting",
//     "Difficulty integrating multiple systems",
//     "Limited personalization for users/students/customers",
//     "Rising operational costs",
//     "Lack of real-time insights",
//   ];

//   const aiFeatureOptions = [
//     "AI Chatbots (Customer/Student Support)",
//     "Predictive Analytics (Sales/Student Dropout Forecasting)",
//     "Automated Reporting/Dashboards",
//     "Image/Video Analysis (CCTV, Robotics, Quality Control)",
//     "Generative AI Content Creation (for marketing, education, HR)",
//     "IoT Integration (Smart Devices, Sensors)",
//     "Process Automation (HR, Finance, Operations)",
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: checked,
//       }));
//     } else if (type === "file") {
//       setFormData((prev) => ({
//         ...prev,
//         documents: files[0],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleMultiSelect = (e, field) => {
//     const value = e.target.value;
//     setFormData((prev) => {
//       const current = new Set(prev[field]);
//       current.has(value) ? current.delete(value) : current.add(value);
//       return {
//         ...prev,
//         [field]: [...current],
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     closeModal();
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <select
//               name="industry"
//               value={formData.industry}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Select Industry</option>
//               <option value="Education">Education</option>
//               <option value="Retail">Retail</option>
//               <option value="Healthcare">Healthcare</option>
//               <option value="Manufacturing">Manufacturing</option>
//               <option value="Banking">Banking</option>
//               <option value="Others">Others</option>
//             </select>
//             <select
//               name="teamSize"
//               value={formData.teamSize}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Approx. Team Size</option>
//               <option value="1–50">1–50</option>
//               <option value="51–200">51–200</option>
//               <option value="201–500">201–500</option>
//               <option value="500+">500+</option>
//             </select>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-2">
//             {painPointOptions.map((point, idx) => (
//               <label key={idx} className="block">
//                 <input
//                   type="checkbox"
//                   value={point}
//                   checked={formData.painPoints.includes(point)}
//                   onChange={(e) => handleMultiSelect(e, "painPoints")}
//                   className="mr-2"
//                 />
//                 {point}
//               </label>
//             ))}
//             <textarea
//               name="painPointOther"
//               value={formData.painPointOther}
//               onChange={handleChange}
//               placeholder="Other pain points..."
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-2">
//             {aiFeatureOptions.map((feature, idx) => (
//               <label key={idx} className="block">
//                 <input
//                   type="checkbox"
//                   value={feature}
//                   checked={formData.aiFeatures.includes(feature)}
//                   onChange={(e) => handleMultiSelect(e, "aiFeatures")}
//                   className="mr-2"
//                 />
//                 {feature}
//               </label>
//             ))}
//             <textarea
//               name="aiFeatureOther"
//               value={formData.aiFeatureOther}
//               onChange={handleChange}
//               placeholder="Other AI Features..."
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         );
//       case 4:
//         return (
//           <div className="space-y-4">
//             <textarea
//               name="goal"
//               value={formData.goal}
//               onChange={handleChange}
//               placeholder="What would you like to achieve with AI?"
//               className="w-full p-2 border rounded"
//             />
//             <input
//               type="file"
//               name="documents"
//               onChange={handleChange}
//               className="w-full"
//             />
//           </div>
//         );
//       case 5:
//         return (
//           <div className="space-y-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="agreeToCall"
//                 checked={formData.agreeToCall}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               I’m open to a free AI Readiness Call with RiseZonic Experts.
//             </label>
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-blue-600 text-white py-2 rounded"
//             >
//               Submit & Get AI Solution Preview
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!isModalOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">AI Solution Form</h2>
//           <button onClick={closeModal} className="text-gray-500 hover:text-red-500">✕</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {renderStep()}
//           <div className="mt-6 flex justify-between">
//             {step > 1 && (
//               <button
//                 type="button"
//                 onClick={() => setStep((prev) => prev - 1)}
//                 className="text-gray-700"
//               >
//                 ⬅ Back
//               </button>
//             )}
//             {step < 5 && (
//               <button
//                 type="button"
//                 onClick={() => setStep((prev) => prev + 1)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 Next ➡
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;
