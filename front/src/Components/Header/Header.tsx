import logo from "../../../public/logo.png";

const Header = () => {
    return (
        <>
            <div className="bg-[#000000]">
                <div>
                    <ul className="md:flex text-center items-center">
                        <li><img src={logo} alt="Logo de Thomas" className="w-16 h-10"/></li>
                        <li className="text-white">Portfolio</li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}
export default Header;