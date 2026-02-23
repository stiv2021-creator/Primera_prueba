import React from "react";

export const Content = () => {

  const productos = [
    { id: 1, nombre: "Hamburguesa Doble", precio: 18000, imagen: "/img/hamburguesa.jpg" },
    { id: 2, nombre: "Pizza Personal", precio: 22000, imagen: "/img/pizza.webp" },
    { id: 3, nombre: "Perro Especial", precio: 12000, imagen: "/img/perro.jpg" },
    { id: 4, nombre: "Papas Grandes", precio: 9000, imagen: "/img/papas_grandes.jpg" },
    { id: 5, nombre: "Salchipapa", precio: 15000, imagen: "/img/salchipapa.jpg" },
  ];

  return (
    <div className="container mt-4">
      <div className="row">

        {/* PRODUCTOS */}
        <div className="col-lg-8">
          <h3 className="mb-4">Comida Rápida</h3>
          <div className="row">
            {productos.map((producto) => (
              <div key={producto.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">

                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5>{producto.nombre}</h5>
                    <p className="fw-bold">
                      COP ${producto.precio.toLocaleString()}
                    </p>
                    <button className="btn btn-success mt-auto">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARRITO (estático) */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">🛒 Carrito</h4>

              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Hamburguesa Doble</span>
                  <strong>COP $18.000</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Papas Grandes</span>
                  <strong>COP $9.000</strong>
                </li>
              </ul>

              <h5>Total: COP $27.000</h5>

              <button className="btn btn-primary w-100 mt-2">
                Finalizar Compra
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};