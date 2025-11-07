# Portfolio Transformation Guide: Kunj Desai → Suhas Devmane

## Overview
This document describes all changes needed to transform the portfolio from Kunj Desai to Suhas Devmane, PhD Research Fellow specializing in Smart Buildings, IoT, and Conversational AI.

## ✅ Files Already Updated
- `src/pages/Home.jsx` - Updated name, profession tags, contact links, location
- `src/pages/Certificates.jsx` - Updated to use JPG certificate files

## 📋 Remaining Files to Update

### 1. src/pages/About.jsx
**Current:** B.Tech AI student (Kunj Desai)  
**Update to:** PhD Research Fellow (Suhas Devmane)

**Changes:**
- Replace "Kunj Desai" with "Suhas Devmane"
- Update bio to: PhD Research Fellow, Data Scientist, Smart Buildings/IoT/Conversational AI expert
- Mention Abacws project (Cardiff University smart building)
- Mention OntoBot, BrickBot, nl2sparql projects
- Update Education section to show PhD Research Fellowship instead of B.Tech
- Add Publications card mentioning "Utilising Internet of Things in Human–Building Interaction"
- Update Professional Background card: 58 GitHub repos, 4 packages, website: iotgarage.net

### 2. src/pages/Projects.jsx
**Current:** AI/ML student projects  
**Update to:** Research and professional IoT/AI projects

**Replace PROJECTS array with:**
```javascript
const PROJECTS = [
  {
    title: '🏢 Abacws Smart Building',
    desc: 'Cardiff University Computer Science building monitoring system with integrated IoT sensors and devices for real-time environmental data collection.',
    ss: '/abacws.png',
    tech: ['IoT', 'Sensors', 'Monitoring', 'Smart Buildings'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Abacws'
  },
  {
    title: '📊 Abacws Data Visualization',
    desc: 'TypeScript web application for visualizing and analyzing IoT sensor data from the Abacws smart building with interactive dashboards.',
    ss: '/abacws-vis.png',
    tech: ['TypeScript', 'React', 'Data Viz', 'IoT'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Abacws-Data-Vis'
  },
  {
    title: '🤖 OntoBot & OntobotV2',
    desc: 'Ontology-based conversational AI agents built with Jupyter Notebook, enabling intelligent querying of building data using natural language.',
    ss: '/ontobot.png',
    tech: ['Python', 'Jupyter', 'Ontology', 'NLP'],
    live: '#',
    code: 'https://github.com/suhasdevmane/OntoBot'
  },
  {
    title: '💬 BrickBot - Building Assistant',
    desc: 'Next-generation ontology-based chatbot for smart building interaction, successor to abacws-chatbot with enhanced Brick Schema integration.',
    ss: '/brickbot.png',
    tech: ['Rasa', 'Brick Schema', 'SPARQL', 'Python'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Brickbot'
  },
  {
    title: '🔍 nl2sparql - NL Query Engine',
    desc: 'Natural language to SPARQL query conversion system for BrickBot, enabling intuitive building data queries without technical knowledge.',
    ss: '/nl2sparql.png',
    tech: ['NLP', 'SPARQL', 'Python', 'Ontology'],
    live: '#',
    code: 'https://github.com/suhasdevmane/nl2sparql'
  },
  {
    title: '💬 Talk2Abacws Survey Platform',
    desc: 'Online survey system with custom chatbot UI and 3D visualization using JavaScript and MongoDB for smart building user feedback collection.',
    ss: '/talk2abacws.png',
    tech: ['JavaScript', 'MongoDB', 'Chatbot', '3D Viz'],
    live: '#',
    code: 'https://github.com/suhasdevmane/talk2abacws-survey'
  },
  {
    title: '🎨 Rasa Frontend UI',
    desc: 'Custom UI design supporting Rasa chatbots via webhooks with multi-media support and IndexedDb chat history storage.',
    ss: '/rasa-ui.png',
    tech: ['React', 'Rasa', 'IndexedDB', 'Webhooks'],
    live: '#',
    code: 'https://github.com/suhasdevmane/rasa-frontend'
  },
  {
    title: '🔌 ThingsBoard → Cassandra Pipeline',
    desc: 'Data pipeline for streaming IoT sensor data from ThingsBoard platform to Cassandra database for scalable storage and analytics.',
    ss: '/thingsboard.png',
    tech: ['Python', 'ThingsBoard', 'Cassandra', 'IoT'],
    live: '#',
    code: 'https://github.com/suhasdevmane/thingsboard_to_cassandra'
  },
  {
    title: '📚 IoT & Human-Building Interaction Research',
    desc: 'Replication package containing research materials, articles, manuals for review article "Utilising Internet of Things in Human–Building Interaction".',
    ss: '/research.png',
    tech: ['Research', 'IoT', 'HCI', 'Publications'],
    live: '#',
    code: 'https://github.com/suhasdevmane/replication_package'
  },
  {
    title: '🏠 Automobile Price Prediction',
    desc: 'Machine learning model for predicting automobile prices using regression algorithms and feature engineering.',
    ss: '/auto-price.png',
    tech: ['Python', 'scikit-learn', 'ML', 'Regression'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Automobile-Prize-Prediction'
  },
  {
    title: '🩺 Heart Disease Prediction',
    desc: 'Healthcare ML problem solving heart disease prediction using classification algorithms and medical datasets.',
    ss: '/heart-disease.png',
    tech: ['Python', 'ML', 'Healthcare', 'Classification'],
    live: '#',
    code: 'https://github.com/suhasdevmane/Heart-Disease-Practice'
  },
  {
    title: '🐕 Dog Breed Identification',
    desc: 'Multi-class image classification system using deep learning for identifying dog breeds from images.',
    ss: '/dog-breed.png',
    tech: ['TensorFlow', 'CNN', 'Image Classification', 'Python'],
    live: '#',
    code: 'https://github.com/suhasdevmane/dog-breed-identification'
  }
]
```

