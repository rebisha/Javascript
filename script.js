/* // Variables and data types
var firstName = "Rebisha";
console.log(firstName);

var lastName = "Pokharel";
var age = 23;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job);

// Variable mutation and type coercion
var firstName = 'Rebisha';
var age = 24;
console.log(firstName + ' ' + age); //type coercion

//variable mutation
age = 'twenty four';
job = 'Developer';

alert(age + ' ' + job);
lastName = prompt('last name?');
console.log(lastName);

//Mark and John BMI JavaScript
var markMass = prompt("Mark, please enter your body mass.");
var markHeight = prompt("Mark, please enter your height.");
var markBmi = markMass / (markHeight ^ 2);

var johnMass = prompt("John, please enter your body mass.");
var johnHeight = prompt("John, please enter your height.");
var johnBmi = johnMass / (johnHeight ^ 2);

var isMarkHigherBmi = markBmi > johnBmi;
console.log(isMarkHigherBmi); */


function calcAverage(num1, num2, num3) {
    return (num1 + num2 + num3)/3;
}

var johnTeamAvg, mikeTeamAvg;

johnTeamAvg = calcAverage(89,120,103);
mikeTeamAvg = calcAverage(116,94,123);
maryTeamAvg = calcAverage(97,134,105);

console.log(`Average of John's team : `+ johnTeamAvg);
console.log(`Average of Mike's team : `+ mikeTeamAvg);
console.log(`Average of Mary's team : `+ maryTeamAvg);

if(johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log(`John's team are the winner.`);
} else if(johnTeamAvg === mikeTeamAvg && johnTeamAvg === maryTeamAvg) {
    console.log('The game was draw.');
} else if(maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
    console.log(`Mary's team are the winner`);
} else {
    console.log(`Mike's team are the winner.`);
}