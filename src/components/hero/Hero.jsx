import "./hero.css";
import heroImg from "../../assets/hero-illustration.svg";
import Reveal from "../../utils/Reveal";

export default function Hero() {
  return (
    <section className="hero--wrapper container">
      <div className="hero--container">
        <Reveal>
          <h1 className="hero--title">Welcome to Natural Wine Club</h1>
        </Reveal>
        <div className="hero--svg-wrapper">
          <Reveal>
            <img
              src={heroImg}
              alt="Illustrated glass of wine being poured"
              className="hero--svg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
