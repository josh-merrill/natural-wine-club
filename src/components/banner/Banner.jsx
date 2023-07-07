import { useState, useEffect } from "react"
import "./banner.css"
import Reveal from "../../utils/Reveal";

export default function Banner() {
  const [scrollXPosition, setScrollXPosition] = useState(0)

  useEffect(() => {
    let animationFrameId

    function animateScroll() {
      setScrollXPosition(prevPosition => (prevPosition + 2) % (window.innerWidth * 2))
      animationFrameId = requestAnimationFrame(animateScroll)
    }

    animationFrameId = requestAnimationFrame(animateScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const styles = { transform: `translateX(-${scrollXPosition}px)` }

  return (
    <Reveal>
      <section className="banner--wrapper">
        <h3 style={styles}>
          For natural wine lovers • For organic seekers and sustainable sippers • For those who know that less is more •
          For natural wine lovers • For organic seekers and sustainable sippers • For those who know that less is more •
        </h3>
      </section>
    </Reveal>
  )
}
