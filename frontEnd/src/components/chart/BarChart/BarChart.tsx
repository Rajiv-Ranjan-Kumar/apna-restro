import React from 'react';
import './BarChart.scss'
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const CustomBarChart: React.FC<{ data: { name: string; cancelled: number; accepted: number; rejected: number; }[] }> = ({ data }) => {
    return (
        <div className='bar-chart'>
            <ResponsiveContainer>
                <RechartsBarChart data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip contentStyle={{
                        backgroundColor: 'var(--primary-bg-color)',
                        borderRadius: '10px',
                        boxShadow: 'var(--box-shadow)',
                    }}/>
                    <Legend />
                    <Bar dataKey="cancelled" fill="#f44336" fontSize={8}/>
                    <Bar dataKey="accepted" fill="#4CAF50" fontSize={8}/>
                    <Bar dataKey="rejected" fill="#1890ff" fontSize={8}/>
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CustomBarChart;
