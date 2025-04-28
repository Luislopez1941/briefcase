import React from 'react'
import './styles/Experience.css'
import Zustand from '../../assets/briefcase/svgs/zustand.svg'


import github from '../../assets/briefcase/svgs/github-dark.svg'
import git from '../../assets/briefcase/svgs/git.svg'
import ReactSvg from '../../assets/briefcase/svgs/react.svg'
import Angular from '../../assets/briefcase/svgs/angular.svg'
// import Nextjs from '../../assets/briefcase/svgs/nextjs_icon_dark.svg'
// import Vue from '../../assets/briefcase/svgs/vue.svg'
import Pinia from '../../assets/briefcase/svgs/pinia.svg'
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
                    <p translate="no">Tripnow</p>
                    <p translate="no">Front-End</p>
                    <div>
                        <p>I refactored and optimized the front-end code, updated the frameworks to the latest versions, and resolved the tickets assigned to me.</p>
                    </div>
                    <div className='technologies___card_container'>
                        <img src={github} width={35} alt="icono de react" />
                        <img src={git} width={35} alt="icono de react" />
                        <img src={CSS} width={30} alt="icono de css" />
                        <img src={Bootstrap} width={40} alt="icono de boostrap" />
                        <img src={JavaScript} width={30} alt="icono de javascript" />
                    </div>
                </div>
                <div className='experience__card'>
                    <p translate="no">Hiplot</p>
                    <p translate="no">Front-End</p>
                    <div>
                        <p>I lead the front-end development of the company's internal projects.</p>
                        <div className='technologies___card_container'>
                            <img src={github} width={35} alt="icono de react" />
                            <img src={git} width={35} alt="icono de react" />
                            <img src={ReactSvg} width={35} alt="icono de react" />
                            <img src={Redux} width={30} alt="icono de redux" />
                            <img src={Angular} width={30} alt="icono de angular" />
                            <img src={Zustand} width={40} alt="" />
                            <img src={CSS} width={30} alt="icono de css" />
                            <img src={Bootstrap} width={40} alt="icono de boostrap" />
                            <img src={TypeScript} width={30} alt="icono de typescript" />
                            <img src={JavaScript} width={30} alt="icono de javascript" />
                        </div>
                    </div>
                </div>

                <div className='experience__card'>
                    <div className='row__one'>
                        <p>Proyect</p>
                        <p className='ecommerce' translate="no">CRM GYM</p>
                    </div>
                    <div className='crm__gym'>

                    </div>
                    <p className='type'>Full Stack</p>
                    <div className='technologies___card_container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width='35' viewBox="0 0 24 24" fill="#008fe2">
                            <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
                        </svg>
                        <svg viewBox="0 0 256 221" width='30' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883" /><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883" /><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E" /></svg>
                        <img src={Pinia} width={30} alt="icono de redux" />
                        <img src={CSS} width={30} alt="icono de css" />
                        <img src={TypeScript} width={30} alt="icono de typescript" />
                        <img src={NestJS} width={30} alt="icono de nestjs" />
                        <svg viewBox="0 0 256 310" width="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252" width='40'><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" /><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" /></svg>
                        <img src={Cloudflare} width={40} alt="icono de cloudflare" />
                    </div>
                    <div>
                        <p>
                            I was responsible for conducting the entire logistics analysis to create the database and, from there, continue with the development of the back-end and front-end.
                            Additionally, I handled the creation of the development and production environments, as well as cloud security.
                        </p>
                    </div>
                    <div className='btns__card_container'>
                        <a href="https://crm-gym.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">See CRM</a>
                        {/* <button className='btn__card'>See Ecommer</button> */}
                        <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
                    </div>
                </div>
                <div className='experience__card'>
                    <div className='row__one'>
                        <p>Frelance</p>
                        <p className='ecommerce'>Ecommerce</p>
                    </div>
                    <div className='point-of-sale'>

                    </div>
                    <p className='type'>Full Stack</p>
                    <div className='technologies___card_container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width='35' viewBox="0 0 24 24" fill="#008fe2">
                            <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
                        </svg>
                        <img src={ReactSvg} width={35} alt="icono de react" />
                        <img src={Redux} width={30} alt="icono de redux" />
                        <img src={CSS} width={30} alt="icono de css" />
                        <img src={TypeScript} width={30} alt="icono de typescript" />
                        <img src={NestJS} width={30} alt="icono de nestjs" />
                        <svg viewBox="0 0 256 310" width="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252" width='40'><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" /><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" /></svg>
                        <img src={Cloudflare} width={40} alt="icono de cloudflare" />
                    </div>
                    <div>
                        <p>
                            Me encargué de realizar todo el análisis de la logística para crear la base de datos y, a partir de ahí, continuar con la creación del back y del frontend.
                            Además, me encargué de crear el entorno de desarrollo y de producción y de la seguridad en la nube.
                        </p>
                    </div>
                    <div className='btns__card_container'>
                        <a href="https://point-of-sale-taupe-eight.vercel.app" className="btn__card" target="_blank" rel="noopener noreferrer">Ver CRM</a>
                        {/* <button className='btn__card'>Ver Ecommer</button> */}
                        <a href="https://back-ecommerce-bjt2.onrender.com" className="btn__card" target="_blank" rel="noopener noreferrer">Doc Back</a>
                    </div>
                </div>
                <div className='experience__card'>
                    <div className='row__one'>
                        <p>Proyect</p>
                        <p className='crm' translate="no">Proservicios</p>
                    </div>
                    <div className='proservicios'>
                    </div>
                    <p className='type'>Full Stack</p>
                    <div className='technologies___card_container'>
                        <svg width='35' height={35} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" ><mask id="mask0_408_139" style={{
                            maskType: "alpha"
                        }} maskUnits="userSpaceOnUse" x={0} y={0} width={180} height={180}><circle cx={90} cy={90} r={90} fill="black" /></mask><g mask="url(#mask0_408_139)"><circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} /><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" /><rect x={115} y={54} width={12} height={72} fill="url(#paint1_linear_408_139)" /></g><defs><linearGradient id="paint0_linear_408_139" x1={109} y1={116.5} x2={144.5} y2={160.5} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient><linearGradient id="paint1_linear_408_139" x1={121} y1={54} x2={120.799} y2={106.875} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient></defs></svg>
                        <img width={40} src={Zustand} alt="" />
                        <img src={CSS} width={30} alt="icono de css" />
                        <svg xmlns="http://www.w3.org/2000/svg" width='35' viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z" /><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252" width='40'><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" /><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" /></svg>
                        <img src={Cloudflare} width={40} alt="icono de cloudflare" />
                    </div>
                    <div>
                        <p>
                            Likewise, I was in charge of carrying out all the logistics analysis to start with the database, back, front, development and production.
                        </p>
                    </div>
                    <div className='btns__card_container'>
                        <a href="https://github.com/Luislopez1941" className="btn__card" target="_blank" rel="noopener noreferrer">See CRM</a>
                        {/* <button className='btn__card'>See Ecommer</button> */}
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
