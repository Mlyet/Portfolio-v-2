import AOS from 'aos';
import 'aos/dist/aos.css';
import camera from '../../assets/IMG_0270.png';
import { useEffect } from 'react';
import './Camera.css';

const Camera = () => {
    useEffect (() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='h-[500px]'></div>
            <img src={camera} alt="Camera picture" data-aos="zoom-in-down" data-aos-duration="2000" className='picture-camera'/>
        </>
    )
}
export default Camera;