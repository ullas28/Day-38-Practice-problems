const prompt = require('prompt-sync')();
let num = prompt("Enter a number");
num = parseInt(num);
let fact = 1;
for(let i=1; i<=num; i++){
 fact=fact*i;
}
console.log(fact);