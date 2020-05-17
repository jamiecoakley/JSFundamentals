//IF ELSE

let weather = 75 //'75' yields latter

if (weather > 70){
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!');
}

//You can blend complex conditionals and if-else statements based upson your need:
if (weather > 70 && typeof weather === "number"){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both.');
}

//ELSE IF

//if-else if statements can be chained

let age = 30;

if (age >= 25){
    console.log('Yay! You can rent a car!');
} else if (age >= 21) {
    console.log('Yay! You can drink.');
} else if (age >= 18) {
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun.');
}