import React from "react";
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "./icone-raquel.png";


function Intro () {
    return(  
<>
<img src={icon} className="foto-cv" alt="Foto intro" />
<h1>Raquel de Oliveira</h1>
<h2>Brasileira</h2>
<p className="texto-intro">Adobe Illustrator</p>

<div className="contenedor">
<article className="experiencias">
    <p className="titulo1">Experiencia 1</p>
    <p className="texto-exp">Lorem ipsum dolor sitciatis.</p>
</article>

<article className="experiencias">
    <p className="titulo1">Experiencia 2</p>
    <p className="texto-exp">Lorem ipsum dolor sitciatis.</p>
</article>


<article className="experiencias">
    <p className="titulo1">Experiencia 3</p>
    <p className="texto-exp">Lorem ipsum dolor sitciatis.</p>
</article>
<article className="experiencias">
    <p className="titulo1">Experiencia 4</p>
    <p className="texto-exp">Lorem ipsum dolor sitciatis.</p>
</article>

</div>
</>
    )
}

export default Intro;