import './About.css'
import { useState } from 'react'
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
  SiUnity
} from 'react-icons/si'

import { DiJava } from 'react-icons/di'

function About() {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false)

  const handleDownloadClick = () => {
    setShowDownloadPopup(true)
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
            <span className="title-number">02.</span> ABOUT ME
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
              Currently working as an <strong>Advanced AI Trainer</strong> at Invisible Technologies (Remote, New York), 
              I collaborate with globally distributed teams to train and evaluate advanced AI language models, 
              performing data annotation and quality validation.
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
              </div>
            </div>

            <div className="tech-category">
              <h3>FRAMEWORKS & WEB</h3>
              <div className="tech-icons">
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
                <div className="tech-icon" title="C#">
                  <div className="icon-box csharp">
                    C#
                  </div>
                  <span>C#</span>
                </div>
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
                <div className="tech-icon">
                  <div className="icon-box laravel">
                    <SiLaravel />
                  </div>
                  <span>Laravel</span>
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
            </div>

            <div className="download-cv-container">
              <button className="download-cv-button" onClick={handleDownloadClick}>
                <span className="download-icon">📄</span>
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