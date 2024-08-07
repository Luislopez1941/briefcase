import React from 'react'
import './Layout.css'

const Layout: React.FC = () => {
  return (
    <section className="layotu">
        <div className="container__main">
            <div className="left">
                <div className="left__container">
                    <div className="left__content">
                        <h1>Software Engineer</h1>
                        <h3> 
                            Soy un desarrollador apasionado especializado en la creación de soluciones digitales innovadoras tanto para plataformas web como para móviles.
                        </h3>
                        <div className="btns__container_hero">
                                <a className="cta_one">Descargar cv</a>
                                <a className="cta_two">Contactar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="background__layout">

                </div>
            </div>
        </div>
    </section>
  )
}

export default Layout
