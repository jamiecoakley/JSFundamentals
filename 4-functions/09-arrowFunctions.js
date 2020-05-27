//ARROW FUNCTIONS

//Normal function declaration = named function
function coffee(){
    return 'coffee is good';
}

//Normal function expression = unnamed function (also called 'anonymous function')
let tea = function(){
    return 'tea is healthy';
}

coffee();
tea();
//nothing happens
console.log(coffee()); //coffee is good
console.log(tea()); //tea is healthy

//arrow functions are always anonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate()); //hot chocolate is king

console.log(animals(5, 4)); //<--can't run this up here before animals was defined

//Arrow functions are concise like ternaries. Arrow functions do not get hoisted.

let animals = (kittens, puppies) => { return `I have ${kittens} cat(s) and ${puppies} dogs`};

console.log(animals(3, 2)); //I have 3 cat(s) and 2 dog(s)
console.log(animals(0, 0)); //I have 0 cat(s) and 0 dog(s)

//concise body vs. block body

//concise body - when you have a single argument, you can exclude a lot of the syntax
let apples = x =>`There are ${x} apples`;
console.log(apples(10)); //There are 10 apples

//block body
let bananas = (x) => {
    return `There are ${x} bananas`
}
console.log(bananas(5)); //There are 5 bananas  -would still work w/o parenthesis around the x

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';

console.log(func()); //hi

let secondFunc = ()
=>
'hi';

console.log(secondFunc()); //error (arrow must follow the parenthesis - syntax is very particular)