### 3. src/pages/Skills.jsx
**Current:** Student-level programming skills  
**Update to:** PhD-level research & development skills

**Replace SKILLS array with:**
```javascript
const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
];
```

**Replace ROWS array with:**
```javascript
const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "Go", "Shell Script"] },
    { title: "IoT & Smart Buildings", items: ["ThingsBoard", "Brick Schema", "Sensor Networks", "Arduino", "Raspberry Pi"] },
    { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Cassandra", "SQLite"] },
    { title: "AI/ML Frameworks", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy"] },
  ],
  [
    {
      title: "Conversational AI & NLP",
      items: [
        "Rasa Framework",
        "Natural Language to SPARQL",
        "Chatbot Development",
        "Ontology Engineering",
        "Semantic Web Technologies",
      ],
    },
    {
      title: "Web & Cloud Technologies",
      items: ["React", "Express", "Flask", "Angular", "Docker", "Kubernetes", "Google Cloud", "OpenStack"],
    },
    {
      title: "Research & Development",
      items: ["SPARQL Query Language", "Stardog Triple Store", "Data Visualization", "Human-Computer Interaction", "IoT Systems Design", "Academic Publishing"],
    },
  ],
];
```

### 4. src/pages/Contact.jsx
**Replace quickLinks with:**
```javascript
const quickLinks = [
  { img: githubLogo, title: "GitHub", link: "https://github.com/suhasdevmane" },
  { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/suhas-devmane" },
  { img: gmailLogo, title: "Email", link: "mailto:suhasdevmane@outlook.com" },
  { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/message" },
  { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/suhasdevmane" },
  { img: facebookLogo, title: "Facebook", link: "https://www.facebook.com/suhasdevmane" },
];
```

**Update EmailJS form message to reference Suhas Devmane**

### 5. src/pages/Resume.jsx
**Complete replacement needed**

**Profile Header:**
- Name: SUHAS DEVMANE
- Title: PhD Research Fellow — Smart Buildings, IoT & Conversational AI
- Location: India
- Email: suhasdevmane@outlook.com
- Website: iotgarage.net

**Professional Summary:**
"PhD Research Fellow and Data Scientist specializing in smart buildings, IoT systems, and conversational AI. Expert in ontology engineering, Brick Schema, and SPARQL. Published researcher with 58 GitHub repositories and extensive contributions to open-source Rasa conversational AI framework."

**Education:**
- PhD Research Fellowship (Currently Pursuing) - Smart Buildings, IoT, Conversational AI, Ontology Engineering
- Cardiff University Collaboration - Abacws Smart Building Project

