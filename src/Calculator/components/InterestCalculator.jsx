import React from "react";
import "../../App.css";
import "./calculator.css"

export default function IntenerestCalculator() {
  return (
    <>
      <div>
        <h2 className="subtitle">
          Descubre cómo el interés compuesto hace su magia*
        </h2>
      </div>

      <div className="container">
        <div className="form">

            <div className="form-div">
              <label>Ingresa con cuánto dinero podrías hacer tu primera inversión:</label>
            </div>
            
            <div className="form-div">
              <label>Selecciona el tiempo que estará invertido tu dinero:</label>
            </div>

            <div className="form-div">
              <label>Elije cómo recibir el pago de rendimientos</label>
            </div>

            <div className="form-div">
              <label>¿Cuánto le vas a depositar al mes?</label>
            </div>

            <div className="form-div">
              <label>
                Si consideras sólo los intereses del monto inicial, no podrías
                realizar interés compuesto debido a que el monto mínimo de inversión
                es de $100, sin embargo si realizas inversiones recurrentes por $100
                o más, estarías generando interés compuesto por un monto mayor al
                calculado inicialmente
              </label>
            </div>

        </div>

        <div className="cards-container">
          <div className="card">
            <div>0%</div>
            <div>Tasa de interés anual</div>
          </div>

          <div className="card">
            <div>0</div>
            <div>Veces que se debe aplicar el interés compuesto durante el año*</div>
          </div>

          <div className="card">
            <div>0</div>
            <div>Número de años (mínimo 1 año)</div>
          </div>
          <div className="card">
            <div>0</div>
            <div>Aportaciones recurrentes mensuales</div>
          </div>
        </div>
      </div>
    </>
  );
}
