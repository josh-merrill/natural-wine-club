import './nav.css'
import { BsBag } from 'react-icons/bs'

export default function Nav() {
  return (
    <section className="container">
      <div className="nav--container">
          <h2>Nav</h2>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Basket</a>
          <BsBag className="nav--icon" style={{ fontSize: '1.75rem' }} />
      </div>
    </section>
  )
}
