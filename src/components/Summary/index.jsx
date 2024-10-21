import React, { useEffect } from "react";
import { InputNumber, Button } from "antd";
import {
  Div_container,
  Div_calculator,
  Div_text,
  Total_div,
  Total_button,
  Span,
  Input,
} from "./index.styles";

function Summary() {
  const [investment, setInvestment] = React.useState({
    amount: 0,
    periodicity: "QUINCENALES",
    time: 0,
    rate: 15.01,
    additionalContribution: 1000,
  });

  const [monthly, setMonthly] = React.useState(24);
  const [futureValue, setFutureValue] = React.useState(0);
  const [compound, setCompound] = React.useState(0);
  const [totalValue, setTotalValue] = React.useState(0);
  const [rendimiento, setRendimiento] = React.useState(0);
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [deposited, setDeposited] = React.useState(0);
  const [isTimeFocused, setIsTimeFocused] = React.useState(false);
  const [isAmountFocused, setIsAmountFocused] = React.useState(false);
  const [isRateFocused, setIsRateFocused] = React.useState(false);

  function calcularValorFinal(defaultReturn = 0) {
    let rateReal = investment.rate / 100;
    let compound = (
      investment.amount *
      Math.pow(1 + rateReal / monthly, monthly * investment.time)
    ).toFixed(2);
    if (isNaN(Number(compound))) {
      return defaultReturn;
    }

    setCompound(compound);
    calculateFutureValue();
  }

  function calculateFutureValue(defaultReturn = 0) {
    let rateReal = investment.rate / 100;
    let future = (
      investment.additionalContribution *
      ((Math.pow(1 + rateReal / monthly, monthly * investment.time) - 1) /
        (rateReal / monthly))
    ).toFixed(2);
    if (isNaN(Number(future))) {
      return defaultReturn;
    }
    setFutureValue(future);
  }

  function dividerTotal(total) {
    const step = total / 70;
    let currentValue = 0;

    const incrementalValue = () => {
      if (currentValue < total) {
        currentValue += step;
        if (currentValue > total) {
          currentValue = total;
        }
        setTotalValue(currentValue);
        setTimeout(() => {
          incrementalValue();
        }, 45);
      } else {
        setTotalValue(total);
      }
    };
    incrementalValue();
  }

  useEffect(() => {
    if (!isFirstRender) {
      let deposited =
        investment.time * monthly * investment.additionalContribution;
      let totalReal = Number(compound) + Number(futureValue);
      let interest = (totalReal - deposited - investment.amount).toFixed(2);

      setDeposited(deposited);
      dividerTotal(totalReal.toFixed(2));
      setRendimiento(interest);
    }
    setIsFirstRender(false);
  }, [compound, futureValue]);

  const onChangeInput = (e, id) => {
    if (id === "amount") {
      investment.additionalContribution = e;
      setInvestment({
        ...investment,
        [id]: e,
        additionalContribution: e,
      });
    } else {
      setInvestment({
        ...investment,
        [id]: e,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (
      (e.key < "0" || e.key > "9") &&
      e.key !== "Backspace" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Div_container>
      {/* <h2>Sabias que?</h2> */}
      <Div_calculator>
        <Div_text>
          <Span>
            Si hace{" "}
            <Input
              controls={false}
              size="small"
              max={30}
              value={isTimeFocused ? investment.time : investment.time || 0}
              onChange={(e) => onChangeInput(e, "time")}
              onFocus={() => setIsTimeFocused(true)}
              onBlur={() => setIsTimeFocused(false)}
              onKeyDown={handleKeyDown}
              style={{
                width: "120px",
                fontWeight: "1000",
              }}
            />
            años hubieras invertido{" "}
            <Input
              controls={false}
              size="small"
              max={50000}
              formatter={(value) =>
                `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              value={
                isAmountFocused ? investment.amount : investment.amount || 0
              } 
              onChange={(e) => onChangeInput(e, "amount")}
              onFocus={() => setIsAmountFocused(true)}
              onBlur={() => setIsAmountFocused(false)}
              onKeyDown={handleKeyDown}
              style={{
                width: "150px",
                fontWeight: "1000",
              }}
            />
            quincenales.
          </Span>
        </Div_text>
        <Div_text>
          <Span>
            A una tasa anual fija del{" "}
            <Input
              controls={false}
              size="small"
              max={15.1}
              value={isRateFocused ? undefined : investment.rate}
              onChange={(e) => onChangeInput(e, "rate")}
              onFocus={() => setIsRateFocused(true)}
              onBlur={() => setIsRateFocused(false)}
              onKeyDown={handleKeyDown}
              style={{
                width: "100px",
                fontWeight: "1000",
              }}
            />{" "}
            % hoy tendrías:
          </Span>
        </Div_text>

        <Total_div>
          <h3>${Number(totalValue).toLocaleString("en-US")} *</h3>
        </Total_div>

        <Total_button type="primary" onClick={() => calcularValorFinal()}>
          Calcular
        </Total_button>
      </Div_calculator>
    </Div_container>
  );
}

export default Summary;
