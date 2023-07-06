
import "./wave.css"
import wavyLine from "../../assets/wavy-line.svg";

export default function Wave() {
  return (
    <section className="line--wavy-wrapper">
      <img src={wavyLine} alt="Blue wavy line" className="line--wavy" />
    </section>
  );
}
