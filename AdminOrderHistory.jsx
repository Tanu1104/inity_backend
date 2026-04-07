import React, { useState } from 'react';
import { Search, Edit2, Eye, Trash2 } from 'lucide-react';

const AdminOrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 'ORD001', customer: 'Shaan Sayyad', email: 'shaan.sayyad@example.com', product: 'Wireless Headphones', amount: 4999, status: 'Completed', date: '2026-02-01', trackingId: 'TRK123456' },
    { id: 'ORD002', customer: 'Priya Sharma', email: 'priya.sharma@example.com', product: 'Smartwatch', amount: 8999, status: 'Shipped', date: '2026-02-02', trackingId: 'TRK123457' },
    { id: 'ORD003', customer: 'Arjun Kumar', email: 'arjun.kumar@example.com', product: 'Earbuds', amount: 2499, status: 'Pending', date: '2026-02-03', trackingId: 'TRK123458' },
    { id: 'ORD004', customer: 'Neha Gupta', email: 'neha.gupta@example.com', product: 'Speaker', amount: 5999, status: 'Completed', date: '2026-02-04', trackingId: 'TRK123459' },
    { id: 'ORD005', customer: 'Vikram Patel', email: 'vikram.patel@example.com', product: 'Neckband', amount: 1999, status: 'Cancelled', date: '2026-02-05', trackingId: 'TRK123460' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'status-completed';
      case 'Shipped': return 'status-shipped';
      case 'Pending': return 'status-pending';
      case 'Cancelled': return 'status-cancelled';
      default: return 'status-shipped';
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Order History</h2>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-red-500" size={20} />
          <input
            type="text"
            placeholder="Search by Order ID, Customer, or Email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-input w-full pl-10"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="admin-input"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td className="font-semibold">{order.id}</td>
                <td>
                  <div>
                    <p className="text-white">{order.customer}</p>
                    <p className="text-gray-500 text-sm">{order.email}</p>
                  </div>
                </td>
                <td>{order.product}</td>
                <td className="font-semibold">₹{order.amount.toLocaleString()}</td>
                <td>
                  <span className={`status-badge ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td className="flex gap-2">
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    className="admin-btn-secondary text-xs p-2"
                    title="View Details"
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    className="admin-btn-secondary text-xs p-2"
                    title="Edit Order"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    className="admin-btn-secondary text-xs p-2"
                    title="Delete Order"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Order Details - {selectedOrder.id}</h3>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="stat-label mb-2">Customer Name</p>
                  <p className="text-white font-semibold">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="stat-label mb-2">Email</p>
                  <p className="text-white font-semibold">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="stat-label mb-2">Product</p>
                  <p className="text-white font-semibold">{selectedOrder.product}</p>
                </div>
                <div>
                  <p className="stat-label mb-2">Amount</p>
                  <p className="text-white font-semibold">₹{selectedOrder.amount}</p>
                </div>
                <div>
                  <p className="stat-label mb-2">Status</p>
                  <span className={`status-badge ${getStatusColor(selectedOrder.status)} inline-block mt-1`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <p className="stat-label mb-2">Order Date</p>
                  <p className="text-white font-semibold">{selectedOrder.date}</p>
                </div>
                <div className="col-span-2">
                  <p className="stat-label mb-2">Tracking ID</p>
                  <p className="text-white font-semibold">{selectedOrder.trackingId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderHistory;
