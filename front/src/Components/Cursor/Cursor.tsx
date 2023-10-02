import { Fragment} from "react";
import "./Cursor.css";

const Cursor = () => {
    const dot = document.querySelector("[data-cursor-dot]") as HTMLElement | null;
    const outline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", (event) => {
        const postX = event.clientX;
        const postY = event.clientY;

        dot?.style && (dot.style.left = `${postX}px`);
        dot?.style && (dot.style.top = `${postY}px`);

        outline?.animate({
            left: `${postX}px`,
            top: `${postY}px`,
        }, {duration: 5000, fill: "forwards"});


    })
    return (
        <Fragment>
            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-dot-outline" data-cursor-outline></div>
        </Fragment>
    )
}
export default Cursor;