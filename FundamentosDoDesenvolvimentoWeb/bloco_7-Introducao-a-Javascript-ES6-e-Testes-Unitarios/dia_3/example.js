/* eslint-disable no-console */
const assert = require('assert');

const myFunction = () => console.log('Olá esta é minha função');

assert.strictEqual(typeof myFunction, 'function');
