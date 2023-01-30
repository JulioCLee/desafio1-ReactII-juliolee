import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
