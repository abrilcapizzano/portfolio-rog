import './App.css';
import Navegador from './componentes/navegador/Navegador.jsx';
import {Route, Routes} from "react-router-dom"
import About from './componentes/about/About.jsx';
import Portfolio from './componentes/portfolio/Portfolio.jsx';
function App() {
  return (
<div className="App">
<Navegador />
<Routes>
<Route path='/about' element={<About/> }/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/contacto' element={<p>Contacto</p>}/>
 </Routes>


    </div>
  );
}

export default App;
