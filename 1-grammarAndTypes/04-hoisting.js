/*
HOISTING
functions hoist and the entire file hoists
*/

//example 1
console.log(scissors); //alone: error that var scissors is not defined; with var: undefined
var scissors = 'blue'; 

//example 1 breakdown:
var scissors;
console.log(scissors); //undefined
scissors = 'blue'; 

//example 2
function hoistTest(){
    console.log(testVar); //undefined
    var testVar = 10;
    console.log(testVar); //10
}

hoistTest();

//example 2 breakdown:
function hoistTest() {
    var testVar;
    console.log(testVar); //undefined
    testVar = 10;
    console.log(testVar); //10
}

hoistTest();

//variable declaration goes to the top and the assignment stays where it was
//don't code with this in mind until you're super savvy in JS - not good practice in general