import React from "react";
import "./portfolio.css";
import foto1 from "./drinksandfood.jpg";
import foto2 from "./foguete.jpg"
import foto3 from "./heart.jpg"
import foto4 from "./heythere.png";
import foto5 from "./lighthouse.jpg"
import foto6 from "./plantas.jpg"
import foto7 from "./sorvete.png"
import foto8 from "./unicornio.png"
function Cards () {
    return(  
<div>
    <div>
        <div className="galeria">
            <a href={foto1}>
                <img src={foto1} alt="Drinks and Food"/>
            </a>
            <a href={foto2}>
                <img src={foto2} alt=""/>
            </a>
            <a href={foto3}>
                <img src={foto3} alt=""/>
            </a>
            <a href={foto4}>
                <img src={foto4} alt=""/>
            </a>
            <a href={foto5}>
                <img src={foto5} alt=""/>
            </a>
            <a href={foto6}>
                <img src={foto6} alt=""/>
            </a>
        <a href={foto7} >
                <img src={foto7} alt=""/>
            </a>
            <a href={foto8} >
                <img src={foto8}  alt=""/>
            </a>
            </div>
    </div>
</div>
    )
}

export default Cards;