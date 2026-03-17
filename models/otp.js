const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number']
  },
  otp: {
    type: String,
    required: [true, 'OTP is required'],
    trim: true,
    match: [/^\d{6}$/, 'Please provide a valid 6-digit OTP']
  },
  expiresAt: {
    type: Date,
    required: true
  }
}, { timestamps: true });

// 🔥 Automatically delete OTP when expired
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Otp', otpSchema);
