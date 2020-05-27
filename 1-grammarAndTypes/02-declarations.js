/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable? Use numbers, strings, true/false values, other complex things - think of it as an open, accessible bucket.
var a = 1;
var b = 2;
console.log(a + b);

//Notes on naming variables:
//1) A variable must begin with a letter, underscore, or dollar sign
//2) Numbers may follow the above characters, but cannot come first (a1=good; 1a=bad)
//3) JavaScript is case sensitive-- 'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declaration refers to when we 'declare' a variable

Initialization refers to when a variable is assigned a value

Assignment refers to giving a variable a value; this can be after initialization - 1 is initialized to a, but can be assigned to something else later
*/

var x;
console.log('Declaration 1:', x); //undefined - we made a variable, but haven't filled it yet

x = 10
console.log('Initialization 1:', x); //10

x = 33
console.log('Assignment 1:', x); //33

var y;
console.log(y);

y = 'hello'; //= means take a bucket and put something in it
console.log(y);

y = 'you are my friend';
console.log(y);

/*
Var, Let, and Const: (var and let let you make a bucket where you can dump the contents of that bucket out and refill the bucket; const - you can always look to see what's inside the bucket, and, in some sense, grab what's in the bucket, but you can't dump it out and replace the content)

Var = 'old' keyword for variables [bucket without a lid]
Let = 'new' keyword for variables (introduced with ES6) [bucket without a lid] - more predictable
Const = also 'new', declares unchangeable variables [bucket with a lid]
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super!'; - won't work because the elevenFifty bucket had a lid
