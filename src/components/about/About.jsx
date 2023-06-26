import "./about.css";
import AboutImg from "../../assets/wine-top.jpg";

export default function About() {
  return (
    <section id="about" className="about--wrapper">
      <div className="about--container">
        <div className="about--container-top">
          <h2>What is natural wine anyway?</h2>
          <p className="about--container-text">
            Lorem ipsum dolor sit amet consectetur. Et est malesuada purus et
            hendrerit tellus egestas in. Lobortis eu id malesuada nec turpis
            praesent dignissim. Rhoncus aliquam vel scelerisque turpis ut augue
            faucibus elementum.
          </p>
        </div>
          <img
            src={AboutImg}
            alt="wine on table shown vertically"
            className="about--img-top"
          />
      </div>
      <div className="about--container">
          <img
            src={AboutImg}
            alt="wine on table shown vertically"
            className="about--img-bottom"
          />
        <div className="about--container-bottom">
          <h2>So how exactly does this work?</h2>
          <p className="about--container-text">
            Lorem ipsum dolor sit amet consectetur. Et est malesuada purus et
            hendrerit tellus egestas in. Lobortis eu id malesuada nec turpis
            praesent dignissim. Rhoncus aliquam vel scelerisque turpis ut augue
            faucibus elementum.
          </p>
        </div>
      </div>
    </section>
  )
}
