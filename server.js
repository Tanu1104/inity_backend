// Load environment variables
require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRouter = require('./routes/productRoute');
const authRoutes = require('./routes/auth');
const passport = require('passport');
require('./config/passport');





const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Routes - Load after DB connection
    try {
      console.log('Loading auth routes...');
      const authRoutes = require('./routes/auth');
      console.log('Auth routes type:', typeof authRoutes);
      console.log('Auth routes is router?:', authRoutes.stack ? 'Yes' : 'No');
      
      if (!authRoutes || !authRoutes.stack) {
        throw new Error('Auth routes is not a valid Express router');
      }
      
      app.use('/api/auth', authRoutes);
      console.log('Auth routes loaded successfully');
    } catch (routeError) {
      console.error('Auth route loading error:', routeError.message);
      throw routeError;
    }
    
    // Health check route
    app.get('/health', (req, res) => {
      res.json({ status: 'OK', message: 'Server is running' });
    });
    
    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    });
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB or Server error:', err);
    process.exit(1);
  });


app.use('/api/products',productRouter)

