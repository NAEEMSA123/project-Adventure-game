#! user/bin/env node
import inquirer from "inquirer";
//------------------------------------games veriable-------------------------------
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEneniesHealth = 75;
let enemyAttackDamageToHere = 25;
//------------------------------------player veriable------------------------------
let herroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
//-------------------------------------while condition----------------------------
let gameRunning = true;
console.log("Welcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEneniesHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        "3. Run";
        console.log(`your Health ${herroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ["1. Attack", "2.Take Health potion", "3. Run"]
        });
        if (option.ans === "1. Attack") {
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHere + 1);
            enemyHealth -= damageToEnemy;
            herroHealth -= damageToHero;
            console.log(`you strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (herroHealth < 1) {
                console.log("you have taken too much damage . you are too weak to continue.");
                break;
            }
        }
        else if (option.ans === "2.Take Health potion") {
            if (numHealthPotion > 0) {
                herroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`you are health potion for ${healthPotionHealAmount}`);
                console.log(`you now have ${herroHealth} health`);
                console.log(`you have ${numHealthPotion} health potions left.`);
            }
            else {
                console.log(` you have no health potion left. defeat enemy for a chance get health potion`);
            }
        }
        else if (option.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (herroHealth < 1) {
        console.log(`you are out from battle. you are too weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${herroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`enemy give you health potion`);
        console.log(`your health is ${herroHealth}`);
        console.log(`you health potion is ${numHealthPotion}`);
    }
    let useroption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. continue", "Exit"]
    });
    if (useroption.ans === "1. continue") {
        console.log("you are continue on your adventure");
    }
    else {
        console.log("you successfuly Exit from Deadzone");
        break;
    }
    console.log("Thank you for plying.\n");
}
