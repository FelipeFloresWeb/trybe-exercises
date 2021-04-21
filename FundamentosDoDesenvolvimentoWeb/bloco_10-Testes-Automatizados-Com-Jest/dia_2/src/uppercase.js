const uppercase = (str, callback) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback(str.toUpperCase()));
      return reject({ error: 'não foi possivel resgatar a string' });
    }, 1000);
  });
};

module.exports = uppercase;
