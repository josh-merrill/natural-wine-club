import './index.css'
import Navbar from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import Banner from './components/banner/Banner'
import Wave from './components/wave/Wave'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Wave />
      <Menu />
      <Banner />
      <About />
      <Cart />
      <Footer />
    </div>
  )
}

export default App
