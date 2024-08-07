import React from 'react'
import './Main.css'
import Technologies from './Technologies'

const Main: React.FC = () => {
  return (
    <section className="main">
        <section className="about__company">
            <div className="about__company_text">
                <h2>Sobre mi</h2>
            </div>
            <div className="container__bout-company">
                <p><strong className="title__hero">Desarollador</strong> Front-End</p>
                <p className='content'>Soy una persona autodidacta y autónoma, apasionada por el desarrollo de aplicaciones web y móviles, con un enfoque especial en la experiencia
                    de usuario (UX) y diseño de interfaces (UI). Me aseguro de cumplir siempre con los estándares de calidad, priorizando la creación de código
                    limpio y eficiente. Además, tengo experiencia en el desarrollo backend y en el despliegue de proyectos a producción, lo que me permite tener
                    una visión integral del ciclo de desarrollo de software.
                </p>
            </div>
        </section>
        <Technologies />
        <section className="about__company">
            <div className="about__company_text">
                <h2>Adicional</h2>
            </div>
            <div className='additional'>
                <p className='volunteering'>Voluntariado</p>
                <p className='recognitions'>Reconocimientos</p>
            </div>
            <div className="container__bout-company">

                <p>He participado en hackatones, logrando destacar y obtener reconocimientos por mi desempeño. Formo parte de comunidades de desarrollo
                    donde colaboro y continúo aprendiendo de otros profesionales. En mis tiempos libres, disfruto ayudando a estudiantes y desarrolladores
                    principiantes, revisando su código para identificar áreas de mejora, lo que me permite seguir aprendiendo y perfeccionando mis habilidades.
                </p>
            </div>
        </section>
    </section>
  )
}

export default Main
