const productModel = require('../models/Products');

const listALL = (req, res) => {
  try {
    const data = productModel.getALL();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

module.exports = { listALL };
