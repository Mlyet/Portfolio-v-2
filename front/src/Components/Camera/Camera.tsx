import { useEffect } from "react";
import "./Camera.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Camera = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
        <div className="container" data-aos="zoom-in-down">
            <div className='camera-top'>
                <div className='flash'>
                <div className='light'></div>
                </div>
            </div>
            <div className='camera-mid'>
                <div className='lens'></div>
            </div>
        </div>
        </>
    )
}
export default Camera;