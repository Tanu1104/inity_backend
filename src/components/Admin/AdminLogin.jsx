import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@inity.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      if (email === 'admin@inity.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'authenticated');
        navigate('/admin');
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        {/* Logo Section */}
        <div className="admin-login-header">
          <div className="admin-login-icon">
            <Lock size={32} className="text-white" />
          </div>
          <h1 className="admin-login-title">Admin Panel</h1>
          <p className="admin-login-subtitle">Secure Login Required</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="admin-form-group">
            <label className="admin-form-label">Email Address</label>
            <div className="admin-form-input-wrapper">
              <Mail size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="admin-form-input"
                placeholder="admin@inity.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="admin-form-group">
            <label className="admin-form-label">Password</label>
            <div className="admin-form-input-wrapper">
              <Lock size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-form-input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="admin-error-message">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="admin-login-button"
          >
            {loading ? 'Logging in...' : 'Login to Admin Panel'}
          </button>
        </form>

        {/* Back to Home */}
        <div className="admin-login-back">
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
