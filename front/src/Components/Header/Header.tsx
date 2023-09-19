import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="bg-[#000000]">
                <div>
                    <div className="flex items-center m-6">
                        <img src={logo} alt="Logo de Thomas" className=" md:w-16 md:h-10 smx:w-10 smx:h-9"/>
                        <p className="text-center grow">P<span>or</span>t<span>f</span>olio</p>
                    </div>
                <div className="arrow smx:mt-[50%] items-center">
                    <span className="smx:h-[5vw] smx:w-[5vw]"></span>
                    <span className="smx:h-[5vw] smx:w-[5vw]"></span>
                    <span className="smx:h-[5vw] smx:w-[5vw]"></span>
                </div>
                </div>
            </div>
        </>
    )
}
export default Header;