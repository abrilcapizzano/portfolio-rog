import React from "react";
import "./animation.css";
import video1 from "./3d.mp4"
import video2 from "./relax.mp4"
function Videos () {
    return(  
<div>
    <div>
            <div className="contenedor-videos">
            <video className="videos" loop autoPlay muted><source src={video2} type="video/mp4" /></video>
            <video className="videos"  loop autoPlay muted><source src={video1} type="video/mp4" /></video>
            </div>
            </div>
    </div>
    )
}

export default Videos;