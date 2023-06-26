import { useState, useEffect } from "react";
import "./banner.css";

export default function Banner() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset / 3;
    setScrollYPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = { transform: `translate(-${scrollYPosition}px)` };

  return (
      <section className="banner--wrapper">
        <h3 style={styles}>
          For natural wine lovers • For natural wine lovers • For natural wine
          lovers • For natural wine lovers • For natural wine lovers • For
          natural wine lovers For natural wine lovers • For natural wine lovers
          • For natural wine lovers • For natural wine lovers • For natural wine lovers
          • For natural wine lovers
        </h3>
      </section>
  );
}
