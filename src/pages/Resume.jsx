import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 SUHAS DEVMANE
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              PhD Researcher | Data Engineer | AI Engineer | Data Scientist
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 A/P: Randeviwadi, Tal: Kagal, Dist: Kolhapur, PIN: 416216, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ devmanesp1@cardiff.ac.uk | 📞 +44 7765 529577 (Work)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              🔗 linkedin.com/in/suhas-devmane-589a08146
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Cardiff University PhD Researcher with 4+ years of experience in Data Engineering,
              AI/ML Engineering, and Data Science. Specialized in building scalable data pipelines,
              IoT systems, conversational AI solutions, and smart building analytics. Proven expertise
              in ETL workflows, real-time data ingestion (ThingsBoard→Cassandra), machine learning
              deployment, and semantic web technologies. Seeking Data Engineer, AI Engineer, or Data
              Scientist roles to leverage research background and technical skills in driving innovation.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Doctor of Philosophy - PhD, Computer Science</strong> — Cardiff University, Wales, UK <br />
              <span style={{ color: "#aaa" }}>August 2021 – May 2026 (Expected)</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Master of Science — Advanced Mechanical Engineering</strong> — Cardiff University School of Engineering <br />
              <span style={{ color: "#aaa" }}>2017 – 2018</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Bachelor of Engineering — Mechanical Engineering</strong> — Sharad Institute of Technology, Ichalkaranji <br />
              <span style={{ color: "#aaa" }}>2011 – 2015</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Professional Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Research Scholar</strong> — Cardiff University <br />
              <span style={{ color: "#aaa" }}>September 2021 – Present (4+ years) | Cardiff, Wales, UK</span>
              <p style={{ color: "#bbb", marginTop: 4 }}>
                Conducting research on smart buildings, IoT systems, conversational AI, and ontology engineering.
              </p>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Information Technology Support Assistant</strong> — Cardiff University <br />
              <span style={{ color: "#aaa" }}>September 2024 – May 2025 (9 months) | Cardiff, Wales, UK</span>
              <p style={{ color: "#bbb", marginTop: 4 }}>
                Delivering robust technical support, maintaining database solutions, and enhancing system performance.
              </p>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Junior Quality Engineer</strong> — STARION INDIA <br />
              <span style={{ color: "#aaa" }}>May 2015 – September 2017 (2 years 5 months) | Pune Area, India</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Graduate Trainee</strong> — STARION Group <br />
              <span style={{ color: "#aaa" }}>August 2016 – February 2017 (7 months)</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>� Research & Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>🏢 Abacws Smart Building Platform — IoT sensor integration & data analysis</li>
            <li>📊 Abacws Data Visualization — TypeScript-based interactive dashboards</li>
            <li>🤖 OntoBot & OntobotV2 — Ontology-based conversational AI chatbot</li>
            <li>🏗️ BrickBot — Brick Schema chatbot for smart building queries</li>
            <li>🔍 nl2sparql — Natural language to SPARQL query converter</li>
            <li>💬 Talk2Abacws Survey — Survey platform with chatbot interface</li>
            <li>🎨 Rasa Frontend UI — User interface for Rasa chatbot framework</li>
            <li>⚡ ThingsBoard to Cassandra Pipeline — Real-time IoT data ingestion</li>
            <li>📦 IoT Research Replication Package — Published research on IoT systems</li>
            <li>🧠 ML Projects — Automobile price, heart disease, dog breed classification</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "JavaScript",
              "TypeScript",
              "Java",
              "C",
              "C++",
              "Go",
              "Shell Script",
              "React",
              "NodeJS",
              "Flask",
              "Angular",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Cassandra",
              "PyTorch",
              "TensorFlow",
              "Keras",
              "scikit-learn",
              "Pandas",
              "NumPy",
              "ThingsBoard",
              "Brick Schema",
              "Arduino",
              "Raspberry Pi",
              "Rasa",
              "SPARQL",
              "Ontology Engineering",
              "Stardog",
              "Google Cloud",
              "OpenStack",
              "Git",
              "Database Administration",
              "System Performance",
              "Technical Support",
              "Academic Research",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/suhasdevmane" },
            { name: "� LinkedIn", link: "https://www.linkedin.com/in/suhas-devmane-589a08146/" },
            { name: "🌐 Website", link: "https://iotgarage.net" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Suhas Devmane Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
