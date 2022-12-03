const prompt = require('prompt-sync')();

console.log(" 1]  Feet to Inch ");
console.log(" 2]  Feet to Meter");
console.log(" 3]  Inch to Feet");
console.log(" 4]  Meter to Feet");

let options = prompt("Enter your choice");

options = parseInt(options);


switch(options) {
    case 1:
        let foot = prompt("Enter the foot ");
        let feetToInch = (foot * 12);
        console.log(foot + " feet is equals to : " + feetToInch + "Inch");
        break;
    case 2:
        let feet = prompt("Enter the feet ");
        let feetToMeter = (feet / 3.28084);
        console.log(feet + " feet is equals to : " + feetToMeter + "Meter");
        break;
    case 3:
        let inch = prompt("Enter the inch ");
        let inchToFeet = (inch * 0.0833333);
        console.log(inch + " inch is equals to : " + inchToFeet + "Feet");
        break;
    case 4:
        let meter = prompt("Enter the inch");
        let meterToFeet = (meter * 3.28084);
        console.log(meter + " meter is equals to : " + meterToFeet + "Feet");
        break;
    default:
        console.log("Invalid Input");
        break;
    }