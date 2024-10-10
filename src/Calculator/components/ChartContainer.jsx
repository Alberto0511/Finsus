import React, { useState, useEffect } from 'react';
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
import '../../App.css'; // Asegúrate de que los estilos están en App.css

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
        <p>{`Ganancia: ${payload[0].value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</p>
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
        <YAxis
          tickFormatter={(value) =>
            `$${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="bottom"
          wrapperStyle={{ marginLeft: 60 }}
          iconType="circle"
        />
        <Line
          type="monotone"
          dataKey="compuesto"
          stroke="#FF0000"
          dot={{ r: 6, stroke: '#FF0000', strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 8, stroke: '#FF0000', strokeWidth: 2, fill: 'white' }}
        />
        <Line
          type="monotone"
          dataKey="simple"
          stroke="#00008B"
          dot={{ r: 6, stroke: '#00008B', strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 8, stroke: '#00008B', strokeWidth: 2, fill: 'white' }}
        />
        <Line
          type="monotone"
          dataKey="montoInicial"
          stroke="#808080"
          dot={{ r: 6, stroke: '#808080', strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 8, stroke: '#808080', strokeWidth: 2, fill: 'white' }}
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
        { name: 'Mes 6', compuesto: 1400, simple: 100, montoInicial: 100 },
        { name: 'Mes 7', compuesto: 1800, simple: 100, montoInicial: 100 },
        { name: 'Mes 8', compuesto: 2400, simple: 100, montoInicial: 100 },
        { name: 'Mes 9', compuesto: 3600, simple: 100, montoInicial: 100 },
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
