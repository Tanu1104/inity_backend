import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AdminAnalytics = () => {
  const monthlyData = [
    { month: 'Jan', sales: 4000, visitors: 2400, orders: 24 },
    { month: 'Feb', sales: 3000, visitors: 1398, orders: 22 },
    { month: 'Mar', sales: 2000, visitors: 9800, orders: 29 },
    { month: 'Apr', sales: 2780, visitors: 3908, orders: 20 },
    { month: 'May', sales: 1890, visitors: 4800, orders: 21 },
    { month: 'Jun', sales: 2390, visitors: 3800, orders: 25 },
  ];

  const productStats = [
    { name: 'Headphones', sales: 1200 },
    { name: 'Smartwatch', sales: 900 },
    { name: 'Earbuds', sales: 1500 },
    { name: 'Speaker', sales: 800 },
    { name: 'Neckband', sales: 600 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Analytics & Reports</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="admin-card">
          <p className="stat-label mb-2">Avg Order Value</p>
          <p className="text-3xl font-bold text-white">₹5,324</p>
          <p className="text-green-400 text-sm mt-2">↑ 12% from last month</p>
        </div>
        <div className="admin-card">
          <p className="stat-label mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-white">3.24%</p>
          <p className="text-green-400 text-sm mt-2">↑ 0.5% from last month</p>
        </div>
        <div className="admin-card">
          <p className="stat-label mb-2">Avg Session Duration</p>
          <p className="text-3xl font-bold text-white">4m 32s</p>
          <p className="text-red-500 text-sm mt-2">↓ 0.3% from last month</p>
        </div>
        <div className="admin-card">
          <p className="stat-label mb-2">Customer Retention</p>
          <p className="text-3xl font-bold text-white">67%</p>
          <p className="text-green-400 text-sm mt-2">↑ 5% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales and Visitors */}
        <div className="admin-chart-container">
          <h3 className="admin-chart-title">Sales & Visitors Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#a3a3a3" />
              <YAxis stroke="#a3a3a3" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#dc2626" strokeWidth={2} dot={{ fill: '#dc2626' }} />
              <Line type="monotone" dataKey="visitors" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance */}
        <div className="admin-chart-container">
          <h3 className="admin-chart-title">Top Selling Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#a3a3a3" />
              <YAxis stroke="#a3a3a3" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
              <Bar dataKey="sales" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders by Status */}
      <div className="admin-chart-container">
        <h3 className="admin-chart-title">Orders by Status</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#a3a3a3" />
            <YAxis stroke="#a3a3a3" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
            <Legend />
            <Bar dataKey="orders" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminAnalytics;
