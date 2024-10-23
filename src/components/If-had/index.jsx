import React, { useEffect, useCallback } from "react";
import { InputNumber, Input, Select } from "antd";

import {
  MainDiv,
  Message,
  DivContainer,
  LoginContainerForm,
  Row,
  InputStyled,
  SelectStyled,
  ButtonStyled,
  ButtonContainer,
  Card,
  ResultsDiv,
  Result,
} from "./index.styles";

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
    <MainDiv className="MainDiv">
      <Message style={{}} className="divcenter classTitle">
        Si yo hubiera...
      </Message>

      <DivContainer>
        <LoginContainerForm>
          
          <div style={{ width: "71%" }} className="logo-container"></div>

          <div>
            <Row className="row">
              <div style={{ flex: "1" }}>
                <label className="classLabel topLabel">MONTO INVERTIDO</label>
              </div>
              <div style={{ flex: "2" }}>
                <InputStyled
                  id="inputForm"
                  controls={false}
                  size="small"
                  value={investment.amount}
                  defaultValue={0}
                  formatter={(value) =>
                    `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={(e) => onChangeInput(e, "amount")}
                />
              </div>
            </Row>

            <Row className="row">
              <div style={{ flex: "1" }}>
                <label className="classLabel topLabel">PERIODICIDAD</label>
              </div>
              <div style={{ flex: "2" }}>
                <SelectStyled
                  id="selectForm"
                  defaultValue="QUINCENALES"
                  onChange={(e) => onChangeSelect(e, "periodicity")}
                  options={[
                    {
                      value: "QUINCENALES",
                      label: "QUINCENALES",
                    },
                  ]}
                />
              </div>
            </Row>

            <Row className="row">
              <div style={{ flex: "1" }}>
                <label className="classLabel topLabel">TIEMPO</label>
              </div>
              <div style={{ flex: "2" }}>
                <SelectStyled
                  id="selectForm"
                  defaultValue="1 AÑO"
                  onChange={(e) => onChangeSelect(e, "time")}
                  options={[
                    {
                      value: "1 AÑO ",
                      label: "1 AÑO ",
                    },
                    {
                      value: "2 AÑOS",
                      label: "2 AÑOS",
                    },
                    {
                      value: "3 AÑOS",
                      label: "3 AÑOS",
                    },
                    {
                      value: "4 AÑOS",
                      label: "4 AÑOS",
                    },
                    {
                      value: "5 AÑOS",
                      label: "5 AÑOS",
                    },
                    {
                      value: "6 AÑOS",
                      label: "6 AÑOS",
                    },
                    {
                      value: "7 AÑOS",
                      label: "7 AÑOS",
                    },
                    {
                      value: "8 AÑOS",
                      label: "8 AÑOS",
                    },
                    {
                      value: "9 AÑOS",
                      label: "9 AÑOS",
                    },
                    {
                      value: "10 AÑOS",
                      label: "10 AÑOS",
                    },
                    { value: "11 AÑOS", label: "11 AÑOS" },
                    { value: "12 AÑOS", label: "12 AÑOS" },
                    { value: "13 AÑOS", label: "13 AÑOS" },
                    { value: "14 AÑOS", label: "14 AÑOS" },
                    { value: "15 AÑOS", label: "15 AÑOS" },
                    { value: "16 AÑOS", label: "16 AÑOS" },
                    { value: "17 AÑOS", label: "17 AÑOS" },
                    { value: "18 AÑOS", label: "18 AÑOS" },
                    { value: "19 AÑOS", label: "19 AÑOS" },
                    { value: "20 AÑOS", label: "20 AÑOS" },
                    { value: "21 AÑOS", label: "21 AÑOS" },
                    { value: "22 AÑOS", label: "22 AÑOS" },
                    { value: "23 AÑOS", label: "23 AÑOS" },
                    { value: "24 AÑOS", label: "24 AÑOS" },
                    { value: "25 AÑOS", label: "25 AÑOS" },
                    { value: "26 AÑOS", label: "26 AÑOS" },
                    { value: "27 AÑOS", label: "27 AÑOS" },
                    { value: "28 AÑOS", label: "28 AÑOS" },
                    { value: "29 AÑOS", label: "29 AÑOS" },
                    { value: "30 AÑOS", label: "30 AÑOS" },
                  ]}
                />
              </div>
            </Row>

            <Row className="row">
              <div style={{ flex: "1" }}>
                <label className="classLabel topLabel">TASA</label>
              </div>
              <div style={{ flex: "2" }}>
                <InputStyled
                  id="inputForm"
                  controls={false}
                  size="small"
                  value={investment.rate}
                  defaultValue={0}
                  formatter={(value) =>
                    `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={(e) => onChangeInput(e, "rate")}
                />
              </div>
            </Row>

            <Row className="row">
              <div style={{ flex: "1" }}>
                <label className="classLabel topLabel">
                  APORTACIONES ADICIONALES
                </label>
              </div>
              <div style={{ flex: "2" }}>
                <InputStyled
                  id="inputForm"
                  controls={false}
                  size="small"
                  value={investment.additionalContribution}
                  defaultValue={0}
                  formatter={(value) =>
                    `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={(e) => onChangeInput(e, "additionalContribution")}
                />
              </div>
            </Row>

            <ButtonContainer>
              <ButtonStyled onClick={() => calcularValorFinal()}>
                Calcular
              </ButtonStyled>
            </ButtonContainer>
          </div>
        </LoginContainerForm>

        <Card>
          <b className="classSubTitle">Resultados:</b>

          <ResultsDiv className="ResultsDiv">
            <Result style={{ flex: "1" }}>
              <label>INVERSIÓN INICIAL:</label>
              <div>${Number(investment.amount).toLocaleString("en-US")}</div>
            </Result>

            <Result style={{ flex: "1" }}>
              <label>APORTACIONES:</label>
              <div>${Number(deposited).toLocaleString("en-US")}</div>
            </Result>

            <Result style={{ flex: "1" }}>
              <label>RENDIMIENTO:</label>
              <div>${Number(rendimiento).toLocaleString("en-US")}</div>
            </Result>

            <Result style={{ flex: "1" }}>
              <label>TOTAL:</label>
              <div>${Number(totalValue).toLocaleString("en-US")}</div>
            </Result>
          </ResultsDiv>
        </Card>
      </DivContainer>
    </MainDiv>
  );
}

export default IfHad;
