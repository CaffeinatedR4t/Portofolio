import { useEffect, useState } from 'react'
import './Preloader.css'

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const duration = 2500
    const steps = 100
    const stepTime = duration / steps
    const increment = 100 / steps

    let current = 0
    
    const interval = setInterval(() => {
      current += increment
      
      if (current >= 100) {
        setProgress(100)
        clearInterval(interval)
        
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 800)
        }, 300)
      } else {
        setProgress(Math.min(current, 100))
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div id="preloader" className={isComplete ? 'fade-out' : ''}>
      <div className="preloader-container">
        <div className="loader-bar-container">
          <div className="loader-bar">
            <div className="loader-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loader-percentage">{Math.floor(progress)}%</div>
        </div>

        <div className="loader-branding-bottom">
          <h1 className="loader-name">Jeremy Joseph Pohar</h1>
          <p className="loader-tagline">PORTFOLIO</p>
        </div>
      </div>
    </div>
  )
}

export default Preloader