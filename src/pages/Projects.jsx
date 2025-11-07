import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🏢 Abacws Smart Building',
    desc: 'Cardiff University Computer Science building monitoring system with integrated IoT sensors and devices for real-time environmental data collection and analysis.',
    ss: '/gallery/10.png',
    tech: ['IoT', 'Sensors', 'Monitoring', 'Smart Buildings'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Abacws'
  },
  {
    title: '📊 Abacws Data Visualization',
    desc: 'TypeScript web application for visualizing and analyzing IoT sensor data from the Abacws smart building with interactive dashboards and real-time insights.',
    ss: '/gallery/19.jpg',
    tech: ['TypeScript', 'React', 'Data Viz', 'IoT'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Abacws-Data-Vis'
  },
  {
    title: '� OntoBot & OntobotV2',
    desc: 'Ontology-based conversational AI agents built with Jupyter Notebook, enabling intelligent querying of building data using natural language interfaces.',
    ss: '/gallery/15.png',
    tech: ['Python', 'Jupyter', 'Ontology', 'NLP'],
    live: '#',
    code: 'https://github.com/suhasdevmane/OntoBot'
  },
  {
    title: '💬 BrickBot - Building Assistant',
    desc: 'Next-generation ontology-based chatbot for smart building interaction using Brick Schema, enabling intuitive natural language queries for building systems.',
    ss: '/gallery/10.png',
    tech: ['Rasa', 'Brick Schema', 'SPARQL', 'Python'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Brickbot'
  },
  {
    title: '🔍 nl2sparql - NL Query Engine',
    desc: 'Natural language to SPARQL query conversion system for BrickBot, enabling intuitive building data queries without requiring technical SPARQL knowledge.',
    ss: '/gallery/20.jpeg',
    tech: ['NLP', 'SPARQL', 'Python', 'Ontology'],
    live: '#',
    code: 'https://github.com/suhasdevmane/nl2sparql'
  },
  {
    title: '💬 Talk2Abacws Survey Platform',
    desc: 'Online survey system with custom chatbot UI and 3D visualization using JavaScript and MongoDB for smart building user feedback and interaction data collection.',
    ss: '/gallery/17.png',
    tech: ['JavaScript', 'MongoDB', 'Chatbot', '3D Viz'],
    live: '#',
    code: 'https://github.com/suhasdevmane/talk2abacws-survey'
  },
  {
    title: '🎨 Rasa Frontend UI',
    desc: 'Custom UI design supporting Rasa chatbots via webhooks with multi-media file support and IndexedDb integration for persistent chat history storage.',
    ss: '/gallery/18.png',
    tech: ['React', 'Rasa', 'IndexedDB', 'Webhooks'],
    live: '#',
    code: 'https://github.com/suhasdevmane/rasa-frontend'
  },
  {
    title: '🔌 ThingsBoard → Cassandra Pipeline',
    desc: 'Data pipeline for streaming IoT sensor data from ThingsBoard platform to Cassandra database for scalable storage, analytics and long-term archival.',
    ss: '/gallery/15.png',
    tech: ['Python', 'ThingsBoard', 'Cassandra', 'IoT'],
    live: '#',
    code: 'https://github.com/suhasdevmane/thingsboard_to_cassandra'
  },
  {
    title: '📚 IoT Research - Human-Building Interaction',
    desc: 'Replication package with research materials, articles, and manuals for review article "Utilising Internet of Things in Human–Building Interaction".',
    ss: '/gallery/5.jpeg',
    tech: ['Research', 'IoT', 'HCI', 'Publications'],
    live: '#',
    code: 'https://github.com/suhasdevmane/replication_package'
  },
  {
    title: '🏠 Automobile Price Prediction',
    desc: 'Machine learning regression model for predicting automobile prices using feature engineering, ensemble methods, and extensive data preprocessing.',
    ss: '/gallery/13.png',
    tech: ['Python', 'scikit-learn', 'ML', 'Regression'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Automobile-Prize-Prediction'
  },
  {
    title: '🩺 Heart Disease Prediction',
    desc: 'Healthcare ML classification system for predicting heart disease risk using medical datasets and multiple classification algorithms with feature analysis.',
    ss: '/gallery/12.jpeg',
    tech: ['Python', 'ML', 'Healthcare', 'Classification'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Heart-Disease-Practice'
  },
  {
    title: '🐕 Dog Breed Identification',
    desc: 'Multi-class image classification system using convolutional neural networks and transfer learning for accurate dog breed identification from images.',
    ss: '/gallery/11.jpeg',
    tech: ['TensorFlow', 'CNN', 'Deep Learning', 'Python'],
    live: '#',
    code: 'https://github.com/suhasdevmane/dog-breed-identification'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Research & Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my research work and technical projects — blending IoT, conversational AI, and data science innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
