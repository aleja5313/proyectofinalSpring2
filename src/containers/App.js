import React from 'react';
import Question1 from '../components/Question1'
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import Question4 from "../components/Question4";
import Question5 from "../components/Question5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Estadistica from '../components/Estadistica';
import FirstPage from '../components/FirstPage';
import Login from '../components/Login';
import { Form } from '../components/Form';
import Perfil from '../components/Perfil';


;



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={< Form/>} />
        <Route path="/question1" element={<Question1/>}/>
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/estadistica" element={<Estadistica />} />
        <Route path="*" element={<Navigate to="/form"/>}/>
        

      </Routes>
      <NavBar />  
    </BrowserRouter>
  );
}

export default App;

