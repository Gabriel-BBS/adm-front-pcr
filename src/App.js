// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Pedido from './pages/Pedido';
import Material from './pages/Material';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />      
        <Routes>
            <Route path='/' element={<Pedido/>}/>
            <Route path='/material' element={<Material/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
