import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';


const LineChartComponent: React.FC<{ data: { name: string; orders: number }[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="orders" stroke="#4CAF50" strokeWidth={2} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
