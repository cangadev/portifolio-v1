import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage/index.jsx";


function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes> 
    )
}
export default Rotas;
