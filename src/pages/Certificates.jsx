import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (includes all files from /public/certs)
// NOTE: Files placed in `public/certs` are served at `/certs/<filename>`.
// Use image files (jpg/png/svg) from public/certs instead of PDFs
const CERT_FILES = [
  "Applied Data Science Capstone.jpg",
  "Big Data Hadoop and Spark Developer.jpg",
  "Convolutional Neural Networks in TensorFlow.jpg",
  "Data Analysis with Python.jpg",
  "Data Science Methodology.jpg",
  "data science with python.jpg",
  "Data Science with R.jpg",
  "Data Science.jpg",
  "Data Scientist-Simplilearn.jpg",
  "Data Visualization with Python.jpg",
  "Databases and SQL for Data Science.jpg",
  "Fundamentals of Data Analytics.jpg",
  "GUVI-Face Recognition Capstone.jpg",
  "IBM Data Science.jpg",
  "Machien Learning with Python.jpg",
  "Machine learning-page-00001.jpg",
  "Math Refresher.jpg",
  "MCED-page-00001.jpg",
  "Natural Language Processing in TensorFlow.jpg",
  "Python for Data Science and AI.jpg",
  "Python.jpg",
  "Sequences, timeseries and Predictions.jpg",
  "SQL.jpg",
  "Statistics Essentials for Data Science.jpg",
  "Tableau.jpg",
  "TensorFlow Developer.jpg",
  "TensorFlow for Artificial Intelligence Machine Learning and Deep Learning.jpg",
  "Tools for Data Science.jpg",
  
];

const allCerts = CERT_FILES.map((file) => ({
  title: file.replace(/\.pdf$/i, ""),
  org: "",
  date: "",
  img: `/certs/${file}`,
  link: `/certs/${file}`,
}));

// Keep any curated entries in tech/other and add an "all" tab containing everything from public/certs.
const CERTS = {
  tech: [
    {
      title: "AI Agents and Agentic AI with Python & Generative AI",
      org: "Coursera",
      date: "Nov 2025",
      img: "/certs/Coursera FVND9WOVPW2E.jpg",
      link: "/certs/Coursera FVND9WOVPW2E.jpg",
    },
    {
      title: "AI Agents and Agentic AI Architecture in Python",
      org: "Coursera",
      date: "Nov 2025",
      img: "/certs/Coursera MNQUTWJ01RP2.jpg",
      link: "/certs/Coursera MNQUTWJ01RP2.jpg",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      org: "Coursera",
      date: "Nov 2025",
      img: "/certs/Coursera QGZE1A73YN3W.jpg",
      link: "/certs/Coursera QGZE1A73YN3W.jpg",
    },
    // include the PDF certificates in tech as well (optional):
    ...allCerts,
  ],
  other: [
    {
      title: "Advanced Python",
      org: "Udemy",
      date: "2021",
      img: "/certs/cert3.svg",
      link: "/certs/cert3.svg",
    },
  ],
  all: allCerts,
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other", "all"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : t === "other" ? "Others" : "All"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                {/* Render image preview for images, and a PDF placeholder for PDFs */}
                {/\.pdf$/i.test(c.link) ? (
                  <div
                    style={{
                      width: "100%",
                      height: 160,
                      borderRadius: 10,
                      background: "linear-gradient(135deg,#222,#111)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 12,
                      flexDirection: "column",
                      padding: 8,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 28, fontWeight: 700 }}>PDF</div>
                    <div style={{ fontSize: 12, color: "#bbb", marginTop: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>{c.title}</div>
                  </div>
                ) : (
                  <img
                    src={encodeURI(c.img)}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: 160,
                      borderRadius: 10,
                      objectFit: "cover",
                      marginBottom: 12,
                    }}
                  />
                )}
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
            {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            {/\.pdf$/i.test(selectedCert.link) ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                style={{
                  width: "90%",
                  height: "85%",
                  borderRadius: 8,
                  overflow: "hidden",
                  background: "#fff",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={encodeURI(selectedCert.link)}
                  title={selectedCert.title}
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </motion.div>
            ) : (
              <motion.img
                src={encodeURI(selectedCert.img)}
                alt={selectedCert.title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{
                  maxWidth: "90%",
                  maxHeight: "85%",
                  borderRadius: 10,
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
