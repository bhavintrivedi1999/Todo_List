import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home";
import Peers from "./components/Peers"
import SignIn from "./components/SignIn"
import Signup from "./components/Signup"
import Logout from "./components/Logout";

function App() {
  // On click Links should route to respective components
  return (
    <BrowserRouter>
      <nav>
        <Link to='/home'>Home</Link>|||
        <Link to='/peers'>Peers</Link>|||
        <Link to='/signin'>SignIn</Link>|||
        <Link to='/signup'>SignUp</Link>|||
        <Link to='/logout'>LogOut</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/peers' element={<Peers/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
