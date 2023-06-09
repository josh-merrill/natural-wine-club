import "./menu.css";

export default function item({ item }) {

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
      <div key={item.id} className="menu--item">
        <div className="menu--item-top">
          <div className="menu--item-badge" style={styles}>
            <h4 style={{fontFamily: 'Montserrat'}}>{item.color}</h4>
          </div>
          <img src={item.img} alt={item.name} className="menu--item-img" />
        </div>
        <div className="menu--item-title-wrapper">
          <h3>{item.price}</h3>
          <h2 className="menu--item-title">{item.name}</h2>
        </div>
        <hr className="line--blue" />
        <div className="menu--item-bottom">
          <div className="menu--item-basket">
            <p>
              <span className="bold">Add to basket:</span>
            </p>
            <button className="btn-secondary" >Order</button>
          </div>
          <div className="menu--item-details">
            <p>
              <span className="bold">Region: </span>{item.region}
            </p>
            <p>
              <span className="bold">Type: </span>{item.winemaking}
            </p>
          </div>
          <button className="btn-primary">About this item</button>
        </div>
      </div>
    );
  }