**Key Projects:**
- Abacws Smart Building Monitoring System
- OntoBot & OntobotV2 (Ontology-based AI)
- BrickBot - Natural Language Building Queries
- talk2abacws-survey Platform
- Rasa Frontend UI
- ThingsBoard to Cassandra Pipeline
- Multiple ML Projects (Heart Disease, Dog Breed, Automobile Price)

**Publications:**
- "Utilising Internet of Things in Human–Building Interaction" (Review Article)
- GitHub: replication_package repository

**Skills:**
Python, JavaScript, TypeScript, Java, Go, Rasa, SPARQL, Brick Schema, ThingsBoard, MongoDB, Cassandra, PyTorch, TensorFlow, Docker, React, IoT, Semantic Web

**Links:**
- GitHub: https://github.com/suhasdevmane
- LinkedIn: https://www.linkedin.com/in/suhas-devmane
- Website: https://iotgarage.net
- Twitter: @SuhasDevmane55

### 6. src/pages/Blog.jsx
**Replace defaultPosts with:**
```javascript
const defaultPosts = [
  {
    id: 1,
    title: "Building Intelligence: The Abacws Journey",
    text: "Working on the Abacws smart building project has shown me how IoT and ontologies can transform how we interact with physical spaces. Every sensor tells a story, and making that data accessible through natural language is my passion.",
  },
  {
    id: 2,
    title: "Why Conversational AI Matters for Smart Buildings",
    text: "Traditional building management systems require technical expertise. With ontology-based chatbots like BrickBot, anyone can ask questions in plain language and get meaningful insights from building data. This democratization of information is the future.",
  },
  {
    id: 3,
    title: "From Research to Open Source",
    text: "Publishing research is important, but making code accessible through GitHub has equal value. My 58 repositories represent not just completed projects, but ongoing conversations with the developer community about IoT, AI, and human-building interaction.",
  },
  {
    id: 4,
    title: "The Power of Semantic Web Technologies",
    text: "SPARQL and Brick Schema aren't just academic tools — they're practical solutions for managing complex building data. Bridging the gap between ontologies and user-friendly interfaces through NLP is where innovation happens.",
  },
];
```

**Update localStorage keys:**
- Change "kd_blog_votes" to "sd_blog_votes"
- Change "kd_blog_voted" to "sd_blog_voted"

### 7. README.md
**Complete replacement with:**

