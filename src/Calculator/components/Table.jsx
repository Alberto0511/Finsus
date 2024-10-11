import React from "react";

// Funciones para manejar el estado (simulado)
let valorInicial = 0.0;
let valorInicial1 = 0.0;

function setValorInicial(value) {
  valorInicial = value;
}

function setValorInicial1(value) {
  valorInicial1 = value;
}

function formatNumber(input) {
  if (isNaN(input)) {
    return input;
  }

  let number = parseFloat(input);
  let fixedNumber = number.toFixed(2);
  let formattedNumber = parseFloat(fixedNumber).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
}



export default function TablaFinsus() {

  setValorInicial(valorInicial);
  setValorInicial1(valorInicial1);

  
  return (
    <div className="div-width-finsus">
      <table className="table-finsus">
        <thead>
          <tr>
            <th className="th3-finsus"></th>
            <th className="th-finsus">Interés simple</th>
            <th className="th2-finsus">Interés compuesto</th>
            <th className="th4-finsus">Diferencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-finsus">Valor inicial</td>
            <td className="td-finsus">  ${formatNumber(valorInicial)}</td>
            <td className="td3-finsus"> ${formatNumber(valorInicial)}</td>
            <td className="td-finsus">+ ${formatNumber(valorInicial)}</td>
          </tr>
          <tr>
            <td className="td-finsus">
              Intereses generados al final del periodo
            </td>
            <td className="td-finsus">+ ${formatNumber(valorInicial)}</td>
            <td className="td3-finsus">+ ${formatNumber(valorInicial)}</td>
            <td className="td-finsus">+ ${formatNumber(valorInicial)}</td>
          </tr>
          <tr>
            <td className="td-finsus">% de crecimiento del dinero</td>
            <td className="td-finsus"></td>
            <td className="td3-finsus"></td>
            <td className="td-finsus"></td>
          </tr>
          <tr>
            <td className="td-finsus">Monto final</td>
            <td className="td-finsus"> ${formatNumber(valorInicial)}</td>
            <td className="td2-finsus">+ ${formatNumber(valorInicial)}</td>
            <td className="td-finsus">+ ${formatNumber(valorInicial)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


const renderTablaFinsus = () => {
  const result = <TablaFinsus />;
  console.log(result); 
};

renderTablaFinsus();
