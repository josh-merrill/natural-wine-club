import "./banner.css";
import wavyBorderTop from "../../assets/orange-wave-top.svg";
import wavyBorderBottom from "../../assets/orange-wave-bottom.svg";

export default function Banner() {
  return (
    <div className="banner--container">
      <div className="banner--wrapper-upper">
        <img src={wavyBorderTop} alt="A beautiful wavy border" />
      </div>
      <div className="banner--wrapper">
        <h3>
          For natural wine lovers • For natural wine lovers • For natural wine lovers • For natural wine lovers • For natural wine lovers • For natural wine lovers
        </h3>
        </div>
        <div className="banner--wrapper-lower">
        <img src={wavyBorderBottom} alt="A beautiful wavy border" />
      </div>
    </div>
  );
}
