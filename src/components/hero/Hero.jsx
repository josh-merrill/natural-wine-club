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
          {/* <h1>Hero - Heading 1</h1>
          <h2>Hero - Heading 2</h2>
          <h3>Hero - Heading 3</h3>
          <h4>Hero - Heading 4</h4>
          <p>Hero - Paragraph</p>
          <button className="btn-primary">Order</button>
          <button className="btn-secondary">About this wine</button> */}
    </section>
  )
}
