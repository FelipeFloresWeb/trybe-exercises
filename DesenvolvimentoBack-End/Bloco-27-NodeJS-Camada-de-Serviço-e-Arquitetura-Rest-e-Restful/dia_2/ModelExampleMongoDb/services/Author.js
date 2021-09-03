const Author = require('../models/Author');

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

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author);
};

const create = async (firstName, middlename, lastName) => {
  const authorValid = isValid(firstName, middlename, lastName);

  if (!authorValid) return false;

  const { insertedId } = await Author.create(firstName, middlename, lastName);
  return getNewAuthor({
    id: insertedId,
    firstName,
    middlename,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  create,
};
