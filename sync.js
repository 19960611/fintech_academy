var fs = require('fs');

console.log('A');

var result = fs. readFileSync('example/test.txt', 'utf-8');
//non-blocking blocking 방식 node.js
console.log(result);

console.log('c');