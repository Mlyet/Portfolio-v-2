import { Fragment } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
const Header = () => {
    return (
        <Fragment>
            <div className="bg-[#000000]">
                <div>
                    <div className="tab:flex items-center p-6">
                        <img src={logo} alt="Logo de Thomas" className="tab:w-16 tab:h-10 ph:w-5 ph:h-5 ph:hidden tab:block"/>
                        <p className="neon text-center tab:ml-[35%] lap:ml-[40%]">P<span>or</span>t<span>f</span>olio</p>
                    </div>
                    <div className="arrow ph:mt-[50%] lap:mt-[40%] tab:mt-[70%] items-center">
                        <span className="ph:h-[5vw] ph:w-[5vw] lap:w-[3vw] lap:h-[3vw]"></span>
                        <span className="ph:h-[5vw] ph:w-[5vw] lap:w-[3vw] lap:h-[3vw]"></span>
                        <span className="ph:h-[5vw] ph:w-[5vw] lap:w-[3vw] lap:h-[3vw]"></span>
                    </div>
                </div>
            </div> 
        </Fragment>
    )
}
export default Header;