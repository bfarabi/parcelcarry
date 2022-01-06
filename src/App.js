import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import {

  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Enterprice from './Components/Enterprice/Enterprice';
import C2c from './Components/C2C/C2c';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter >
    <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/enterprise" element={<Enterprice></Enterprice>} />
      <Route path="/c2c" element={<C2c></C2c>} />
      <Route path="/login" element={<Login></Login>} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
