import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row">

          {/* Información */}
          <div className="col-md-4 mb-3">
            <h5>Tienda Online</h5>
            <p>
              Carrito de compras de productos alimenticios.
              Calidad y frescura garantizada.
            </p>
          </div>

          {/* Enlaces */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="/articulos" className="text-light text-decoration-none">Artículos</a></li>
              <li><a href="/props" className="text-light text-decoration-none">Props</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p>Email: contacto@tienda.com</p>
            <p>Tel: +57 300 000 0000</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <small>© 2026 By Daniel Cardona - Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};