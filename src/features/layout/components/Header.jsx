import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow w-100">
      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">
          🛒 MiTienda
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/articulos" className="nav-link">
                Artículos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/props" className="nav-link">
                Props
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <NavLink to="/carrito" className="btn btn-success">
                🛍 Carrito
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};