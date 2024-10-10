import React, { useEffect, useState } from "react";
import Catalogs from "../models/catalog";

function InvestmentCalculator() {
  useEffect(() => {
    const bodyElement = document.getElementById("body");
    if (bodyElement) {
      bodyElement.classList.add("Summary");
    }
    return () => {
      if (bodyElement) {
        bodyElement.classList.remove("Summary");
      }
    };
  }, []);

  const [modelForm, setModelForm] = useState([
    {
      id: "startingAmount",
      label: "Ingresa con cuánto dinero podrías hacer tu primera inversión:",
      type: "input",

      required: true,
      display: "none",
      inputType: "number",
    },
    {
      id: "Term",
      label: "Selecciona el tiempo que estará invertido tu dinero",
      type: "select",
      options: Catalogs.catTerm,
      required: true,
      display: "none",
    },
    {
      id: "PaymentType",
      label: "Elije cómo recibir el pago de rendimientos",
      type: "select",
      options: Catalogs.catPaymentType,
      required: true,
      display: "none",
    },
    {
      id: "NumberOfPayments",
      label: "¿Cuánto le vas a depositar al mes?",
      type: "input",
      required: true,
      display: "none",
      inputType: "number",
    },
  ]);

  const [alertLabel, setAlertLabel] = useState("");
  const [registerProperty, setRegisterProperty] = useState({
    Term: "",
    PaymentType: "",
    startingAmount: 0,
    NumberOfPayments: 0,
  });
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [numberAplique, setNumberAplique] = useState(0);
  const [numberYears, setNumberYears] = useState(0);
  const [catSelected, setCatSelected] = useState([]);
  const [total, setTotal] = useState(0);
  const [valorInicial, setValorInicial] = useState(0.0);
  const [valorInicial1, setValorInicial1] = useState(0.0);
  const [montoFinal, setMontoFinal] = useState(0.0);
  const [montoFinal1, setMontoFinal1] = useState(0.0);
  const [montoFinal2, setMontoFinal2] = useState(0.0);
  const [interesesGenerados, setInteresesGenerados] = useState(0.0);
  const [interesesGenerados1, setInteresesGenerados1] = useState(0.0);
  const [interesesGenerados2, setInteresesGenerados2] = useState(0.0);
  const [crecimientodeDInero, setCrecimientodeDInero] = useState(0.0);
  const [crecimientodeDInero1, setCrecimientodeDInero1] = useState(0.0);
  const [crecimientodeDInero2, setCrecimientodeDInero2] = useState(0.0);

  useEffect(() => {
    calculateData();
  }, [
    registerProperty,
    annualInterestRate,
    numberAplique,
    numberYears,
    catSelected,
  ]);

  const formatNumber = (input) => {
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
  };

  const onChangeSelect = (e, id, options) => {
    if (id === "PaymentType") {
      setNumberAplique(options[e - 1]?.paymentType || 0);
    }
    if (id === "Term") {
      setAnnualInterestRate(options[e - 1]?.rate || 0);
      setNumberYears(options[e - 1]?.periodYear || 0);

      setRegisterProperty((prevState) => ({
        ...prevState,
        PaymentType: "",
      }));
      setCatSelected(options[e - 1]?.catView || []);
    }

    setRegisterProperty((prevState) => ({
      ...prevState,
      [id]: e,
    }));
  };

  const checkAlert = (C5, C6, C8, B38, B50, B52, C55, C56) => {
    if (C5 !== B38 && C6 === B50) {
      return "Alerta: El interés semanal solo aplica para inversiones a 7 días";
    } else if (C6 === B52) {
      return "Alerta: Con pago de intereses al vencimiento no es posible calcular interés compuesto";
    } else if (C8 > 100) {
      let value = Catalogs.catCompositeLegend[0].label;

      return value;
    } else {
      let value = Catalogs.catCompositeLegend[1].label;
      return value;
    }
  };

  const onChangeInput = (e, type, id) => {
    let value = e.target.value;
    if (type === "number") {
      setRegisterProperty({
        ...registerProperty,
        [id]: value,
      });
    }
  };

  const renderForm = () => {
    return (
      <div className="form-container">
        {modelForm.map((item, index) => {
          if (item.id === "NumberOfPayments" && registerProperty.Term === 1) {
            return null;
          }
          return (
            <div className="form-group" key={index}>
              <label className="form-label">{item.label}</label>
              {item.type === "select" ? (
                <>
                  <select
                    id={item.id}
                    value={registerProperty[item.id]}
                    onChange={(e) =>
                      onChangeSelect(e.target.value, item.id, item.options)
                    }
                    className="form-select"
                  >
                    <option value=""></option>
                    {item.options.map((option, idx) => {
                      const labelWithRate = (
                        <div className="option-label">
                          <span>{option.label}</span>
                          <span className="rate">{option.rate}%</span>
                        </div>
                      );
                      if (item.id === "PaymentType") {
                        if (catSelected.includes(option.keyOptionCat)) {
                          return (
                            <option key={idx} value={option.value}>
                              {option.label} - {option.rate}%
                            </option>
                          );
                        }
                      } else {
                        return (
                          <option key={idx} value={option.value}>
                            {option.label} - {option.rate}%
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                  {item.required && registerProperty[item.id] === "" && (
                    <span className="error-label"></span>
                  )}
                </>
              ) : (
                <>
                  <input
                    type={item.inputType}
                    id={item.id}
                    placeholder={item.placeholder}
                    value={registerProperty[item.id]}
                    onChange={(e) => onChangeInput(e, item.inputType, item.id)}
                    className="form-input"
                  />
                  {item.required && !registerProperty[item.id] && (
                    <span className="error-label"></span>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const calculateFutureValue = (rate, nper, pmt, pv, type) => {
    if (rate === 0) return -(pv + pmt * nper);
    const pow = Math.pow(1 + rate, nper);
    return pv * pow + (pmt * (1 + rate * type) * (pow - 1)) / rate;
  };

  const calculateData = () => {
    const startingAmount = parseFloat(registerProperty.startingAmount) || 0;
    const numberOfPayments = parseFloat(registerProperty.NumberOfPayments) || 0;

    const futureValue = Math.abs(
      calculateFutureValue(
        annualInterestRate / 100 / numberAplique,
        numberAplique * numberYears,
        -numberOfPayments,
        -startingAmount,
        1
      )
    );
    const interestGenerated = Math.abs(futureValue - startingAmount);
    const simpleInterestFinalAmount = Math.abs(
      startingAmount * (1 + (annualInterestRate / 100) * numberYears)
    );
    const simpleInterestGenerated = Math.abs(
      simpleInterestFinalAmount - startingAmount
    );
    const difference = Math.abs(futureValue - simpleInterestFinalAmount);
    const totalCalculated = parseFloat(
      startingAmount * ((annualInterestRate / 100 / 360) * 28)
    );

    const diferenciaFeberada = interestGenerated - simpleInterestGenerated;
    const crecimInteres =
      (simpleInterestFinalAmount / startingAmount) * 100 - 100;
    const crecimInteresCompuesto = (futureValue / startingAmount) * 100 - 100;
    const crecimiDiferencia = Math.abs(crecimInteresCompuesto - crecimInteres);
    const valorInicial = startingAmount === 0 ? "0.00" : startingAmount;
    const valorInicial1 = startingAmount === 0 ? "0.00" : startingAmount;

    const montoFinal =
      simpleInterestFinalAmount === 0 ? "0.00" : simpleInterestFinalAmount;
    const montoFinal1 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(futureValue)
        ? "0.00"
        : futureValue;
    const montoFinal2 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(difference)
        ? "0.00"
        : difference;

    const interesesGenerados =
      simpleInterestGenerated === 0 ? "0.00" : simpleInterestGenerated;
    const interesesGenerados1 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(interestGenerated)
        ? "0.00"
        : interestGenerated;
    const interesesGenerados2 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(diferenciaFeberada)
        ? "0.00"
        : diferenciaFeberada;

    const crecimientodeDInero = Number.isNaN(crecimInteres)
      ? "NA"
      : crecimInteres;
    const crecimientodeDInero1 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(crecimInteresCompuesto)
        ? "NA"
        : crecimInteresCompuesto;
    const crecimientodeDInero2 =
      registerProperty.PaymentType === "3"
        ? "NA"
        : Number.isNaN(crecimiDiferencia)
        ? "NA"
        : crecimiDiferencia;

    let labelAlertNew = checkAlert(
      registerProperty.Term,
      registerProperty.PaymentType,
      totalCalculated,
      Catalogs.catTerm[0].value,
      Catalogs.catPaymentType[0].value,
      Catalogs.catPaymentType[2].value,
      Catalogs.catCompositeLegend[0].value,
      Catalogs.catCompositeLegend[1].value
    );

    setAlertLabel(labelAlertNew);
    setTotal(totalCalculated);
    setValorInicial(valorInicial);
    setValorInicial1(valorInicial1);
    setMontoFinal(montoFinal);
    setMontoFinal1(montoFinal1);
    setMontoFinal2(montoFinal2);
    setInteresesGenerados(interesesGenerados);
    setInteresesGenerados1(interesesGenerados1);
    setInteresesGenerados2(interesesGenerados2);
    setCrecimientodeDInero(crecimientodeDInero);
    setCrecimientodeDInero1(crecimientodeDInero1);
    setCrecimientodeDInero2(crecimientodeDInero2);
  };

  const InfoCard = (value, label) => {
    return (
      <div className="info-card">
        <div className="info-value">
          {label === "Tasa de interés anual" ? `${value}%` : value}
        </div>
        <div className="info-label">{label}</div>
      </div>
    );
  };

  return (
    <div className="investment-calculator">
      <div className="spacer"></div>
      <div className="content">
        <div className="form-section">
          {renderForm()}
          <div className="alert-container">
            <label className="alert-label">{alertLabel}</label>
          </div>
        </div>
        {/* Estas son las cards empieza */}
        <div className="info-section">
          {InfoCard(annualInterestRate, "Tasa de interés anual")}
          {InfoCard(
            numberAplique,
            "Veces que se debe aplicar el interés compuesto durante el año *"
          )}
          {InfoCard(numberYears, "Número de años (mínimo 1 año)")}
          {InfoCard(
            registerProperty.Term
              ? Catalogs.catTerm[registerProperty.Term - 1].contributions
              : 0,
            "Aportaciones recurrentes mensuales"
          )}
        </div>
        {/* Estas son las cards  termina */}
        {/* Este es la caja del resultado o total del calculo  empieza */}
        <div className="total-investment">
          <div className="total-box">
            <label className="total-label">
              Con Interés Compuesto tendrías:
            </label>
            <label className="total-value">
              {montoFinal1 === "NA"
                ? montoFinal1
                : montoFinal1 === "0.00" || isNaN(montoFinal1)
                ? montoFinal1
                : `$${formatNumber(montoFinal1)}`}
              {montoFinal1 !== "NA" && (
                <span className="total-asterisk"> **</span>
              )}
            </label>
          </div>
          <div className="notes">
            <ul>
              <li>
                Basado en los productos y tasas de interés activas a junio de
                2024.
              </li>
              <li>
                Este ejercicio se realiza considerando que se reinviertan los
                rendimientos de forma mensual a la misma tasa durante el plazo
                restante de la inversión.
              </li>
            </ul>
          </div>
        </div>
        {/* Este es la caja del resultado o total del calculo termina */}
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default InvestmentCalculator;
