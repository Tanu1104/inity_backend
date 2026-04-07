import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, LogOut, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="admin-sidebar w-64 h-screen overflow-y-auto">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="admin-sidebar-logo w-10 h-10 flex items-center justify-center">
            <LayoutDashboard size={24} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-lg">Admin</p>
            <p className="text-gray-400 text-xs">Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`admin-menu-item w-full flex items-center gap-3 px-4 ${
                activeTab === item.id ? 'active' : ''
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-64 border-t border-gray-700 p-4">
        <div className="admin-card mb-4">
          <p className="text-gray-300 text-sm mb-2">Admin User</p>
          <p className="text-white font-semibold text-sm">admin@inity.com</p>
          <p className="text-gray-400 text-xs mt-1">Super Admin</p>
        </div>
        <Link 
          to="/"
          className="admin-btn-primary w-full flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          Exit Admin
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
