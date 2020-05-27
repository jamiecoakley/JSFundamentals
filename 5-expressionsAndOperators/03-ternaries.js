/* 
TERNARIES

*/

let x = -6;

x > 0 ? console.log('x is positive') : console.log('x is negative'); //x is negative

if(x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
} //x is negative

//The switch is cleaner and 'more elegant' than if/else

let greeting =- 'salutations!';

if (greeting.length > 10) {
    console.log('that is a long greeting!');
} else if (greeting.length ==10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
} //that is a long greeting!

greeting.length > 10 ? console.log('that is a long greeting!') : 
greeting.length == 10 ? console.log('your greeting is exactly ten characters') :
console.log('what a normal greeting'); //that is a long greeting
