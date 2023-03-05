import './App.css';
import Navegador from './componentes/navegador/Navegador.jsx';
import {Route, Routes} from "react-router-dom"
import About from './componentes/about/About.jsx';
import Portfolio from './componentes/portfolio/Portfolio.jsx';
import Animation from './componentes/animations/Animation.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Contacto from './componentes/contacto/Contacto.jsx';
function App() {
  return (
<div className="App">
<Navegador />
<Routes>
<Route path='/about' element={<About/> }/>
<Route path='/' element={<Portfolio/>}/>
<Route path='/animation' element={<Animation/>}/>
<Route path='/contact' element={<Contacto/>}/>
 </Routes>


<Footer />
    </div>
  );
}

export default App;
