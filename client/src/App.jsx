import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import axios from "axios";
import {useAuth} from "./context/AuthContext.jsx";
import ProtectedRoute from "./protectedRoute/ProtectedRoute.jsx";
import {API_URL} from "./config.js";

function App() {

    axios.defaults.baseURL = API_URL;
    axios.defaults.withCredentials = true;

  return (
    <div className="h-screen flex items-center justify-center">
      <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home/>}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
