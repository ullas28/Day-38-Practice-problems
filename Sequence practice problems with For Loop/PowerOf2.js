const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number: "));

if (n >= 0 && Number.isInteger(n)) {
    for (;true;) {
        let power = Math.pow(2, n)
        if(power <= 256) {
            console.log("2^" + n + " = " + power);
            break;
        } else {
            console.log("Maximum reached");
            break;
        }
    }
} else
 {
console.log("Enter only non-negative integers.");
}

/* const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number: "));

function power(base, exponent) {
    var result = 1;
    if(exponent == undefined) {
        exponent = n;
    }
    if(exponent<=8){
    for(var i=1; i<=exponent; i++) {
        result = result * base;
            }
} else
    {
        return "Enter power value less than or equal to 8";
    }
    return result;
}

console.log("2 power of " + n + " :\n " +power(2,n));*/