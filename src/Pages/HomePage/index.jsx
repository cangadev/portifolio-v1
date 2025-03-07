import React from "react";
//import Head from "../../Components/Head";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Myselfie from "../../Components/MySelfie";
import Historic from "../../Components/Historic";
import Certificado from "../../Components/Certificado/index.jsx";
import MySkill from "../../Components/MySkill";
import MyProject from "../../Components/MyProjects";
import Projectass from "../../Components/OtherProjets/index.jsx";
import Contact from "../../Components/Contact";
import Galeria from "../../Components/Galeria/index.jsx";
import Parceiros from "../../Components/Parceiros/index.jsx";
import { Footer } from "../../Components/Footer"; 

function Home() {
  return (
    <>
   {<Header/>}
    <Banner/>
    <Myselfie/>
    <Historic/>
    <Certificado/>
    <MySkill/>
    <MyProject/>
    <Projectass/>
    {<Galeria/>}
    <Parceiros/>
    <Contact/> 
    <Footer/>
    </>
  ); 
}

export default Home;
