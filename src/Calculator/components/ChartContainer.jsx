import React, { useState, useEffect } from 'react';
import '../../App.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import StartTruckIcon from '../../public/StartTruckIcon.svg';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <img
          src={StartTruckIcon}
          alt="Start Truck Icon"
          width={40}
          height={40}
        />
        <p>{`Ganancia: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
const InterestChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="bottom"
          wrapperStyle={{ marginLeft: 40 }}
          iconType="circle"
          formatter={() => null}
        />
        <Line
          type="monotone"
          dataKey="compuesto"
          stroke="#FF0000"
          dot={({ index }) =>
            index === data.length - 1 ? <circle r={6} /> : null
          }
        />
        <Line
          type="monotone"
          dataKey="simple"
          stroke="#00008B"
          dot={({ index }) =>
            index === data.length - 1 ? <circle r={6} /> : null
          }
        />
        <Line
          type="monotone"
          dataKey="montoInicial"
          stroke="#808080"
          dot={({ index }) =>
            index === data.length - 1 ? <circle r={6} /> : null
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const ChartContainer = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datosIniciales = [];
      setChartData(datosIniciales);

      // Estado con datos
      const datos = [
        { name: 'Mes 1', compuesto: 200, simple: 100, montoInicial: 100 },
        { name: 'Mes 2', compuesto: 400, simple: 100, montoInicial: 100 },
        { name: 'Mes 3', compuesto: 600, simple: 100, montoInicial: 100 },
        { name: 'Mes 4', compuesto: 800, simple: 100, montoInicial: 100 },
        { name: 'Mes 5', compuesto: 1000, simple: 100, montoInicial: 100 },
        { name: 'Mes 6', compuesto: 1200, simple: 100, montoInicial: 100 },
      ];
      setChartData(datos);
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <InterestChart data={chartData} />
    </div>
  );
};

export default ChartContainer;
