import React, { useEffect, useCallback } from "react";
import { InputNumber, Input, Select } from "antd";
import timeCatalog from "./catalog";



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
    
    <MainDiv >
      <Message style={{}} >
        Si yo hubiera...
      </Message>

      <DivContainer>
        <LoginContainerForm>
          
          <div style={{ width: "71%" }}></div>

          <div>
            <Row >
              <div style={{ flex: "1" }}>
                <label >MONTO INVERTIDO</label>
              </div>
              <div style={{ flex: "2", }}>
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

            <Row>
              <div style={{ flex: "1" }}>
                <label>PERIODICIDAD</label>
              </div>
              <div style={{ flex: "2",  }}>
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
                  style={{ backgroundColor: "#ff0000", color: "#fff" }}
                />
              </div>
            </Row>

            <Row >
              <div style={{ flex: "1" }}>
                <label >TIEMPO</label>
              </div>
              <div style={{ flex: "2" }}>
                <SelectStyled
                  id="selectForm"
                  defaultValue="1 AÑO"
                  onChange={(e) => onChangeSelect(e, "time")}
                  options={timeCatalog}


                />
              </div>
            </Row>

            <Row >
              <div style={{ flex: "1",  }}>
                <label >TASA</label>
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

            <Row >
              <div style={{ flex: "1", }}>
                <label >
                  APORTACIONES ADICIONALES
                </label>
              </div>
              <div style={{ flex: "2", }}>
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
          <b >Resultados:</b>

          <ResultsDiv >
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
