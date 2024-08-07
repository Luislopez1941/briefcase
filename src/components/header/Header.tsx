import React, { useState } from 'react'
import './Header.css'

const Header: React.FC = () => {
const [toggle, setToggle] = useState<boolean>(false)
  return (
    <header className="hero">
        <div className="hero__container">
            <div className="hero__logo">
                <h2>JLLC</h2>
            </div>
            <nav className="nav__hero">
                <ul className="nav__items">
                    <li className="nav__item"><a href="" className="nav__link">Historia</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Servicios</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Portafolio</a></li>
                    <li className="nav__item "><a href="" className="nav__link shade">Contacto</a></li>
                </ul>
            </nav>
            <div className='toggle' onClick={() => setToggle(!toggle)}>
                <button className={`toggle__botton ${toggle ? 'activo' : ''}`}>
                    <span className="l1 span"></span>
                    <span className="l2 span"></span>
                    <span className="l3 span"></span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
