import React from "react";
import { TfiMoney } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Catalogs } from "../models/catalog";
import { useInterestCalculator } from "../Hooks/useInterestCalculator";

const InterestCalculator = () => {
  const { formValues, handleChange, result } = useInterestCalculator();

  const getFilteredPaymentTypes = () => {
    const termValue = parseInt(formValues.Term, 10);
    if (termValue === 1) {
      return Catalogs.catPaymentType.filter(
        (pt) => pt.value === 1 || pt.value === 3
      );
    }
    if (termValue === 2) {
      return Catalogs.catPaymentType.filter((pt) => pt.value === 3);
    }
    if (termValue >= 3) {
      return Catalogs.catPaymentType.filter(
        (pt) => pt.value === 2 || pt.value === 3
      );
    }
    return [];
  };

  const shouldShowNumberOfPayments = () => {
    return formValues.Term !== "1";
  };

  const getDynamicAlertText = () => {
    const paymentType = Catalogs.catPaymentType.find(
      (p) => p.value === parseInt(formValues.PaymentType, 10)
    );
    if (paymentType && paymentType.value === 3) {
      return (
        <p className="alert-text">
          <strong>Alerta:</strong> Con pago de intereses al vencimiento no es
          posible calcular interés compuesto.
        </p>
      );
    }
    return (
      <p className="default-text">
        Si consideras sólo los intereses del monto inicial, no podrías realizar
        interés compuesto debido a que el monto mínimo de inversión es de $100,
        sin embargo si realizas inversiones recurrentes por $100 o más, estarías
        generando interés compuesto por un monto mayor al calculado
        inicialmente.
      </p>
    );
  };

  return (
    <div className="interest-calculator">
      <h1 className="title">Calculadora de Intereses</h1>
      <form className="calculator-form">
        <div className="form-group">
          <label className="form-label">Monto Inicial:</label>
          <div className="input-with-icon">
            <TfiMoney className="input-icon" />
            <input
              className="form-input"
              type="number"
              name="startingAmount"
              value={formValues.startingAmount}
              onChange={handleChange}
              min="0"
              placeholder="Ingrese el monto inicial"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Término:</label>
          <div className="select-with-icon">
            <select
              className="form-select"
              name="Term"
              value={formValues.Term}
              onChange={handleChange}
            >
              <option value="">Seleccionar Término</option>
              {Catalogs.catTerm.map((term) => (
                <option key={term.value} value={term.value}>
                  {term.label}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="select-icon" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Tipo de Pago:</label>
          <div className="select-with-icon">
            <select
              className="form-select"
              name="PaymentType"
              value={formValues.PaymentType}
              onChange={handleChange}
            >
              <option value="">Seleccionar Tipo de Pago</option>
              {getFilteredPaymentTypes().map((paymentType) => (
                <option
                  key={paymentType.keyOptionCat}
                  value={paymentType.value}
                >
                  {paymentType.label}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="select-icon" />
          </div>
        </div>

        {shouldShowNumberOfPayments() && (
          <div className="form-group">
            <label className="form-label">Depósito Mensual:</label>
            <div className="input-with-icon">
              <TfiMoney className="input-icon" />
              <input
                className="form-input"
                type="number"
                name="NumberOfPayments"
                value={formValues.NumberOfPayments}
                onChange={handleChange}
                min="0"
                placeholder="Ingrese el depósito mensual"
              />
            </div>
          </div>
        )}
      </form>

      {result && (
        <div className="result">
          <h4>Con Interés Compuesto tendrías:</h4>
          <h1>{result.futureValue}</h1> 
        </div>
      )}
      <div className="alert-container">{getDynamicAlertText()}</div>
    </div>
  );
};

export default InterestCalculator;
