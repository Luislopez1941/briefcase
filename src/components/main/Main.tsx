import React from 'react'
import './Main.css'
import Technologies from './Technologies'
import cedulaPDF from '../../assets/briefcase/pdfs/LOCJ010420HCSPRRA3.pdf'
import Tools from './Tools'

const architectureMap = [
    {
        title: 'Arquitectura de software',
        scope: 'Estructura global del sistema',
        items: ['Microservicios & monolitos modulares', 'APIs REST & capas de aplicación', 'SOLID & Clean Architecture', 'Escalabilidad y mantenibilidad'],
    },
    {
        title: 'Arquitectura de algoritmos',
        scope: 'Lógica y eficiencia del código',
        items: ['Complejidad temporal y espacial', 'Búsqueda, ordenamiento y grafos', 'Recursión y programación dinámica', 'Optimización de procesos'],
    },
    {
        title: 'Estructuras de datos',
        scope: 'Organización de la información',
        items: ['Arrays, listas, pilas y colas', 'Hash maps & árboles', 'Grafos y relaciones entre entidades', 'Modelado eficiente en BD'],
    },
    {
        title: 'Patrones de diseño',
        scope: 'Soluciones probadas y reutilizables',
        items: ['Singleton, Factory & Observer', 'Repository & Dependency Injection', 'MVC / MVVM en frontend', 'Modularidad en React & Vue'],
    },
]

const Main: React.FC = () => {
    return (
        <section className="main page-container">
            <section className="about__company" id="about">
                <div className="about__company_text">
                    <h2>Sobre mí</h2>
                </div>
                <div className="container__bout-company">
                    <div>
                        <p className='title__hero'>Semi Senior Full Stack</p>
                        <p className='title__hero uxui'>Apps Web & Mobile</p>
                    </div>
                    <p className='content'>
                        Soy arquitecto de software Full Stack semi senior con más de 4 años de experiencia. Mi camino comenzó
                        en Tripnow como programador junior frontend, continuó en Hiplot liderando el ERP de la empresa, y hoy
                        en Devhood desarrollo soluciones web y móviles para distintas empresas en México. Parto del análisis
                        y la arquitectura, construyo backends con APIs REST (NestJS, Python), interfaces con React, React Native
                        y Vue, y cierro el ciclo con bases de datos, infraestructura cloud y despliegue en producción.
                    </p>
                    <p className='content about__content-second'>
                        He participado en hackathons con reconocimiento y colaboro activamente en comunidades de desarrollo.
                        Eso, junto con mi experiencia en empresas y proyectos propios, define cómo trabajo hoy: con visión
                        de arquitecto, ejecución full stack y compromiso con código mantenible que realmente llega a producción.
                    </p>
                </div>
            </section>
            <section className="education">
                <div className="education_text">
                    <h2>Formación</h2>
                </div>
                <div className="container__education">
                    <div>
                        <p className='title-ut'>Universidad Tecnológica de Cancún</p>
                        <div className='account'>
                            <p className='text-ut'>Licenciatura en Contabilidad</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </div>
                        <a
                            className="btn btn--ghost button-title-account"
                            href={cedulaPDF}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver cédula
                        </a>
                    </div>
                    <div>
                        <p className='title-utel'>Universidad Tecnológica Latinoamericana en Línea</p>
                        <div className='account'>
                            <p className='text-ut'>Ingeniería en Sistemas Computacionales</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className='education__additional'>
                            Formación complementaria en diplomados y certificaciones en línea en desarrollo de software,
                            arquitectura de sistemas y tecnologías cloud.
                        </p>
                    </div>
                </div>
            </section>
            <section className='quantum__computing'>
                <div className="quantum__computing_text">
                    <h2>Arquitectura & Conceptos</h2>
                    <p className="architecture-map__intro content">
                        Mapa de fundamentos técnicos que aplico en cada proyecto — desde la estructura del sistema
                        hasta la lógica, los datos y los patrones que hacen el software escalable.
                    </p>
                </div>
                <div className="architecture-map">
                    <div className="architecture-map__hub">
                        <span className="architecture-map__hub-label">Full Stack</span>
                        <span className="architecture-map__hub-title">Semi Senior</span>
                    </div>
                    <div className="architecture-map__connector" aria-hidden="true" />
                    <div className="architecture-map__grid">
                        {architectureMap.map(({ title, scope, items }) => (
                            <article key={title} className="architecture-map__node">
                                <div className="architecture-map__node-header">
                                    <span className="architecture-map__node-dot" />
                                    <div>
                                        <h3 className="architecture-map__node-title">{title}</h3>
                                        <p className="architecture-map__node-scope">{scope}</p>
                                    </div>
                                </div>
                                <ul className="architecture-map__node-list">
                                    {items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Tools />
            <Technologies />
        </section>
    )
}

export default Main
