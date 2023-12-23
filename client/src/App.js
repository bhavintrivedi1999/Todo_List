import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home";
import Peers from "./components/Peers"
import SignIn from "./components/SignIn"
import Signup from "./components/Signup"

function App() {
  // On click Links should route to respective components
  return (
    <BrowserRouter>
      <nav>
        <Link to='/home'>Home</Link>|||
        <Link to='/peers'>Peers</Link>|||
        <Link to='/signin'>SignIn</Link>|||
        <Link to='/signup'>SignUp</Link>|||
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/peers' element={<Peers/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
