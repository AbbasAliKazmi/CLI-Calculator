#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let pulseAnimation = chalkAnimation.pulse('Welcome to Abbas Calculator');
    await sleep();
    pulseAnimation.stop();
    console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function askQuestion() {
    const ans = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which Operation You Want To Perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Your First Number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Your Second Number"
        }
    ]);
    if (ans.operator == "Addition") {
        console.log(chalk.bgBlue.italic.bold(` ${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
    }
    else if (ans.operator == "Subtraction") {
        console.log(chalk.bgBlue.italic.bold(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
    }
    else if (ans.operator == "Multiplication") {
        console.log(chalk.bgYellow.italic.bold(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));
    }
    else if (ans.operator == "Division") {
        console.log(chalk.bgRed.italic.bold(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
    }
}
;
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue Press y or n ?",
        });
    } while (again.restart == 'y' || again.restart == 'yes' || again.restart == 'Y' || again.restart == 'YES');
}
;
startAgain();
