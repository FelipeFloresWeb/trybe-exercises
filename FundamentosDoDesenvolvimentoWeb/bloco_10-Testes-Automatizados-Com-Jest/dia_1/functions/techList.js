function techList(array, studentName) {
  let object = [];
  if (array.length === 0) {
    object = 'Vazio!';
  }
  for (let index = 0; index < array.sort().length; index += 1) {
    let techRefer = { tech: array[index], name: studentName };
    object.push(techRefer);
  }
  return object;
}
module.exports = techList;
