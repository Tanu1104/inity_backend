import React, { useState } from 'react';
import { Settings, Bell, Lock, Palette, Database, Eye, EyeOff } from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Inity - Audio Store',
    supportEmail: 'support@inity.com',
    adminEmail: 'admin@inity.com',
    currency: 'INR',
    taxRate: 18,
    freeShippingThreshold: 500,
    orderNotifications: true,
    productNotifications: true,
    lowStockAlert: true,
    darkMode: true,
    twoFactorAuth: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setSavedMessage('Settings saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Settings size={32} className="text-red-500" />
        <h2 className="text-3xl font-bold text-white">Settings & Configuration</h2>
      </div>

      {/* Success Message */}
      {savedMessage && (
        <div className="admin-success-message">
          {savedMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* General Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Section */}
          <div className="admin-card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Database size={20} className="text-red-500" /> General Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="admin-form-label">Site Name</label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => handleChange('siteName', e.target.value)}
                  className="admin-input w-full"
                />
              </div>
              <div>
                <label className="admin-form-label">Support Email</label>
                <input
                  type="email"
                  value={settings.supportEmail}
                  onChange={(e) => handleChange('supportEmail', e.target.value)}
                  className="admin-input w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="admin-form-label">Currency</label>
                  <select
                    value={settings.currency}
                    onChange={(e) => handleChange('currency', e.target.value)}
                    className="admin-input w-full"
                  >
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
                <div>
                  <label className="admin-form-label">Tax Rate (%)</label>
                  <input
                    type="number"
                    value={settings.taxRate}
                    onChange={(e) => handleChange('taxRate', parseFloat(e.target.value))}
                    className="admin-input w-full"
                  />
                </div>
              </div>
              <div>
                <label className="admin-form-label">Free Shipping Threshold (₹)</label>
                <input
                  type="number"
                  value={settings.freeShippingThreshold}
                  onChange={(e) => handleChange('freeShippingThreshold', parseInt(e.target.value))}
                  className="admin-input w-full"
                />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="admin-card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Bell size={20} className="text-red-500" /> Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition">
                <label className="text-gray-300 font-medium cursor-pointer">Order Notifications</label>
                <input
                  type="checkbox"
                  checked={settings.orderNotifications}
                  onChange={(e) => handleChange('orderNotifications', e.target.checked)}
                  className="w-5 h-5 cursor-pointer accent-red-500"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition">
                <label className="text-gray-300 font-medium cursor-pointer">Product Notifications</label>
                <input
                  type="checkbox"
                  checked={settings.productNotifications}
                  onChange={(e) => handleChange('productNotifications', e.target.checked)}
                  className="w-5 h-5 cursor-pointer accent-red-500"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition">
                <label className="text-gray-300 font-medium cursor-pointer">Low Stock Alert</label>
                <input
                  type="checkbox"
                  checked={settings.lowStockAlert}
                  onChange={(e) => handleChange('lowStockAlert', e.target.checked)}
                  className="w-5 h-5 cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="admin-card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Palette size={20} className="text-red-500" /> Appearance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition">
                <label className="text-gray-300 font-medium cursor-pointer">Dark Mode</label>
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleChange('darkMode', e.target.checked)}
                  className="w-5 h-5 cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="admin-card h-fit">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Lock size={20} className="text-red-500" /> Security
          </h3>
          <div className="space-y-4">
            <div className="bg-black bg-opacity-30 rounded-lg p-4">
              <label className="block text-sm font-semibold text-gray-300 mb-3">Two-Factor Authentication</label>
              <button
                onClick={() => handleChange('twoFactorAuth', !settings.twoFactorAuth)}
                className={`w-full px-4 py-2 rounded-lg font-semibold transition ${
                  settings.twoFactorAuth
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-600 hover:bg-gray-700'
                } text-white`}
              >
                {settings.twoFactorAuth ? 'Enabled' : 'Disabled'}
              </button>
            </div>

            <div className="bg-black bg-opacity-30 rounded-lg p-4">
              <label className="block text-sm font-semibold text-gray-300 mb-3">Change Password</label>
              <button className="admin-btn-primary w-full">
                Update Password
              </button>
            </div>

            <div className="bg-black bg-opacity-30 rounded-lg p-4">
              <label className="block text-sm font-semibold text-gray-300 mb-3">Admin Email</label>
              <input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => handleChange('adminEmail', e.target.value)}
                className="admin-input w-full mb-3"
              />
              <button className="admin-btn-secondary w-full">
                Verify Email
              </button>
            </div>

            <div className="bg-red-900 bg-opacity-20 border border-red-600 rounded-lg p-3">
              <p className="text-red-400 text-sm font-semibold">⚠️ Danger Zone</p>
              <button className="admin-btn-secondary w-full mt-2 border-red-600 hover:bg-red-600 hover:bg-opacity-20">
                Clear All Cache
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handleSave}
          className="admin-btn-primary px-6 py-3"
        >
          Save Settings
        </button>
        <button className="admin-btn-secondary px-6 py-3">
          Reset to Defaults
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-8 admin-card border-red-600">
        <h4 className="text-red-500 font-semibold mb-2">💡 Pro Tips</h4>
        <ul className="text-gray-300 text-sm space-y-2">
          <li>• Enable 2FA for enhanced account security</li>
          <li>• Keep your admin email updated for important notifications</li>
          <li>• Adjust tax rates according to your region</li>
          <li>• Set free shipping threshold to encourage bulk orders</li>
          <li>• Enable low stock alerts to never miss inventory updates</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSettings;
