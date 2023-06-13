import './index.css'
import Navbar from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import Banner from './components/banner/Banner'
import wavyLine from './assets/wavy-line.svg'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <img src={wavyLine} alt="Wavy line" className="line--wavy"/>
      <Menu />
      <Banner />
      <About />
      <Footer />
    </div>
  )
}

export default App
