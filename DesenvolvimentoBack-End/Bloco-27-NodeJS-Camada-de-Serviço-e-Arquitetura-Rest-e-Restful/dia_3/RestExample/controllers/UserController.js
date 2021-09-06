const useModel = require('../models/User');

const listALL = (req, res) => {
  try {
    const data = useModel.getALL();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
};

// const cadastrar = (req, res) => {
//   try {
//     const data = useModel.getALL();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'error' });
//   }
// };

module.exports = { listALL };
