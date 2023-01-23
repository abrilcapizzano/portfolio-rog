import React from "react";
import "./portfolio.css";
import foto1 from "./sunset.jpg";
import foto2 from "./landscape.png"
import foto3 from "./cat.jpg"
import foto4 from "./tokio.png"
import foto5 from "./astronaut.jpg"
import foto6 from "./palace.png"
function Cards () {
    return(  
<div className="gallery">
<img src={foto1} alt="Foto intro" />
<img src={foto3} alt="Foto intro" />
<img src={foto6} alt="Foto intro" />
<img src={foto1} alt="Foto intro" />
<img src={foto2} alt="Foto intro" />
<img src={foto3} alt="Foto intro" />
<img src={foto6} alt="Foto intro" />
<img src={foto1} alt="Foto intro" />
<img src={foto6} alt="Foto intro" />
<img src={foto2} alt="Foto intro" />
<img src={foto5} alt="Foto intro" />
<img src={foto1} alt="Foto intro" />
<img src={foto2} alt="Foto intro" />
<img src={foto6} alt="Foto intro" />
<img src={foto5} alt="Foto intro" />
<img src={foto1} alt="Foto intro" />
<img src={foto2} alt="Foto intro" />
<img src={foto6} alt="Foto intro" />
<img src={foto4} alt="Foto intro" />
<img src={foto5} alt="Foto intro" />


</div>
    )
}

export default Cards;