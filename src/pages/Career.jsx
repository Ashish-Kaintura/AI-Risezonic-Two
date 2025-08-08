import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const inputStyle = {
  padding: "0.85rem",
  fontSize: "1.05rem",
  border: "1px solid #e2e8f0",
  borderRadius: 10,
  width: "100%",
  fontFamily: "inherit",
  outline: "none",
  background: "#f8fafc",
  transition: "border 0.2s",
};

const inputFocusStyle = {
  border: "1.5px solid #2563eb",
  background: "#fff",
};

const labelStyle = {
  fontWeight: 500,
  color: "#334155",
  marginBottom: 6,
  display: "block",
  fontSize: "1rem",
};

const Career = () => {
  const handleFocus = (e) => {
    Object.assign(e.target.style, inputFocusStyle);
  };
  const handleBlur = (e) => {
    Object.assign(e.target.style, inputStyle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.value)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  };

  return (
    <main
    className="max-w-6xl mx-auto "
      style={{
        margin: "0 auto",
        padding: "2.5rem 1rem",
        background: "linear-gradient(120deg,#f1f5f9 60%,#e0e7ff 100%)",
        borderRadius: 18,
        boxShadow: "0 4px 32px rgba(30,41,59,0.09)",
      }}
    >
      <Helmet>
        <meta
          name="keywords"
          content="AI careers, jobs, AI Risezonic, education, technology"
        />
        <title>Careers at AI Risezonic | AI Jobs & Career Growth.</title>
        <meta
          name="description"
          content="Come grow with AI Risezonic and be a part of the roaring decade in AI learning products and intelligent AI-enabled education platforms."
        />
        <link rel="canonical" href="https://ai.risezonic.com/career" />
      </Helmet>
      <h1
        style={{
          fontSize: "2.2rem",
          marginBottom: "1.2rem",
          textAlign: "center",
          color: "#2563eb",
          fontWeight: 700,
          letterSpacing: "0.02em",
        }}
      >
        Careers at AI Risezonic
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "2.5rem",
        }}
      >
        Join our mission to revolutionize AI learning and education. Apply
        below!
      </p>

      {/* --- Application Form --- */}
      <section>
        <h2
          style={{
            fontSize: "1.4rem",
            color: "blue",
            marginBottom: "1.2rem",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Apply for a Role
        </h2>

        <form
          style={{
            background: "#fff",
            padding: "2rem 1.5rem",
            borderRadius: 14,
            boxShadow: "0 2px 12px rgba(30,41,59,0.07)",
            display: "grid",
            gap: "1.2rem",
          }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "grid",
              gap: "1.2rem",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="you@email.com"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                placeholder="e.g. +91 9876543210"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Resume</label>
              <input
                required
                type="file"
                name="resume"
                style={{ ...inputStyle, padding: "0.4rem" }}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Preferred Work Mode</label>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["Remote", "Hybrid", "Onsite"].map((mode) => (
                <label
                  key={mode}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f1f5f9",
                    padding: "0.4rem 1rem",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  <input type="checkbox" name="workMode" value={mode} />
                  <span style={{ color: "#475569", fontWeight: 500 }}>
                    {mode}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.2rem",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <label style={labelStyle}>Profile Applying For</label>
              <input
                required
                type="text"
                name="profile"
                placeholder="e.g. AI Engineer"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Years of Experience</label>
              <input
                required
                type="text"
                name="experience"
                placeholder="e.g. 3"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Short Summary About You</label>
            <textarea
              required
              name="summary"
              placeholder="Tell us about yourself..."
              rows="4"
              style={{
                ...inputStyle,
                resize: "vertical",
                width: "100%",
                fontFamily: "inherit",
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "1rem",
              background: "linear-gradient(90deg,#2563eb,#38bdf8)",
              color: "#fff",
              padding: "0.85rem 1.7rem",
              fontSize: "1.08rem",
              fontWeight: 700,
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(37,99,235,0.09)",
              transition: "background 0.2s",
            }}
          >
            Submit Application
          </button>
        </form>
      </section>
      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <h2 style={{ color: "#334155", fontSize: "1.2rem", fontWeight: 600 }}>
          Don't see a role for you?
        </h2>
        <p style={{ color: "#64748b", fontSize: "1.05rem" }}>
          We're always looking for talented people. Email us at{" "}
          <Link
            target="blank"
            to="mailto:info@risezonic.com"
            style={{
              color: "#2563eb",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            info@risezonic.com
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Career;
