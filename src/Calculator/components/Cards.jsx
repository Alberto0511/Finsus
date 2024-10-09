import React from "react";
// import "../../App.css";
// import "./cards.css";

export default function Cards() {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <div className="card-header">0%</div>
          <div className="card-body">Tasa de interés anual</div>
        </div>

        <div className="card">
          <div className="card-header">0</div>
          <div className="card-body">
            Veces que se debe aplicar el interés compuesto durante el año*
          </div>
        </div>

        <div className="card">
          <div className="card-header">0</div>
          <div className="card-body">Número de años (mínimo 1 año)</div>
        </div>
        
        <div className="card">
          <div className="card-header">0</div>
          <div className="card-body">Aportaciones recurrentes mensuales</div>
        </div>
      </div>
    </>
  );
}
