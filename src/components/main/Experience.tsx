import React from 'react'
import './styles/Experience.css'
import Angular from '../../utils/svgs/Angular'
import AmazonWebServices from '../../utils/svgs/AWS'
import Cloudflare from '../../utils/svgs/Cloudflare'
import TypeScript from '../../utils/svgs/Typescript'
import CSS from '../../utils/svgs/CSS'
import Redux from '../../utils/svgs/Redux'
import ReactSvg from '../../utils/svgs/React'
import NestJS from '../../utils/svgs/Nestjs'
import Python from '../../utils/svgs/Python'
import MySQL from '../../utils/svgs/Mysql'
import FastAPI from '../../utils/svgs/FastAPI'
import Nextjs from '../../utils/svgs/Nextjs'
import TailwindCSS from '../../utils/svgs/Tailwind'

import MongoDB from '../../utils/svgs/MongoDB'


const Experience: React.FC = () => {
  return (
    <div className='experience'>
      <p className='title__experience'>Experiencia</p>
      <div className='experience__container'>
        
        <div className='experience__card'>
            <p>Tripnow</p>
            <p>Front-End</p>
            <div>
                <p>Reactorizava y optimizaba el codigo del front asi  mismo actualizaba los frameworks a  las ultimas
                    actualizaciones
                </p>
            </div>         
        </div>
        <div className='experience__card'>
            <p>Hiplot</p>
            <p>Front-End</p>
            <div>
                <p>
                    Me encargo de refactorizar toda la parte del front del sistema interno de la empresa y de crear los diseños para los nuevos software de la empresa. 
                    Dirijo la parte del front de los nuevos desarrollos.
                </p>
            </div>
        </div>

        <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='ecommerce'>Ecommerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <ReactSvg />
                <Redux />
                <CSS />
                <TypeScript />
                <NestJS />
                <AmazonWebServices />
                <MongoDB />
                <Cloudflare />
            </div>
            <div>
                <p>
                Me encargué de realizar todo el análisis de la logística para crear la base de datos y, a partir de ahí, continuar con la creación del back y del frontend.
                Además, me encargué de crear el entorno de desarrollo y de producción y de la seguridad en la nube.
                </p>
            </div>
            <div className='btns__card_container'>
                <a href="https://ecommer-01.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">Ver CRM</a>
                <button className='btn__card'>Ver Ecommer</button>
                <a href="https://jllc-back.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
            </div>
        </div>
        <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='ecommerce'>Ecommerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <Nextjs />
                <Redux />
                <TailwindCSS />
                <Python />
                <FastAPI />
                <AmazonWebServices />
                <MySQL />
                <Cloudflare />
            </div>
            <div>
                <p>
                Me encargué de realizar todo el análisis de la logística para crear la base de datos y, a partir de ahí, continuar con la creación del back y del frontend.
                Además, me encargué de crear el entorno de desarrollo y de producción y de la seguridad en la nube.
                </p>
            </div>
            <div className='btns__card_container'>
                <button className='btn__card'>Ver CRM</button>
                <button className='btn__card'>Ver Ecommer</button>
                <button className='btn__card'>Ver Doc. Backend</button>
            </div>
        </div>
        <div className='experience__card'>
            <div className='content__title'>
                <p>Frelance</p>
                <p className='crm'>Ecomerce</p>
            </div>
            <p className='type'>Full Stack</p>
            <div className='technologies___card_container'>
                <Angular /> 
                
                <CSS />
                <TypeScript />
                <AmazonWebServices />
                
                <MongoDB />
                <Cloudflare />
            </div>
            <div>
                <p>
                    De igual forma, me encargué de realizar todo el análisis de la logística para comenzar con la base de datos, back, front, desarrollo y producción.
                </p>
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
        </div>
      </div>
    </div>
  )
}

export default Experience
