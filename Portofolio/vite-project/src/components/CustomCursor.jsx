import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    
    if (!cursor || !trail) return

    // Use requestAnimationFrame for smooth performance
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Smooth animation loop using RAF (much more performant!)
    const animate = () => {
      // Smooth lerp (linear interpolation) for trailing effect
      currentX += (mouseX - currentX) * 0.2
      currentY += (mouseY - currentY) * 0.2

      // Use transform instead of top/left for better performance
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) ${isHovering ? 'scale(1.3)' : 'scale(1)'}`
      trail.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`

      requestAnimationFrame(animate)
    }

    animate()

    // ✅ FIXED: Check if target is an Element before using matches
    const handleMouseEnter = (e) => {
      const target = e.target
      if (target && target.nodeType === 1) { // Check if it's an Element node
        if (target.matches('a, button, .project-card, input, textarea')) {
          setIsHovering(true)
        }
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target && target.nodeType === 1) { // Check if it's an Element node
        if (target.matches('a, button, .project-card, input, textarea')) {
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