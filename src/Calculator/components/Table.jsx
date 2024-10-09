import React from 'react';

export default function TablaFinsus() {
  const tableFinsusStyle = {
    width: '100%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    textAlign: 'left',
    borderRadius: '20px',
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
  };

  const divWidthFinsus = {
    width: '100%',
  };

  const thFinsusStyle = {
    padding: '20px',
    backgroundColor: '#23223F',
    color: '#FFFFFF',
    textAlign: 'center',
  };

  const th2FinsusStyle = {
    padding: '20px',
    backgroundColor: '#ff5f54',
    color: '#FFFFFF',
    textAlign: 'center',
  };

  const th3FinsusStyle = {
    padding: '20px',
    backgroundColor: '#FFFFF',
    borderTopLeftRadius: '20px',
    textAlign: 'center',
  };

  const th4FinsusStyle = {
    padding: '20px',
    backgroundColor: '#23223F',
    color: '#FFFFFF',
    borderTopRightRadius: '20px',
    textAlign: 'center',
  };

  const tdFinsusStyle = {
    padding: '25px',
    borderBottom: '0.5px solid #F0EDED',
  };

  const td2FinsusStyle = {
    padding: '25px',
    borderBottom: '1px solid #F0EDED',
    boxShadow: '10px 3px 3px rgba(255, 95, 84, 0.8)',
  };

  const td3FinsusStyle = {
    padding: '25px',
    borderBottom: '1px solid #F0EDED',
    boxShadow: '10px 0px 3px rgba(255, 95, 84, 0.8)',
  };

  return (
    <div style={divWidthFinsus}>
      <table style={tableFinsusStyle}>
        <tr>
          <th style={th3FinsusStyle}></th>
          <th style={thFinsusStyle}>Interés simple</th>
          <th style={th2FinsusStyle}>Interés compuesto</th>
          <th style={th4FinsusStyle}>Diferencia</th>
        </tr>
        <tbody>
          <tr>
            <td style={tdFinsusStyle}>Valor inicial</td>
            <td style={tdFinsusStyle}></td>
            <td style={td3FinsusStyle}></td>
            <td style={tdFinsusStyle}></td>
          </tr>
          <tr>
            <td style={tdFinsusStyle}>
              Intereses generados al final del periodo
            </td>
            <td style={tdFinsusStyle}></td>
            <td style={td3FinsusStyle}></td>
            <td style={tdFinsusStyle}></td>
          </tr>
          <tr>
            <td style={tdFinsusStyle}>% de crecimiento del dinero</td>
            <td style={tdFinsusStyle}></td>
            <td style={td3FinsusStyle}></td>
            <td style={tdFinsusStyle}></td>
          </tr>
          <tr>
            <td style={tdFinsusStyle}>Monto final</td>
            <td style={tdFinsusStyle}></td>
            <td style={td2FinsusStyle}></td>
            <td style={tdFinsusStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