```markdown
# 💻 Suhas Devmane — Research Portfolio

Welcome to my professional portfolio website showcasing my work as a **PhD Research Fellow** specializing in **Smart Buildings**, **IoT Systems**, and **Conversational AI**.

🌐 **Website:** [suhasdevmane.github.io](https://suhasdevmane.github.io/)  
🔗 **Professional Site:** [iotgarage.net](https://iotgarage.net)

## 🚀 About Me

I'm a Data Scientist and IoT Researcher based in India, focusing on creating intelligent systems that bridge physical and digital environments. My flagship work centers on the **Abacws project** — Cardiff University's smart building equipped with advanced IoT sensors and monitoring systems.

**Core Expertise:**
- 🏢 Smart Buildings & IoT Systems
- 🤖 Conversational AI & Chatbots (Rasa, OntoBot, BrickBot)
- 🔗 Ontology Engineering (Brick Schema, SPARQL)
- 📊 Data Science & Machine Learning
- 🌐 Full-Stack Development (TypeScript, Python, React)

## 📂 Featured Projects

### Smart Buildings & IoT
- **Abacws** - Smart building monitoring system
- **Abacws-Data-Vis** - TypeScript web app for IoT data visualization
- **BrickBot** - Ontology-based conversational agent
- **nl2sparql** - Natural language to SPARQL query conversion
- **talk2abacws-survey** - Survey platform with chatbot UI & 3D visualization

### Conversational AI
- **OntoBot & OntobotV2** - Ontology-based AI assistants
- **rasa-frontend** - Custom Rasa chatbot UI with multimedia support
- **Contributions to RasaHQ/rasa** - Open-source conversational AI framework

### Data Pipelines & Infrastructure
- **thingsboard_to_cassandra** - IoT data pipeline
- **flask-python-sensor-restart** - Flask-based sensor control system

### Machine Learning
- Heart Disease Prediction
- Dog Breed Identification
- Automobile Price Prediction
- Neighborhood Clustering (NYC, Toronto)

## 📚 Publications

- **"Utilising Internet of Things in Human–Building Interaction"** (Review Article)
  - Repository: [replication_package](https://github.com/suhasdevmane/replication_package)

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Languages** | Python, JavaScript, TypeScript, Java, Go, Shell |
| **AI/ML** | PyTorch, TensorFlow, Keras, scikit-learn, Pandas, NumPy |
| **Conversational AI** | Rasa, NLP, Chatbot Frameworks |
| **IoT & Smart Buildings** | ThingsBoard, Brick Schema, Arduino, Raspberry Pi |
| **Semantic Web** | SPARQL, Stardog, Ontology Engineering |
| **Databases** | MongoDB, PostgreSQL, MySQL, Cassandra, SQLite |
| **Web Frameworks** | React, NodeJS, Express, Flask, Angular |
| **DevOps** | Docker, Kubernetes, Git, GitHub Actions |
| **Cloud** | Google Cloud, OpenStack |

## 📬 Contact

- 📧 Email: suhasdevmane@outlook.com
- 💼 LinkedIn: [linkedin.com/in/suhas-devmane](https://www.linkedin.com/in/suhas-devmane)
- 🐦 Twitter: [@SuhasDevmane55](https://twitter.com/SuhasDevmane55)
- 🌐 Website: [iotgarage.net](https://iotgarage.net)

## 📊 GitHub Stats

- 58 Total Repositories
- 4 Published Packages
- Active contributor to open-source projects
- Extensive portfolio across IoT, AI, and web development

## 🎓 Education & Research

**PhD Research Fellowship** (Currently Pursuing)
- Research Focus: Smart Buildings, Conversational AI, IoT Systems, Ontology Engineering
- Collaboration with Cardiff University
- Abacws Smart Building Project

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/suhasdevmane/suhasdevmane.github.io.git

# Navigate to project directory
cd suhasdevmane.github.io

# Install dependencies
npm install

# Run development server
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser 🚀

## 🌟 Deployment

Deployed on **Netlify/Vercel** with continuous integration from the main branch.

## 🏁 License

This project is open source and available under the MIT License.

---

> *"Bridging physical and digital environments through intelligent systems"* 🏢🤖
```

### 8. package.json
```json
{
  "name": "suhas-devmane-portfolio",
  "version": "2.0.0",
  "description": "Professional portfolio for Suhas Devmane - PhD Research Fellow specializing in Smart Buildings, IoT, and Conversational AI",
  "author": "Suhas Devmane <suhasdevmane@outlook.com>",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "d3": "^7.9.0",
    "emailjs-com": "^3.2.0",
    "framer-motion": "^10.12.6",
    "lucide-react": "^0.552.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^6.14.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.0",
    "vite": "^5.0.0"
  }
}
```

### 9. index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Suhas Devmane — Research Portfolio</title>
  <meta name="description" content="PhD Research Fellow specializing in Smart Buildings, IoT Systems, and Conversational AI" />
  <meta name="author" content="Suhas Devmane" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

## 📸 Assets Needed

You'll need to add new images to `public/` directory:
- `photo.jpg` - Your professional photo
- Project screenshots for:
  - `abacws.png`
  - `abacws-vis.png`
  - `ontobot.png`
  - `brickbot.png`
  - `nl2sparql.png`
  - `talk2abacws.png`
  - `rasa-ui.png`
  - `thingsboard.png`
  - `research.png`
  - (or reuse existing placeholders)

## 🔄 Social Media Icons
Update existing images or links in `public/`:
- Ensure GitHub, LinkedIn, Email, WhatsApp, Instagram, Facebook logos are present
- Update social media profile URLs throughout

## ✅ Completed Changes Summary

**Home.jsx:**
- ✅ Name updated to Suhas Devmane
- ✅ Profession tags updated (PhD Research Fellow, Data Scientist, Smart Buildings Researcher, etc.)
- ✅ Contact links updated
- ✅ Location changed to India
- ✅ Email updated to suhasdevmane@outlook.com

**Certificates.jsx:**
- ✅ Switched from PDF to JPG certificate files
- ✅ Added "all" tab for viewing all certificates

## 📝 Next Steps

1. Update each file listed above systematically
2. Add your professional photo and project screenshots
3. Update social media profile links
4. Test all pages for consistency
5. Update EmailJS environment variables if needed
6. Deploy updated portfolio

---

**Last Updated:** November 7, 2025
