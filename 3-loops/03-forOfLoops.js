//FOR OF LOOPS

//of requires that your 'thing' you're looping through be iterable (needs to be numbered)

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item); //breaks - keys aren't numbered in any way
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'ragdoll'];

for (cat of catArray){
    console.log(cat, 'says meow'); //tabby says meow british shorthair says meow burmese says meow main coon says meow ragdoll says meow
}

 