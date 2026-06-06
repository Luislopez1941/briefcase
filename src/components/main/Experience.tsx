import React from 'react'
import './styles/Experience.css'
import ReactSvg from '../../assets/briefcase/svgs/react.svg'
import TypeScript from '../../assets/briefcase/svgs/typescript.svg'
import NestJS from '../../assets/briefcase/svgs/nestjs.svg'
import Cloudflare from '../../assets/briefcase/svgs/cloudflare.svg'

const workHistory = [
    {
        company: 'Tripnow',
        role: 'Programador Junior Frontend',
        label: 'Primer empleo',
        badgeClass: 'company-tripnow',
        description:
            'Donde inicié mi carrera profesional. Aprendí a trabajar con JavaScript, CSS y HTML en entornos reales, realizar mantenimiento de aplicaciones web, resolver tickets en producción, refactorizar código legacy y actualizar frameworks a versiones actuales.',
        stack: ['JavaScript', 'CSS', 'HTML', 'Git', 'Mantenimiento web'],
    },
    {
        company: 'Hiplot',
        role: 'Frontend Developer · Líder de ERP',
        label: 'Proyecto inhouse',
        badgeClass: 'company-hiplot',
        description:
            'Ingresé como desarrollador frontend y, por mi desempeño, me dieron la oportunidad de liderar el desarrollo frontend del ERP interno de la empresa. Dirigí proyectos inhouse con React, Redux, Angular, Zustand y TypeScript en aplicaciones de uso diario del equipo.',
        stack: ['React', 'Redux', 'Angular', 'Zustand', 'TypeScript', 'CSS'],
    },
    {
        company: 'Devhood',
        role: 'Full Stack Developer',
        label: 'Actual',
        badgeClass: 'company-devhood',
        description:
            'Me incorporé como desarrollador Full Stack, liderando proyectos con arquitecturas distintas para empresas en México. Desarrollo soluciones web y móviles de punta a punta — desde la definición técnica y el backend hasta el frontend y el despliegue en producción.',
        stack: ['React', 'React Native', 'NestJS', 'Python', 'PostgreSQL', 'MySQL'],
    },
]

const fixoraApps = [
    {
        icon: 'handyman',
        platform: 'Mobile',
        title: 'App Profesionales',
        description:
            'Para albañiles, plomeros, electricistas y oficios similares. Registro, perfil, ubicaciones de cobertura, calendario de citas, catálogo de servicios, chat en tiempo real, notificaciones y búsqueda de trabajos publicados por clientes.',
    },
    {
        icon: 'person_search',
        platform: 'Mobile',
        title: 'App Clientes',
        description:
            'Para quienes necesitan contratar un servicio. Buscan profesionales por especialidad y zona, publican trabajos abiertos, envían propuestas, agendan citas y se comunican por chat con notificaciones en tiempo real.',
    },
    {
        icon: 'dashboard_customize',
        platform: 'Web',
        title: 'ERP Fixora',
        description:
            'Núcleo web para administrar empresas, sucursales y operaciones. Cada negocio activa solo los módulos que necesita — POS, ferreterías, farmacias, manufactura, condominios — sin arrastrar funcionalidad innecesaria.',
        modules: ['Puntos de venta', 'Ferreterías', 'Farmacias', 'Manufactura', 'Condominios'],
    },
]

const erpArchitecture = [
    {
        icon: 'extension_off',
        title: 'Módulos desacoplados',
        description:
            'Arquitectura tipo Odoo: cada módulo es independiente y se activa o desactiva sin afectar al resto del sistema. Un negocio puede empezar con inventario y POS, y más adelante sumar manufactura o condominios.',
    },
    {
        icon: 'corporate_fare',
        title: 'Multi-empresa y sucursales',
        description:
            'Un mismo panel administra varias empresas y sus sucursales. Cada una con su propia configuración, usuarios, inventario y reportes — ideal para franquicias o grupos con varias ubicaciones.',
    },
    {
        icon: 'cloud_off',
        title: 'Modo offline',
        description:
            'Operación sin conexión en puntos de venta y sucursales. Los datos se guardan localmente y se sincronizan automáticamente al recuperar internet, sin perder ventas ni movimientos.',
    },
    {
        icon: 'hub',
        title: 'Diseño escalable',
        description:
            'Backend y frontend preparados para crecer: nuevos módulos, más empresas y mayor volumen de transacciones sin reescribir la base del sistema. Las apps móviles y el ERP comparten la misma API central.',
    },
]

const FIXORA_PROGRESS = 85

