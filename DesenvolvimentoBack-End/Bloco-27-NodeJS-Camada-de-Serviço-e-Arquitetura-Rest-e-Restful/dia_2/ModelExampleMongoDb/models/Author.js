const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => authors.map(({
    _id, firstName, middleName, lastName,
  }) => ({
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

  return {
    id, firstName, middleName, lastName,
  };
};

const create = async (firstName, middleName, lastName) => {
  await connection().then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));
};

module.exports = {
  getAll,
  findById,
  create,
};
