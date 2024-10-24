import React, { useEffect } from "react";
import { InputNumber } from "antd";
import { SetNewListGroups } from "./Header";
import "./index.css";

function Calculadora() {
  const [valueInversion, seValueInversion] = React.useState(100);
  const [isMovil, setIsMovil] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);
  const [columns] = React.useState([
    { label: "Tasa", key: "Tasa" },
    { label: "Plazo", key: "Plazo" },
    { label: "Rendimiento", key: "Rendimiento" },
  ]);
  const [dataReinversion] = React.useState([
    {
      Tasa: "10.06%",
      Plazo: "7 dias",
      Rendimiento: "",
      key: 7,
      gatR: "6.56%",
      gatN: "10.70%",
      ClassName: `row seven`,
    },
    {
      Tasa: "11.09%",
      Plazo: "1 mes",
      Rendimiento: "",
      key: 30,
      gatR: "7.50%",
      gatN: "11.67%",
      ClassName: `row twenty-eight`,
    },
    {
      Tasa: "12.09% ",
      Plazo: "3 meses",
      Rendimiento: "",
      key: 90,
      gatR: "8.44%",
      gatN: "12.65%",
      ClassName: `row ninety`,
    },
    {
      Tasa: "12.29% ",
      Plazo: "6 meses",
      Rendimiento: "",
      key: 180,
      gatR: "8.46%",
      gatN: "12.67%",
      ClassName: `row three-sixty-five`,
    },
    {
      Tasa: "14.09%",
      Plazo: "12 meses",
      Rendimiento: "",
      key: 360,
      morePopular: false,
      gatR: "9.83%",
      gatN: "14.09%",
      ClassName: `row three-sixty-six`,
    },
    // {
    //   Tasa: "16.00%",
    //   Plazo: "18 meses",
    //   Rendimiento: "",
    //   key: 540,
    //   morePopular: false,
    //   gatR: "11.67%",
    //   gatN: "16.00%",
    //   ClassName: `row three-sixty-six2`
    // },
    {
      Tasa: "14.55%",
      Plazo: "2 años",
      Rendimiento: "",
      key: 720,
      gatR: "10.27%",
      gatN: "14.55%",
      ClassName: `row three-sixty-seven`,
    },
    {
      Tasa: "15.01%",
      Plazo: "3 años",
      Rendimiento: "",
      key: 1080,
      gatR: "10.71%",
      gatN: "15.01%",
      ClassName: `row three-sixty-eight`,
    },
    {
      Tasa: "13.25%",
      Plazo: "4 años",
      Rendimiento: "",
      key: 1440,
      gatR: "9.02%",
      gatN: "13.25%",
      ClassName: `row three-sixty-nine`,
    },
    {
      Tasa: "12.75%",
      Plazo: "5 años",
      Rendimiento: "",
      key: 1800,
      gatR: "8.54%",
      gatN: "12.75%",
      ClassName: "row three-sixty-ten",
    },
  ]);

  const [tableSelect, setTableSelect] = React.useState([]);

  useEffect(() => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    setIsMovil(isMobileDevice);
  }, []);

  useEffect(() => {
    CalculateInversion();
    tableList();
  }, [valueInversion]);

  const tazaPlazos = dataReinversion.reduce((acc, item) => {
    acc[item.key] = parseFloat(item.Tasa);
    return acc;
  }, {});

  async function tableList() {
    let table = [];
    dataReinversion.map((e, index) => {
      if (e.hidden) {
      } else {
        table.push(
          <tr
            style={{
              textAlign: "left",
              color: e.morePopular ? "#FF5F54" : "#fff",
              border: "solid transparent",
            }}
            key={index}
          >
            <td key={e.key}>{e.Tasa}</td>
            <td key={e.key}>{e.Plazo}</td>
            <td key={e.key}>{e.Rendimiento}</td>
          </tr>
        );
      }
      return e;
    });

    let subtds = [];
    columns.forEach((subcolumn, __index_) => {
      subtds.push(
        <th
          key={__index_}
          style={{
            minWidth: subcolumn.key !== "check" ? "8em" : "",
            textAlign: "left",
            color: "#fff",
          }}
          className="eventsTableHeader"
        >
          {subcolumn.label}
        </th>
      );
    });

    let table2 = [];
    table2.push(
      <div style={{ fontSize: "12px" }} md="12">
        <br></br>
        <div style={{ marginBottom: "1em" }} className="SubTitleRendimiento">
          Rendimiento{" "}
        </div>

        <div
          style={{ overflowY: "auto", overflowX: "auto", maxHeight: "38em" }}
          className="table-wrapper-scroll-y-euro row"
        >
          <table className="table">
            <thead>
              <tr>{subtds}</tr>
            </thead>
            <tbody className="eventsTableBody">{table}</tbody>
          </table>{" "}
        </div>
      </div>
    );
    setTableSelect(table2);
  }

  async function CalculateInversion(data) {
    for (const key in tazaPlazos) {
      const value = tazaPlazos[key];
      console.log("value", value);
      tazaPlazos[key] =
        Math.round(((((valueInversion * value) / 360) * key) / 100) * 100) /
        100;
    }
    dataReinversion.map((e) => {
      e.Rendimiento = "$ " + tazaPlazos[e.key].toLocaleString("En-us");
      return e;
    });
  }

  const onKeyPress = (e) => {
    if (isNaN(e.key) && e.key !== "Enter" && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  const onChange = (value) => {
    if (!isNaN(value)) {
      if (value <= 10000000) {
        if (!value) setIsActive(false);
        else setIsActive(true);
        seValueInversion(value || 0);
      } else {
        // seValueInversion(value);
        setIsActive(true);
      }
    }
  };

  const onlines = () => {
    var lines = [];

    for (let i = 0; i < dataReinversion.length; i++) {
      const e = dataReinversion[i];
      lines.push(
        <span style={{ width: "21.4%" }}>
          <span className="line"></span>
          <span className="percent ">{e.Tasa}</span>
        </span>
      );
    }
    return lines;
  };

  const getGat = (title, type) => {
    console.log("getGat");
    return (
      <div className="gat-container">
        <div className="title">
          <span className="helpText">{title}</span>
        </div>
        <div className="gat-items">
          {dataReinversion.map((e, index) => {
            return (
              <div key={index} className="gat-item">
                <span className="helpText">{e[type]}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="investment-simulator">
        <div className="investment-header">
          <h3 className="header">Simula tu inversión</h3>
          <p className="investment-description">
            Escribe una cantidad y descubre su rendimiento según el plazo.
          </p>
          <InputNumber
            id="inputNumberAnt"
            controls={false}
            className="input-number"
            min={100}
            value={valueInversion}
            defaultValue={100}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
          <span className="minimum-amount">El monto mínimo es de $100.00</span>
        </div>
        <div className="investment-details">
          <div className="investment-online-status">{onlines()}</div>
          <div className="investment-results">
            {dataReinversion.map((data, i) => (
              <div
                key={i}
                className={`investment-item ${isActive ? "active" : ""} ${
                  data.ClassName
                }`}
              >
                <div className="investment-period">{data.Plazo}</div>
                <div className="investment-yield" id="prime">
                  <span title={data.Rendimiento}>{data.Rendimiento}</span>
                </div>
              </div>
            ))}
          </div>
          <span className="hidden-text"></span>
          {getGat("GAT REAL", "gatR")}
          {getGat("GAT NOMINAL", "gatN")}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  SetNewListGroups: (new_group_list) =>
    dispatch(SetNewListGroups(new_group_list)),
});

export default Calculadora;
