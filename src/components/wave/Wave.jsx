
import "./wave.css"
import wavyLine from "../../assets/wavy-line.svg";

export default function Wave() {
  return (
    <div className="line--wavy-wrapper">
      <img src={wavyLine} alt="Wavy line" className="line--wavy" />
    </div>
  );
}
