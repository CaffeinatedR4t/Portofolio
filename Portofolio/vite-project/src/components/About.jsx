import './About.css'
import { useState, useEffect } from 'react'
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiPhp, 
  SiC, 
  SiCplusplus,
  SiHtml5, 
  SiCss3,
  SiReact, 
  SiNodedotjs,
  SiAndroidstudio, 
  SiLaravel, 
  SiMysql, 
  SiGithub, 
  SiFigma,
  SiUnity,
  SiThreedotjs,
  SiJupyter
} from 'react-icons/si'

import { DiJava } from 'react-icons/di'

const CSharpLogo = () => (
  <svg viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
    <path d="M97 66.2l.9-4.3h-4.2v-4.7h5.1l1.2-6.2h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6.2h-4.9l1.2-6.2h-3.8l-1.2 6.2h-4.8l1.2-6.2h-2.4v-4.7h3.3zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
  </svg>
)

const RStudioLogo = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#75aadb"/>
    <text 
      x="64" 
      y="85" 
      fontSize="64" 
      fontWeight="700" 
      fontFamily="'Helvetica Neue', Arial, sans-serif" 
      textAnchor="middle" 
      fill="white"
      style={{ letterSpacing: '-2px' }}
    >
      R
    </text>
  </svg>
)
function About() {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false)

  useEffect(() => {
    if (showDownloadPopup) {
      document.body.style.overflow = 'hidden'
      if (window.lenis) {
        window.lenis.stop()
      }
    } else {
      document.body.style.overflow = ''
      if (window.lenis) {
        window.lenis.start()
      }
    }

    return () => {
      document.body.style.overflow = ''
      if (window.lenis) {
        window.lenis.start()
      }
    }
  }, [showDownloadPopup])

  const handleDownloadClick = () => {
    const certificationsSection = document.querySelector('.certifications-section')
    if (certificationsSection) {
      if (window.lenis) {
        window.lenis.scrollTo(certificationsSection, {
          offset: -150,
          duration: 1.2,
          easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
          onComplete: () => {
            setShowDownloadPopup(true)
          }
        })
      } else {
        certificationsSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => {
          setShowDownloadPopup(true)
        }, 1000)
      }
    } else {
      setShowDownloadPopup(true)
    }
  }

  const handleConfirmDownload = () => {
    const link = document.createElement('a')
    link.href = '/CV_ATS_JeremyJosephPohar.pdf'
    link.download = 'CV_JeremyJosephPohar.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowDownloadPopup(false)
  }

  const handleCancelDownload = () => {
    setShowDownloadPopup(false)
  }

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            ABOUT ME
          </h2>
          <p className="section-subtitle">Background & expertise</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              I'm a <strong>Bilingual Computer Science student</strong> at Universitas Multimedia Nusantara, 
              fluent in English (CEFR C1) and Indonesian, with a growing specialization in <strong>cybersecurity</strong> and <strong>AI</strong>.
            </p>
            <p>
              My academic experience includes developing full-stack web platforms, machine learning systems for healthcare, 
              and mobile applications. I'm passionate about integrating technical precision with problem-solving creativity 
              to build secure, innovative solutions.
            </p>
          </div>

          <div className="tech-stack">
            <div className="tech-category">
              <h3>PROGRAMMING LANGUAGES</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="TypeScript">
                  <div className="icon-box ts">
                    <SiTypescript />
                  </div>
                  <span>TypeScript</span>
                </div>
                <div className="tech-icon" title="JavaScript">
                  <div className="icon-box js">
                    <SiJavascript />
                  </div>
                  <span>JavaScript</span>
                </div>
                <div className="tech-icon" title="Java">
                  <div className="icon-box java">
                    <DiJava />
                  </div>
                  <span>Java</span>
                </div>
                <div className="tech-icon" title="Python">
                  <div className="icon-box python">
                    <SiPython />
                  </div>
                  <span>Python</span>
                </div>
                <div className="tech-icon" title="PHP">
                  <div className="icon-box php">
                    <SiPhp />
                  </div>
                  <span>PHP</span>
                </div>
                <div className="tech-icon" title="C">
                  <div className="icon-box c">
                    <SiC />
                  </div>
                  <span>C</span>
                </div>
                <div className="tech-icon" title="C++">
                  <div className="icon-box cpp">
                    <SiCplusplus />
                  </div>
                  <span>C++</span>
                </div>
                <div className="tech-icon" title="C#">
                  <div className="icon-box csharp">
                    <CSharpLogo />
                  </div>
                  <span>C#</span>
                </div>
              </div>
            </div>

            <div className="tech-category">
              <h3>FRAMEWORKS & LIBRARIES</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="HTML5">
                  <div className="icon-box html">
                    <SiHtml5 />
                  </div>
                  <span>HTML5</span>
                </div>
                <div className="tech-icon" title="CSS3">
                  <div className="icon-box css">
                    <SiCss3 />
                  </div>
                  <span>CSS3</span>
                </div>
                <div className="tech-icon" title="React">
                  <div className="icon-box react">
                    <SiReact />
                  </div>
                  <span>React</span>
                </div>
                <div className="tech-icon" title="Node.js">
                  <div className="icon-box nodejs">
                    <SiNodedotjs />
                  </div>
                  <span>Node.js</span>
                </div>
                <div className="tech-icon" title="Three.js">
                  <div className="icon-box threejs">
                    <SiThreedotjs />
                  </div>
                  <span>Three.js</span>
                </div>
                <div className="tech-icon" title="Laravel">
                  <div className="icon-box laravel">
                    <SiLaravel />
                  </div>
                  <span>Laravel</span>
                </div>
              </div>
            </div>

            <div className="tech-category">
              <h3>TOOLS & PLATFORMS</h3>
              <div className="tech-icons">
                <div className="tech-icon">
                  <div className="icon-box android">
                    <SiAndroidstudio />
                  </div>
                  <span>Android Studio</span>
                </div>
                <div className="tech-icon">
                  <div className="icon-box unity">
                    <SiUnity />
                  </div>
                  <span>Unity</span>
                </div>
                <div className="tech-icon" title="Jupyter Notebook">
                  <div className="icon-box jupyter">
                    <SiJupyter />
                  </div>
                  <span>Jupyter</span>
                </div>
                <div className="tech-icon" title="RStudio">
                  <div className="icon-box rstudio">
                    <RStudioLogo />
                  </div>
                  <span>RStudio</span>
                </div>
                <div className="tech-icon">
                  <div className="icon-box mysql">
                    <SiMysql />
                  </div>
                  <span>MySQL</span>
                </div>
                <div className="tech-icon">
                  <div className="icon-box github">
                    <SiGithub />
                  </div>
                  <span>GitHub</span>
                </div>
                <div className="tech-icon">
                  <div className="icon-box figma">
                    <SiFigma />
                  </div>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              <div className="cert-card">
                <div className="cert-icon cert-trophy">🏆</div>
                <h4>HCIA-AI V3.5</h4>
                <p>Huawei AI Course</p>
                <span className="cert-date">Mar 2025</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon cert-globe">🌐</div>
                <h4>EF SET English (C1)</h4>
                <p>Advanced Level</p>
                <span className="cert-date">Jun 2025</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon cert-python">
                  <SiPython />
                </div>
                <h4>Python Intermediate</h4>
                <p>Sololearn</p>
                <span className="cert-date">May 2025</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon cert-security">🔒</div>
                <h4>Cybersecurity Fundamentals</h4>
                <p>IBM</p>
                <span className="cert-date">Nov 2025</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon cert-security">🛡️</div>
                <h4>Getting Started with Cybersecurity</h4>
                <p>IBM</p>
                <span className="cert-date">Nov 2025</span>
              </div>
            </div>

            <div className="download-cv-container">
              <button className="download-cv-button" onClick={handleDownloadClick}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDownloadPopup && (
        <div className="download-popup-overlay" onClick={handleCancelDownload}>
          <div className="download-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">📥</div>
            <h3>Download CV</h3>
            <p>Would you like to download my CV?</p>
            <div className="popup-buttons">
              <button className="popup-btn confirm-btn" onClick={handleConfirmDownload}>
                Yes, Download
              </button>
              <button className="popup-btn cancel-btn" onClick={handleCancelDownload}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About