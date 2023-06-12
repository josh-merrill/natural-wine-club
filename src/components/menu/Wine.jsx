import { useState, useContext } from "react";
import { Context } from "../../context/AppContext";
import "./menu.css";

export default function Wine({ item }) {
  const { addToCart, removeFromCart, setTotalOrderCount } = useContext(Context);

  const [show, setShow] = useState(true);
  const [viewDetails, setViewDetails] = useState(false);
  const [count, setCount] = useState(0);

  function handlePlus(value) {
    setCount(value + 1);
    // setItemCount((prevState) => {
    //   return {
    //     ...prevState,
    //     order_amount: prevState.order_amount + 1
    //   };
    // });

    setTotalOrderCount((prevState) => prevState + 1);
  }

  function handleMinus(value) {
    setCount(value - 1);
    setTotalOrderCount((prevState) => prevState - 1);
  }

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
          <h4 style={{ fontFamily: "Montserrat" }}>{item.color}</h4>
        </div>
        <img src={item.img} alt={item.name} className="menu--item-img" />
      </div>
      <div className="menu--item-title-wrapper">
        <h3>${item.price}</h3>
        <h2 className="menu--item-title">{item.name}</h2>
      </div>
      <hr className="line--blue" />
      <div className="menu--item-bottom">
        {viewDetails ? (
          <div className="menu--item-bottom-inner">
            <div className="menu--item-details">
              <p>
                <span className="bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="bold">Year: </span>
                {item.year}
              </p>
              <p>
                <span className="bold">Type: </span>
                {item.winemaking}
              </p>
              <p>
                {item.description}
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setViewDetails(!viewDetails)}
            >
              View less
            </button>
          </div>
        ) : (
          <div className="menu--item-bottom-inner">
            <div className="menu--item-basket">
              <p>
                <span className="bold">Add to basket:</span>
              </p>

              {count < 1 ? (
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setShow(true);
                    handlePlus(count);
                    addToCart(item);
                  }}
                >
                  Order
                </button>
              ) : (
                <button className="btn-secondary" id="card--order-btn-order">
                  <span
                    onClick={() => {
                      handleMinus(count);
                      removeFromCart(item);
                    }}
                  >
                    -
                  </span>
                  <span>{count}</span>
                  <span
                    onClick={() => {
                      addToCart(item);
                      handlePlus(count);
                    }}
                  >
                    +
                  </span>
                </button>
              )}
            </div>
            <div className="menu--item-details">
              <p>
                <span className="bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="bold">Type: </span>
                {item.winemaking}
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setViewDetails(!viewDetails)}
            >
              View more
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
