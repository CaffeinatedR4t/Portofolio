import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const rafIdRef = useRef(null)
  
  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    
    if (!cursor || !trail) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.2
      currentY += (mouseY - currentY) * 0.2

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) ${isHovering ? 'scale(1.3)' : 'scale(1)'}`
      trail.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`

      rafIdRef.current = requestAnimationFrame(animate)
    }

    rafIdRef.current = requestAnimationFrame(animate)

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target && target.nodeType === 1) {
        if (target.matches('a, button, .project-card, input, textarea, .cta-button, .arrow-button, .status-link')) {
          setIsHovering(true)
        }
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target && target.nodeType === 1) {
        if (target.matches('a, button, .project-card, input, textarea, .cta-button, .arrow-button, .status-link')) {
          setIsHovering(false)
        }
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, []) // ✅ FIXED: Empty dependency array!

  // Separate effect for hover state changes
  useEffect(() => {
    const cursor = cursorRef.current
    if (cursor) {
      // Update scale without resetting position
      const currentTransform = cursor.style.transform
      if (currentTransform) {
        const match = currentTransform.match(/translate\([^)]+\)[^)]+/)
        if (match) {
          cursor.style.transform = `${match[0]} ${isHovering ? 'scale(1.3)' : 'scale(1)'}`
        }
      }
    }
  }, [isHovering])

  return (
    <>
      <div
        ref={cursorRef}
        className={`retro-cursor ${isHovering ? 'hovering' : ''}`}
      >
        <div className="pixel-cursor">
          <div className="pixel-row">
            <span className="pixel"></span>
            <span className="pixel"></span>
          </div>
          <div className="pixel-row">
            <span className="pixel"></span>
            <span className="pixel fill"></span>
          </div>
        </div>
      </div>

      <div
        ref={trailRef}
        className="cursor-trail"
      />
    </>
  )
}

export default CustomCursor