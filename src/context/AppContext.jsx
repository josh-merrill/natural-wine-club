import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [totalOrderCount, setTotalOrderCount] = useState(0);

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, order_amount: item.order_amount + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, order_amount: 1 }];
    });
    setTotalOrderCount((prevTotalCount) => prevTotalCount + 1);
  }

  function removeFromCart(newItem) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            order_amount: item.order_amount > 0 ? item.order_amount - 1 : 0,
          };
        }
        return item;
      });
      return updatedItems.filter((item) => item.order_amount > 0);
    });

    setTotalOrderCount((prevTotalCount) => prevTotalCount - 1);
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        viewCart,
        setViewCart,
        addToCart,
        removeFromCart,
        totalOrderCount,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
