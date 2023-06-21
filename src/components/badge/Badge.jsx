import "./badge.css";

export default function Badge({ item }) {
  let backgroundColor;
  let textColor;

  if (item.color === "Red") {
    backgroundColor = "#FF462D";
    textColor = "#FFFFFF";
  } else if (item.color === "White") {
    backgroundColor = "#FFFFFF";
  } else if (item.color === "Orange") {
    backgroundColor = "#FFA24B";
    textColor = "#FFFFFF";
  } else if (item.color === "Petnat") {
    backgroundColor = "#FFD367";
  } else if (item.color === "Rose") {
    backgroundColor = "#FF8979";
    textColor = "#FFFFFF";
  } else {
    backgroundColor = "none";
  }

  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <div className="item--badge" style={styles}>
      <h4 style={{ fontFamily: "Montserrat" }}>{item.color}</h4>
    </div>
  );
}
