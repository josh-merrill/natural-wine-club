import './index.css'
import Navbar from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Wine from './components/menu/Menu'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Wine />
      <About />
      <Cart />
      <Footer />
    </>
  )
}

export default App
