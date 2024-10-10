import React from 'react';

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

const InsertChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="compuesto"
          stroke="#FF0000"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="simple" stroke="#00008B" />
        <Line type="monotone" dataKey="montoInicial" stroke="#808080" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default InsertChart;
