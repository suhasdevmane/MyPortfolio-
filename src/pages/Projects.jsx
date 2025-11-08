import React, { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('featured')

  const REPOS = [
    { title: 'rasa', desc: 'Built conversational AI applications using the open-source Rasa framework, focusing on text and voice-based NLU, dialogue management, and integration with channels like Slack and Facebook.', repo: 'rasa' },
    { title: 'TechWebDots', desc: 'Developed and deployed a sample web application hosted on Microsoft Azure, demonstrating cloud-native web development using CSS and modern frontend practices.', repo: 'TechWebDots' },
    { title: 'Automobile-Prize-Prediction', desc: 'Implemented ML models to predict automobile prices using data-driven approaches, dataset analysis, and statistical modeling to inform predictive outcomes.', repo: 'Automobile-Prize-Prediction' },
    { title: 'Python-Basics-and-libraries', desc: 'Compiled and practiced Python programming essentials, including fundamental data structures, variables, and common libraries for enhanced data science workflows.', repo: 'Python-Basics-and-libraries' },
    { title: 'desktop-tutorial', desc: 'Explored collaborative development workflows utilizing GitHub Desktop, demonstrating effective source control in team settings.', repo: 'desktop-tutorial' },
    { title: 'mortarv1', desc: 'Experimented with Go language in developing core functionalities for project scaffolding and automation, under BSD licensing.', repo: 'mortarv1' },
    { title: 'Conversational-AI-with-RASA', desc: 'Applied the RASA AI framework to create advanced conversational bots, leveraging published best practices in dialogue management and custom actions.', repo: 'Conversational-AI-with-RASA' },
    { title: 'rasa-action-server-gha', desc: 'Automated Docker image preparation for Rasa custom action servers via GitHub Actions to streamline deployment processes.', repo: 'rasa-action-server-gha' },
    { title: 'brick-data-retrieval-demo', desc: 'Demonstrated building data retrieval pipelines using Brick schema standards for smart building applications.', repo: 'brick-data-retrieval-demo' },
    { title: 'Mercedes-Benz', desc: 'Conducted manufacturing data analysis using Kaggle datasets, optimizing predictive models for Mercedes-Benz production scenarios.', repo: 'Mercedes-Benz' },
    { title: 'machine-learning', desc: 'Compiled a collection of datasets and Jupyter notebooks for hands-on machine learning experiments, covering classification, regression, and clustering tasks.', repo: 'machine-learning' },
    { title: 'rasa-for-beginners', desc: 'Created NLU-driven conversational bots introducing beginners to Rasa technologies and conversational design principles.', repo: 'rasa-for-beginners' },
    { title: 'Neighborhood-in-new-york', desc: 'Analyzed and clustered New York neighborhood data, applying unsupervised learning techniques for actionable urban analytics.', repo: 'Neighborhood-in-new-york' },
    { title: 'healthcare-project', desc: 'Designed analytics projects targeting healthcare industry challenges, employing machine learning for improved health insights.', repo: 'healthcare-project' },
    { title: 'DS-practice-capstone-', desc: 'Completed a capstone project synthesizing practical data science techniques and project delivery methodologies.', repo: 'DS-practice-capstone-' },
    { title: 'neighbourhood-in-toronto', desc: 'Addressed real-world ML problems through Toronto neighborhood data, focusing on segmentation and clustering for urban planning.', repo: 'neighbourhood-in-toronto' },
    { title: 'Customer-Service-Request-Analysis', desc: 'Executed data-driven analysis for NYC 311 customer service requests, leveraging the Kaggle platform for practical assessment and reporting.', repo: 'Customer-Service-Request-Analysis' },
    { title: 'loan-prediction', desc: 'Developed and validated predictive models for loan approvals in the banking domain, optimizing for classification performance.', repo: 'loan-prediction' },
    { title: 'House-sales-in-king-count', desc: 'Analyzed housing market data using Python and ML algorithms to predict sales prices and uncover market trends.', repo: 'House-sales-in-king-count' },
    { title: 'Machine-Learning-Regression', desc: 'Explored various regression algorithms and their applications to real-world datasets, with a focus on interpretation and model selection.', repo: 'Machine-Learning-Regression' },
    { title: 'Heart-Disease-Practice', desc: 'Practiced solving ML classification problems in healthcare, specifically focusing on heart disease dataset analysis and model validation.', repo: 'Heart-Disease-Practice' },
    { title: 'dog-breed-identification', desc: 'Implemented image classification models to recognize multiple dog breed classes in practice ML workflows.', repo: 'dog-breed-identification' },
    { title: 'DB2-SQL-AND-PYTHON', desc: 'Integrated DB2 cloud database operations with Python scripting to demonstrate advanced database manipulation and automation.', repo: 'DB2-SQL-AND-PYTHON' },
    { title: 'Python-ML-data-Visulization', desc: 'Created data visualization projects that provide quick, meaningful insights into analyzed datasets using Python visualization libraries.', repo: 'Python-ML-data-Visulization' },
    { title: 'Comcast-Consumer-Complaints', desc: 'Analyzed Comcast consumer complaints data, identifying trends and providing actionable business insights through data science.', repo: 'Comcast-Consumer-Complaints' },
    { title: 'Machine-learning-classification', desc: 'Implemented standard and advanced ML classification algorithms, comparing approaches across various datasets.', repo: 'Machine-learning-classification' },
    { title: 'Bulldozer-price-regression-project', desc: 'Predicted sales prices of bulldozers using Kaggle challenge data, applying regression models and feature engineering techniques.', repo: 'Bulldozer-price-regression-project' },
    { title: 'Coursera_Capstone', desc: 'Completed the IBM Coursera Capstone Project, demonstrating applied skills in project-based data science.', repo: 'Coursera_Capstone' },
    { title: 'Coursera_Project', desc: 'Uploaded additional project files developed for Coursera courses, showcasing a variety of practical data science and ML assignments.', repo: 'Coursera_Project' }
  ]
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
        <p className="text-gray-400 mb-6">
          A collection of my research work and technical projects — blending IoT, conversational AI, and data science innovation.
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto' }}>
          {[
            { key: 'featured', label: 'Featured' },
            { key: 'repos', label: 'Repositories & Courses' }
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                whiteSpace: 'nowrap',
                padding: '8px 12px',
                borderRadius: 10,
                border: activeTab === t.key ? '1px solid rgba(0,255,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === t.key ? 'rgba(0,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                color: activeTab === t.key ? '#67e8f9' : '#cbd5e1',
                cursor: 'pointer'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'featured' && (
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
        )}

        {activeTab === 'repos' && (
          <div className="projects-grid" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {REPOS.map((r, idx) => (
              <motion.div
                key={idx}
                className="project-card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                  border: '1px solid rgba(0,255,255,0.1)',
                  borderRadius: 14,
                  padding: 16
                }}
              >
                <h3 style={{ fontSize: 16, color: '#67e8f9', marginBottom: 8 }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}>{r.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                  <a
                    href={`https://github.com/suhasdevmane/${r.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '6px 10px',
                      borderRadius: 8,
                      border: '1px solid rgba(0,255,255,0.15)',
                      color: '#0ea5e9',
                      textDecoration: 'none',
                      background: 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <Github size={14} /> View Repo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