const Experience: React.FC = () => {
    return (
        <div className='experience page-container' id="experience">
            <div className="experience__header">
                <p className='title__experience'>Experiencia</p>
                <p className="experience__subtitle">
                    Mi trayectoria de programador junior frontend a Full Stack semi senior — liderando proyectos
                    inhouse, ERPs empresariales y soluciones web y móviles para empresas en México.
                </p>
            </div>

            <div className="experience__section">
                <h3 className="experience__section-title">Historia laboral</h3>
                <div className="work-timeline">
                    {workHistory.map(({ company, role, label, badgeClass, description, stack }, index) => (
                        <article key={company} className="work-timeline__item">
                            <div className="work-timeline__marker">
                                <span className="work-timeline__dot" />
                                {index < workHistory.length - 1 && <span className="work-timeline__line" aria-hidden="true" />}
                            </div>
                            <div className="work-timeline__card experience__card experience__card--work">
                                <div className="row__one">
                                    <p>{label}</p>
                                    <p className={`company-badge ${badgeClass}`} translate="no">{company}</p>
                                </div>
                                <p className="type">{role}</p>
                                <p className="work-timeline__description">{description}</p>
                                <div className="work-timeline__stack">
                                    {stack.map((tech) => (
                                        <span key={tech} className="work-timeline__tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="experience__section">
                <h3 className="experience__section-title">Proyectos</h3>
                <div className="experience__container experience__container--single">
                    <article className="experience__card experience__card--project">
                        <div className="row__one">
                            <p>Proyecto propio</p>
                            <div className="project-fixora-meta">
                                <p className="project-fixora" translate="no">Fixora</p>
                                <span className="project-fixora-status">{FIXORA_PROGRESS}% completado</span>
                            </div>
                        </div>

                        <div className="fixora-preview">
                            <div className="fixora-preview__content">
                                <span className="fixora-preview__logo" translate="no">Fixora</span>
                                <p className="fixora-preview__tagline">Ecosistema de servicios profesionales</p>
                            </div>
                        </div>

                        <div className="fixora-progress">
                            <div className="fixora-progress__header">
                                <span>Avance del proyecto</span>
                                <span>{FIXORA_PROGRESS}%</span>
                            </div>
                            <div className="fixora-progress__track" role="progressbar" aria-valuenow={FIXORA_PROGRESS} aria-valuemin={0} aria-valuemax={100} aria-label="Avance del proyecto Fixora">
                                <div className="fixora-progress__bar" style={{ width: `${FIXORA_PROGRESS}%` }} />
                            </div>
                        </div>

                        <p className="type">Full Stack · 3 aplicaciones</p>

                        <div className="technologies___card_container">
                            <img src={ReactSvg} width={35} alt="React" />
                            <img src={TypeScript} width={30} alt="TypeScript" />
                            <img src={NestJS} width={30} alt="NestJS" />
                            <img src={Cloudflare} width={40} alt="Cloudflare" />
                        </div>

                        <div>
                            <p>
                                Ecosistema completo que conecta oficios y clientes: dos apps móviles — una para quienes
                                prestan servicios y otra para quienes los contratan — más un ERP web diseñado para escalar
                                desde un solo negocio hasta operaciones con múltiples empresas, sucursales y módulos activos.
                            </p>
                        </div>

                        <div className="fixora-apps">
                            {fixoraApps.map(({ icon, platform, title, description, modules }) => (
                                <article key={title} className="fixora-app-card">
                                    <div className="fixora-app-card__header">
                                        <span className="material-symbols-outlined fixora-app-card__icon" aria-hidden="true">
                                            {icon}
                                        </span>
                                        <div>
                                            <h4 className="fixora-app-card__title">{title}</h4>
                                            <span className="fixora-app-card__platform">{platform}</span>
                                        </div>
                                    </div>
                                    <p className="fixora-app-card__description">{description}</p>
                                    {modules && (
                                        <div className="fixora-app-card__modules">
                                            {modules.map((mod) => (
                                                <span key={mod} className="fixora-app-card__module">{mod}</span>
                                            ))}
                                            <span className="fixora-app-card__module fixora-app-card__module--more">+ más</span>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>

                        <section className="fixora-erp-arch" aria-labelledby="fixora-erp-arch-title">
                            <div className="fixora-erp-arch__header">
                                <span className="material-symbols-outlined fixora-erp-arch__header-icon" aria-hidden="true">
                                    account_tree
                                </span>
                                <div>
                                    <h4 id="fixora-erp-arch-title" className="fixora-erp-arch__title">Arquitectura del ERP</h4>
                                    <p className="fixora-erp-arch__intro">
                                        Pensado para crecer con el negocio: módulos independientes que se encienden o apagan
                                        según el giro, soporte multi-empresa con sucursales, sincronización offline y una
                                        API central que conecta el ERP con las apps móviles de Fixora.
                                    </p>
                                </div>
                            </div>
                            <div className="fixora-erp-arch__grid">
                                {erpArchitecture.map(({ icon, title, description }) => (
                                    <article key={title} className="fixora-erp-arch__item">
                                        <span className="material-symbols-outlined fixora-erp-arch__item-icon" aria-hidden="true">
                                            {icon}
                                        </span>
                                        <div>
                                            <h5 className="fixora-erp-arch__item-title">{title}</h5>
                                            <p className="fixora-erp-arch__item-text">{description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Experience
