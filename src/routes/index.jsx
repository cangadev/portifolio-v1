import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
//import NotFound from "../Pages/404";

function Rout() { 
  return (
    <Routes>
      <Route exact path="/" component={<Home/>} />
     { /*<Route path="*" component={<NotFound/>} />*/}
    </Routes>
  );
}

export default Rout;
