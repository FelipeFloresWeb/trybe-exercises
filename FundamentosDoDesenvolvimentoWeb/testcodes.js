const narcissistic = (value) => {
  const arrvalue = value.toString().split('');
  const arrvalueInt = arrvalue.map((el) => parseInt(el, 10));
  const result = arrvalueInt.reduce((acc, item) => acc + (item ** arrvalueInt.length), 0);
  return result === value;
};

narcissistic(1938);

// narcissistic=v=>[...s=v+''].reduce((p,c)=>p+c**s.length,0)==v;

// const narcissistic = number =>
//   number === Array.from(number + '')
//     .reduce((pv, cv, i, arr) => pv + Math.pow(cv, arr.length), 0);

// const narcissistic = value =>
//   [...`${value}`].reduce((pre, val, _, arr) => pre + val ** arr.length, 0) === value;

const isIsogram = (str) => {
  const toSee = str.toLowerCase().split('');
  const copy = toSee;
  console.log(toSee);
  return console.log(toSee.every((letter, index) => letter !== copy[index + 1]));
};

isIsogram('isIsogram');
