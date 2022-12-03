const prompt =  require('prompt-sync')();

const number = parseInt(prompt("Enter a positive number: "));


function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function palindrome(str) {
    reverse = (str) => parseInt(String(str).split("").reverse().join(""), 10);
    return reverse(str) === str; 
  }
  

if(isPrime(number))
{
    console.log("Its a prime number");
}
else
{
    console.log("Its not a prime number")
}

if(palindrome(number)){
    console.log("Its a palindrome");
}
else
console.log("Its not a palindrome");