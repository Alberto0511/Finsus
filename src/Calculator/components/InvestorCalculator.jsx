import React, { useEffect, useState } from "react";
import { TfiMoney } from "react-icons/tfi";
function InvestmentCalculator() {
  const Catalogs = {
    catTerm: [
      {
        value: 1,
        label: "7 días",
        rate: 10.06,
        periodYear: 1,
        catView: [1, 3],
        contributions: 0,
      },
      {
        value: 2,
        label: "1 mes",
        rate: 11.09,
        periodYear: 1,
        catView: [3],
        contributions: 1,
      },
      {
        value: 3,
        label: "3 meses",
        rate: 12.09,
        periodYear: 1,
        catView: [2, 3],
        contributions: 3,
      },
      {
        value: 4,
        label: "6 meses",
        rate: 12.29,
        periodYear: 1,
        catView: [2, 3],
        contributions: 6,
      },
      {
        value: 5,
        label: "12 meses",
        rate: 14.09,
        periodYear: 1,
        catView: [2, 3],
        contributions: 12,
      },
      {
        value: 6,
        label: "2 años",
        rate: 14.55,
        periodYear: 2,
        catView: [2, 3],
        contributions: 24,
      },
      {
        value: 7,
        label: "3 años",
        rate: 15.01,
        periodYear: 3,
        catView: [2, 3],
        contributions: 36,
      },
      {
        value: 8,
        label: "4 años",
        rate: 13.25,
        periodYear: 4,
        catView: [2, 3],
        contributions: 48,
      },
      {
        value: 9,
        label: "5 años",
        rate: 12.75,
        periodYear: 5,
        catView: [2, 3],
        contributions: 60,
      },
    ],
    catPaymentType: [
      {
        keyOptionCat: 1,
        value: 1,
        label: "Semanal",
        alertLabel: "El interés semanal solo aplica para inversiones a 7 días",
        paymentType: 52,
      },
      {
        keyOptionCat: 2,
        value: 2,
        label: "Mensual",
        alertLabel:
          "Si consideras sólo los intereses del monto inicial, no podrías realizar interés compuesto debido a que el monto mínimo de inversión es de $100, sin embargo si realizas inversiones recurrentes por $100 o más, estarías generando interés compuesto por un monto mayor al calculado inicialmente",
        paymentType: 12,
      },
      {
        keyOptionCat: 3,
        value: 3,
        label: "Al vencimiento",
        alertLabel:
          "Con pago de intereses al vencimiento no es posible calcular interés compuesto",
        paymentType: 1,
      },
    ],
    catCompositeLegend: [
      {
        value: 1,
        key: "Si aplica",
        label:
          "Considerando sólo los rendimientos mensuales de tu inversión, podrías generar nuevas inversiones para realizar interés compuesto",
      },
      {
        value: 2,
        key: "No aplica",
        label:
          "Si consideras sólo los intereses del monto inicial, no podrías realizar interés compuesto debido a que el monto mínimo de inversión es de $100, sin embargo si realizas inversiones recurrentes por $100 o más, estarías generando interés compuesto por un monto mayor al calculado inicialmente",
      },
    ],
  };

  useEffect(() => {
    document.body.classList.add("Summary");
    return () => {
      document.body.classList.remove("Summary");
    };
  }, []);

  const [modelForm, setModelForm] = useState([
    {
      id: "startingAmount",
      label: "Ingresa con cuánto dinero podrías hacer tu primera inversión:",
      type: "input",
      required: true,
      display: "block",
      inputType: "number",
      placeholder: "Ingrese cantidad inicial",
    },
    {
      id: "Term",
      label: "Selecciona el tiempo que estará invertido tu dinero",
      type: "select",
      options: Catalogs.catTerm,
      required: true,
      display: "block",
    },
    {
      id: "PaymentType",
      label: "Elije cómo recibir el pago de rendimientos",
      type: "select",
      options: Catalogs.catPaymentType,
      required: true,
      display: "block",
    },
    {
      id: "NumberOfPayments",
      label: "¿Cuánto le vas a depositar al mes?",
      type: "input",
      required: true,
      display: "block",
      inputType: "number",
      placeholder: "Ingrese depósito mensual",
    },
  ]);

  const [alertLabel, setAlertLabel] = useState("");
  const [registerProperty, setRegisterProperty] = useState({
    Term: "",
    PaymentType: "",
    startingAmount: "",
    NumberOfPayments: "",
  });
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [numberAplique, setNumberAplique] = useState(0);
  const [numberYears, setNumberYears] = useState(0);
  const [catSelected, setCatSelected] = useState([]);
  const [total, setTotal] = useState(0);
  const [valorInicial, setValorInicial] = useState("0.00");
  const [valorInicial1, setValorInicial1] = useState("0.00");
  const [montoFinal, setMontoFinal] = useState("0.00");
  const [montoFinal1, setMontoFinal1] = useState("0.00");
  const [montoFinal2, setMontoFinal2] = useState("0.00");
  const [interesesGenerados, setInteresesGenerados] = useState("0.00");
  const [interesesGenerados1, setInteresesGenerados1] = useState("0.00");
  const [interesesGenerados2, setInteresesGenerados2] = useState("0.00");
  const [crecimientodeDInero, setCrecimientodeDInero] = useState("0.00");
  const [crecimientodeDInero1, setCrecimientodeDInero1] = useState("0.00");
  const [crecimientodeDInero2, setCrecimientodeDInero2] = useState("0.00");

  const [touchedFields, setTouchedFields] = useState({
    startingAmount: false,
    NumberOfPayments: false,
  });

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
    if (isNaN(number)) return "0.00";

    let fixedNumber = number.toFixed(2);
    let formattedNumber = parseFloat(fixedNumber).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedNumber;
  };


  const onChangeSelect = (value, id, options) => {
    const selectedOption = options.find(
      (option) => option.value === parseInt(value)
    );

    if (id === "PaymentType") {
      setNumberAplique(selectedOption?.paymentType || 0);
    }

    if (id === "Term") {
      setAnnualInterestRate(selectedOption?.rate || 0);
      setNumberYears(selectedOption?.periodYear || 0);
      setRegisterProperty((prevState) => ({
        ...prevState,
        PaymentType: "",
      }));
      setCatSelected(selectedOption?.catView || []);
    }

    setRegisterProperty((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Función para verificar alertas
  const checkAlert = (C5, C6, C8, B38, B50, B52, C55, C56) => {
    if (C5 !== B38 && C6 === B50) {
      return "Alerta: El interés semanal solo aplica para inversiones a 7 días";
    } else if (C6 === B52) {
      return "Alerta: Con pago de intereses al vencimiento no es posible calcular interés compuesto";
    } else if (C8 > 100) {
      return Catalogs.catCompositeLegend[0].label;
    } else {
      return Catalogs.catCompositeLegend[1].label;
    }
  };

  // Manejo de cambios en los inputs
  const onChangeInput = (e, type, id) => {
    let value = e.target.value;
    if (type === "number") {
      // Asegurarse de que solo se ingresen números y puntos decimales
      const numericValue = value.replace(/[^0-9.]/g, "");
      setRegisterProperty({
        ...registerProperty,
        [id]: numericValue,
      });
    }
  };

  // Manejador de onBlur para rastrear campos tocados
  const handleBlur = (id) => {
    setTouchedFields((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  // Renderizado del formulario
  const renderForm = () => {
    return (
      <div className="form-container">
        {modelForm.map((item, index) => {
          // Control de visibilidad basado en la propiedad 'display'
          if (item.display !== "block") {
            return null;
          }

          // Condición para ocultar "NumberOfPayments" si Term === 1
          if (item.id === "NumberOfPayments" && registerProperty.Term === "1") {
            return null;
          }

          return (
            <div className="form-group" key={index}>
              <label className="form-label" htmlFor={item.id}>
                {item.label}
              </label>
              {item.type === "select" ? (
                <>
                  <select
                    id={item.id}
                    value={registerProperty[item.id]}
                    onChange={(e) =>
                      onChangeSelect(e.target.value, item.id, item.options)
                    }
                    className="form-select"
                    onBlur={() => handleBlur(item.id)}
                  >
                    <option value="">Seleccione una opción</option>
                    {item.options.map((option, idx) => {
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
                  {item.required &&
                    (registerProperty[item.id] === "" ||
                      registerProperty[item.id] === undefined) &&
                    touchedFields[item.id] && (
                      <span className="error-label">
                        Este campo es requerido.
                      </span>
                    )}
                </>
              ) : (
                <>
                  {/* Contenedor para el input con icono solo para los campos especificados */}
                  {item.id === "startingAmount" ||
                  item.id === "NumberOfPayments" ? (
                    <div className="input-with-icon">
                      <TfiMoney className="input-icon" />
                      <input
                        type={item.inputType}
                        id={item.id}
                        placeholder={item.placeholder || ""}
                        value={registerProperty[item.id]}
                        onChange={(e) =>
                          onChangeInput(e, item.inputType, item.id)
                        }
                        onBlur={() => handleBlur(item.id)} 
                        className="form-input"
                      />
                    </div>
                  ) : (
                    <input
                      type={item.inputType}
                      id={item.id}
                      placeholder={item.placeholder || ""}
                      value={registerProperty[item.id]}
                      onChange={(e) =>
                        onChangeInput(e, item.inputType, item.id)
                      }
                      onBlur={() => handleBlur(item.id)} 
                      className="form-input"
                    />
                  )}
                  {item.required &&
                    (registerProperty[item.id] === "" ||
                      registerProperty[item.id] === undefined) &&
                    touchedFields[item.id] && (
                      <span className="error-label">
                        Este campo es requerido.
                      </span>
                    )}
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Función para calcular el valor futuro
  const calculateFutureValue = (rate, nper, pmt, pv, type) => {
    if (rate === 0) return -(pv + pmt * nper);
    const pow = Math.pow(1 + rate, nper);
    return pv * pow + (pmt * (1 + rate * type) * (pow - 1)) / rate;
  };

  // Función para calcular los datos
  const calculateData = () => {
    const startingAmount = parseFloat(registerProperty.startingAmount) || 0;
    const numberOfPayments = parseFloat(registerProperty.NumberOfPayments) || 0;

    const ratePerPeriod = annualInterestRate / 100 / numberAplique;
    const totalPeriods = numberAplique * numberYears;

    const futureValue = Math.abs(
      calculateFutureValue(
        ratePerPeriod,
        totalPeriods,
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

    const valorInicialFormatted =
      startingAmount === 0 ? "0.00" : formatNumber(startingAmount);
    const valorInicial1Formatted =
      startingAmount === 0 ? "0.00" : formatNumber(startingAmount);

    const montoFinalFormatted =
      simpleInterestFinalAmount === 0
        ? "0.00"
        : formatNumber(simpleInterestFinalAmount);
    const montoFinal1Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(futureValue)
        ? "0.00"
        : formatNumber(futureValue);
    const montoFinal2Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(difference)
        ? "0.00"
        : formatNumber(difference);

    const interesesGeneradosFormatted =
      simpleInterestGenerated === 0
        ? "0.00"
        : formatNumber(simpleInterestGenerated);
    const interesesGenerados1Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(interestGenerated)
        ? "0.00"
        : formatNumber(interestGenerated);
    const interesesGenerados2Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(diferenciaFeberada)
        ? "0.00"
        : formatNumber(diferenciaFeberada);

    const crecimientodeDIneroFormatted = isNaN(crecimInteres)
      ? "NA"
      : `${crecimInteres.toFixed(2)}%`;
    const crecimientodeDInero1Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(crecimInteresCompuesto)
        ? "NA"
        : `${crecimInteresCompuesto.toFixed(2)}%`;
    const crecimientodeDInero2Formatted =
      registerProperty.PaymentType === "3"
        ? "NA"
        : isNaN(crecimiDiferencia)
        ? "NA"
        : `${crecimiDiferencia.toFixed(2)}%`;

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
    setValorInicial(valorInicialFormatted);
    setValorInicial1(valorInicial1Formatted);
    setMontoFinal(montoFinalFormatted);
    setMontoFinal1(montoFinal1Formatted);
    setMontoFinal2(montoFinal2Formatted);
    setInteresesGenerados(interesesGeneradosFormatted);
    setInteresesGenerados1(interesesGenerados1Formatted);
    setInteresesGenerados2(interesesGenerados2Formatted);
    setCrecimientodeDInero(crecimientodeDIneroFormatted);
    setCrecimientodeDInero1(crecimientodeDInero1Formatted);
    setCrecimientodeDInero2(crecimientodeDInero2Formatted);
  };

  // Componente para mostrar las tarjetas de información
  const InfoCard = ({ value, label }) => {
    return (
      <div className="info-card" key={label}>
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
            {alertLabel && <label className="alert-label">{alertLabel}</label>}
          </div>
        </div>
        {/* Tarjetas de información */}
        <div className="info-section">
          {InfoCard({
            value: annualInterestRate,
            label: "Tasa de interés anual",
          })}
          {InfoCard({
            value: numberAplique,
            label:
              "Veces que se debe aplicar el interés compuesto durante el año *",
          })}
          {InfoCard({
            value: numberYears,
            label: "Número de años (mínimo 1 año)",
          })}
          {InfoCard({
            value: registerProperty.Term
              ? Catalogs.catTerm.find(
                  (term) => term.value === parseInt(registerProperty.Term)
                )?.contributions || 0
              : 0,
            label: "Aportaciones recurrentes mensuales",
          })}
        </div>
        {/* Caja del resultado o total del cálculo */}
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
        {/* Fin de la caja del resultado */}
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default InvestmentCalculator;
