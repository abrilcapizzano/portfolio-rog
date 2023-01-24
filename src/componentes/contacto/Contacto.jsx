import React from "react";
import "./contacto.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import wpp from "./whatsapp.svg";
import { useForm, ValidationError } from '@formspree/react';
function Contacto() {
  const [state, handleSubmit] = useForm("mnqynebq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contacto">
        <h2>Would you like to contact me?</h2>
        <h5>Feel free to send me an e-mail or a Whatsapp Message</h5>
        <a href="https://wa.me/541160195353/" target="_blank" rel="noreferrer">
<img src={wpp} className="icon" alt="Whatsapp Logo" />
 </a>
      <form className="form-style-6" onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Type your message (:"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function App() {
  return (
    <Contacto/>
  );
}
export default App;