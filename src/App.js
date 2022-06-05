import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import { Navigation } from './Components/Navigation/Navigation';
import './App.css';
import Login from "./Pages/Auth/Login/Login";
import Routing from "./Components/Router/Routing";

function App() {
  return (

    <div >
    
      <Routing/>
      
    </div>

  );
}

export default App;



