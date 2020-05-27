/*
SWITCH STATEMENTS
*/

let friend;

switch(friend) {
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, how many Magic Cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
} //I'm sorry, undefined, but do I know you?
//Value of friend wasn't defined by any of the cases, so it goes to the default
//Without the breaks, the code from the rest of the cases is run when we define friend as one of the cases (ex: let friend = 'Kenn') folllowed by 'I'm sorry, Tom, but do I know you?

let yep = true;
switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
} //yep is a string or a boolean


