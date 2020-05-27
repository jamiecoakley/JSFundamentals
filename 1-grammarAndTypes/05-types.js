/* 
TYPES

1-grammarAndTypes
    05-types.js
*/

//Boolean
var on = true; //true has a reserved meaning in JS
console.log(on);

let off = false;
console.log(off);

//Boolean can represent: true/false, yes/no, on/off, 0/1 - one of two situations

//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass; //When you leave a bucket unfilled, JS fills it with 'undefined' - something exists, but the programmer hasn't dealt with that existing thing
console.log(grass);

var undef = undefined; //no need to do this because JS will do it for you
console.log(undef);

//Null
/* Null means a variable has been declared and assigned a value of null. Undefined means the variable has been forgotten about; null has not been forgotten about.
*/
var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way--null values are for gag gifts that are intentionally given with nothing inside (because that's the gag). Undefinted values are gifts given when the person giving the gift has forgotten to put the gift inside (oops).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded);

let notQuite = 0.2 + 0.1; //JS has trouble with numbers (extremely large and extremely small; i.e. hundred-trillion/quadrilllionth and up) - this comes out to 0.30000000000000004. Check the math! As long as you know how the numbers will be used, it can be worked around. Pull from an outside open-source project if super decimal precision is required.
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + 0.1 * 10)/10; //.3 JS KNOWS ORDER OF OPPS!! 
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concentration vs addition
let first = 1050 + 100 //adds
let second = '1050' + '100' //combines

console.log(first);
console.log(second);

let third = 1050 + '100'; //also combines (= 'type coercion' - number will be treated as a string)
console.log(third);
console.log(typeof third); //string

//Interpolation
//lets you use strings with dynamic content (they require backticks)

//Example 1:
let age = 32;
let string = `my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values (it can hold multiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), separated with a colon between the key and the value, and each key-value pair is separated with a comma  

Objects are good for representing abstract concepts that have lots of properties.
Ex: Car: weight, value, cost, passengers, passenger properties
*/

let hulk = { //let var = {object}
    color: 'green', //String
    age: 42, //Number
    isStrong: true //Boolean
} //You can store objects inside of objects

console.log(hulk);
console.log(hulk.age); //dot notation to look at a specific property
console.log(typeof hulk);

//Arrays
/*
Array stores multiple values in an ordered way (numbered sequence) <--fundamental difference from an object. They, too, hold multiple data types.

Denoted by []. 
Has values ('blue', 'green', 'yellow'), separated by commas
*/
        //array indexing:  0                  1                     2              3        4  
var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']

console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]); //yield a specific property
console.log(typeof stepsToBrushTeeth); //yields 'object' - typeof doesn't identify an array

