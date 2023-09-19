import logo from "../../../public/logo.png";

const Header = () => {
    return (
        <>
            <div className="bg-[#000000]">
                <div>
                    <div className="md:flex items-center mt-3 border">
                        <img src={logo} alt="Logo de Thomas" className=" md:w-16 md:h-10 sm:w-10 sm:h-10  border"/>
                        <p className="text-center border">P<span>or</span>t<span>f</span>olio</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Header;