/* 
SCOPE

1-grammarAndTypes
    03-scopes.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope.
*/

//example 1
var x = 12; //can be read by function if the variable hasn't been redefined in the function

function scope(){ //runs some block of code when we call it. variables written inside the function only exist in the function.
    var x = 33;
    var y = 10;
    console.log(x);
}
scope(); //calling the function - logs 33
console.log(x); //logs 12
console.log(y); //error: y is not defined

//example 2
var x = 12

function scope (){
    x = 33;
    console.log(x);
}

scope() //33
console.log(x); //33

//example 3
var x = 1;

function scope(){
    var x = 2
    function scopeInner(){
        var x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2
}
scope();
    console.log(x); //1

//example 4 var, var, let - contrasts with example 5 
var x = 12

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}
scope();
console.log(x); //12

//example 5 var, var, var - contrasts with example 4
var x = 12

function scope () {
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 -> var doesn't obey 'block' scope. 
}

scope();
console.log(x); //12 n

