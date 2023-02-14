import React from "react";
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "./icone-raquel.png";


function Intro () {
    return(  
<>
<img src={icon} className="foto-cv" alt="Foto intro" />
<h1>Raquel de Oliveira</h1>
<div className="contenedor">
<article className="experiencias">
    <p className="titulo1">Image and Sound Design student at UBA (University of Buenos Aires)</p>
</article>
</div>
</>
    )
}

export default Intro;