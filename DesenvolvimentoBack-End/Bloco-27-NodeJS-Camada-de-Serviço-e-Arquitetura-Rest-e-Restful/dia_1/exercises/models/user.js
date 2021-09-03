const { ObjectId } = require('mongodb');
const connection = require('./connection');

// function formatUser(document) {
//   const {
//     _id,
//     password,
//     ...user
//   } = document;

//   const formattedResult = {
//     id: _id,
//     ...user,
//   };

//   return formattedResult;
// }

const isValid = (firstName, lastName, email, password) => {
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
    return false;
  }

  return PASSWORD_REGEX.test(password);
};

function getAllUsers() {
  return connection().then((db) => db
    .collection('users')
    .find().toArray())
    .then((results) => results.map((item) => item));
}

const findById = async (id) => {
  const userData = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));

  if (!userData) return null;

  // const { firstName, lastName } = userData;

  return userData;
};

const userUpdate = async (id, firstName, lastName, email, password) => {
  const userData = await connection()
    .then((db) => db.collection('users')
      .updateOne({ _id: ObjectId(id) },
        {
          $set: {
            firstName,
            lastName,
            email,
            password,
          },
        }));

  if (!userData) return null;

  return userData;
};

function create(firstName, lastName, email, password) {
  return connection().then((db) => db
    .collection('users')
    .insertOne({
      firstName, lastName, email, password,
    }))
    .then((result) => ({
      id: result.insertedId, firstName, lastName, email,
    }));
}

module.exports = {
  isValid,
  create,
  getAllUsers,
  findById,
  userUpdate,
};
