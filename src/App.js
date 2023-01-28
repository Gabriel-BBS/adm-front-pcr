// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Pedido from './pages/Pedido';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />      
        <h1>Hello galera!</h1>
        <Routes>
            <Route path='/' element={<Pedido/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
