const User = require('../models/User');

const getDashboard = async (req, res) => {
  try {
    res.json({
      message: 'Dashboard data',
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboard };