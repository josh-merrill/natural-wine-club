import "./about.css";
import AboutImg from "../../assets/wine-top.jpg";

export default function About() {
  return (
    <section id="about" className="about--wrapper">
      <div className="about--container">
        <div className="about--container-top">
          <h2>What is natural wine anyway?</h2>
          <p className="about--container-text">
          Ah, natural wine! It's like the wild child of the wine world, the rebel without a cork. Picture this: a vineyard where the grapes frolic freely, basking in the sunshine and doing their organic yoga poses. No chemicals or pesticides dare to disturb their zen vibes.</p>
          <p className="about--container-text">When the time is ripe, these precious grapes are plucked by gentle hands, as if they were chosen for a grape beauty pageant. Then, they're fermented with native yeasts, and bottled without any additives or preservatives. The result? A wine that's as pure as the day it was born.
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
          With just a few clicks, you can add your favorite natural wines to your virtual cart, and voila! They'll embark on a daring journey, braving treacherous roads and evading sneaky delivery trolls, just to arrive at your doorstep. It's like a wine-themed adventure movie, but without the drama and with way more delicious sips.
          </p>
        </div>
      </div>
    </section>
  )
}
