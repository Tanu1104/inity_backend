const jwt = require('jsonwebtoken');

console.log('[auth middleware] Loading...');

module.exports = (req, res, next) => {
  try {

    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
      });
    }

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.substring(7)
      : authHeader;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user id
    req.user = { id: decoded.id };

    next();

  } catch (error) {
    console.error('Token verification error:', error);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }

    res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
};

console.log('[auth middleware] Exported successfully');