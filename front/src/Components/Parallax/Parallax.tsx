import { Fragment } from "react";
import "./Parallax.css";
import one from "../../assets/Parallax-image/firstForest.png";
import two from "../../assets/Parallax-image/secondForest.png";
import three from "../../assets/Parallax-image/threeForest.png";
import four from "../../assets/Parallax-image/fourForest.png";
import five from "../../assets/Parallax-image/fiveForest.png";

const Parallax = () => {
    return (
        <Fragment>
            <section className="parallax">
                <img src={one} alt="Premier plan" />
                <img src={two} alt="Second plan" />
                <img src={three} alt="Troisième plan" />
                <img src={four} alt="Quatrième plan" />
                <img src={five} alt="Cinquième plan" />
            </section>
        </Fragment>
    )
}
export default Parallax;