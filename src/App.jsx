import './index.css'
import Navbar from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Wave from './components/wave/Wave'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Wave />
      <Menu />
      <Banner />
      <About />
      <Footer />
    </>
  )
}

export default App
