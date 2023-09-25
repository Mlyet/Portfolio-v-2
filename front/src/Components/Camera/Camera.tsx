import { Fragment } from "react"
import camera from "../../assets/IMG_0270.png"

const Camera = () => {
    return (
        <Fragment>
            <div className="bg-gray-300">
                <img src={camera} alt="camera picture" />
            </div>
        </Fragment>
    )
}
export default Camera;