import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import AdminSidebar from './AdminSidebar';
import AdminAnalytics from './AdminAnalytics';
import AdminOrderHistory from './AdminOrderHistory';
import AdminSettings from './AdminSettings';
import { ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';
import './Admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalUsers: 0,
    totalProducts: 0
  });

  // Initialize with mock data
  useEffect(() => {
    const mockOrders = [
      { id: 'ORD001', customer: 'Shaan Sayyad', product: 'Wireless Headphones', amount: 4999, status: 'Completed', date: '2026-02-01' },
      { id: 'ORD002', customer: 'Priya Sharma', product: 'Smartwatch', amount: 8999, status: 'Pending', date: '2026-02-02' },
      { id: 'ORD003', customer: 'Arjun Kumar', product: 'Earbuds', amount: 2499, status: 'Shipped', date: '2026-02-03' },
      { id: 'ORD004', customer: 'Neha Gupta', product: 'Speaker', amount: 5999, status: 'Completed', date: '2026-02-04' },
    ];

    const mockProducts = [
      { id: 'P001', name: 'Wireless Headphones', category: 'headphones', price: 4999, stock: 45 },
      { id: 'P002', name: 'Smartwatch', category: 'smartwatch', price: 8999, stock: 32 },
      { id: 'P003', name: 'Earbuds', category: 'earbuds', price: 2499, stock: 120 },
      { id: 'P004', name: 'Speaker', category: 'speaker', price: 5999, stock: 28 },
      { id: 'P005', name: 'Neckband', category: 'neckband', price: 1999, stock: 65 },
    ];

    const mockUsers = [
      { id: 1, name: 'Shaan Sayyad', email: 'shaan.sayyad@example.com', joinDate: '2025-12-10', orders: 3 },
      { id: 2, name: 'Priya Sharma', email: 'priya.sharma@example.com', joinDate: '2025-11-15', orders: 5 },
      { id: 3, name: 'Arjun Kumar', email: 'arjun.kumar@example.com', joinDate: '2025-10-20', orders: 2 },
      { id: 4, name: 'Neha Gupta', email: 'neha.gupta@example.com', joinDate: '2025-09-05', orders: 7 },
    ];

    setOrders(mockOrders);
    setProducts(mockProducts);
    setUsers(mockUsers);

    setStats({
      totalOrders: mockOrders.length,
      totalRevenue: mockOrders.reduce((sum, order) => sum + order.amount, 0),
      totalUsers: mockUsers.length,
      totalProducts: mockProducts.length
    });
  }, []);

  const chartData = [
    { name: 'Jan', revenue: 45000, orders: 12 },
    { name: 'Feb', revenue: 52000, orders: 15 },
    { name: 'Mar', revenue: 48000, orders: 13 },
    { name: 'Apr', revenue: 61000, orders: 18 },
    { name: 'May', revenue: 55000, orders: 16 },
    { name: 'Jun', revenue: 67000, orders: 20 },
  ];

  const categoryData = [
    { name: 'Headphones', value: 35 },
    { name: 'Smartwatch', value: 25 },
    { name: 'Earbuds', value: 20 },
    { name: 'Speaker', value: 15 },
    { name: 'Neckband', value: 5 },
  ];

  // Professional red and black color palette
  const COLORS = ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#fee2e2'];

  return (
    <div className="admin-container flex h-screen bg-[#0f1115]">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                  icon={<ShoppingCart size={32} />}
                  title="Total Orders"
                  value={stats.totalOrders}
                />
                <StatCard 
                  icon={<TrendingUp size={32} />}
                  title="Total Revenue"
                  value={`₹${stats.totalRevenue.toLocaleString()}`}
                />
                <StatCard 
                  icon={<Users size={32} />}
                  title="Total Users"
                  value={stats.totalUsers}
                />
                <StatCard 
                  icon={<Package size={32} />}
                  title="Total Products"
                  value={stats.totalProducts}
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 admin-chart-container">
                  <h2 className="admin-chart-title">Revenue Trend</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#a3a3a3" />
                      <YAxis stroke="#a3a3a3" />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={2} dot={{ fill: '#dc2626' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Category Distribution */}
                <div className="admin-chart-container">
                  <h2 className="admin-chart-title">Product Categories</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#dc2626"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Orders Chart */}
              <div className="admin-chart-container">
                <h2 className="admin-chart-title">Orders Trend</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#a3a3a3" />
                    <YAxis stroke="#a3a3a3" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #dc2626' }} />
                    <Legend />
                    <Bar dataKey="orders" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && <OrdersManagement orders={orders} setOrders={setOrders} />}

          {/* Products Tab */}
          {activeTab === 'products' && <ProductsManagement products={products} setProducts={setProducts} />}

          {/* Users Tab */}
          {activeTab === 'users' && <UsersManagement users={users} setUsers={setUsers} />}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && <AdminAnalytics />}

          {/* Settings Tab */}
          {activeTab === 'settings' && <AdminSettings />}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="stat-card">
    <div className="flex items-center justify-between">
      <div>
        <p className="stat-label">{title}</p>
        <p className="stat-value mt-2">{value}</p>
      </div>
      <div className="opacity-20">{icon}</div>
    </div>
  </div>
);

const OrdersManagement = ({ orders, setOrders }) => {
  const [editingOrder, setEditingOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [showForm, setShowForm] = useState(false);

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
    setEditingOrder(null);
  };

  const deleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Orders Management</h2>
        <button className="admin-btn-primary">
          + New Order
        </button>
      </div>

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
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>₹{order.amount}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`status-badge status-${order.status.toLowerCase()}`}
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td>{order.date}</td>
                <td>
                  <button 
                    onClick={() => deleteOrder(order.id)}
                    className="admin-btn-secondary text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProductsManagement = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', category: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const addProduct = () => {
    if (formData.name && formData.price && formData.stock && formData.category) {
      const newProduct = {
        id: `P${Date.now()}`,
        ...formData,
        price: parseInt(formData.price),
        stock: parseInt(formData.stock)
      };
      setProducts([...products, newProduct]);
      setFormData({ name: '', price: '', stock: '', category: '', description: '' });
      setShowForm(false);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Products Management</h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="admin-btn-primary"
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <div className="admin-card mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Add New Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="admin-input"
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="admin-input"
            />
            <input
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="admin-input"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="admin-input"
            >
              <option value="">Select Category</option>
              <option value="headphones">Headphones</option>
              <option value="earbuds">Earbuds</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="speaker">Speaker</option>
              <option value="neckband">Neckband</option>
            </select>
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Product Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="admin-input w-full"
              rows="5"
              style={{ resize: 'vertical' }}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button 
              onClick={addProduct}
              className="admin-btn-primary"
            >
              Add Product
            </button>
            <button 
              onClick={() => setShowForm(false)}
              className="admin-btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td className="capitalize">{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>
                <td className="flex gap-2">
                  <button className="admin-btn-secondary text-xs">
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="admin-btn-secondary text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UsersManagement = ({ users, setUsers }) => {
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Users Management</h2>
        <button className="admin-btn-primary">
          + New User
        </button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Orders</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.joinDate}</td>
                <td>{user.orders}</td>
                <td className="flex gap-2">
                  <button className="admin-btn-secondary text-xs">
                    View
                  </button>
                  <button 
                    onClick={() => deleteUser(user.id)}
                    className="admin-btn-secondary text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
