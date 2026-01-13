/**
 * Hello World Example
 * A simple demonstration of a Node.js application
 */

function sayHello(name = 'World') {
  return `Hello, ${name}!`;
}

function main() {
  console.log(sayHello());
  console.log(sayHello('Claude'));
}

main();

module.exports = { sayHello };
