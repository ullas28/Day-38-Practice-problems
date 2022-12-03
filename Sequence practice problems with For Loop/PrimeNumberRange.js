const prompt = require("prompt-sync")();

let i=0,fNum,sNum, temp;
    fNum= prompt("Please give the first number");
    sNum= prompt("Please give the second number");
    console.log("Prime numbers in range "+fNum+ " and " +sNum+"are");
    fNum = parseInt(fNum);
    sNum = parseInt(sNum);
    while(fNum<=sNum){
        temp=0;
        for(i=2;i<=(fNum/2);i++){
            if(fNum%i==0){
                temp=1;
                break;
            }
        }
        if(temp==0)
            console.log(fNum);
        fNum++;
    }
    if(temp ==0){
        console.log(fNum);
        fNum++;
    }