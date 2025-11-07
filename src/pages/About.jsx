import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong>Suhas Devmane</strong> — a{" "}
          <strong>PhD Researcher in Computer Science</strong>, <strong>Data Engineer</strong>,{" "}
          <strong>AI Engineer</strong>, and <strong>Data Scientist</strong> at Cardiff University, Wales, United Kingdom. 
          With over 4 years of research experience and expertise in{" "}
          <strong>smart buildings</strong>, <strong>conversational AI</strong>,{" "}
          <strong>ontology engineering</strong>, <strong>IoT systems</strong>, and{" "}
          <strong>data engineering pipelines</strong>,
          I specialize in creating intelligent systems that bridge physical
          and digital environments through advanced sensor networks, AI-powered interfaces,
          and scalable data architectures.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          My flagship work centers on the <strong>Abacws project</strong> — Cardiff 
          University's smart building equipped with cutting-edge IoT sensors and monitoring 
          systems. I'm passionate about developing <strong>data engineering pipelines</strong> 
          (ThingsBoard to Cassandra, real-time IoT data ingestion), <strong>machine learning 
          models</strong> for predictive analytics, <strong>ontology-based conversational 
          agents</strong> (OntoBot, BrickBot), <strong>natural language to SPARQL</strong> 
          query systems, and full-stack applications for{" "}
          <strong>IoT data visualization</strong>. Beyond research, I serve as an Information 
          Technology Support Assistant, delivering robust technical support and maintaining 
          database solutions to enhance system performance.
        </p>

        <p>
          With a strong foundation in mechanical engineering and advanced mechanical engineering,
          complemented by certifications in Data Science, Python, R Programming, Big Data & Hadoop, 
          and Applied Analytics, I bring both research rigor and practical software development 
          skills to every project. My work spans the full data lifecycle — from data ingestion 
          and ETL pipelines to advanced analytics, machine learning deployment, and interactive 
          visualization. I'm actively seeking opportunities in <strong>Data Engineering</strong>,{" "}
          <strong>AI Engineering</strong>, and <strong>Data Science</strong> roles where I can 
          leverage my research background and technical expertise to drive data-driven innovation.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Doctor of Philosophy - PhD, Computer Science
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Cardiff University / Prifysgol Caerdydd</strong> — Cardiff, Wales, UK
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Research: Smart Buildings, IoT, Conversational AI, Ontology Engineering
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>August 2021 – May 2026 (Expected)</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Master of Science - Advanced Mechanical Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Cardiff University School of Engineering</strong> — Cardiff, Wales, UK
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Focus: Engineering Systems & Design
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2017 – 2018</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor of Engineering - Mechanical Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sharad Institute of Technology College of Engineering</strong> — Ichalkaranji, India
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Foundation in Engineering Principles
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2011 – 2015</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
