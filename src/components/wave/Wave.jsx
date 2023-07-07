import "./wave.css";
import wavyLine from "../../assets/wavy-line.svg";
import Reveal from "../../utils/Reveal";

export default function Wave() {
  return (
    <Reveal>
      <section className="line--wavy-wrapper">
        <img src={wavyLine} alt="Blue wavy line" className="line--wavy" />
      </section>
    </Reveal>
  );
}
