#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wllcome message 
 console.log("/n/tWellcome To  \'CodeWithNadia\' - CLI Simple Calculator\n");

//Asking Question from Users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number" , name: "firstNumber"},
    {message: "Enter Second Number" , type: "number" , name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices:["Addition","Subtractions","Multiplication","Division"]
    },
]);

// conditional statements if-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input");
}