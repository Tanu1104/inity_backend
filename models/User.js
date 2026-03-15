console.log('[User.js] Starting to load...');
const mongoose = require('mongoose');
console.log('[User.js] Dependencies loaded');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long']
  },
  phone: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number']
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  avatar: {
    type: String
  }
}, { timestamps: true });

console.log('[User.js] Exporting User model...');
module.exports = mongoose.model('User', userSchema);
console.log('[User.js] User model exported');
