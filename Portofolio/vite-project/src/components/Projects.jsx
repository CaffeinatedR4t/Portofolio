import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, interactive portfolio website built with React and Vite, featuring smooth animations with Lenis scroll, custom cursor effects, and a sleek dark theme. Showcases my projects, skills, certifications, and professional experience with an engaging user interface. Fully responsive design with optimized performance and SEO.",
    tags: ["React", "Vite", "JavaScript", "Node.js", "CSS3"],
    image: '/images/webview.png',
    date: "2025 - Present",
    role: "Full-Stack Developer & Designer",
    github: "https://github.com/CaffeinatedR4t/Portofolio"
  },
  {
    id: 2,
    title: "Cybersecurity Research - XSS Mitigation Framework",
    description: "Designed and executed experimental testing on PHP-based web applications to identify Reflected, Stored, and DOM-based XSS vulnerabilities. Developed and evaluated prevention frameworks using input validation, output encoding (e.g., htmlspecialchars()), and Content-Security-Policy (CSP) implementation. Strengthened applied understanding of cybersecurity principles, secure coding practices, and OWASP standards.",
    tags: ["PHP", "Cybersecurity", "XSS", "OWASP", "Research"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    date: "Jan 2025",
    role: "Cybersecurity Researcher",
    pdf: "/XSS_Research_Paper.pdf"
  },
  {
    id: 3,
    title: "Seadex - Export Management Platform",
    description: "A PHP-Laravel based export management platform connecting Indonesian suppliers with global buyers. Integrated front-end interfaces with robust MySQL database systems to streamline product listings and export operations.",
    tags: ["PHP", "Laravel", "MySQL", "Full-Stack", "TailwindCSS"],
    image: '/images/seadex-new.png',
    date: "Nov 2024",
    role: "Front-End Developer & Database Engineer",
    github: "https://github.com/CaffeinatedR4t/UAS-WEBPRO-IF330"
  },
  {
    id: 4,
    title: "Diabetes Meal Plan Framework",
    description: "Machine learning system designed to predict and manage Type 2 Diabetes through personalized meal recommendations. Built classification models using Python to analyze health and lifestyle data, integrating prediction algorithms with nutritional guidance.",
    tags: ["Python", "Machine Learning", "Data Science", "Healthcare"],
    image: '/images/diabetes-meal.png',
    date: "Aug 2025 - Present",
    role: "ML Engineer & Data Scientist",
    github: "https://github.com/Gr1X/Diabetes_MealPlan_Model"
  },
  {
    id: 5,
    title: "Taman Bacaan Mobile App",
    description: "Android-based mobile application using Kotlin and Android Studio to support community reading activities through digital access and user engagement. Led the full project lifecycle from system design, task delegation, and database integration to UI/UX development and testing.",
    tags: ["Kotlin", "Android Studio", "Mobile Dev", "Leadership"],
    image: '/images/taman-bacaan.png',
    date: "Aug 2025 - Present",
    role: "Lead Developer & Project Manager",
    github: "https://github.com/CaffeinatedR4t/Project_TamanBacaan"
  },
  {
    id: 6,
    title: "AI in Student Learning - Research Paper",
    description: "Co-authored peer-reviewed study examining the role of Artificial Intelligence in enhancing student learning and programming proficiency. Investigated how AI tools affect comprehension, problem-solving, and critical thinking in computer science education.",
    tags: ["R", "RStudio", "Data Analysis", "Statistical Modeling", "Research"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    date: "Jan 2025",
    role: "Co-Author & Researcher",
    pdf: "/AI_Student_Learning_Paper.pdf"
  }
]

function Projects() {
  const [filter, setFilter] = useState('all')

  // Function to handle image click
  const handleImageClick = (project) => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    } else if (project.pdf) {
      window.open(project.pdf, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            FEATURED PROJECTS
          </h2>
          <p className="section-subtitle">Recent work & academic experience</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div 
                className="project-image" 
                onClick={() => handleImageClick(project)}
                style={{ cursor: (project.github || project.pdf) ? 'pointer' : 'default' }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-date">{project.date}</span>
                  {(project.github || project.pdf) && (
                    <span className="click-hint">Click to view</span>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-role">{project.role}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                {(project.github || project.pdf) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i> View on GitHub
                      </a>
                    )}
                    {project.pdf && (
                      <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-file-pdf"></i> View
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects