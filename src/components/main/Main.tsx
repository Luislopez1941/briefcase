import React from 'react'
import './Main.css'
import Technologies from './Technologies'

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
        <Technologies />
        
    </section>
  )
}

export default Main
