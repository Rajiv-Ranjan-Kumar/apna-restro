import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


const PieChartComponent:React.FC<{pieData: { name: string, value: number }[]}> = ({ pieData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={pieData} dataKey="value" nameKey="name" fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
