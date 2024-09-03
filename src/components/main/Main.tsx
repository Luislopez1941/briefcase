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
                <div>
                    <p className='title__hero'>Full Stack</p>
                    <p className='title__hero uxui'>UX/UI designer</p>
                </div>
                <p className='content'>Soy una persona autodidacta y autónoma, especializado en desarrollo de aplicaciones web y móviles, 
                    He participado en hackatones, logrando destacar y obtener reconocimientos por mi desempeño. Formo parte de comunidades de desarrollo
                    donde colaboro y continúo aprendiendo de otros profesionales. En mis tiempos libres ayudo a estudiantes y desarrolladores
                    principiantes, revisando su código para identificar áreas de mejora, lo que me permite seguir aprendiendo y perfeccionando mis habilidades.
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
                <p>
                    He desarollado diferentes poryecto para mejorar mis habilidades, actualmante me estoy puliendo mis concocimientos en la seguridad en la nube y algoritmos  
                </p>
            </div>
        </section>
    </section>
  )
}

export default Main
