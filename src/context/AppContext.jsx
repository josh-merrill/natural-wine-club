import {useState, createContext} from 'react'

const Context = createContext()

function ContextProvider({children}) {
  const [cartItems, setCartItems] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const [totalOrderCount, setTotalOrderCount] = useState(0);

  function addToCart(newItem) {
      setCartItems(prevItems => [...prevItems, newItem])
  }
  console.log(cartItems)

  // const totalCartItemCount = cartItems.reduce((sum, item) => sum + item.price, 0);

  console.log(totalOrderCount);

  function removeFromCart(id) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
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
        setTotalOrderCount
      }}
      >
        {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context}
