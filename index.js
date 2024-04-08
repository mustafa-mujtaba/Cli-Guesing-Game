#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Muhammad Mehdi Raza Cli Number Guesing Game\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguestNumber",
        type: "number",
        message: "Enter your guest number(Number limit from 1 to 10):",
    }
]);
if (answer.userguestNumber === randomNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else {
    console.log("sorry you guess a wrong number.");
}
