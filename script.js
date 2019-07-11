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
console.log(isMarkHigherBmi);