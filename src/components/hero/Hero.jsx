import "./hero.css"
import heroImg from "../../assets/hero-illustration.svg"

export default function Hero() {
  return (
    <section className="container">
      <div className="hero--container">
          <h1 className="hero--title">Welcome to Natural Wine Club</h1>
          <div className="hero--svg-wrapper">
            <img src={heroImg} alt="Illustrated glass of wine and a wine bottle" className="hero--svg"/>
          </div>
      </div>
    </section>
  )
}
