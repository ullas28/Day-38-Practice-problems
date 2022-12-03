var prompt = require('prompt-sync')();
var number = prompt("Enter number between 1 to 9 : ");
number = parseInt(number);
switch(number)
    {
    case 1:
        console.log(number+" ONE");
        break;
    case 2:
        console.log(number+" TWO");
        break;
    case 3:
        console.log(number+" THREE");
        break;
    case 4:
        console.log(number+" FOUR");
        break;
    case 5:
        console.log(number+" FIVE");
        break;
    case 6:
        console.log(number+" SIX");
        break;
    case 7:
        console.log(number+" SEVEN");
        break;
    case 8:
        console.log(number+" EIGHT");
        break;
    case 9:
        console.log(number+" NINE");
        break;
    case 0:
        console.log(number+" ZERO");
        break;
    
}