var ps = require('prompt-sync');
var prompt = ps();
var day = prompt("Enter Day: ");
var month = prompt("Enter Month: ");

if((day<=20 && month<=6) || (day>=20 && 6>month>=3) || (day<=31 && month<=5))
{
    console.log("True");
}
else
{
    console.log("false");
}