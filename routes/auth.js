console.log('[auth.js] Starting to load...');
const express = require('express');
console.log('[auth.js] Express loaded');
const router = express.Router();
console.log('[auth.js] Router created');
const jwt = require('jsonwebtoken');
console.log('[auth.js] JWT loaded');
const { body, validationResult } = require('express-validator');
console.log('[auth.js] express-validator loaded');
const User = require('../models/User');
console.log('[auth.js] User model loaded');
const authMiddleware = require('../middleware/auth');
console.log('[auth.js] authMiddleware loaded, type:', typeof authMiddleware);
const passport = require('passport');
console.log('[auth.js] Passport loaded, type:', typeof passport);
const Otp = require('../models/otp');
console.log('[auth.js] otp model loaded, type:', typeof Otp);


// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};


router.post('/signup', async (req, res) => {
  try {
    const { username, email, phone } = req.body;

    if (!username || !phone) {
      return res.status(400).json({
        success: false,
        message: "Username and phone are required"
      });
    }

    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await User.create({
      username,
      email,
      phone
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error("Signup error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during signup"
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get logged in user profile
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-__v');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar
      }
    });

  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

//Step 1:

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

//Step 2:

router.get('/google/callback',
  passport.authenticate('google', {session: false}),
  (req,res) => {
    try {
      const token = jwt.sign({id: req.user._id, email: req.user.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
      res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
    } catch (error) {
      console.error('Google auth callback error:', error);
      res.redirect(`${process.env.CLIENT_URL}/login?error=Authentication%20failed`);
    }
  }
);

// @route   PUT /api/auth/update
// @desc    Update logged in user profile
// @access  Private
router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { username, email, phone } = req.body;

    // Find logged in user
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update fields only if provided
    if (username) user.username = username;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    await user.save();

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   POST /api/auth/send-otp
// @desc    Send OTP to phone
// @access  Public
router.post('/send-otp', async (req, res) => {
  console.log("🔥 SEND OTP ROUTE EXECUTING 🔥");
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required'
      });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Set expiry (5 minutes)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Delete previous OTP if exists
    await Otp.deleteMany({ phone });

    // Save new OTP
    await Otp.create({ phone, otp, expiresAt });

    // 🔥 DEV ONLY (Remove when SMS is added)
    console.log(`OTP for ${phone}: ${otp}`);

    res.status(200).json({
      success: true,
      message: 'OTP sent successfully'
    });

  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP and check if user exists
// @access  Public
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Phone and OTP are required'
      });
    }

    // 🔍 Find OTP record
    const otpRecord = await Otp.findOne({ phone, otp });

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      });
    }

    // ⏳ Check expiry
    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'OTP expired'
      });
    }

    // 🔎 Check if user exists
    const user = await User.findOne({ phone });

    // ✅ If user exists → login immediately
    if (user) {
      await Otp.deleteMany({ phone });

      const token = generateToken(user._id);

      return res.status(200).json({
        success: true,
        isExistingUser: true,
        token,
        user: {
          id: user._id,
          phone: user.phone,
          username: user.username,
          email: user.email
        }
      });
    }

    // 🆕 If user does NOT exist → allow signup
    return res.status(200).json({
      success: true,
      isExistingUser: false,
      message: 'New user, proceed to signup'
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});


console.log('[auth.js] All routes defined, exporting router...');
module.exports = router;
console.log('[auth.js] Router exported successfully');




