import { Fragment } from "react";
import "./Presentation.css";
import me from"../../assets/portrait.jpg"

const Presentation = () => {
    return (
        <Fragment>
            {/* <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1">
                <g  id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                <path id="Path-1" className="path visible" fill="none" stroke="#db5862" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>
                <path className="dashed" fill="none" stroke="white" stroke-width="8" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>   
                
                <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#db5862">
                    <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
                    <mpath  />
                    </animateMotion>
                </polyline>

                </g>
            </svg> */}
            <section className="two">
                <div className="divMe">
                    <h1 className="text-center mt-3">A propos de moi</h1>
                </div>
                <div className= "auto md:flex justify center gap-6 meImg content-between">
                        <img src={me}  alt='Thomas' className="img md:h-[320px] md:w-[230px] xs:h-[120px] xs:w-[30px] z-10"/>
                    <div className= "grid cols-2 gap-4 textMe">
                        Je suis actuellement étudiant à la web@cademie en deuxième années <br />
                        en préparation d'un titre professionnel / Bac+2:<br />
                        Intégrateur / Développeur web.
                        <div className="auto flex justify center gap-6">
                            <a href='https://www.linkedin.com/in/thomas-meyet-92695b226/' className="grid grid cols-6 gap-4" target="_blank" rel="noreferrer" >
                                {/* <img src={linkedin} alt='icone de linkedin' className='logoReseaux'/> */}
                            </a>
                        
                            {/* <a href={cvfile} className="grid grid cols-6 gap-4" download target="_blank" rel="noreferrer"> */}
                                {/* <img src={cv} alt='icone de linkedin' className='logoReseaux'/> */}
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}
export default Presentation;