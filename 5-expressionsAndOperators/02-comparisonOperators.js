/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

// == equality comparison operator
console.log('3' == 3); //true (data type on the left is a string, data type of the right is a number; but if you changed them to be the same type of data: true! = type coercion)
console.log(4 == 4);
console.log(3 =='4'); //false (the types are different, and if you changed the types to be the same, it would still be false; therefore: false!)

// === strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3); //false (this one cares about the types)

// != not equal comparison operator (doing the opposite of the equality comparison operator)
console.log('3' != 4); //true
console.log('3' != 3); //fale - doesn't care about the type; 3 is 3

// !== strict not equal comparison operator (" ")
console.log('3' !== 3); //true
console.log(3 !== 3); //false - 

// > greater than
console.log(3 > 2); //true
console.log(2 > 3); //false

// < less than
console.log(2 < 3); //true
console.log(3 < 2); //false

// => greater than or equal to
console.log(3 >= 2); //true
console.log(3 >= 3); //true

// =< less than or equal to
console.log(2 <= 3); //true
console.log(3 <= 2); //false

// && And (comparison operators inside of comparison operators - both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0); //true
console.log(2<1 && 3>0); //false

// || Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //true
console.log(2<1 || 3<0); //false

//equality doesn't care about the contents, it cares about the same-ness of the things; if the things are different even though their content is the same, you get a false.
let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //false

console.log(obj == obj); //true

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]); //false
console.log(arr == arr); //true

