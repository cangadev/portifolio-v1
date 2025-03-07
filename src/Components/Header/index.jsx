import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from '../../assets/images/6840478.png';
import { Head } from "./style";

function Flexible(menu, setMenu) {
  if (menu === "flex") {
    setMenu("none");
  } else if (menu === "none") {
    setMenu("flex");
  }
}

function Header({ page }) { 
  const [menu, setMenu] = useState("none");

  const phoneNumber = "941378131";
  return (
    <Head page={page} menu={menu}>
      <a href="/">
        <img src={Img} alt="img..." />
      </a>
      <button onClick={() => Flexible(menu, setMenu)}>
        <i className="fas fa-bars" />
      </button>
      <div> 
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <a href="#Perfil"> Perfil </a>
            </li>
            <li>
              <a href="#Habilidades"> Habilidades</a>
            </li> 
            <li>
              <a href="#Projects"> Projetos </a>
            </li>
            <li>
              <a href={`tel:${phoneNumber}`}> Contacto </a>
            </li>
          </ul>
        </nav>
        <nav>
            <>
              <Link to="/login"> Entrar </Link>
            </>
        </nav>
      </div>
    </Head>
  );
}

export default Header;