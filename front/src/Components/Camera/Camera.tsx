import AOS from 'aos';
import 'aos/dist/aos.css';
import camera from '../../assets/IMG_0270.png';
import { Fragment, useEffect } from 'react';
import './Camera.css';

const Camera = () => {
    useEffect (() => {
        AOS.init();
    }, [])
    return (
        <Fragment>
            <div className='h-[500px] bg-black'></div>
            <div className='bg-black shadowCamera'>
                <img src={camera} alt="Camera picture" data-aos="zoom-in-down" data-aos-duration="2000" className='picture-camera'/>
            </div>
        </Fragment>
    )
}
export default Camera;