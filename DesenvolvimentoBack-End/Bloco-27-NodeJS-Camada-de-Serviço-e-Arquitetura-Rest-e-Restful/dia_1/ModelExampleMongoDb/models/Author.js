const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getNewAuthor = ({
  id, firstName, middleName, lastName,
}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// const serialize = (authorData) => ({
//   id: authorData.id,
//   firstName: authorData.first_name,
//   middleName: authorData.middle_name,
//   lastName: authorData.last_name,
// });

const getAll = async () => connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => authors.map(({
    _id, firstName, middleName, lastName,
  }) => getNewAuthor({
    id: _id,
    firstName,
    middleName,
    lastName,
  })));

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id, firstName, middleName, lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
};

const create = async (firstName, middleName, lastName) => {
  await connection().then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
