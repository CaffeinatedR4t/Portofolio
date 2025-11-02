import { useEffect, useState, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const lenisRef = useRef(null)
  const rafIdRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenisInstance
    window.lenis = lenisInstance

    // ✅ PROPER RAF LOOP - This is the key fix!
    function raf(time) {
      lenisInstance.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      e.preventDefault()

      const targetElement = document.querySelector(href)
      if (targetElement) {
        lenisInstance.scrollTo(targetElement, {
          offset: -80,
          duration: 1,
          easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // ✅ CRITICAL: Proper cleanup to prevent memory leaks and freezing
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      
      // Cancel the animation frame
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      
      // Destroy Lenis instance
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      
      // Clean up global reference
      if (window.lenis) {
        delete window.lenis
      }
    }
  }, [])

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App