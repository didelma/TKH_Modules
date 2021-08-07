//My budget app
//codepen Link: https://codepen.io/didelma/pen/mdmzoPo

// Step 1
const Income = parseInt(prompt("Income:"));

const Food = parseInt(prompt("Food:"));

const Housing = parseInt(prompt("Housing:"));

const Transportation = parseInt(prompt("Transportation:"));

const Other = parseInt(prompt("Other:"));

const Savings = parseInt(prompt("Savings:"));

//Step 2: Yearly Saving turned to weekly
const WeeklySaving = Number(Savings)/52;


//Step 3: Weekly Exepnse leftover + else statement
const totalWeeklyCost = Number(Income)-Number(Food)-Number(Housing)-Number(Transportation)-Number(Other);

const missing = Number(WeeklySaving)-Number(totalWeeklyCost);


//Step4: if/else for savings
if (totalWeeklyCost > Savings) {
        console.log("You are on track!");
} 

else {
        console.log("You need to save: "+missing +" a week") 
}