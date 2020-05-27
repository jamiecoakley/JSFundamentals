/*
LITERALS
*/

//               0          1           2           3           4
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekDays.toString()); //toSting - turns variables into a single sting
console.log(weekDays[3]) //Thursday

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c) //beef and barley

//array and object literal can hold primitive and 'complex' types (arrays, objects, functions); arrays and objects are more dynamic than primitive types such as booleans
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//                      0   1       2           3       4               5
console.log(complexArrLiteral[5]); //[Function]
console.log(complexArrLiteral[3]); // [ 1, 2, 3 ]

let complexObjectLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjectLiteral.func); //[Function:func]
console.log(complexObjectLiteral.arr); //[ 1, 2, 3 ]
