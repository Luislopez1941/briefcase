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
                            I am a developer specialized in creating innovative digital solutions for both web and mobile platforms.
                        </h3>
                        <div className="btns__container_hero">
                                <a className="cta_one">Download cv</a>
                                <a className="cta_two">Contact</a>
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
