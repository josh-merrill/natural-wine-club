import "./about.css";
import AboutImgTop from "../../assets/wine-top.jpeg";
import AboutImgBottom from "../../assets/wine-bottom.jpeg";

export default function About() {
  return (
    <section id="about" className="about--wrapper">
      <div className="about--container">
        <div className="about--container-top">
          <h2>What is natural wine anyway?</h2>
          <p className="about--container-text">
          Natural wine is like the hippie rebel of the wine world, partying barefoot in vineyards, refusing to be tamed by chemicals or additives. It's the free-spirited juice that's all about embracing its wild side and giving you a taste of grape-filled liberation.
          </p>
        </div>
          <img
            src={AboutImgTop}
            alt="wine on table shown vertically"
            className="about--img-top"
          />
      </div>
      <div className="about--container">
          <img
            src={AboutImgBottom}
            alt="wine on table shown vertically"
            className="about--img-bottom"
          />
        <div className="about--container-bottom">
          <h2>So how exactly does this work?</h2>
          <p className="about--container-text">
          With just a few clicks, you can add your favorite natural wines to your virtual cart, and voila! They'll embark on a daring journey, braving treacherous roads and evading sneaky delivery trolls, just to arrive at your doorstep. It's like a wine-themed adventure movie, but without the drama and with way more delicious sips.
          </p>
        </div>
      </div>
    </section>
  )
}
