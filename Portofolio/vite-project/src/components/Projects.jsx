import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: "Seadex - Export Management Platform",
    description: "A PHP-Laravel based export management platform connecting Indonesian suppliers with global buyers. Integrated front-end interfaces with robust MySQL database systems to streamline product listings and export operations.",
    tags: ["PHP", "Laravel", "MySQL", "Full-Stack"],
    image: '/images/seadex-new.png',
    date: "Nov 2024",
    role: "Front-End Developer & Database Engineer"
  },
  {
    id: 2,
    title: "Diabetes Meal Plan Framework",
    description: "Machine learning system designed to predict and manage Type 2 Diabetes through personalized meal recommendations. Built classification models using Python to analyze health and lifestyle data, integrating prediction algorithms with nutritional guidance.",
    tags: ["Python", "Machine Learning", "Data Science", "Healthcare"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    date: "Aug 2025 - Present",
    role: "ML Engineer & Data Scientist"
  },
  {
    id: 3,
    title: "Taman Bacaan Mobile App",
    description: "Android-based mobile application using Kotlin and Android Studio to support community reading activities through digital access and user engagement. Led the full project lifecycle as Project Manager and Lead Developer.",
    tags: ["Kotlin", "Android Studio", "Mobile Dev", "Leadership"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    date: "Aug 2025 - Present",
    role: "Lead Developer & Project Manager",
    github: "https://github.com/CaffeinatedR4t"
  },
  {
    id: 4,
    title: "AI in Student Learning - Research Paper",
    description: "Co-authored peer-reviewed study examining the role of Artificial Intelligence in enhancing student learning and programming proficiency. Investigated how AI tools affect comprehension, problem-solving, and critical thinking.",
    tags: ["Research", "AI", "Education", "Academic"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    date: "Jan 2025",
    role: "Co-Author & Researcher"
  }
]

function Projects() {
  const [filter, setFilter] = useState('all')

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span> FEATURED PROJECTS
          </h2>
          <p className="section-subtitle">Recent work & academic experience</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-date">{project.date}</span>
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
                {project.github && (
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
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