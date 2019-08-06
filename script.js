// Variables and data types
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

//Mark and John BMI JavaScript
/* var markMass = prompt("Mark, please enter your body mass in kg.");
var markHeight = prompt("Mark, please enter your height in cm.");
var markBmi = alert("Mark, your BMI is: " + (markMass / (markHeight * markHeight))*10000);

var johnMass = prompt("John, please enter your body mass in kg.");
var johnHeight = prompt("John, please enter your height in cm.");
var johnBmi = alert("John, your BMI is: " + (johnMass / (johnHeight * johnHeight))*10000);

var isMarkHigherBmi = markBmi > johnBmi;
console.log(isMarkHigherBmi);  */


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

var bills = [124, 48, 268];
var tips = [];

function tipCalculator(bills) {
    bills.forEach(bill => {
        if(bill < 50) {
            tips[0] = bill * 0.2;
        } else if(bill > 200) {
            tips[1] = bill * 0.1;
        } else {
            tips[2] = bill * 0.15;
        }
    });  
}
tipCalculator(bills);
console.log(tips);

var johnObj = {
    name : 'John Smith',
    mass : 64,
    height : 164,
    bmi : calcBMI(this.mass, this.height)
}; 

var markObj = {
    name: 'Mark Young',
    mass: 78,           
    height: 70,
    bmi : calcBMI(this.mass, this.height)
};

function calcBMI(mass, height) {
    return mass/(height*height);
}

if(johnObj.bmi > markObj.bmi) {
    console.log('John has higher BMI of ' + johnObj.bmi);
} else {
    console.log('Mark has higher BMI of ' + markObj.bmi);
}

