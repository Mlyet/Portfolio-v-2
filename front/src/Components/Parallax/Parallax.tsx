import { Fragment, useEffect } from "react";
import "./Parallax.css";
import background from "../../assets/Parallax-image/background.png";
import one from "../../assets/Parallax-image/firstForest.png";
import two from "../../assets/Parallax-image/secondForest.png";
import three from "../../assets/Parallax-image/threeForest.png";
import four from "../../assets/Parallax-image/fourForest.png";
import five from "../../assets/Parallax-image/fiveForest.png";

const Parallax = () => {
    useEffect (() => {
        let OneMap = document.getElementById("OneMapId");
        let TwoMap = document.getElementById("TwoMapId");
        let ThreeMap = document.getElementById("ThreeMapId");
        let FourMap = document.getElementById("FourMapId");
        let FiveMap = document.getElementById("FiveMapId");
    
        window.addEventListener('scroll', () => {
            let value = window.scrollY;
    
            OneMap?.style && (OneMap.style.top = value * -1 + 'px');
            TwoMap?.style && (TwoMap.style.top = value * -0.5 + 'px');
            OneMap?.style && (OneMap.style.zIndex = value * 2 );
            TwoMap?.style && (TwoMap.style.zIndex = value * 1);
        })
    }, [])
    return (
        <Fragment>
            <section className="parallax">
                <img src={background} alt="background" className="" />
                <img src={one} alt="Premier plan" id="OneMapId"/>
                <img src={two} alt="Second plan" id="TwoMapId"/>
                <img src={three} alt="Troisième plan" id="ThreeMapId"/>
                <img src={four} alt="Quatrième plan" id="FourMapId" className="FourMapId"/>
                <img src={five} alt="Cinquième plan" id="FiveMapId" className="FiveMapId"/>
            </section>
        </Fragment>
    )
}
export default Parallax;