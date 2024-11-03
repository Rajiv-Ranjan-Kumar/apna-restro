import { LineChart, Line, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Tooltip, Cell, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.scss';
import { ordersByStatus, revenueByCategory, topSellingFoods, totalOrdersData } from '../../../../data/analitics';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const Analytics = () => {
  return (
    <div className="analytics-dashboard-container">
      <div className="chart-section">
        <div className="chart-card">
          <h3>Total Orders Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={totalOrdersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#82ca9d" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-card">
          <h3>Orders by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ordersByStatus}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {ordersByStatus.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Top Selling Foods</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topSellingFoods}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="food" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#ffc658" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

