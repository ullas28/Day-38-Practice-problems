const prompt = require('prompt-sync')();
let randomCheck =prompt("Enter a number for day : ");

randomCheck = parseInt(randomCheck);


switch(randomCheck)
    {
    case 1:
        console.log("DAY "+randomCheck+" IS MONDAY");
        break;
    case 2:
        console.log("DAY "+randomCheck+" IS TUESDAY");
        break;
    case 3:
        console.log("DAY "+randomCheck+" IS WEDNESDAY");
        break;
    case 4:
        console.log("DAY "+randomCheck+" IS THRSDAY");
        break;
    case 5:
        console.log("DAY "+randomCheck+" IS FRIDAY");
        break;
    case 6:
        console.log("DAY "+randomCheck+" IS SATURDAY");
        break;
    case 7:
        console.log("DAY "+randomCheck+" IS  SUNDAY");
        break;
    default:
        console.log("Invalid Input");
        break;
}
