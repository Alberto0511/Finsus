import React, { useEffect, useCallback } from "react";
import { InputNumber, Input, Select } from "antd";

function IfHad(props) {
  const [investment, setInvestment] = React.useState({
    amount: 0,
    periodicity: "QUINCENALES",
    time: "1 AÑO",
    rate: 0,
    additionalContribution: 0,
  });
  const [monthly, setMonthly] = React.useState(24);
  const [futureValue, setFutureValue] = React.useState(0);
  const [compound, setCompound] = React.useState(0);
  const [totalValue, setTotalValue] = React.useState(0);
  const [rendimiento, setRendimiento] = React.useState(0);
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [deposited, setDeposited] = React.useState(0);

  function calcularValorFinal(defaultReturn = 0) {
    console.log("investment", investment);
    console.log("monthly", monthly);
    let match = investment.time.match(/\d+/);
    let numberPlazo = parseInt(match[0], 10);
    console.log("numberPlazo", numberPlazo);
    let rateReal = investment.rate / 100;
    console.log("rateReal", rateReal);
    console.log("investment.amount", investment.amount);

    let compound = (
      investment.amount *
      Math.pow(1 + rateReal / monthly, monthly * numberPlazo)
    ).toFixed(2);
    if (isNaN(Number(compound))) {
      return defaultReturn;
    }
    console.log("compound", compound);
    setCompound(compound);

    calculateFutureValue();
    // return compound;
  }

  function calculateFutureValue(defaultReturn = 0) {
    console.log("pmt", investment.additionalContribution);
    let rateReal = investment.rate / 100;
    let match = investment.time.match(/\d+/);
    let numberPlazo = parseInt(match[0], 10);
    console.log("numberPlazo", numberPlazo);

    // let vm = this;
    let future = (
      investment.additionalContribution *
      ((Math.pow(1 + rateReal / monthly, monthly * numberPlazo) - 1) /
        (rateReal / monthly))
    ).toFixed(2);
    if (isNaN(Number(future))) {
      return defaultReturn;
    }
    console.log("future", future);
    setFutureValue(future);
    // total();
    // return future;
  }

  // function total() {
  //   console.log("compound", compound);
  //   console.log("futureValue", futureValue);
  //   let total = (Number(compound) + Number(futureValue)).toFixed(2);
  //   console.log('total', total)
  //   setTotalValue(total);
  //   // return total;
  // }

  useEffect(() => {
    // Lógica que se ejecuta en la primera renderización
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      console.log("compound", compound);
      console.log("futureValue", futureValue);
      let match = investment.time.match(/\d+/);
      let numberPlazo = parseInt(match[0], 10);

      let deposited = numberPlazo * monthly * investment.additionalContribution;
      console.log("deposited", deposited);

      let totalReal = Number(compound) + Number(futureValue);
      console.log("totalReal", totalReal.toFixed(2));

      let interest = (totalReal - deposited - investment.amount).toFixed(2);
      console.log("interest", interest);

      setDeposited(deposited);
      setTotalValue(totalReal.toFixed(2));
      setRendimiento(interest);
    }
    setIsFirstRender(false);
  }, [compound, futureValue]);

  // // Ejemplo de uso con los valores proporcionados
  // const montoInicial = 1000;
  // const tasaAnual = 15.01 / 100; // Convertir a decimal
  // const aportacionQuincenal = 1000;
  // const plazoEnAnos = 1;

  // const valorFinal = calcularValorFinal(1000, 15.01 / 100, 1000, 1);
  // console.log("El valor final es:", valorFinal);

  const onChangeSelect = (e, id) => {
    console.log("e", e);
    console.log("id", id);
    console.log("investment", investment);
    setInvestment({
      ...investment,
      [id]: e,
    });
  };

  const onChangeInput = (e, id) => {
    console.log("e", e);
    console.log("id", id);
    console.log("investment", investment);
    setInvestment({
      ...investment,
      [id]: e,
    });
  };

  return (
  <>
    <div className="">
      <div
        style={{ color: "white", marginBottom: "3em", padding: "0em" }}
        className="col-xs-12 col-md-12 col-lg-12"
      >
        <div style={{ marginTop: "2em" }} className="divcenter classTitle">
          Si yo hubiera...
        </div>
        <div className="containerDiv">
          <div
            style={{ width: "50%", margin: "0 auto", padding: "1em" }}
            className="elementoDiv"
          >
            <div style={{ backgroundColor: "#333", padding: "2em", borderRadius: "10px" }}>
              <div style={{ width: "71%" }} className="logo-container"></div>

              <div>
                <div className="row">
                  <div style={{ flex: "1", paddingRight: "1em" }}>
                    <label className="classLabel topLabel">MONTO INVERTIDO</label>
                  </div>
                  <div style={{ flex: "2" }}>
                    <InputNumber
                      id="inputForm"
                      controls={false}
                      size="small"
                      style={{
                        borderRadius: "6px",
                        background: "transparent",
                        color: "#fff",
                        marginBottom: "1em",
                        width: "100%",
                      }}
                      value={investment.amount}
                      defaultValue={0}
                      formatter={(value) =>
                        `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      onChange={(e) => onChangeInput(e, "amount")}
                    />
                  </div>
                </div>

                <div className="row">
                  <div style={{ flex: "1", paddingRight: "1em" }}>
                    <label className="classLabel topLabel">PERIODICIDAD</label>
                  </div>
                  <div style={{ flex: "2" }}>
                    <Select
                      id="selectForm"
                      defaultValue="QUINCENALES"
                      style={{
                        borderRadius: "6px",
                        background: "transparent",
                        color: "#fff",
                        marginBottom: "1em",
                        width: "100%",
                      }}
                      onChange={(e) => onChangeSelect(e, "periodicity")}
                      options={[
                        {
                          value: "QUINCENALES",
                          label: "QUINCENALES",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="row">
                  <div style={{ flex: "1", paddingRight: "1em" }}>
                    <label className="classLabel topLabel">TIEMPO</label>
                  </div>
                  <div style={{ flex: "2" }}>
                    <Select
                      id="selectForm"
                      defaultValue="1 AÑO"
                      style={{
                        borderRadius: "6px",
                        background: "transparent",
                        color: "#fff",
                        marginBottom: "1em",
                        width: "100%",
                      }}
                      onChange={(e) => onChangeSelect(e, "time")}
                      options={[
                        { value: "1 AÑO", label: "1 AÑO" },
                        { value: "2 AÑOS", label: "2 AÑOS" },
                        { value: "3 AÑOS", label: "3 AÑOS" },
                        { value: "4 AÑOS", label: "4 AÑOS" },
                        { value: "5 AÑOS", label: "5 AÑOS" },
                        // ... Agrega los demás años aquí
                      ]}
                    />
                  </div>
                </div>

                <div className="row">
                  <div style={{ flex: "1", paddingRight: "1em" }}>
                    <label className="classLabel topLabel">TASA</label>
                  </div>
                  <div style={{ flex: "2" }}>
                    <InputNumber
                      id="inputForm"
                      controls={false}
                      size="small"
                      style={{
                        borderRadius: "6px",
                        background: "transparent",
                        color: "#fff",
                        marginBottom: "1em",
                        width: "100%",
                      }}
                      value={investment.rate}
                      defaultValue={0}
                      formatter={(value) =>
                        `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      onChange={(e) => onChangeInput(e, "rate")}
                    />
                  </div>
                </div>

                <div className="row">
                  <div style={{ flex: "1", paddingRight: "1em" }}>
                    <label className="classLabel topLabel">
                      APORTACIONES ADICIONALES
                    </label>
                  </div>
                  <div style={{ flex: "2" }}>
                    <InputNumber
                      id="inputForm"
                      controls={false}
                      size="small"
                      style={{
                        borderRadius: "6px",
                        background: "transparent",
                        color: "#fff",
                        marginBottom: "1em",
                        width: "100%",
                      }}
                      value={investment.additionalContribution}
                      defaultValue={0}
                      formatter={(value) =>
                        `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      onChange={(e) =>
                        onChangeInput(e, "additionalContribution")
                      }
                    />
                  </div>
                </div>

                <div style={{ marginTop: "2em", textAlign: "center" }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "1em",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                    }}
                    onClick={() => calcularValorFinal()}
                  >
                    Calcular
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "50%",
                margin: "2em auto",
                backgroundColor: "#333",
                padding: "2em",
                borderRadius: "10px",
              }}
            >
              <p style={{ marginBottom: "1em", textAlign: "center" }}>
                <b className="classSubTitle">Resultados:</b>
              </p>

              <div className="row">
                <div style={{ flex: "1", textAlign: "center", color: "#fff" }}>
                  <label>INVERSIÓN INICIAL:</label>
                  <div>${Number(investment.amount).toLocaleString("en-US")}</div>
                </div>
                <div style={{ flex: "1", textAlign: "center", color: "#fff" }}>
                  <label>APORTACIONES:</label>
                  <div>${Number(deposited).toLocaleString("en-US")}</div>
                </div>
                <div style={{ flex: "1", textAlign: "center", color: "#fff" }}>
                  <label>RENDIMIENTO:</label>
                  <div>${Number(rendimiento).toLocaleString("en-US")}</div>
                </div>
                <div style={{ flex: "1", textAlign: "center", color: "#fff" }}>
                  <label>TOTAL:</label>
                  <div>${Number(totalValue).toLocaleString("en-US")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default IfHad;

