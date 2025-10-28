import { useEffect, useState } from 'react'
import ModelViewer from './ModelViewer'
import './Home.css'

function Home() {
  const [jakartaTime, setJakartaTime] = useState('')

  // Live Jakarta Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const jakartaTimeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setJakartaTime(jakartaTimeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      // Use Lenis if available, otherwise use native smooth scroll
      if (window.lenis) {
        window.lenis.scrollTo(contactSection, {
          offset: -80,
          duration: 2,
          easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        })
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section id="home" className="section">
      {/* Top Left - Title/Location */}
      <div className="home-top-left">
        <h2>COMPUTER SCIENCE STUDENT</h2>
        <p>JAKARTA, INDONESIA</p>
      </div>

      {/* Top Right - Vertical Time */}
      <div className="home-top-right">
        <div className="vertical-time">
          {jakartaTime.split('').map((char, index) => (
            <span key={index} className="time-char">{char}</span>
          ))}
          <span className="time-label">WIB</span>
        </div>
      </div>

      {/* Center - 3D Model */}
      <div className="model-container">
        <ModelViewer />
      </div>

      {/* Bottom Left - Button + Quote/Description */}
      <div className="home-bottom-left">
        {/* Let's Connect Button - NOW ON TOP */}
        <button className="cta-button" onClick={scrollToContact}>
          Let's Connect
        </button>
        
        <p className="home-quote">
          "INTEGRATING TECHNICAL PRECISION WITH<br />
          CREATIVE PROBLEM-SOLVING." (J.J.POHAR)
        </p>
        
        <p className="home-year">©2025</p>
      </div>

      {/* Bottom Right - Current Status */}
      <div className="home-bottom-right">
        <div className="status-card">
          <div className="status-preview">
            <span>AI TRAINER</span>
            <span>DEVELOPER</span>
            <span>RESEARCHER</span>
          </div>
          <p className="status-title">WORKING NOW.</p>
          <a href="#projects" className="status-link">VIEW PROJECTS</a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <span className="arrow">↓</span>
      </div>
    </section>
  )
}

export default Home