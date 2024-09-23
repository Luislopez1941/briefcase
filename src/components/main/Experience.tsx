import React from 'react'
import './styles/Experience.css'


import github from '../../assets/briefcase/svgs/github-dark.svg'
import git from '../../assets/briefcase/svgs/git.svg'
import ReactSvg from '../../assets/briefcase/svgs/react.svg'
import Angular from '../../assets/briefcase/svgs/angular.svg'
// import Nextjs from '../../assets/briefcase/svgs/nextjs_icon_dark.svg'
// import Vue from '../../assets/briefcase/svgs/vue.svg'
// import Pinia from '../../assets/briefcase/svgs/pinia.svg'
import Zustand from '../../assets/briefcase/svgs/zustand.svg'
import Redux from '../../assets/briefcase/svgs/redux.svg'
import CSS from '../../assets/briefcase/svgs/css.svg'
import Bootstrap from '../../assets/briefcase/svgs/bootstrap.svg'
// import TailwindCSS from '../../assets/briefcase/svgs/tailwindcss.svg'
import TypeScript from '../../assets/briefcase/svgs/typescript.svg'
import JavaScript from '../../assets/briefcase/svgs/javascript.svg'
import NestJS from '../../assets/briefcase/svgs/nestjs.svg'
// import Python from '../../assets/briefcase/svgs/python.svg'
// import FastAPI from '../../assets/briefcase/svgs/fastapi.svg'
// import MySQL from '../../assets/briefcase/svgs/mysql.svg'
import MongoDB from '../../assets/briefcase/svgs/mongodb.svg'
import AmazonWebServices from '../../assets/briefcase/svgs/aws.svg'
import Cloudflare from '../../assets/briefcase/svgs/cloudflare.svg'






const Experience: React.FC = () => {
  return (
    <div className='experience'>
      <p className='title__experience'>Experience</p>
      <div className='warning__title'>
        <p>Some of the projects are not yet finished</p>
      </div>
      <div className='experience__container'>
        
        <div className='experience__card'>
            <p>Tripnow</p>
            <p>Front-End</p>
            <div>
                <p>I refactored and optimized the front-end code, updated the frameworks to the latest versions, and resolved the tickets assigned to me.</p>
            </div>
            <div className='technologies___card_container'>
                <img src={github} width={35} alt="icono de react"/>
                <img src={git} width={35} alt="icono de react"/>
                <img src={CSS} width={30} alt="icono de css" />
                <img src={Bootstrap} width={40} alt="icono de boostrap" />
                <img src={JavaScript} width={30} alt="icono de javascript" />
            </div>      
        </div>
        <div className='experience__card'>
            <p>Hiplot</p>
            <p>Front-End</p>
            <div>
                <p>I lead the front-end development of the company's internal projects.</p>
                <div className='technologies___card_container'>
                    <img src={github} width={35} alt="icono de react"/>
                    <img src={git} width={35} alt="icono de react"/>
                    <img src={ReactSvg} width={35} alt="icono de react"/>
                    <img src={Angular} width={30} alt="icono de angular"/> 
                    <img src={Zustand} width={40} alt="" />
                    <img src={CSS} width={30} alt="icono de css" />
                    <img src={Bootstrap} width={40} alt="icono de boostrap" />
                    <img src={TypeScript} width={30} alt="icono de typescript" />
                    <img src={JavaScript} width={30} alt="icono de javascript" />
                </div>
            </div>
        </div>

        <div className='experience__card'>
            <div className='content__title'>
                <p>Proyect</p>
                <p className='ecommerce'>Ecommerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <img src={ReactSvg} width={35} alt="icono de react"/>
                <img src={Redux} width={30} alt="icono de redux"/>
                <img src={CSS} width={30} alt="icono de css" />
                <img src={TypeScript} width={30} alt="icono de typescript" />
                <img src={NestJS} width={30} alt="icono de nestjs" />
                <img src={AmazonWebServices} width={30} alt="icono de amazon web services" />
                <img src={MongoDB} width={15} alt="icono de mongodb" />
                <img src={Cloudflare} width={40} alt="icono de cloudflare" />
            </div>
            <div>
            <p>
                I was responsible for conducting the entire logistics analysis to create the database and, from there, continue with the development of the back-end and front-end. 
                Additionally, I handled the creation of the development and production environments, as well as cloud security.
            </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://cms-01.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">See CRM</a>
                <button className='btn__card'>See Ecommer</button>
                <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div>
        {/* <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='ecommerce'>Ecommerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <img src={Nextjs} width={35} alt="icono de nextjs"/>
                <img src={Redux} width={35} alt="icono de redux"/>
                <img src={TailwindCSS} width={35} alt="icono de tailwind"/>
                <img src={Python} width={65} alt="icono de python"/>
                <img src={FastAPI} width={35} alt="icono de fastapi"/>
                <img src={AmazonWebServices} width={30} alt="icono de amazon web services" />
                <img src={MySQL} width={35} alt="icono de mysql"/>
                <img src={Cloudflare} width={40} alt="icono de cloudflare" />
            </div>
            <div>
                <p>
                Me encargué de realizar todo el análisis de la logística para crear la base de datos y, a partir de ahí, continuar con la creación del back y del frontend.
                Además, me encargué de crear el entorno de desarrollo y de producción y de la seguridad en la nube.
                </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://cms-03.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">Ver CRM</a>
                <button className='btn__card'>Ver Ecommer</button>
                <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div> */}
        <div className='experience__card'>
            <div className='content__title'>
                <p>Proyect</p>
                <p className='crm'>Ecomerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <img src={Angular} width={30} alt="icono de angular" /> 
                <img src={CSS} width={30} alt="icono de css" />
                  <img src={TypeScript} width={30} alt="icono de typescript" />
                <img src={AmazonWebServices} width={30} alt="icono de amazon web services" />
                <img src={MongoDB} width={15} alt="icono de mongodb" />
                <img src={Cloudflare} width={40} alt="icono de cloudflare" />
            </div>
            <div>
                <p>
                    Likewise, I was in charge of carrying out all the logistics analysis to start with the database, back, front, development and production.
                </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://cms-02.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">See CRM</a>
                <button className='btn__card'>See Ecommer</button>
                <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div>
        {/* <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='crm'>Algoritmos</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <img src={Vue} width={30} alt="icono de vue" />
                <img src={Pinia} width={30} alt="icono de Pinia" />
                <img src={TailwindCSS} width={35} alt="icono de tailwind"/>
                <img src={JavaScript} width={30} alt="icono de javascript" />
                <img src={AmazonWebServices} width={30} alt="icono de amazon web services" />
                <img src={MongoDB} width={15} alt="icono de mongodb" />
                <img src={Cloudflare} width={40} alt="icono de cloudflare" />
            </div>
            <div>
                <p>
                    De igual forma, me encargué de realizar todo el análisis de la logística para comenzar con la base de datos, back, front, desarrollo y producción.
                </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://cms-04.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">Ver CRM</a>
                <button className='btn__card'>Ver Ecommer</button>
                <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div>
        <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='app'>Aplicacion movil</p>
            </div>
            <p className='type'>Full Stack</p>
            <div>
                <p>
                    De igual forma, me encargué de realizar todo el análisis de la logística para comenzar con la base de datos, back, front, desarrollo y producción.
                </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://cms-02.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">Ver CRM</a>
                <button className='btn__card'>Ver Ecommer</button>
                <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Experience
