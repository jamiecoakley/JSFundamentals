/*
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
    */

//value of a comment: 
//communicates to anyone reading our code

//types of comments:
//1) single-line comment

/*
2) multi-line comment
*/

//console.log
//outputs some message to the console
console.log('This is a console.log message!');

console.log('You can separate parts of a console message with commas,', 'just like this!');//comma in between the clauses indicates a space

console.log(13,15,17,18);

//console.log and debugging
//We can debug with console.log messages in 2 big ways:
//1) We can check the status of some javascript 'thing' (console.log is like a magnifying glass)
//2) We can check a process we have built with repeated console.log messages

//example 1: (var is like a bucket)
var sampleName = 'Jamie';
console.log(sampleName);

//example 2:
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);

