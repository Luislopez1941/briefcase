import React from 'react'
import './Main.css'
import Technologies from './Technologies'
import nmanp from '../../assets/briefcase/sitelogo-2x.png'
import cedulaPDF from '../../assets/briefcase/pdfs/LOCJ010420HCSPRRA3.pdf'

const Main: React.FC = () => {
    return (
        <section className="main">
            <section className="about__company">
                <div className="about__company_text">
                    <h2>About me</h2>
                </div>
                <div className="container__bout-company">
                    <div>
                        <p className='title__hero'>Full Stack</p>
                        <p className='title__hero uxui'>UX/UI designer</p>
                    </div>
                    <p className='content'>
                        I am a self-taught and autonomous person, specialized in web and mobile application development,
                        I have participated in hackathons, managing to stand out and obtain recognition for my performance. I am part of development communities
                        where I collaborate by helping beginners or students, reviewing their code to identify areas of improvement, which allows me to continue learning and perfecting my skills.
                    </p>
                </div>
            </section>
            <section className="education">
                <div className="education_text">
                    <h2>Education</h2>
                </div>
                <div className="container__education">
                    <div>
                        <p className='title-ut'>Technological University of Cancun</p>
                        <div className='account'>
                            <p className='text-ut'>Bachelor of Accounting</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </div>
                        <button
                            className="button-title-account" onClick={() => window.open(cedulaPDF, '_blank')}>
                            See ID
                        </button>
                    </div>
                    <div>
                        <p className='title-utel'>Latin American Technological University Online</p>
                        <div className='account'>
                            <p className='text-ut'>Computer systems engineer</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className='education__additional'>Additionally, I have completed various diplomas and online training programs.</p>
                    </div>
                </div>
            </section>
            <section className='quantum__computing'>
                <div className="quantum__computing_text">
                    <h2>Quantum computing</h2>
                </div>
                <div className="container__quantum-computing_text">
                    {/* <div>
                        <p className='title__hero'>Matemáticas</p>
                        <p className='title__hero'>Física Cuántica</p>
                        <p className='title__hero'>Programación Cuántica</p>
                    </div> */}
                    <p className='content'>
                        My interest in quantum computing goes beyond the basics. I have adopted a structured approach to delve deeper into this field and make it part of my personal projects.
                    </p>
                </div>
               
            </section>
            <Technologies />

        </section>
    )
}

export default Main
