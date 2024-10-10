import React from "react";

export default function TablaFinsus() {
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
            <td className="td-finsus"></td>
            <td className="td3-finsus"></td>
            <td className="td-finsus"></td>
          </tr>
          <tr>
            <td className="td-finsus">
              Intereses generados al final del periodo
            </td>
            <td className="td-finsus"></td>
            <td className="td3-finsus"></td>
            <td className="td-finsus"></td>
          </tr>
          <tr>
            <td className="td-finsus">% de crecimiento del dinero</td>
            <td className="td-finsus"></td>
            <td className="td3-finsus"></td>
            <td className="td-finsus"></td>
          </tr>
          <tr>
            <td className="td-finsus">Monto final</td>
            <td className="td-finsus"></td>
            <td className="td2-finsus"></td>
            <td className="td-finsus"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
