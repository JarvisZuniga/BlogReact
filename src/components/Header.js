import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*<!-- LOGO -->*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          {/*<!-- MENU -->*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeclassname="active" >Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeclassname="active" >Blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario" activeclassname="active" >Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/peliculas" activeclassname="active" >Peliculas</NavLink>
              </li>
              <li>
                <NavLink to="/pruebas/Jarvis"activeclassname="active" >Pagina 2</NavLink>
              </li>
            </ul>
          </nav>

          {/*<!--LIMPIAR FLOTADOS-->*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
