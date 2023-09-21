import './Me.css';
import portrait from '../../assets/portrait.jpg';
import gradient from '../../assets/angryimg.png';
const Me = () => {
    return (
        <>
            <div className="bg-white lap:mt-[60vw] w-[300vw] h-[20vw] ph:mt-[90vw]">
                {/* <img src={gradient} alt="" className='lap:mt-[60vw] w-[300vw] h-[20vw] ph:mt-[90vw]'/> */}
                <h1 className="text-center">Tho<span>m</span>as MEY<span>E</span>T</h1>
                <div className='lap:flex'>
                    {/* <img src={portrait} alt="portrait" className='w-40' /> */}
                    <p>Je suis étudiant à la web@cademie by Epitech</p>
                </div>
            </div>
        </>
    )
}
export default Me;