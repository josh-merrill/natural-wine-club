import {useState, createContext} from 'react'

const Context = createContext()

function ContextProvider({children}) {
  const [cartItems, setCartItems] = useState([])
  const [viewCart, setViewCart] = useState(false)

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        viewCart,
        setViewCart
      }}
      >
        {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context}
