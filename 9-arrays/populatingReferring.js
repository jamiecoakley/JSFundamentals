//ARRAYS

//what is an array?
//has [] brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way
//arrays are a specialized objects.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:  0           1          2      3     4   5       6
console.log(typeof students); //object (typeof doesn't tell me my variable is an array, it returns object)
console.log(students instanceof Array); //true (instanceof tells me my array is an array)
console.log(students[2]); //Rhys
console.log(students[1]); //Marshall
console.log(students[6]); //[ 'Ryan', 'Iesha' ]

let name = students[6];
console.log(name); //[ 'Ryan', 'Iesha' ]

let name = students[6][1];
console.log (`Hello ${name}, you look nice today.`); //Hello Iesha, you look nice today.

//recall for-of loop
let food = ['Pecan pie', 'Shrimp', 'Quesadillas', 'Cheesecake', 'Hotdog'];

for (f of food){
    console.log(f); //Pecan pie Shrimp Quesadillas Cheesecake Hotdog
}

for (f of food) {
    console.log(f + 'is amazing!'); //Pecan pie is amazing! Shrimp is amazing! Quesadillas is amazing! Cheesecake is amazing! Hotdog is amazing!
}

//ARRAY METHODS
//push - lets us add elements to the end of an array that already exists
food.push('Pizza');
console.log(food); //[ 'Pecan pie', 'Shrimp', 'Quesadillas', 'Cheesecake', 'Hotdog', 'Pizza' ]

//splice - removes elements from the array and, if necessary, inserts new elements in their place, returning the deleted elements.
food.splice(1, 1, 'Bananas') //1. where we want the insertion, 2. how many things we want to remove, 3. what are we replacing it with
console.log(food); // [ 'Pecan pie', 'Bananas', 'Quesadillas', 'Cheesecake', 'Hotdog', 'Pizza' ]
food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);  // [ 'Pecan pie', 'Bananas', 'Sweet Potato Pie', 'Quesadillas', 'Cheesecake', 'Hotdog', 'Pizza' ]

//pop - removes the last element of an array
food.pop();
console.log(food); //[ 'Pecan pie', 'Bananas', 'Sweet Potato Pie', 'Quesadillas', 'Cheesecake', 'Hotdog' ]

//slice
food = food.slice(2, 4); //the first number is the first element to slice from the array, while the second number is the stop number (which is not to be included)
console.log(food); //[ 'Sweet Potato Pie', 'Quesadilla' ]

/*forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers.
callback function: runs when some other code has already been processed
f represents every element, one by one, in the array */
food.forEach((f) => console.log(f)); //Pecan Pie Shrimp Quesadilla Cheesecake Hotdog
food.forEach((food.index) => {
    console.log(food);
    console.log(index);
}) // with all the other modifiers commented out: 0 Pecan Pie 1 Shrimp 2 Quesadilla 3 Cheesecake 4 Hotdog

food.forEach((food.index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
} // The _______ food in our array is at position __(for all elements)

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies); //replaces 'The Watchmen' with 'The League of Extraordinary Gentlemen'

movies.forEach(movies => console.log(movies));
console.length(movies.length); //6

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0. 3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);
//console.log(arr, arr instanceof Array); //[ 1, 2, 3, 4, 5 ] true
if (arr instanceof Array) { //if it's true, it's going to run what's inside; if not, it won't
    let revArr = arr.reverse(); //reversed order of the array
    revArr.forEach(numbers => console.log(numbers)); //5 4 3 2 1 
}

//THERE ARE SO MANY ARRAYS.
//1. How can I represent my data as an array and once I can represent it as an array, how can I use an array method to handle that array that I've stored data in.
//2. forEach: take a callback function where the first argument is an element of the array and the second argument is a number of that element