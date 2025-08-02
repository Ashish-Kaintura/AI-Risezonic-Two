import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const jobs = []; // No openings

export default function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
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
      <header
        style={{
          padding: "3rem 0 2rem",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            color: "#1e293b",
          }}
        >
          Join Our Team
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#64748b", marginTop: "1rem" }}>
          Be a part of the roaring decade in AI learning products and
          intelligent education platforms.
        </p>
      </header>
      <main style={{ maxWidth: 900, margin: "2rem auto", padding: "0 1rem" }}>
        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              color: "#334155",
              marginBottom: "1.5rem",
            }}
          >
            Open Positions
          </h2>
          <div style={{ display: "grid", gap: "2rem" }}>
            {jobs.length === 0 ? (
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 12px rgba(30,41,59,0.07)",
                  padding: "2rem",
                  textAlign: "center",
                  color: "#64748b",
                  fontSize: "1.1rem",
                }}
              >
                No current openings. Please check back later!
              </div>
            ) : (
              jobs.map((job, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow: "0 2px 12px rgba(30,41,59,0.07)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      style={{ margin: 0, color: "#0f172a", fontWeight: 600 }}
                    >
                      {job.title}
                    </h3>
                    <span
                      style={{
                        background: "#e0e7ef",
                        color: "#2563eb",
                        borderRadius: 8,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <div style={{ color: "#64748b", fontSize: "1rem" }}>
                    {job.location}
                  </div>
                  <p style={{ color: "#475569", margin: "0.5rem 0 1rem" }}>
                    {job.description}
                  </p>
                  <a
                    href={job.applyLink}
                    style={{
                      alignSelf: "flex-start",
                      background: "linear-gradient(90deg,#2563eb,#38bdf8)",
                      color: "#fff",
                      borderRadius: 8,
                      padding: "0.5rem 1.5rem",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "background 0.2s",
                    }}
                  >
                    Apply Now
                  </a>
                </div>
              ))
            )}
          </div>
        </section>
        <section style={{ marginTop: "3rem", textAlign: "center" }}>
          <h2 style={{ color: "#334155", fontSize: "1.3rem" }}>
            Don't see a role for you?
          </h2>
          <p style={{ color: "#64748b" }}>
            We're always looking for talented people. Email us at{" "}
            <Link
              target="blank"
              to="mailto:info@risezonic.com"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              info@risezonic.com
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
