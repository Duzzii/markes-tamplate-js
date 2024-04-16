const prompt = require('prompt-sync')();
const num = parseInt(prompt('Enter your number of users: '));


for (let i = 0; i < num; i++){
   
    const name1 = prompt('Enter your name: ');
    const input1 = parseInt(prompt('Enter your marks 1: '));
    const input2 = parseInt(prompt('Enter your marks 2: '));
    const input3 = parseInt(prompt('Enter your marks 3: '));

    // const userInput1 = parseFloat(prompt('Enter your 1st degit: '));
    if((input1>=0 && input1 <= 100) && (input2>=0 && input2 <= 100) && (input3>=0 && input3 <= 100) ){

    var sum = input1 + input2 + input3;
    var aver = parseInt(sum/3);
    var status = '';

        if(aver > 0 & aver < 50){
            // console.log(`Number has ${checkp(input1)}`)
            status = `The average is less than 50: ${aver} FAIL`;
        }  
        else if(aver >= 50 & aver < 75){
            console.log(`You have passed with ${aver}`)
        }
        else if (aver >= 75 & aver <= 100){
            status = `Passed with a distiction: ${aver}`;
        }
        else{
            status = `Enter valide degits ${aver}`;
        }

        console.log(name1 +' '+ status);

    }
    else{
        console.log(name1 +' Enter valid inputs');
    }
}