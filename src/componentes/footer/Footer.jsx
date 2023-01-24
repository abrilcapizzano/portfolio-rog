import React from "react";
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import insta from "./instagram.svg";
import linkedin from "./linkedin.svg";
import wpp from "./whatsapp.svg";

function Footer() {
  return (
<div>
<footer>
        <h3>Fulana de Tal</h3>
<div className="redes">
        <h4>Social Media:</h4>
        <article>
        <img src={insta} className="icon" alt="Instagram Logo" />
        <img src={linkedin} className="icon" alt="Linkedin Logo" />
        </article>
        </div>

<div className="contact">
<h4>Contact:</h4>
<p>
<a href="https://wa.me/541160195353/" target="_blank" rel="noreferrer">
<img src={wpp} className="icon" alt="Whatsapp Logo" />
 </a></p>
</div>        
</footer>
</div>
  );
}

export default Footer;